variable "project_id" {
  description = "The Google Cloud Project ID to deploy resources into."
  type        = string
  default     = "ge-fsi-demo"
}

variable "region" {
  description = "The Google Cloud region to deploy serverless services."
  type        = string
  default     = "asia-east2"
}

variable "service_name" {
  description = "The name of the Cloud Run serverless container service."
  type        = string
  default     = "fsi-ge-learning-portal"
}

variable "db_instance_name" {
  description = "The name of the Cloud SQL PostgreSQL database instance."
  type        = string
  default     = "fsi-portal-db"
}

variable "db_password" {
  description = "The password for the PostgreSQL master admin user."
  type        = string
  sensitive   = true
}

variable "super_admin_password" {
  description = "The custom password for the fsi_portal_s_admin account."
  type        = string
  sensitive   = true
}

variable "admin_password" {
  description = "The custom password for the fsi_portal_admin assistant account."
  type        = string
  sensitive   = true
}
