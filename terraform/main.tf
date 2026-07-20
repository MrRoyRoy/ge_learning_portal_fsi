provider "google" {
  project = var.project_id
  region  = var.region
}

# ==========================================
# 1. API Enablement Services
# ==========================================
resource "google_project_service" "apis" {
  for_each = toset([
    "run.googleapis.com",
    "sqladmin.googleapis.com",
    "artifactregistry.googleapis.com",
    "cloudresourcemanager.googleapis.com"
  ])
  project            = var.project_id
  service            = each.key
  disable_on_destroy = false
}

# ==========================================
# 2. Cloud SQL PostgreSQL Instance & Database
# ==========================================
resource "google_sql_database_instance" "postgres_instance" {
  name             = var.db_instance_name
  database_version = "POSTGRES_15"
  region           = var.region
  project          = var.project_id

  depends_on = [google_project_service.apis]

  settings {
    tier = "db-f1-micro" # Lightweight tier, scalable to high availability
    ip_configuration {
      ipv4_enabled = true
    }
  }

  deletion_protection = false # Set true for production safety
}

resource "google_sql_database" "portal_db" {
  name     = "fsi_portal"
  instance = google_sql_database_instance.postgres_instance.name
  project  = var.project_id
}

resource "google_sql_user" "db_user" {
  name     = "postgres"
  instance = google_sql_database_instance.postgres_instance.name
  password = var.db_password
  project  = var.project_id
}

# ==========================================
# 3. IAM Roles & Permissions Setup
# ==========================================
# Dedicated Custom Service Account for Cloud Run Service to prevent reliance on missing Compute Engine SA
resource "google_service_account" "run_sa" {
  account_id   = "fsi-portal-runner"
  display_name = "FSI Adoption Portal Cloud Run Runner Service Account"
  project      = var.project_id
}

# Grant Cloud Run Service Account Client Access to Cloud SQL Database
resource "google_project_iam_member" "cloudsql_client" {
  project = var.project_id
  role    = "roles/cloudsql.client"
  member  = "serviceAccount:${google_service_account.run_sa.email}"
}

# ==========================================
# 4. Cloud Run Serverless Container Service
# ==========================================
resource "google_cloud_run_service" "portal_service" {
  name     = var.service_name
  location = var.region
  project  = var.project_id

  depends_on = [
    google_project_service.apis,
    google_sql_database.portal_db,
    google_sql_user.db_user
  ]

  template {
    spec {
      containers {
        # Deploy standard placeholder or custom Artifact Registry Docker image
        image = "gcr.io/cloudrun/hello" 

        ports {
          container_port = 8080
        }

        env {
          name  = "DATABASE_URL"
          value = "postgres://${google_sql_user.db_user.name}:${var.db_password}@/fsi_portal?host=/cloudsql/${var.project_id}:${var.region}:${google_sql_database_instance.postgres_instance.name}"
        }

        env {
          name  = "DISABLE_PG_SSL"
          value = "true"
        }

        env {
          name  = "NODE_ENV"
          value = "production"
        }

        env {
          name  = "SUPER_ADMIN_PASSWORD"
          value = var.super_admin_password
        }

        env {
          name  = "ADMIN_PASSWORD"
          value = var.admin_password
        }

        resources {
          limits = {
            cpu    = "1000m"
            memory = "512Mi"
          }
        }
      }

      service_account_name = google_service_account.run_sa.email
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale"      = "100"
        "run.googleapis.com/cloudsql-instances" = "${var.project_id}:${var.region}:${google_sql_database_instance.postgres_instance.name}"
        "run.googleapis.com/startup-cpu-boost"  = "true"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# ==========================================
# 5. Public Access Policy (Optional/Configurable)
# ==========================================
# Commented out by default to bypass strict enterprise Domain Restricted Sharing policies (allowedPolicyMemberDomains).
# To enable public access if permitted, uncomment this block or bind a domain member (e.g., "domain:yourcompany.com").
# resource "google_cloud_run_service_iam_member" "public_access" {
#   service  = google_cloud_run_service.portal_service.name
#   location = google_cloud_run_service.portal_service.location
#   project  = var.project_id
#   role     = "roles/run.invoker"
#   member   = "allUsers"
# }
