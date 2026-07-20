/* app.js - GE Adoption Portal Application Logic and Database */

// Core Datastore - Comprehensive, Generalized Use Case Database (English defaults)
const useCasesDb = [
  {
    "id": "equity_research_copilot",
    "title": "Equity Research Analyst Copilot",
    "category": "academic",
    "summary": "Ground an equity research Agent in 10-K filings, annual statements, and earnings call transcripts to build a financial analyst assistant.",
    "features": [
      "Agent Designer",
      "NotebookLM"
    ],
    "connectors": [],
    "role": "Financial Analyst",
    "level": [
      "Capital Markets",
      "Banking",
      "Generic"
    ],
    "steps": [
      "In NotebookLM, upload your target public company's latest 10-K statement, balance sheet, and earnings call transcripts.",
      "Navigate to Gemini Enterprise Agent Designer and build a custom Agent named '[Company Ticker] Analyst Agent'.",
      "Insert the specialized equity research persona instructions into the Agent's prompt guidelines and link the read-only NotebookLM folder.",
      "Conduct query testing by asking the Agent to synthesize debt-to-equity ratios and key risks mentioned in the transcript.",
      "Share the custom analyst agent link with your advisory or portfolio team for real-time market analysis."
    ],
    "prompt": "You are a Senior Equity Research Analyst Agent. Your objective is to assist analysts with deep company financial assessments.\nFollow these rules strictly:\n1. **Ground all answers** exclusively in the provided 10-K, balance sheet, and transcript sources.\n2. If asked for a ratio or metric, provide the exact calculation, referencing the page and source file.\n3. Call out any discrepancies between management's remarks in the earnings call and the actual figures in the 10-K balance sheet.\n4. If a query is outside the scope of the provided sources, state: 'I can only analyze the provided filings.'\n5. Provide professional financial citations for all data points.",
    "proTip": "By connecting NotebookLM as the grounding layer, you ensure the research assistant never hallucinates calculations and restricts responses to authorized compliance-checked filing text.",
    "connectorGuide": null
  },
  {
    "id": "client_meeting_brief",
    "title": "Client Portfolio Briefing Assistant",
    "category": "student",
    "summary": "Synthesize client asset positions, previous interaction notes, and financial objectives in NotebookLM to draft custom meeting briefs.",
    "features": [
      "NotebookLM",
      "Canvas Mode"
    ],
    "connectors": [],
    "role": "Relationship Manager",
    "level": [
      "Banking",
      "Capital Markets",
      "Generic"
    ],
    "steps": [
      "Create a private, secure workspace in NotebookLM dedicated to your high-net-worth client portfolio.",
      "Upload past meeting memos, wealth objective notes, and current portfolio spreadsheets as primary documents.",
      "Switch to Canvas Mode in Gemini Enterprise to compile a comprehensive, polished client meeting prep brief.",
      "Ask the model to draft a customized pre-meeting checklist and wealth allocation suggestions tailored to the client's risk profile.",
      "Export the completed briefing sheet directly to Google Docs to prepare for the live client advisory meeting."
    ],
    "prompt": "Acting as an elite Relationship Manager Assistant, analyze the provided client wealth portfolio and past interaction history.\nGenerate a high-fidelity client briefing document structured as follows:\n1. **Executive Profile & Wealth Summary**: Synthesize the client's current asset allocations, investment horizons, and risk tolerance.\n2. **Key Discussion Goals**: Propose 3 major objectives for the upcoming meeting based on previous goals (e.g. tax planning, trust setups).\n3. **Tailored Recommendations**: Propose 2-3 specific portfolio adjustments aligned with their risk profile (conservative, balanced, aggressive).\n4. **Objection Handling**: Anticipate 2 objections they might raise regarding market volatility or fee structures and draft persuasive, compliant advisor responses.",
    "proTip": "Because NotebookLM operates in a secure enterprise cloud tenant, high-net-worth client financial records remain strictly confidential and are never used to train public LLM models.",
    "connectorGuide": null
  },
  {
    "id": "portfolio_advisory_architect",
    "title": "Strategic Asset Allocation & Portfolio Architect",
    "category": "academic",
    "summary": "Conduct secure, real-time market research and analyze macroeconomic trends to design customized investment portfolios.",
    "features": [
      "Deep Research",
      "Canvas Mode"
    ],
    "connectors": [],
    "role": "Financial Analyst",
    "level": [
      "Capital Markets",
      "Banking"
    ],
    "steps": [
      "Open Gemini Enterprise and launch a 'Deep Research' session targeting emerging market sectors and bond yield curves.",
      "Prompt the model to synthesize macroeconomic trends, inflation adjustments, and index performance metrics.",
      "Transfer the researched market trends to Canvas Mode to draft a tailored asset allocation model.",
      "Co-create a diversified portfolio recommendation table inside Canvas Mode and export the final brief to Google Sheets."
    ],
    "prompt": "Act as a Senior Investment Advisor and Portfolio Architect. I want to build a modern investment portfolio recommendations document.\nPhase 1: Research. Search the web for the top 5 macroeconomic drivers and asset class trends over the past 3 months.\nPhase 2: Asset Allocation. Design 3 distinct allocation profiles (Conservative Income, Balanced Growth, Capital Appreciation) mapped to these drivers.\nPhase 3: Portfolio Draft. Create a comprehensive asset class breakdown, specifying equity ratios, fixed-income yields, and alternative assets.\nPhase 4: Risk Analysis. Propose a downside stress-testing framework simulating a 10% market correction scenario.",
    "proTip": "Deep Research enables you to scan hundreds of corporate filings, central bank statements, and analyst briefs simultaneously, outputting a high-fidelity summary report.",
    "connectorGuide": null
  },
  {
    "id": "underwriting_manual_creator",
    "title": "Commercial Credit Underwriting Standards Manual",
    "category": "operational",
    "summary": "Generate standardized credit underwriting manuals with step-by-step audit procedures, checklist tables, and risk indicators.",
    "features": [
      "Canvas Mode",
      "Image Generation"
    ],
    "connectors": [],
    "role": "Underwriter",
    "level": [
      "Banking",
      "Generic"
    ],
    "steps": [
      "Open Gemini Enterprise Canvas Mode and outline the standard credit risk assessment criteria for commercial loan applicants.",
      "Prompt the AI to write clear, step-by-step financial ratio checks (DSCR, leverage, quick ratio) and safety buffer thresholds.",
      "Use built-in image generation to create clean visual diagrams representing risk warning levels (Green, Amber, Red).",
      "Co-create an underwriting evaluation checklist table directly inside Canvas Mode and export the guide as an interactive PDF manual."
    ],
    "prompt": "You are a Commercial Credit Risk Officer. Draft a clear, professional Credit Underwriting and Evaluation Manual for loan processors.\nThe manual must include:\n1. **Introduction**: A concise explanation of the corporate credit underwriting mandate and standard leverage compliance.\n2. **Core Ratios Directory**: Formulas and compliance thresholds for Debt Service Coverage Ratio (DSCR), debt-to-equity, and current ratio.\n3. **Risk Warning Framework**: A highly formatted visual representation of warning levels, detailing Amber and Red thresholds.\n4. **Underwriting Checklist**: A multi-step structured evaluation grid for auditing applicant balance sheets and corporate tax filings.\nMaintain a precise, risk-focused, and highly compliant tone throughout.",
    "proTip": "Utilize structured markdown lists and caution alerts inside Canvas Mode to ensure high-risk credit assessment steps stand out to loan auditing teams.",
    "connectorGuide": null
  },
  {
    "id": "customer_sentiment_auditor",
    "title": "Client Service Sentiment & Feedback Auditor",
    "category": "student",
    "summary": "Consolidate volumes of unstructured client call transcripts and support tickets to identify service issues and sentiment trends.",
    "features": [
      "NotebookLM",
      "Deep Research"
    ],
    "connectors": [
      "Drive Connector"
    ],
    "role": "Customer Service",
    "level": [
      "Banking",
      "Insurance",
      "Generic"
    ],
    "steps": [
      "Store client interaction records, email tickets, and call transcripts in a secure folder.",
      "Ground your NotebookLM workspace in this folder using the secure Document Store Connector.",
      "Query NotebookLM to extract the top 5 recurring service friction points and customer sentiment scores.",
      "Use Gemini in Google Docs to draft an operational service improvement proposal for banking heads."
    ],
    "prompt": "Acting as a Client Experience and Service Improvement Director, analyze the collection of customer support tickets and chat transcripts.\nGenerate a structured, evidence-backed service assessment report:\n1. **Friction Clustering**: Identify and group the top 5 most frequent client complaints or platform difficulties.\n2. **Sentiment Assessment**: For each category, identify the customer pain level and cite 3 anonymized client quotes as evidence.\n3. **Operational Solutions**: Suggest 2 actionable service improvements or bot training tweaks for each issue based on industry best practices.\n4. **Management Presentation**: Draft a list of 5 executive questions regarding cost-to-benefit ratio, and provide persuasive responses.",
    "proTip": "Linking your client service logs directly via the Document Store Connector ensures that analytics dashboards always display live sentiment trends without copying sensitive logs.",
    "connectorGuide": {
      "name": "Document Store Connector",
      "steps": [
        "Navigate to Google Cloud Console > Data Connectors > Document Store Connector.",
        "Authorize connection to your secure enterprise workspace (SharePoint / OneDrive / Google Drive).",
        "Configure folder read scopes, mapping only anonymized client feedback directories.",
        "Enable Federated Search to respect active organizational data access rules."
      ]
    }
  },
  {
    "id": "commercial_loan_proposal",
    "title": "Commercial Loan Credit Proposal Builder",
    "category": "operational",
    "summary": "Draft comprehensive, regulatory-compliant commercial credit proposals and financial justifications using historical templates.",
    "features": [
      "Canvas Mode",
      "NotebookLM"
    ],
    "connectors": [
      "Drive Connector"
    ],
    "role": "Loan Officer",
    "level": [
      "Banking",
      "Generic"
    ],
    "steps": [
      "Open NotebookLM and upload your bank's approved credit proposal templates and corporate debt guidelines.",
      "In Canvas Mode, prompt Gemini to draft a structured credit proposal outline for a commercial applicant.",
      "Link your secure Document Store containing the applicant's historical tax forms and financial statements to extract details.",
      "Generate a formatted credit assessment table and write a professional debt justification statement.",
      "Export the completed proposal directly to Google Docs to submit to the Underwriting Committee."
    ],
    "prompt": "Act as an expert Commercial Loan Officer and proposal writer. Help our commercial banking division draft a detailed credit proposal.\nInputs:\n- Applicant financials: [Corporate assets, annual revenue, requested debt amount, current interest cover]\n- Credit risk parameters: [Max leverage ratio of 3.5x, minimum DSCR of 1.25x, collateral requirements]\nTask:\n1. Write an **Executive Summary** detailing the applicant's business model and the purpose of the credit facility.\n2. Compile a detailed **Credit Assessment Table**, verifying debt-to-equity compliance with the bank's criteria.\n3. Write a compelling **Risk Mitigation Statement** explaining why the credit committee should authorize this loan, outlining collateral buffers.",
    "proTip": "First upload your bank's credit risk guidelines to NotebookLM to prevent the AI from generating recommendations that violate loan concentration policies.",
    "connectorGuide": {
      "name": "Document Store Connector",
      "steps": [
        "In your corporate storage console, select the Document Store Connector.",
        "Link the folder containing approved underwriting templates and applicant dossiers.",
        "Activate the connector in Gemini Enterprise settings to allow real-time cross-referencing."
      ]
    }
  },
  {
    "id": "compliance_assistance_bot",
    "title": "Regulatory Compliance & Audit Assistance Agent",
    "category": "admin",
    "summary": "Build an internal regulatory compliance chatbot trained on standard banking guidelines to answer policy queries.",
    "features": [
      "Agent Designer",
      "NotebookLM"
    ],
    "connectors": [
      "Email Connector"
    ],
    "connectorEssential": false,
    "role": "Compliance Officer",
    "level": [
      "Banking",
      "Insurance",
      "Capital Markets",
      "Generic"
    ],
    "steps": [
      "In NotebookLM, compile all AML, KYC, and internal compliance policy handbooks.",
      "Use Gemini Agent Designer to build a conversational agent named 'Internal Compliance Officer Bot'.",
      "Connect the agent to the compliance policy database to serve employee queries.",
      "Test the agent's ability to handle complex queries (e.g. 'What is the transaction reporting limit for cross-border wire transfers?').",
      "Embed the agent on the employee compliance portal for 24/7 internal staff assistance."
    ],
    "advancedSteps": [
      "In NotebookLM, compile all AML, KYC, and internal compliance policy handbooks.",
      "Use Gemini Agent Designer to build a conversational agent named 'Internal Compliance Officer Bot'.",
      "Connect the agent to the compliance database and configure custom escalate-by-email instructions via the Email Connector.",
      "Test the agent's ability to automatically draft audit escalation emails when users report potential compliance violations.",
      "Embed the agent on the compliance portal for automated audit trail integration."
    ],
    "prompt": "You are the 'Internal Compliance Assistant Bot.' Your objective is to help bank employees navigate KYC, AML, and reporting rules.\n1. **Ground your answers strictly** in the uploaded compliance guidelines. Never guess policy rules.\n2. Provide direct, step-by-step procedures (e.g., 'To report a suspicious wire transfer above $10,000, follow these 3 steps...').\n3. Cite the exact handbook section or regulation number you are referencing.\n4. If a query indicates an active fraud incident or a complex regulatory issue, draft a formal escalation message directly on-screen for the employee to copy and send to the Chief Compliance Officer.\nMaintain an objective, formal, and risk-aware tone.",
    "advancedPrompt": "You are the 'Internal Compliance Assistant Bot' integrated with your corporate email. Your objective is to help employees navigate KYC, AML, and reporting rules.\n1. **Ground your answers strictly** in the uploaded compliance guidelines. Never guess policy rules.\n2. Provide direct, step-by-step procedures.\n3. Cite the exact handbook section or regulation number.\n4. If a query indicates an active fraud incident or requires manual override, use your integrated Email Connector to automatically draft a detailed audit escalation email directly in the user's Drafts folder for the Chief Compliance Officer, then notify the user that the draft is ready for review.",
    "proTip": "In standard mode, the compliance bot renders precise, ready-to-copy email escalation templates directly inside the chat interface.",
    "advancedProTip": "By connecting the Email Connector, the compliance bot can automatically inject audit drafts directly into your corporate Outlook/Gmail Drafts folder, speeding up regulatory report cycles.",
    "connectorGuide": {
      "name": "Email Connector",
      "steps": [
        "Go to your Google Cloud Console > Data Store > Select Email Connector.",
        "Authorize email read/write-draft permissions for your compliance service account.",
        "Link the Email Connector to the Compliance Assistant Agent.",
        "Configure the trigger to draft emails when a user reports active compliance alerts."
      ]
    }
  },
  {
    "id": "financial_literacy_campaign",
    "title": "Financial Literacy Digital Marketing Campaign",
    "category": "student",
    "summary": "Brainstorm and design high-fidelity client-facing wealth planning campaigns with AI-generated visual graphics and copy.",
    "features": [
      "Agent Designer",
      "Image Generation",
      "Video Generation"
    ],
    "connectors": [],
    "role": "Relationship Manager",
    "level": [
      "Banking",
      "Insurance",
      "Capital Markets"
    ],
    "steps": [
      "Open Gemini Enterprise and prompt the AI to co-create a cohesive layout for a 'Wealth Building & Compound Interest' digital marketing campaign.",
      "Generate 5 engaging, compliance-checked narrative posts simplifying compound interest curves.",
      "Use built-in image generation to design clean, professional banner graphics for the marketing materials.",
      "Script a 30-second promotional short video using Video Generation assets to drive wealth planning sign-ups.",
      "Configure a custom advisory agent that potential clients can interact with to calculate mock compound schedules."
    ],
    "prompt": "You are the 'Wealth Advisor Assistant Agent' for a digital marketing advisory campaign. Your goal is to explain compound interest in simple, engaging terms.\n1. Campaign Narrative: 'The Compounding Curve'.\n2. When a client interacts, welcome them warmly and explain the rule of 72.\n3. Example: 'If you invest $10,000 at a 6% annual return, your money will double in 12 years!'\n4. If they submit their current savings, generate a customized, supportive financial compounding projection.\nNever guarantee exact stock market returns. Keep the tone warm, educational, and professional.",
    "proTip": "Ground the campaign content in your bank's approved investment parameters to ensure compliance with financial advertising regulations.",
    "connectorGuide": null
  },
  {
    "id": "credit_risk_assessment",
    "title": "Applicant Risk Portfolio & CRM Analyzer",
    "category": "operational",
    "summary": "Monitor commercial loan risk portfolios by analyzing customer CRM profiles and financial accounts to identify warning signs.",
    "features": [
      "Deep Research"
    ],
    "connectors": [
      "CRM Connector",
      "Document Store Connector"
    ],
    "connectorEssential": true,
    "role": "Loan Officer",
    "level": [
      "Banking",
      "Generic"
    ],
    "steps": [
      "Establish secure connections from Gemini Enterprise to your corporate Salesforce / Wealthbox CRM and SQL database.",
      "Configure a secure CRM dataset containing applicant credit histories, payment frequencies, and portfolio values.",
      "Configure a secure data privacy layer, ensuring strict compliance with financial regulations and client privacy laws.",
      "Use Gemini to run multi-dimensional portfolio diagnostic risk checks, flagging accounts with payment warning anomalies.",
      "Trigger automated, personalized relationship manager alert emails in your corporate draft folder to suggest portfolio restructuring."
    ],
    "prompt": "Analyze the provided customer portfolio and credit CRM dataset for the current quarter.\nWe want to identify commercial accounts displaying heightened credit risk before their quarterly amortization dates.\nTasks:\n1. **Risk Flagging**: Identify all client accounts that show a >30% drop in balance sheet liquidity and delayed payments over the past 30 days.\n2. **Correlation Analysis**: Evaluate if there is a statistically significant correlation between credit defaults and recent margin calls in this cohort.\n3. **Draft Advisory Check-ins**: For each flagged account, generate a supportive, highly professional check-in email draft from their Relationship Manager, proposing debt-restructuring options.",
    "proTip": "Never upload customer social security numbers. Ensure total regulatory compliance by utilizing anonymized customer UUID hashes during data store checks.",
    "connectorGuide": {
      "name": "CRM & Document Store Connectors",
      "steps": [
        "In Google Cloud Console, authorize connection scopes for your CRM (Salesforce / Wealthbox) API endpoints.",
        "Link your secure customer financial Document Store containing balance sheet forms.",
        "Set up data-masking rules to automatically sanitize PII before transmitting data to the Gemini evaluation layer."
      ]
    }
  },
  {
    "id": "portfolio_sentiment_tracker",
    "title": "Market News & Portfolio Sentiment Tracker",
    "category": "academic",
    "summary": "Analyze massive market news databases, financial blogs, and earnings call transcripts in NotebookLM to track sentiment trends.",
    "features": [
      "NotebookLM",
      "Deep Research"
    ],
    "connectors": [
      "Drive Connector"
    ],
    "role": "Financial Analyst",
    "level": [
      "Capital Markets"
    ],
    "steps": [
      "Consolidate hundreds of public sector reports, regulatory filings, and market news articles in your cloud drive.",
      "Link your corporate Drive folder using the secure Document Store Connector.",
      "In NotebookLM, prompt the model to scan the files and compute aggregated market sentiment scores (Bullish, Neutral, Bearish).",
      "Generate structured, professional research reports summarizing the impact of emerging trends on your client portfolios.",
      "Review the synthesized reports and collaborate with portfolio teams using shared Google Docs to finalize the recommendations."
    ],
    "prompt": "Act as a Senior Market Strategist. Analyze the uploaded articles, transcripts, and financial news reports from the past week.\nGenerate a high-fidelity market sentiment analysis report containing:\n1. **Sector-Level Sentiment Matrix**: Provide sentiment ratings (Bullish, Bearish, Neutral) for the Tech, Healthcare, and Energy sectors, referencing articles.\n2. **Emerging Catalyst Clusters**: Identify and group the top 3 macroeconomic factors driving asset reallocations.\n3. **Draft Investment Briefs**: Propose 2 strategic rebalancing actions for RM teams to discuss with conservative and aggressive client portfolios.",
    "proTip": "By connecting your market data folders via the Document Store Connector, you establish an automated feed that updates NotebookLM analysis boards automatically.",
    "connectorGuide": {
      "name": "Document Store Connector",
      "steps": [
        "Link your market research cloud folders using the Document Store Connector in the integrations menu.",
        "Grant read-only access to authorized financial news folders.",
        "Link the synchronized database to your NotebookLM research workspace."
      ]
    }
  },
  {
    "id": "it_service_desk",
    "title": "IT Support Incident Router",
    "category": "operational",
    "summary": "Automate corporate IT incident ticket categorization, severity routing, and compliance logging using Agent Builder.",
    "features": [
      "Agent Designer",
      "NotebookLM"
    ],
    "connectors": [],
    "role": "IT Operator",
    "level": [
      "Generic"
    ],
    "steps": [
      "In NotebookLM, compile all corporate IT incident handbooks, security protocols, and software compliance manuals.",
      "Use Gemini Agent Designer to construct a supportive conversational assistant named 'IT Operator Assistance Agent'.",
      "Instruct the agent on incident severity tiers (Sev 1 - System Down, Sev 2 - Degraded Service, Sev 3 - Low priority) and routing paths.",
      "Test the agent's ability to analyze system logs and classify incidents under the correct corporate guidelines.",
      "Deploy the custom IT assistance bot on the internal portal to automate internal help desk operations."
    ],
    "prompt": "You are the 'IT Helpdesk Incident Dispatcher Bot' for a banking tenant. Your objective is to classify and route IT service requests.\n1. **Ground your routing logic strictly** in the uploaded company IT service handbooks.\n2. When a user submits an issue (e.g. 'The teller workstation is failing to load database queries'), classify the severity (Sev 1, Sev 2, Sev 3).\n3. If an issue is classified as Sev 1 (Active Security Incident or teller system downtime), draft a Sev 1 emergency dispatch template for the Network Operations Team on-screen and flag immediate escalation protocols.\n4. If an issue is Sev 3, guide the employee through the automated self-service guides in your knowledge base.\nMaintain an efficient, highly technical, and professional tone.",
    "proTip": "Ground the agent designer in software error log templates to allow the bot to read log stack-traces directly, saving IT operator analysis time.",
    "connectorGuide": null
  },
  {
    "id": "trade_settlement_reconciliation",
    "title": "T+1 Trade Settlement Reconciliation Agent",
    "category": "operational",
    "summary": "Reconcile daily transaction ledgers against clearinghouse logs to identify trade settlement discrepancies automatically.",
    "features": [
      "Agent Designer",
      "NotebookLM"
    ],
    "connectors": [],
    "role": "IT Operator",
    "level": [
      "Banking",
      "Capital Markets"
    ],
    "steps": [
      "Compile clearinghouse transaction templates, transaction compliance codes, and ledger handbooks in your private database.",
      "Use Gemini Agent Designer to build a conversational agent named 'Trade Settlement Reconciliation Analyst'.",
      "Upload transaction CSVs and clearinghouse reports directly into the agent sandboxed session.",
      "Prompt the agent to cross-reference settlement amounts, transaction timestamps, and client account IDs.",
      "Extract anomalous transaction line items and review the generated clearinghouse dispatch reports."
    ],
    "prompt": "You are the 'Trade Settlement Reconciliation Agent.' Your goal is to audit daily trading accounts and clearinghouse ledgers.\n1. **Compare daily trade records** and clearinghouse logs. Highlight any transaction discrepancy.\n2. Identify any transaction matching failure (e.g. Price mismatch, missing ISIN, incorrect settlement date).\n3. Generate a structured Reconciliation Exception Report detailing: Transaction ID, Client Account, Clearinghouse Code, Discrepancy Margin.\n4. Provide a professional clearinghouse correction dispatch email draft on-screen for the operations manager to review.\nMaintain absolute accuracy and compliance-focused rigor.",
    "proTip": "Grounding your agent in Swift MT548 settlement status message standards enables the AI to automatically parse clearinghouse message payloads without manual translation.",
    "connectorGuide": null
  },
  {
    "id": "fraud_incident_responder",
    "title": "Fraud and AML Incident Audit Responder",
    "category": "admin",
    "summary": "Audit massive collections of transaction histories, audit logs, and firewall event records in NotebookLM to identify anomalies.",
    "features": [
      "NotebookLM",
      "Deep Research"
    ],
    "connectors": [
      "Document Store Connector"
    ],
    "role": "Risk Manager",
    "level": [
      "Banking",
      "Insurance",
      "Capital Markets",
      "Generic"
    ],
    "steps": [
      "Upload institutional security protocols, transaction guidelines, and regulatory reporting forms to NotebookLM.",
      "Connect your secure network event records and transaction logs directory using the Document Store Connector.",
      "Prompt the AI to cross-reference log entries with standard AML/KYC warning patterns to isolate fraud risks.",
      "Synthesize structured compliance incident reports complete with precise activity timestamps for submission to risk boards."
    ],
    "prompt": "Act as a Lead Financial Crime and Fraud Investigator. Analyze the attached server event sheets and transaction logs.\nGenerate a high-fidelity AML audit report:\n1. **Anomaly Isolation**: Highlight all transactions that violate geographical parameters, single-day limits, or structural limits.\n2. **Log Correlation**: Evaluate if there is a correlation between the IP addresses used in flagged transactions and past known brute-force server attempts.\n3. **Regulatory Draft**: Compile a formatted Suspicious Activity Report (SAR) template with timestamps and transaction hashes.",
    "proTip": "Compiling guidelines and event logs in a secure, sandboxed NotebookLM instance maintains compliance with international security standards and prevents log data leakage.",
    "connectorGuide": {
      "name": "Document Store Connector",
      "steps": [
        "In Google Cloud Console, enable the Document Store Connector for audit logs.",
        "Set strict read-only access controls, restricting data queries to authorized security logs.",
        "Ground your NotebookLM workspace in the secure logging directory."
      ]
    }
  },
  {
    "id": "hr_onboarding_wizard",
    "title": "Employee Compliance Onboarding & Training Agent",
    "category": "admin",
    "summary": "Build an interactive employee compliance training agent to guide staff through regulatory onboarding and tests.",
    "features": [
      "Agent Designer",
      "Video Generation"
    ],
    "connectors": [
      "Document Store Connector"
    ],
    "role": "HR Consultant",
    "level": [
      "Generic"
    ],
    "steps": [
      "Upload your company's code of conduct, anti-harassment regulations, and AML guidelines to your document store.",
      "Link your document folder using the Document Store Connector in Agent Designer.",
      "Configure the custom Agent to role-play as a Training Coordinator to guide new employees through training steps.",
      "Utilize Video Generation features to automatically script and produce custom 60-second instructional micro-learning videos.",
      "Deploy the onboarding bot to help employees prepare for and complete standard compliance quizzes."
    ],
    "prompt": "You are the 'Compliance Training Advisor Bot' for employee onboarding. Your objective is to guide new hires through regulatory standards.\n1. **Ground your onboarding checkpoints strictly** in the uploaded company code of conduct.\n2. Guide the employee step-by-step through the compliance modules (e.g. Anti-Bribery, Insider Trading, Security Best Practices).\n3. Present interactive scenario-based quiz questions at the end of each module to test retention (e.g. 'If a vendor offers an expensive dinner during an active RFP, what is the standard protocol?').\n4. Grade their answers and provide clear compliance explanations.\nKeep the tone welcoming, instructional, and professional.",
    "proTip": "By connecting the training agent to your secure Document Store, compliance training programs are updated automatically whenever HR uploads a revised code of conduct.",
    "connectorGuide": {
      "name": "Document Store Connector",
      "steps": [
        "Select the Document Store Connector in the integrations console.",
        "Authorize read-only access to your employee onboarding files and compliance handbooks.",
        "Link the document folder to your custom training agent."
      ]
    }
  },
  {
    "id": "email_priority_digest",
    "title": "Advisor Daily Correspondence Summary & Digest",
    "category": "student",
    "summary": "Connect Gemini directly to your advisory mailbox to summarize client emails and schedule follow-ups automatically.",
    "features": [
      "NotebookLM"
    ],
    "connectors": [
      "Email Connector",
      "Calendar Connector"
    ],
    "connectorEssential": true,
    "role": "Relationship Manager",
    "level": [
      "Banking",
      "Capital Markets",
      "Generic"
    ],
    "steps": [
      "Connect your institutional mailbox using the secure corporate Email Connector.",
      "Link your work calendar to Gemini using the secure Calendar Connector.",
      "Prompt Gemini to analyze all incoming client messages received in the past 24 hours.",
      "Generate a structured, priority-ranked digest of customer wealth inquiries and meeting requests.",
      "Ask Gemini to automatically draft professional client replies and suggest open calendar time slots for scheduling."
    ],
    "prompt": "You are the 'Advisor Personal Assistant Agent'. Analyze all client emails received in the past 24 hours.\nGenerate a structured daily advisor brief:\n1. **Urgent Client Inquiries**: Extract and highlight any urgent buy/sell requests, withdrawal notices, or margin alerts in bold.\n2. **Advisory Meeting Requests**: Synthesize client requests for face-to-face consultations, matching open slots in your corporate calendar.\n3. **Action Items Checklist**: Provide a prioritized checklist of 3 immediate actions.\n4. **Draft Client Correspondence**: For each client query, draft a formal, compliance-checked draft reply (e.g. confirming meeting dates, confirming transaction receipts) directly in Outlook/Gmail Drafts.\nMaintain an extremely professional, polite, and risk-compliant tone.",
    "proTip": "Using the Email Connector maintains absolute data confidentiality, ensuring sensitive client wealth planning emails are never transmitted outside your organization's boundaries.",
    "connectorGuide": {
      "name": "Email & Calendar Connectors",
      "steps": [
        "In the integrations sidebar, enable both the Email Connector and Calendar Connector.",
        "Authorize secure access tokens to read email headers and query open calendar time slots.",
        "Ground your NotebookLM digest dashboard in the synchronized email and scheduling pipelines."
      ]
    }
  }
];

const uiTranslations = {
  "en": {
    "wizardTitle": "Google Gemini Enterprise",
    "wizardSubtitle": "Financial Services Adoption & Playbook Portal",
    "wizardDesc": "Unlock specialized AI agent templates, prompt sandboxes, and administrative integration guides customized to your institutional role and industry segment.",
    "labelRole": "Identify Your Role",
    "labelLevel": "Industry Sector / Segment",
    "labelLang": "Select Language / 選擇語言",
    "btnStart": "Access My Adoption Hub",
    "sidebarProfileTitle": "My Context Profile",
    "sidebarConnectorsTitle": "Active GE Connectors",
    "sidebarFeaturesTitle": "Filter by CE Features",
    "filterLiked": "My Saved Playbooks",
    "filterDeployed": "My Deployed Solutions",
    "linkedAndActive": "Linked and Active",
    "profileSetSuccess": "Profile loaded successfully! Welcome to the FSI Adoption Portal.",
    "roles": {
      "Financial Analyst": "Financial Analyst",
      "Relationship Manager": "Relationship Manager",
      "Claims Processor": "Claims Processor",
      "Customer Service": "Customer Service",
      "HR Consultant": "HR Consultant",
      "IT Operator": "IT Operator",
      "Compliance Officer": "Compliance Officer",
      "Loan Officer": "Loan Officer",
      "Underwriter": "Underwriter",
      "Risk Manager": "Risk Manager",
      "Investment Banker": "Investment Banker",
      "Security Officer": "Security Officer"
    },
    "levels": {
      "Banking": "Retail & Commercial Banking",
      "Insurance": "Life & Property Insurance",
      "Capital Markets": "Capital Markets & Wealth Management",
      "Generic": "Cross-Sector Adaptable"
    },
    "adminPortalTitle": "GEMINI FSI PORTAL MANAGEMENT",
    "adminRegisteredUsersTitle": "Registered Portal Users",
    "adminFormLabelSteps": "Procedural Guide Steps (One step per line)",
    "adminFormLabelAdvancedSteps": "Advanced Procedural Steps - Active-Integration Mode (One step per line)",
    "adminFormLabelDualModeCheckbox": "Enable Dual-Mode Template (Supports Standalone & Advanced Connector flows)",
    "adminFormDescDualModeCheckbox": "When enabled, this playbook supports both offline manual uploads and live advanced connector flows."
  },
  "zh-TW": {
    "wizardTitle": "Google Gemini 企業級",
    "wizardSubtitle": "金融服務行業 (FSI) 應用導入與案例門戶",
    "wizardDesc": "解鎖專為您的金融機構角色與行業細分定製的 AI Agent 範本、提示詞沙盒與系統整合指南。",
    "labelRole": "識別您的角色",
    "labelLevel": "行業細分 / 領域",
    "labelLang": "選擇語言 / Select Language",
    "btnStart": "進入我的應用中心",
    "sidebarProfileTitle": "我的角色檔案",
    "sidebarConnectorsTitle": "已啟用企業級連接器",
    "sidebarFeaturesTitle": "按 CE 功能篩選",
    "filterLiked": "我的收藏案例",
    "filterDeployed": "我的部署案例",
    "linkedAndActive": "已成功連接並啟用",
    "profileSetSuccess": "檔案載入成功！歡迎使用 FSI 應用導入門戶。",
    "roles": {
      "Financial Analyst": "金融分析師 (Financial Analyst)",
      "Relationship Manager": "客戶關係經理 (Relationship Manager)",
      "Claims Processor": "理賠審核員 (Claims Processor)",
      "Customer Service": "客戶服務專員 (Customer Service)",
      "HR Consultant": "人力資源顧問 (HR Consultant)",
      "IT Operator": "IT 運維專員 (IT Operator)",
      "Compliance Officer": "合規審查官 (Compliance Officer)",
      "Loan Officer": "信貸業務官 (Loan Officer)",
      "Underwriter": "核保與風險評估師 (Underwriter)",
      "Risk Manager": "風險管理經理 (Risk Manager)",
      "Investment Banker": "投資銀行家 (Investment Banker)",
      "Security Officer": "資訊安全官 (Security Officer)"
    },
    "levels": {
      "Banking": "零售與商業銀行 (Retail & Commercial Banking)",
      "Insurance": "人壽與財產保險 (Life & Property Insurance)",
      "Capital Markets": "資本市場與財富管理 (Capital Markets)",
      "Generic": "通用跨行業模版"
    },
    "adminPortalTitle": "GEMINI FSI 門戶管理後台",
    "adminRegisteredUsersTitle": "已註冊門戶使用者",
    "adminFormLabelSteps": "標準模式操作步驟 (每行一步驟)",
    "adminFormLabelAdvancedSteps": "進階整合模式操作步驟 (每行一步驟)",
    "adminFormLabelDualModeCheckbox": "啟用雙重模式範本 (支持獨立與進階連接器工作流程)",
    "adminFormDescDualModeCheckbox": "啟用後，此案例同時支持手動上傳與進階連接器模式，標準提示詞與步驟將由系統自動處理。"
  },
  "zh-CN": {
    "wizardTitle": "Google Gemini 企业级",
    "wizardSubtitle": "金融服务行业 (FSI) 应用导入与案例门户",
    "wizardDesc": "解锁专为您的金融机构角色与行业细分定制的 AI Agent 模板、提示词沙盒与系统整合指南。",
    "labelRole": "识别您的角色",
    "labelLevel": "行业细分 / 领域",
    "labelLang": "选择语言 / Select Language",
    "btnStart": "进入我的应用中心",
    "sidebarProfileTitle": "我的角色档案",
    "sidebarConnectorsTitle": "已启用企业级连接器",
    "sidebarFeaturesTitle": "按 CE 功能筛选",
    "filterLiked": "我的收藏案例",
    "filterDeployed": "我的部署案例",
    "linkedAndActive": "已成功连接并启用",
    "profileSetSuccess": "档案载入成功！欢迎使用 FSI 应用导入门户。",
    "roles": {
      "Financial Analyst": "金融分析师 (Financial Analyst)",
      "Relationship Manager": "客户关系经理 (Relationship Manager)",
      "Claims Processor": "理赔审核员 (Claims Processor)",
      "Customer Service": "客户服务专员 (Customer Service)",
      "HR Consultant": "人力资源顾问 (HR Consultant)",
      "IT Operator": "IT 运维专员 (IT Operator)",
      "Compliance Officer": "合规审查官 (Compliance Officer)",
      "Loan Officer": "信贷业务员 (Loan Officer)",
      "Underwriter": "核保与风险评估师 (Underwriter)",
      "Risk Manager": "风险管理经理 (Risk Manager)",
      "Investment Banker": "投资银行家 (Investment Banker)",
      "Security Officer": "信息安全官 (Security Officer)"
    },
    "levels": {
      "Banking": "零售与商业银行 (Retail & Commercial Banking)",
      "Insurance": "人寿与财产保险 (Life & Property Insurance)",
      "Capital Markets": "资本市场与财富管理 (Capital Markets)",
      "Generic": "通用跨行业模板"
    },
    "adminPortalTitle": "GEMINI FSI 门户管理后台",
    "adminRegisteredUsersTitle": "已注册门户使用者",
    "adminFormLabelSteps": "标准模式操作步骤 (每行一步骤)",
    "adminFormLabelAdvancedSteps": "进阶整合模式操作步骤 (每行一步骤)",
    "adminFormLabelDualModeCheckbox": "启用双重模式范本 (支持独立与进阶连接器工作流程)",
    "adminFormDescDualModeCheckbox": "启用后，此案例同时支持手动上传与进阶连接器模式，标准提示词与步骤将由系统自动处理。"
  }
};

const useCasesTranslations = {
  "equity_research_copilot": {
    "en": {
      "title": "Equity Research Analyst Copilot",
      "summary": "Ground an equity research Agent in 10-K filings, annual statements, and earnings call transcripts to build a financial analyst assistant.",
      "steps": [
        "In NotebookLM, upload your target public company's latest 10-K statement, balance sheet, and earnings call transcripts.",
        "Navigate to Gemini Enterprise Agent Designer and build a custom Agent named '[Company Ticker] Analyst Agent'.",
        "Insert the specialized equity research persona instructions into the Agent's prompt guidelines and link the read-only NotebookLM folder.",
        "Conduct query testing by asking the Agent to synthesize debt-to-equity ratios and key risks mentioned in the transcript.",
        "Share the custom analyst agent link with your advisory or portfolio team for real-time market analysis."
      ],
      "prompt": "You are a Senior Equity Research Analyst Agent. Your objective is to assist analysts with deep company financial assessments.\nFollow these rules strictly:\n1. **Ground all answers** exclusively in the provided 10-K, balance sheet, and transcript sources.\n2. If asked for a ratio or metric, provide the exact calculation, referencing the page and source file.\n3. Call out any discrepancies between management's remarks in the earnings call and the actual figures in the 10-K balance sheet.\n4. If a query is outside the scope of the provided sources, state: 'I can only analyze the provided filings.'\n5. Provide professional financial citations for all data points.",
      "proTip": "By connecting NotebookLM as the grounding layer, you ensure the research assistant never hallucinates calculations and restricts responses to authorized compliance-checked filing text."
    },
    "zh-TW": {
      "title": "金融研究分析師 AI 助理 (Equity Research Analyst Copilot)",
      "summary": "將金融分析師 Agent 植基於 10-K 年報、財務報表與法說會對話錄音檔，建立企業級金融分析與研究助理。",
      "steps": [
        "在 NotebookLM 中建立一個安全的專案空間，上傳目標上市公司最新的 10-K 年報、資產負債表與法說會對話文本。",
        "前往 Gemini Enterprise Agent Designer（智能體設計器）並建立一個名為「[公司代號] 分析師 Agent」的客製化智能體。",
        "將專屬的證券研究分析師角色指引貼入 Agent 提示詞設定中，並將其連結至唯讀的 NotebookLM 資料目錄夾。",
        "進行對話測試，引導 Agent 分析與計算該公司的債務股本比 (Debt-to-Equity Ratio)，並總結法說會對話中的核心市場風險。",
        "將此專屬分析師 Agent 連結分享給您的投資顧問與資產管理團隊，供其進行即時、高度合規的市場與財報分析。"
      ],
      "prompt": "你是一位資深證券研究分析師 Agent。你的任務是協助分析師團隊進行深入的企業財務評估與合規查核。\n請嚴格遵守以下準則：\n1. **所有回答必須完全植基於** 提供之 10-K 申報書、資產負債表與法說會對話等指定來源。\n2. 在回答任何財務指標或比例時，必須列出精確的計算過程，並標註來源文檔與具體頁碼。\n3. 如果法說會中管理階層的言論與 10-K 財務報告中的實際數據存在任何落差或不一致，必須主動標註並提出警示。\n4. 如果查詢範圍超出所提供的文檔，請禮貌地回答：『我只能分析您所提供的財務申報檔案。』\n5. 為所有引用的數據提供專業的金融資訊來源標記。",
      "proTip": "透過將 NotebookLM 設為數據接地層，可確保此研究助理絕不憑空捏造計算數據，並將所有回答嚴格限制於已通過合規審查的官方申報文本內。"
    },
    "zh-CN": {
      "title": "金融研究分析师 AI 助理 (Equity Research Analyst Copilot)",
      "summary": "将金融分析师 Agent 植基于 10-K 年报、财务报表与法说会对话录音档，建立企业级金融分析与研究助理。",
      "steps": [
        "在 NotebookLM 中创建一个安全的项目空间，上传目标上市公司最新的 10-K 年报、资产负债表与法说会对话文本。",
        "前往 Gemini Enterprise Agent Designer（智能体设计器）并建立一个名为「[公司代号] 分析师 Agent」的定制化智能体。",
        "将专属的证券研究分析师角色指引贴入 Agent 提示词设定中，并将其链接至唯读的 NotebookLM 资料目录夹。",
        "进行对话测试，引导 Agent 分析与计算该公司的债务股本比 (Debt-to-Equity Ratio)，并总结法说会对话中的核心市场风险。",
        "将此专属分析师 Agent 链接分享给您的投资顾问与资产管理团队，供其进行即时、高度合规的市场与财报分析。"
      ],
      "prompt": "你是一位资深证券研究分析师 Agent。你的任务是协助分析师团队进行深入的企业财务评估与合规查核。\n请严格遵守以下准则：\n1. **所有回答必须完全植基于** 提供之 10-K 申报书、资产负债表与法说会对话等指定来源。\n2. 在回答任何财务指标或比例时，必须列出精确的计算过程，并传统来源文档与具体页码。\n3. 如果法说会中管理阶层的言论与 10-K 财务报告中的实际数据存在任何落差或不一致，必须主动标注并提出警示。\n4. 如果查询范围超出所提供的文档，请礼貌地回答：『我只能分析您所提供的财务申报档案。』\n5. 为所有引用的数据提供专业的金融信息来源标记。",
      "proTip": "通过将 NotebookLM 设为数据接地层，可确保此研究助理绝不凭空捏造计算数据，并将所有回答严格限制于已通过合规审查的官方申报文本内。"
    }
  },
  "client_meeting_brief": {
    "en": {
      "title": "Client Portfolio Briefing Assistant",
      "summary": "Synthesize client asset positions, previous interaction notes, and financial objectives in NotebookLM to draft custom meeting briefs.",
      "steps": [
        "Create a private, secure workspace in NotebookLM dedicated to your high-net-worth client portfolio.",
        "Upload past meeting memos, wealth objective notes, and current portfolio spreadsheets as primary documents.",
        "Switch to Canvas Mode in Gemini Enterprise to compile a comprehensive, polished client meeting prep brief.",
        "Ask the model to draft a customized pre-meeting checklist and wealth allocation suggestions tailored to the client's risk profile.",
        "Export the completed briefing sheet directly to Google Docs to prepare for the live client advisory meeting."
      ],
      "prompt": "Acting as an elite Relationship Manager Assistant, analyze the provided client wealth portfolio and past interaction history.\nGenerate a high-fidelity client briefing document structured as follows:\n1. **Executive Profile & Wealth Summary**: Synthesize the client's current asset allocations, investment horizons, and risk tolerance.\n2. **Key Discussion Goals**: Propose 3 major objectives for the upcoming meeting based on previous goals (e.g. tax planning, trust setups).\n3. **Tailored Recommendations**: Propose 2-3 specific portfolio adjustments aligned with their risk profile (conservative, balanced, aggressive).\n4. **Objection Handling**: Anticipate 2 objections they might raise regarding market volatility or fee structures and draft persuasive, compliant advisor responses.",
      "proTip": "Because NotebookLM operates in a secure enterprise cloud tenant, high-net-worth client financial records remain strictly confidential and are never used to train public LLM models."
    },
    "zh-TW": {
      "title": "客戶資產組合簡報助理 (Client Portfolio Briefing Assistant)",
      "summary": "在 NotebookLM 中整合客戶的資產部位、歷史互動紀錄與財富管理目標，自動生成量身定製的客戶晤談簡報。",
      "steps": [
        "在 NotebookLM 中建立一個私密且高安全防護的工作空間，專門存放該高淨值客戶的資產組合資料。",
        "上傳客戶過往的晤談備忘錄、個人理財目標紀錄以及最新的資產部位試算表作為主要對照文檔。",
        "開啟 Gemini Enterprise 並切換至 Canvas Mode，著手彙整一份結構清晰、設計精美的客戶會前準備簡報。",
        "引導模型根據客戶的風險偏好與理財目標，擬定專屬的會前確認清單與資產配置優化建議。",
        "將撰寫完成的簡報直接匯出至 Google Docs，以便在與客戶進行實體或線上財富諮詢會議前做好萬全準備。"
      ],
      "prompt": "請扮演頂尖的「理財客戶關係經理助理」。分析所提供之客戶資產組合數據與歷史晤談紀錄。\n生成一份專業、合規且結構完整的客戶會前準備簡報：\n1. **客戶畫像與資產總覽**：彙整客戶目前的資產配置比例、投資期限、資金流動性需求與風險承受能力。\n2. **晤談焦點目標**：根據客戶上次提出的理財期許（如稅務規劃、家族信託架構），擬定本次會議的 3 大討論核心。\n3. **客製化資產配置建議**：根據客戶的風險等級（保守、平衡、積極），提出 2-3 個具體的資產組合調整建議。\n4. **異議處理預案**：預判客戶可能針對近期市場波動或信託管理費率提出的 2 項質質疑，並編寫符合金融合規的專業答覆指引。",
      "proTip": "由於 NotebookLM 運行於安全的企業雲端租戶中，高淨值客戶的敏感資產與個人資料將受到最嚴密的隱私保護，絕不被用於訓練公開的大型語言模型。"
    },
    "zh-CN": {
      "title": "客户资产组合简报助理 (Client Portfolio Briefing Assistant)",
      "summary": "在 NotebookLM 中整合客户的资产部位、历史互动纪录与财富管理目标，自动生成量身定制的客户晤谈简报。",
      "steps": [
        "In NotebookLM 中创建一个私密且高安全防护的工作空间，专门存放该高净值客户的资产组合资料。",
        "上传客户过往的晤谈备忘录、个人理财目标纪录以及最新的资产部位电子表格作为主要对照文档。",
        "开启 Gemini Enterprise 并切换至 Canvas Mode，着手汇整一份结构清晰、设计精美的客户会前准备简报。",
        "引导模型根据客户的风险偏好与理财目标，拟定专属的会前确认清单与资产配置优化建议。",
        "将撰写完成的简报直接导出至 Google Docs，以便在与客户进行实体或线上财富咨询会议前做好万全准备。"
      ],
      "prompt": "请扮演顶尖的「理财客户关系经理助理」。分析所提供之客户资产组合数据与历史晤谈纪录。\n生成一份专业、合规且结构完整的客户会前准备简报：\n1. **客户画像与资产总览**：汇整客户目前的资产配置比例、投资期限、资金流动性需求与风险承受能力。\n2. **晤谈焦点目标**：根据客户上次提出的理财期许（如税务规划、家族信托架构），拟定本次会议的 3 大讨论核心。\n3. **定制化资产配置建议**：根据客户的风险等级（保守、平衡、积极），提出 2-3 个具体的资产组合调整建议。\n4. **异议处理预案**：预判客户可能针对近期市场波动或信托管理费率提出的 2 项质质疑，并编写符合金融合规的专业答复指引。",
      "proTip": "由于 NotebookLM 运行于安全的企业云端租户中，高净值客户的敏感资产与个人资料将受到最严密的隐私保护，绝不被用于训练公开的大型语言模型。"
    }
  },
  "portfolio_advisory_architect": {
    "en": {
      "title": "Strategic Asset Allocation & Portfolio Architect",
      "summary": "Conduct secure, real-time market research and analyze macroeconomic trends to design customized investment portfolios.",
      "steps": [
        "Open Gemini Enterprise and launch a 'Deep Research' session targeting emerging market sectors and bond yield curves.",
        "Prompt the model to synthesize macroeconomic trends, inflation adjustments, and index performance metrics.",
        "Transfer the researched market trends to Canvas Mode to draft a tailored asset allocation model.",
        "Co-create a diversified portfolio recommendation table inside Canvas Mode and export the final brief to Google Sheets."
      ],
      "prompt": "Act as a Senior Investment Advisor and Portfolio Architect. I want to build a modern investment portfolio recommendations document.\nPhase 1: Research. Search the web for the top 5 macroeconomic drivers and asset class trends over the past 3 months.\nPhase 2: Asset Allocation. Design 3 distinct allocation profiles (Conservative Income, Balanced Growth, Capital Appreciation) mapped to these drivers.\nPhase 3: Portfolio Draft. Create a comprehensive asset class breakdown, specifying equity ratios, fixed-income yields, and alternative assets.\nPhase 4: Risk Analysis. Propose a downside stress-testing framework simulating a 10% market correction scenario.",
      "proTip": "Deep Research enables you to scan hundreds of corporate filings, central bank statements, and analyst briefs simultaneously, outputting a high-fidelity summary report."
    },
    "zh-TW": {
      "title": "戰略資產配置與組合規劃師 (Strategic Asset Allocation & Portfolio Architect)",
      "summary": "利用 Deep Research 進行即時且高安全性的市場調研，並結合總體經濟趨勢設計高度客製化的資產配置藍圖。",
      "steps": [
        "開啟 Gemini Enterprise 並發起一個「Deep Research (深度研究)」對話，鎖定近期新興市場版塊輪動與國債收益率曲線走勢。",
        "引導模型全面檢索、篩選並彙整總體經濟指標、通貨膨脹預期調整與各類股指在過去一段期間的表現指標。",
        "將深度調研得到的市場趨勢無縫導入 Canvas Mode，著手設計一個極具說服力的資產配置模型。",
        "在 Canvas Mode 中協同建立一個多元分散的投資組合推薦表，並將最終成果一鍵匯出至 Google Sheets 進行資產配置模擬。"
      ],
      "prompt": "請扮演資深投資顧問與資產配置專家。協助團隊編寫一份前瞻性的多元資產配置建議書。\n請依照以下四個階段展開：\n第一階段：宏觀調研。檢索過去 3 個月內對全球市場影響最深遠的 5 大總體經濟驅動因子與主要資產類別趨勢。\n第二階段：配置模型設計。針對上述宏觀因子，設計 3 種截然不同的資產配置權重組合（保守收益型、平衡增長型、積極成長型）。\n第三階段：資產類別細分。建立一個詳盡的表格，拆解股票、固定收益債券、貨幣基金及黃金等另類資產的分配佔比與預期殖利率。\n第四階段：極端市況壓力測試。設計一個應變測試框架，模擬當市場發生 10% 突發性修正時，各資產配置組合的潛在最大回撤與風險抵禦表現。",
      "proTip": "利用 Deep Research（深度研究）功能，您可以瞬間掃描並分析成百上千份上市公司申報、央行貨幣政策白皮書及權威分析師簡報，生成極具洞察力的決策報告。"
    },
    "zh-CN": {
      "title": "战略资产配置与组合规划师 (Strategic Asset Allocation & Portfolio Architect)",
      "summary": "利用 Deep Research 进行即时且高安全性的市场调研，并结合总体经济趋势设计高度定制化的资产配置蓝图。",
      "steps": [
        "开启 Gemini Enterprise 并发起一个「Deep Research (深度研究)」对话，锁定近期新兴市场板块轮动与国债收益率曲线走势。",
        "引导模型全面检索、筛选并汇报总体经济指标、通货膨胀预期调整与各类股指在过去一段期间的表现指标。",
        "将深度调研得到的市场趋势无缝导入 Canvas Mode，着手设计一个极具说服力的资产配置模型。",
        "在 Canvas Mode 中协同建立一个多元分散的投资组合推荐表，并将最终成果一键导出至 Google Sheets 进行资产配置模拟。"
      ],
      "prompt": "请扮演资深投资顾问与资产配置专家。协助团队编写一份前瞻性的多元资产配置建议书。\n请依照以下四个阶段展开：\n第一阶段：宏观调研。检索过去 3 个月内对全球市场影响最深远的 5 大总体经济驱动因子与主要资产类别趋势。\n第二阶段：配置模型设计。针对上述宏观因子，设计 3 种截然不同的资产配置权重组合（保守收益型、平衡增长型、积极成长型）。\n第三阶段：资产类别细分。建立一个详尽的表格，拆解股票、固定收益债券、货币基金及黄金等另类资产的分配占比与预期殖利率。\n第四阶段：极端市况压力测试。设计一个应变测试框架，模拟当市场发生 10% 突发性修正时，各资产配置组合的潜在最大回撤与风险防御表现。",
      "proTip": "利用 Deep Research（深度研究）功能，您可以瞬间扫描并分析成百上千份上市公司申报、央行货币政策白皮书及权威分析师简报，生成极具洞察力的决策报告。"
    }
  },
  "underwriting_manual_creator": {
    "en": {
      "title": "Commercial Credit Underwriting Standards Manual",
      "summary": "Generate standardized credit underwriting manuals with step-by-step audit procedures, checklist tables, and risk indicators.",
      "steps": [
        "Open Gemini Enterprise Canvas Mode and outline the standard credit risk assessment criteria for commercial loan applicants.",
        "Prompt the AI to write clear, step-by-step financial ratio checks (DSCR, leverage, quick ratio) and safety buffer thresholds.",
        "Use built-in image generation to create clean visual diagrams representing risk warning levels (Green, Amber, Red).",
        "Co-create an underwriting evaluation checklist table directly inside Canvas Mode and export the guide as an interactive PDF manual."
      ],
      "prompt": "You are a Commercial Credit Risk Officer. Draft a clear, professional Credit Underwriting and Evaluation Manual for loan processors.\nThe manual must include:\n1. **Introduction**: A concise explanation of the corporate credit underwriting mandate and standard leverage compliance.\n2. **Core Ratios Directory**: Formulas and compliance thresholds for Debt Service Coverage Ratio (DSCR), debt-to-equity, and current ratio.\n3. **Risk Warning Framework**: A highly formatted visual representation of warning levels, detailing Amber and Red thresholds.\n4. **Underwriting Checklist**: A multi-step structured evaluation grid for auditing applicant balance sheets and corporate tax filings.\nMaintain a precise, risk-focused, and highly compliant tone throughout.",
      "proTip": "Utilize structured markdown lists and caution alerts inside Canvas Mode to ensure high-risk credit assessment steps stand out to loan auditing teams."
    },
    "zh-TW": {
      "title": "商業信貸核貸與核保標準手冊 (Commercial Credit Underwriting Standards Manual)",
      "summary": "在 Canvas Mode 中協同撰寫標準化的信貸核貸評估指南，包含比率查核、流程圖以及風險警戒指標。",
      "steps": [
        "開啟 Gemini Enterprise Canvas Mode，規劃針對企業融資與商業貸款申請人的標準信用風險評估框架。",
        "引導 AI 撰寫清晰、嚴謹的財務比率審查指標（如 DSCR、槓桿比率、速動比率）以及核貸合規安全臨界值。",
        "利用內建的 Image Generation 功能，繪製精美且合規的圖表，直觀呈現信用風險的三色警戒機制 (Green, Amber, Red)。",
        "直接在 Canvas Mode 中共同設計出一個完整的核貸評估檢核表，並將最終手冊匯出成高畫質的交互式 PDF 手冊。"
      ],
      "prompt": "你是一位資深商業信用風險核決官。請為信貸審查與核貸人員編寫一份專業、嚴謹且高度合規的商業信用核貸與風險評估操作手冊。\n手冊必須包含以下核心章節：\n1. **核貸基本原則**：簡述企業信貸核准的核心授信準則、合規要求以及對還款來源的第一重防線要求。\n2. **核心財務比率審核指南**：詳細列出償債備付率 (DSCR)、資產負債率、速動比率的計算公式，並給出銀行官方設定的授信底線。\n3. **風險警戒與分級處置框架**：採用表格與視覺描述，定義綠色、黃色與紅色風險警戒線，以及在各警戒級別下核貸人員應執行的加強調查措施。\n4. **信用審查標準檢核清單**：設計一個結構化的查核矩陣，指導如何系統化地稽核申請企業的資產負債表與稅務申報紀錄。\n請始終保持極度專業、精確且注重風險與合規的行文語氣。",
      "proTip": "在 Canvas Mode 中靈活運用結構化的 Markdown 條列式說明與警告框（如 [!WARNING]），能使高風險的信用審核步驟在信貸審計團隊閱讀時顯得格外醒目。"
    },
    "zh-CN": {
      "title": "商业信贷核贷与核保标准手册 (Commercial Credit Underwriting Standards Manual)",
      "summary": "在 Canvas Mode 中协同撰写标准化的信贷核贷评估指南，包含比率查核、流程图以及风险警戒指标。",
      "steps": [
        "开启 Gemini Enterprise Canvas Mode，规划针对企业融资与商业贷款申请人的标准信用风险评估框架。",
        "引导 AI 撰写清晰、严谨的财务比率审查指标（如 DSCR、杠杆比率、速动比率）以及核贷合规安全临界值。",
        "利用内置的 Image Generation 功能，绘制精美且合规的图表，直观呈现信用风险的三色警戒机制 (Green, Amber, Red)。",
        "直接在 Canvas Mode 中共同设计出一个完整的核贷评估检核表，并将最终手册导出成高画质的交互式 PDF 手册。"
      ],
      "prompt": "你是一位资深商业信用风险核决官。请为信贷审查与核贷人员编写一份专业、严谨且高度合规的商业信用核贷与风险评估操作手册。\n手册必须包含以下核心章节：\n1. **核贷基本原则**：简述企业信贷核准的核心授信准则、合规要求以及对还款来源的第一重防线要求。\n2. **核心财务比率审核指南**：详细列出偿债备付率 (DSCR)、资产负债率、速动比率的计算公式，并给出银行官方设定得授信底线。\n3. **风险警戒与分级处置框架**：采用表格与视觉描述，定义绿色、黄色与红色风险警戒线，以及在各警戒级别下核贷人员应执行的加强调查措施。\n4. **信用审查标准检核清单**：设计一个结构化的查核矩阵，指导如何系统化地稽核申请企业的资产负债表与税务申报纪录。\n请始终保持极度专业、精确且注重风险与合规的行文语气。",
      "proTip": "在 Canvas Mode 中灵活运用结构化的 Markdown 条列式说明与警告框（如 [!WARNING]），能使高风险的信用审核步骤在信贷审计团队阅读时显得格外醒目。"
    }
  },
  "customer_sentiment_auditor": {
    "en": {
      "title": "Client Service Sentiment & Feedback Auditor",
      "summary": "Consolidate volumes of unstructured client call transcripts and support tickets to identify service issues and sentiment trends.",
      "steps": [
        "Store client interaction records, email tickets, and call transcripts in a secure folder.",
        "Ground your NotebookLM workspace in this folder using the secure Document Store Connector.",
        "Query NotebookLM to extract the top 5 recurring service friction points and customer sentiment scores.",
        "Use Gemini in Google Docs to draft an operational service improvement proposal for banking heads."
      ],
      "prompt": "Acting as a Client Experience and Service Improvement Director, analyze the collection of customer support tickets and chat transcripts.\nGenerate a structured, evidence-backed service assessment report:\n1. **Friction Clustering**: Identify and group the top 5 most frequent client complaints or platform difficulties.\n2. **Sentiment Assessment**: For each category, identify the customer pain level and cite 3 anonymized client quotes as evidence.\n3. **Operational Solutions**: Suggest 2 actionable service improvements or bot training tweaks for each issue based on industry best practices.\n4. **Management Presentation**: Draft a list of 5 executive questions regarding cost-to-benefit ratio, and provide persuasive responses.",
      "proTip": "Linking your client service logs directly via the Document Store Connector ensures that analytics dashboards always display live sentiment trends without copying sensitive logs."
    },
    "zh-TW": {
      "title": "Client Service Sentiment & Feedback Auditor",
      "summary": "Consolidate volumes of unstructured client call transcripts and support tickets to identify service issues and sentiment trends.",
      "steps": [
        "Store client interaction records, email tickets, and call transcripts in a secure folder.",
        "Ground your NotebookLM workspace in this folder using the secure Document Store Connector.",
        "Query NotebookLM to extract the top 5 recurring service friction points and customer sentiment scores.",
        "Use Gemini in Google Docs to draft an operational service improvement proposal for banking heads."
      ],
      "prompt": "Acting as a Client Experience and Service Improvement Director, analyze the collection of customer support tickets and chat transcripts.\nGenerate a structured, evidence-backed service assessment report:\n1. **Friction Clustering**: Identify and group the top 5 most frequent client complaints or platform difficulties.\n2. **Sentiment Assessment**: For each category, identify the customer pain level and cite 3 anonymized client quotes as evidence.\n3. **Operational Solutions**: Suggest 2 actionable service improvements or bot training tweaks for each issue based on industry best practices.\n4. **Management Presentation**: Draft a list of 5 executive questions regarding cost-to-benefit ratio, and provide persuasive responses.",
      "proTip": "Linking your client service logs directly via the Document Store Connector ensures that analytics dashboards always display live sentiment trends without copying sensitive logs."
    },
    "zh-CN": {
      "title": "Client Service Sentiment & Feedback Auditor",
      "summary": "Consolidate volumes of unstructured client call transcripts and support tickets to identify service issues and sentiment trends.",
      "steps": [
        "Store client interaction records, email tickets, and call transcripts in a secure folder.",
        "Ground your NotebookLM workspace in this folder using the secure Document Store Connector.",
        "Query NotebookLM to extract the top 5 recurring service friction points and customer sentiment scores.",
        "Use Gemini in Google Docs to draft an operational service improvement proposal for banking heads."
      ],
      "prompt": "Acting as a Client Experience and Service Improvement Director, analyze the collection of customer support tickets and chat transcripts.\nGenerate a structured, evidence-backed service assessment report:\n1. **Friction Clustering**: Identify and group the top 5 most frequent client complaints or platform difficulties.\n2. **Sentiment Assessment**: For each category, identify the customer pain level and cite 3 anonymized client quotes as evidence.\n3. **Operational Solutions**: Suggest 2 actionable service improvements or bot training tweaks for each issue based on industry best practices.\n4. **Management Presentation**: Draft a list of 5 executive questions regarding cost-to-benefit ratio, and provide persuasive responses.",
      "proTip": "Linking your client service logs directly via the Document Store Connector ensures that analytics dashboards always display live sentiment trends without copying sensitive logs."
    }
  },
  "commercial_loan_proposal": {
    "en": {
      "title": "Commercial Loan Credit Proposal Builder",
      "summary": "Draft comprehensive, regulatory-compliant commercial credit proposals and financial justifications using historical templates.",
      "steps": [
        "Open NotebookLM and upload your bank's approved credit proposal templates and corporate debt guidelines.",
        "In Canvas Mode, prompt Gemini to draft a structured credit proposal outline for a commercial applicant.",
        "Link your secure Document Store containing the applicant's historical tax forms and financial statements to extract details.",
        "Generate a formatted credit assessment table and write a professional debt justification statement.",
        "Export the completed proposal directly to Google Docs to submit to the Underwriting Committee."
      ],
      "prompt": "Act as an expert Commercial Loan Officer and proposal writer. Help our commercial banking division draft a detailed credit proposal.\nInputs:\n- Applicant financials: [Corporate assets, annual revenue, requested debt amount, current interest cover]\n- Credit risk parameters: [Max leverage ratio of 3.5x, minimum DSCR of 1.25x, collateral requirements]\nTask:\n1. Write an **Executive Summary** detailing the applicant's business model and the purpose of the credit facility.\n2. Compile a detailed **Credit Assessment Table**, verifying debt-to-equity compliance with the bank's criteria.\n3. Write a compelling **Risk Mitigation Statement** explaining why the credit committee should authorize this loan, outlining collateral buffers.",
      "proTip": "First upload your bank's credit risk guidelines to NotebookLM to prevent the AI from generating recommendations that violate loan concentration policies."
    },
    "zh-TW": {
      "title": "Commercial Loan Credit Proposal Builder",
      "summary": "Draft comprehensive, regulatory-compliant commercial credit proposals and financial justifications using historical templates.",
      "steps": [
        "Open NotebookLM and upload your bank's approved credit proposal templates and corporate debt guidelines.",
        "In Canvas Mode, prompt Gemini to draft a structured credit proposal outline for a commercial applicant.",
        "Link your secure Document Store containing the applicant's historical tax forms and financial statements to extract details.",
        "Generate a formatted credit assessment table and write a professional debt justification statement.",
        "Export the completed proposal directly to Google Docs to submit to the Underwriting Committee."
      ],
      "prompt": "Act as an expert Commercial Loan Officer and proposal writer. Help our commercial banking division draft a detailed credit proposal.\nInputs:\n- Applicant financials: [Corporate assets, annual revenue, requested debt amount, current interest cover]\n- Credit risk parameters: [Max leverage ratio of 3.5x, minimum DSCR of 1.25x, collateral requirements]\nTask:\n1. Write an **Executive Summary** detailing the applicant's business model and the purpose of the credit facility.\n2. Compile a detailed **Credit Assessment Table**, verifying debt-to-equity compliance with the bank's criteria.\n3. Write a compelling **Risk Mitigation Statement** explaining why the credit committee should authorize this loan, outlining collateral buffers.",
      "proTip": "First upload your bank's credit risk guidelines to NotebookLM to prevent the AI from generating recommendations that violate loan concentration policies."
    },
    "zh-CN": {
      "title": "Commercial Loan Credit Proposal Builder",
      "summary": "Draft comprehensive, regulatory-compliant commercial credit proposals and financial justifications using historical templates.",
      "steps": [
        "Open NotebookLM and upload your bank's approved credit proposal templates and corporate debt guidelines.",
        "In Canvas Mode, prompt Gemini to draft a structured credit proposal outline for a commercial applicant.",
        "Link your secure Document Store containing the applicant's historical tax forms and financial statements to extract details.",
        "Generate a formatted credit assessment table and write a professional debt justification statement.",
        "Export the completed proposal directly to Google Docs to submit to the Underwriting Committee."
      ],
      "prompt": "Act as an expert Commercial Loan Officer and proposal writer. Help our commercial banking division draft a detailed credit proposal.\nInputs:\n- Applicant financials: [Corporate assets, annual revenue, requested debt amount, current interest cover]\n- Credit risk parameters: [Max leverage ratio of 3.5x, minimum DSCR of 1.25x, collateral requirements]\nTask:\n1. Write an **Executive Summary** detailing the applicant's business model and the purpose of the credit facility.\n2. Compile a detailed **Credit Assessment Table**, verifying debt-to-equity compliance with the bank's criteria.\n3. Write a compelling **Risk Mitigation Statement** explaining why the credit committee should authorize this loan, outlining collateral buffers.",
      "proTip": "First upload your bank's credit risk guidelines to NotebookLM to prevent the AI from generating recommendations that violate loan concentration policies."
    }
  },
  "compliance_assistance_bot": {
    "en": {
      "title": "Regulatory Compliance & Audit Assistance Agent",
      "summary": "Build an internal regulatory compliance chatbot trained on standard banking guidelines to answer policy queries.",
      "steps": [
        "In NotebookLM, compile all AML, KYC, and internal compliance policy handbooks.",
        "Use Gemini Agent Designer to build a conversational agent named 'Internal Compliance Officer Bot'.",
        "Connect the agent to the compliance policy database to serve employee queries.",
        "Test the agent's ability to handle complex queries (e.g. 'What is the transaction reporting limit for cross-border wire transfers?').",
        "Embed the agent on the employee compliance portal for 24/7 internal staff assistance."
      ],
      "prompt": "You are the 'Internal Compliance Assistant Bot.' Your objective is to help bank employees navigate KYC, AML, and reporting rules.\n1. **Ground your answers strictly** in the uploaded compliance guidelines. Never guess policy rules.\n2. Provide direct, step-by-step procedures (e.g., 'To report a suspicious wire transfer above $10,000, follow these 3 steps...').\n3. Cite the exact handbook section or regulation number you are referencing.\n4. If a query indicates an active fraud incident or a complex regulatory issue, draft a formal escalation message directly on-screen for the employee to copy and send to the Chief Compliance Officer.\nMaintain an objective, formal, and risk-aware tone.",
      "proTip": "In standard mode, the compliance bot renders precise, ready-to-copy email escalation templates directly inside the chat interface."
    },
    "zh-TW": {
      "title": "金融法規與反洗錢諮詢助理 (Regulatory Compliance Bot)",
      "summary": "利用 Agent Designer 打造內部的法規與反洗錢 (AML) 諮詢機器人，支援手動上傳合規檔案或連結 Email 自動化升級審查機制。",
      "steps": [
        "在 NotebookLM 中，匯整最新版的反洗錢 (AML)、客戶盡職調查 (KYC) 以及銀行內部合規政策手冊。",
        "前往 Gemini Enterprise Agent Designer（智能體設計器）並建立一個名為「內部合規諮詢助理」的對話式智能體。",
        "將此智能體連結至已建立的法規知識庫，以答覆內部行員的日常合規查詢與報備流程。",
        "測試智能體對複雜法規查詢的答覆能力（例如：「跨境電匯超過多少金額需要申報大額交易？」）。",
        "將此合規 Agent 嵌入至行內員工入口網站，提供 24/7 的即時內部政策與合規諮詢支持。"
      ],
      "prompt": "你是一位資深銀行法規與反洗錢合規專員。你的任務是協助銀行行內同仁正確理解並遵循 KYC、AML 與交易申報規範。\n請嚴格遵循以下運營準則：\n1. **所有答覆必須嚴格植基於** 內部提供的法規與合規政策手冊。絕對不可憑空猜測或假設政策。\n2. 提供清晰、步驟化的操作導引（例如：『若要申報大於等值 1 萬美元的疑似洗錢交易，請遵循以下 3 個步驟...』）。\n3. 務必在回答末尾，精確標註您引用的內部合規手冊或外部法規條文編號。\n4. 如果行員查詢的情境涉及明確的欺詐、洗錢跡象，或者屬於極為複雜的法規案件，請直接在對話中擬定好一封結構嚴謹、現成的諮詢升級電子郵件範本，供行員複製並手動發送給合規主管。\n行文請務必保持客觀、嚴謹且具備高度風險防範意識。",
      "proTip": "在標準（Standalone）模式下，合規助理能直接在聊天介面中擬定結構完整、現成的升級信件範本，行員只需一鍵複製即可使用。"
    },
    "zh-CN": {
      "title": "金融法规与反洗钱咨询助理 (Regulatory Compliance Bot)",
      "summary": "利用 Agent Designer 打造内部的法规与反洗钱 (AML) 咨询机器人，支持手动上传合规档案或链接 Email 自动化升级审查机制。",
      "steps": [
        "在 NotebookLM 中，汇整最新版的反洗钱 (AML)、客户尽职调查 (KYC) 以及银行内部合规政策手册。",
        "前往 Gemini Enterprise Agent Designer（智能体设计器）并建立一个名为「内部合规咨询助理」的对话式智能体。",
        "将此智能体链接至已建立的法规知识库，以答复内部行员的日常合规查询与报备流程。",
        "测试智能体对复杂法规查询的答复能力（例如：「跨境电汇超过多少金额需要申报大额交易？」）。",
        "将此合规 Agent 嵌入至行内员工入口网站，提供 24/7 的即时内部政策与合规咨询支持。"
      ],
      "prompt": "你是一位资深银行法规与反洗钱合规专员。你的任务是协助银行行内同仁正确理解并遵循 KYC、AML 与交易申报规范。\n请严格遵循以下运营准则：\n1. **所有答复必须严格植基于** 内部提供的法规与合规政策手册。绝对不可凭空猜测或假设政策。\n2. 提供清晰、步骤化的操作引导（例如：『若要申报大于等值 1 万美元的疑似洗钱交易，请遵循以下 3 个步骤...』）。\n3. 务必在回答末尾，精确标注您引用的内部合规手册或外部法规条文编号。\n4. 如果行员查询的情境涉及明确的欺诈、洗钱迹象，或者属于极为复杂的法规案件，请直接在对话中拟定好一封结构严谨、现成的咨询升级电子邮件模板，供行员复制并手动发送给合规主管。\n行文请务必保持客观、严谨且具备高度风险防范意识。",
      "proTip": "在标准（Standalone）模式下，合规助理能直接在聊天界面中拟定结构完整、现成的升级信件模板，行员只需一键复制即可使用。"
    }
  },
  "financial_literacy_campaign": {
    "en": {
      "title": "Financial Literacy Digital Marketing Campaign",
      "summary": "Brainstorm and design high-fidelity client-facing wealth planning campaigns with AI-generated visual graphics and copy.",
      "steps": [
        "Open Gemini Enterprise and prompt the AI to co-create a cohesive layout for a 'Wealth Building & Compound Interest' digital marketing campaign.",
        "Generate 5 engaging, compliance-checked narrative posts simplifying compound interest curves.",
        "Use built-in image generation to design clean, professional banner graphics for the marketing materials.",
        "Script a 30-second promotional short video using Video Generation assets to drive wealth planning sign-ups.",
        "Configure a custom advisory agent that potential clients can interact with to calculate mock compound schedules."
      ],
      "prompt": "You are the 'Wealth Advisor Assistant Agent' for a digital marketing advisory campaign. Your goal is to explain compound interest in simple, engaging terms.\n1. Campaign Narrative: 'The Compounding Curve'.\n2. When a client interacts, welcome them warmly and explain the rule of 72.\n3. Example: 'If you invest $10,000 at a 6% annual return, your money will double in 12 years!'\n4. If they submit their current savings, generate a customized, supportive financial compounding projection.\nNever guarantee exact stock market returns. Keep the tone warm, educational, and professional.",
      "proTip": "Ground the campaign content in your bank's approved investment parameters to ensure compliance with financial advertising regulations."
    },
    "zh-TW": {
      "title": "Financial Literacy Digital Marketing Campaign",
      "summary": "Brainstorm and design high-fidelity client-facing wealth planning campaigns with AI-generated visual graphics and copy.",
      "steps": [
        "Open Gemini Enterprise and prompt the AI to co-create a cohesive layout for a 'Wealth Building & Compound Interest' digital marketing campaign.",
        "Generate 5 engaging, compliance-checked narrative posts simplifying compound interest curves.",
        "Use built-in image generation to design clean, professional banner graphics for the marketing materials.",
        "Script a 30-second promotional short video using Video Generation assets to drive wealth planning sign-ups.",
        "Configure a custom advisory agent that potential clients can interact with to calculate mock compound schedules."
      ],
      "prompt": "You are the 'Wealth Advisor Assistant Agent' for a digital marketing advisory campaign. Your goal is to explain compound interest in simple, engaging terms.\n1. Campaign Narrative: 'The Compounding Curve'.\n2. When a client interacts, welcome them warmly and explain the rule of 72.\n3. Example: 'If you invest $10,000 at a 6% annual return, your money will double in 12 years!'\n4. If they submit their current savings, generate a customized, supportive financial compounding projection.\nNever guarantee exact stock market returns. Keep the tone warm, educational, and professional.",
      "proTip": "Ground the campaign content in your bank's approved investment parameters to ensure compliance with financial advertising regulations."
    },
    "zh-CN": {
      "title": "Financial Literacy Digital Marketing Campaign",
      "summary": "Brainstorm and design high-fidelity client-facing wealth planning campaigns with AI-generated visual graphics and copy.",
      "steps": [
        "Open Gemini Enterprise and prompt the AI to co-create a cohesive layout for a 'Wealth Building & Compound Interest' digital marketing campaign.",
        "Generate 5 engaging, compliance-checked narrative posts simplifying compound interest curves.",
        "Use built-in image generation to design clean, professional banner graphics for the marketing materials.",
        "Script a 30-second promotional short video using Video Generation assets to drive wealth planning sign-ups.",
        "Configure a custom advisory agent that potential clients can interact with to calculate mock compound schedules."
      ],
      "prompt": "You are the 'Wealth Advisor Assistant Agent' for a digital marketing advisory campaign. Your goal is to explain compound interest in simple, engaging terms.\n1. Campaign Narrative: 'The Compounding Curve'.\n2. When a client interacts, welcome them warmly and explain the rule of 72.\n3. Example: 'If you invest $10,000 at a 6% annual return, your money will double in 12 years!'\n4. If they submit their current savings, generate a customized, supportive financial compounding projection.\nNever guarantee exact stock market returns. Keep the tone warm, educational, and professional.",
      "proTip": "Ground the campaign content in your bank's approved investment parameters to ensure compliance with financial advertising regulations."
    }
  },
  "credit_risk_assessment": {
    "en": {
      "title": "Applicant Risk Portfolio & CRM Analyzer",
      "summary": "Monitor commercial loan risk portfolios by analyzing customer CRM profiles and financial accounts to identify warning signs.",
      "steps": [
        "Establish secure connections from Gemini Enterprise to your corporate Salesforce / Wealthbox CRM and SQL database.",
        "Configure a secure CRM dataset containing applicant credit histories, payment frequencies, and portfolio values.",
        "Configure a secure data privacy layer, ensuring strict compliance with financial regulations and client privacy laws.",
        "Use Gemini to run multi-dimensional portfolio diagnostic risk checks, flagging accounts with payment warning anomalies.",
        "Trigger automated, personalized relationship manager alert emails in your corporate draft folder to suggest portfolio restructuring."
      ],
      "prompt": "Analyze the provided customer portfolio and credit CRM dataset for the current quarter.\nWe want to identify commercial accounts displaying heightened credit risk before their quarterly amortization dates.\nTasks:\n1. **Risk Flagging**: Identify all client accounts that show a >30% drop in balance sheet liquidity and delayed payments over the past 30 days.\n2. **Correlation Analysis**: Evaluate if there is a statistically significant correlation between credit defaults and recent margin calls in this cohort.\n3. **Draft Advisory Check-ins**: For each flagged account, generate a supportive, highly professional check-in email draft from their Relationship Manager, proposing debt-restructuring options.",
      "proTip": "Never upload customer social security numbers. Ensure total regulatory compliance by utilizing anonymized customer UUID hashes during data store checks."
    },
    "zh-TW": {
      "title": "授信戶信用風險評估與 CRM 監控 (Applicant Risk Portfolio Analyzer)",
      "summary": "透過 CRM 系統與授信數據連接器，分析客戶的信用歷史、還款軌跡與流動性，在關鍵Amortization前自動識別風險授信戶。",
      "steps": [
        "在 Google Cloud Console 中，授權並啟用與您行內 Salesforce 或 Wealthbox CRM 系統的安全 API 介接。",
        "建立一個包含授信戶歷年還款明細、現有信用額度、資產負債狀況及 margin 記錄的去識別化數據倉庫。",
        "配置嚴密的敏感數據去識別化與隱私遮蔽層，確保數據全程符合國際金融監管與隱私法規。",
        "引導 Gemini 執行多維度的投資與信貸風險預測診斷，精確識別出可能存在違約風險的授信戶群組。",
        "自動在 Relationship Manager (RM) 的工作草稿信箱中擬定好客戶關懷與資產重組諮詢信件，主動化解潛在壞賬風險。"
      ],
      "prompt": "請扮演資深信貸分析與信用風險專家。評估所提供之企業客戶本季度的信貸與 CRM 還款歷程數據。\n我們的核心目標是在下一個攤銷日 (Amortization Date) 來臨前，主動標記出資產流動性急劇惡化、面臨潛在信用危機的授信戶。\n任務如下：\n1. **風險等級標記**：過濾並標記出在過去 30 天內資產負債流動性比率下跌超過 30%、或在 CRM 中被記錄有多次逾期付款警示的授信客戶。\n2. **多維相關性分析**：探討此風險授信戶群組的违约概率與近期資本市場波動、大宗商品價格走勢或行業政策調整之間是否存在統計顯著的關聯性。\n3. **客戶關懷與資產重組預案**：針對被標記的高風險授信戶，為其對應的 Relationship Manager 一對一起草一封極具專業素養、旨在協助解決資金難難關的客戶關懷郵件草稿，提議開展客製化的債務重組、再融資或展期諮詢會議。",
      "proTip": "在不介接動態 API 的離線（Standalone）模式下，分析師可以手動上傳去識別化的客戶還款 CSV 報表到 Gemini 沙盒中，同樣能享受到極高準確度的風險診斷。"
    },
    "zh-CN": {
      "title": "授信户信用风险评估与 CRM 监控 (Applicant Risk Portfolio Analyzer)",
      "summary": "通过 CRM 系统与授信数据连接器，分析客户的信用历史、还款轨迹与流动性，在关键Amortization前自动识别风险授信户。",
      "steps": [
        "在 Google Cloud Console 中，授权并启用与您行内 Salesforce 或 Wealthbox CRM 系统的安全 API 介接。",
        "建立一个包含授信户历年还款明细、现有信用额度、资产负债状况及 margin 记录的去识别化数据仓库。",
        "配置严密的敏感数据去识别化与隐私遮蔽层，确保数据全程符合国际金融监管与隐私法规。",
        "引导 Gemini 执行多维度的投资与信贷风险预测诊断，精确识别出可能存在违约风险的授信户群组。",
        "自动在 Relationship Manager (RM) 的工作草稿信箱中拟定好客户关怀与资产重组咨询信件，主动化解潜在坏账风险。"
      ],
      "prompt": "请扮演资深信贷分析与信用风险专家。评估所提供之企业客户本季度的信贷与 CRM 还款历程数据。\n我们的核心目标是在下一个摊销日 (Amortization Date) 来临前，主动标记出资产流动性急剧恶化、面临潜在信用危机的授信户。\n任务如下：\n1. **风险等级标记**：过滤并标记出在过去 30 天内资产负债流动性比率下跌超过 30%、或在 CRM 中被记录有多次逾期付款警示的授信客户。\n2. **多维相关性分析**：探讨此风险授信户群组的违约概率与近期资本市场波动、大宗商品价格走势或行业政策调整之间是否存在统计显著的关联性。\n3. **客户关怀与资产重组预案**：针对被标记的高风险授信户，为其对应的 Relationship Manager 一对一起草一封极具专业素养、旨在协助解决资金难难关的客户关怀邮件草稿，建议开展定制化的债务重组、再融资或展期咨询会议。",
      "proTip": "在不介接动态 API 的离线（Standalone）模式下，分析师可以手动上传去识别化的客户还款 CSV 报表到 Gemini 沙盒中，同样能享受到极高准确度的风险诊断。"
    }
  },
  "portfolio_sentiment_tracker": {
    "en": {
      "title": "Market News & Portfolio Sentiment Tracker",
      "summary": "Analyze massive market news databases, financial blogs, and earnings call transcripts in NotebookLM to track sentiment trends.",
      "steps": [
        "Consolidate hundreds of public sector reports, regulatory filings, and market news articles in your cloud drive.",
        "Link your corporate Drive folder using the secure Document Store Connector.",
        "In NotebookLM, prompt the model to scan the files and compute aggregated market sentiment scores (Bullish, Neutral, Bearish).",
        "Generate structured, professional research reports summarizing the impact of emerging trends on your client portfolios.",
        "Review the synthesized reports and collaborate with portfolio teams using shared Google Docs to finalize the recommendations."
      ],
      "prompt": "Act as a Senior Market Strategist. Analyze the uploaded articles, transcripts, and financial news reports from the past week.\nGenerate a high-fidelity market sentiment analysis report containing:\n1. **Sector-Level Sentiment Matrix**: Provide sentiment ratings (Bullish, Bearish, Neutral) for the Tech, Healthcare, and Energy sectors, referencing articles.\n2. **Emerging Catalyst Clusters**: Identify and group the top 3 macroeconomic factors driving asset reallocations.\n3. **Draft Investment Briefs**: Propose 2 strategic rebalancing actions for RM teams to discuss with conservative and aggressive client portfolios.",
      "proTip": "By connecting your market data folders via the Document Store Connector, you establish an automated feed that updates NotebookLM analysis boards automatically."
    },
    "zh-TW": {
      "title": "Market News & Portfolio Sentiment Tracker",
      "summary": "Analyze massive market news databases, financial blogs, and earnings call transcripts in NotebookLM to track sentiment trends.",
      "steps": [
        "Consolidate hundreds of public sector reports, regulatory filings, and market news articles in your cloud drive.",
        "Link your corporate Drive folder using the secure Document Store Connector.",
        "In NotebookLM, prompt the model to scan the files and compute aggregated market sentiment scores (Bullish, Neutral, Bearish).",
        "Generate structured, professional research reports summarizing the impact of emerging trends on your client portfolios.",
        "Review the synthesized reports and collaborate with portfolio teams using shared Google Docs to finalize the recommendations."
      ],
      "prompt": "Act as a Senior Market Strategist. Analyze the uploaded articles, transcripts, and financial news reports from the past week.\nGenerate a high-fidelity market sentiment analysis report containing:\n1. **Sector-Level Sentiment Matrix**: Provide sentiment ratings (Bullish, Bearish, Neutral) for the Tech, Healthcare, and Energy sectors, referencing articles.\n2. **Emerging Catalyst Clusters**: Identify and group the top 3 macroeconomic factors driving asset reallocations.\n3. **Draft Investment Briefs**: Propose 2 strategic rebalancing actions for RM teams to discuss with conservative and aggressive client portfolios.",
      "proTip": "By connecting your market data folders via the Document Store Connector, you establish an automated feed that updates NotebookLM analysis boards automatically."
    },
    "zh-CN": {
      "title": "Market News & Portfolio Sentiment Tracker",
      "summary": "Analyze massive market news databases, financial blogs, and earnings call transcripts in NotebookLM to track sentiment trends.",
      "steps": [
        "Consolidate hundreds of public sector reports, regulatory filings, and market news articles in your cloud drive.",
        "Link your corporate Drive folder using the secure Document Store Connector.",
        "In NotebookLM, prompt the model to scan the files and compute aggregated market sentiment scores (Bullish, Neutral, Bearish).",
        "Generate structured, professional research reports summarizing the impact of emerging trends on your client portfolios.",
        "Review the synthesized reports and collaborate with portfolio teams using shared Google Docs to finalize the recommendations."
      ],
      "prompt": "Act as a Senior Market Strategist. Analyze the uploaded articles, transcripts, and financial news reports from the past week.\nGenerate a high-fidelity market sentiment analysis report containing:\n1. **Sector-Level Sentiment Matrix**: Provide sentiment ratings (Bullish, Bearish, Neutral) for the Tech, Healthcare, and Energy sectors, referencing articles.\n2. **Emerging Catalyst Clusters**: Identify and group the top 3 macroeconomic factors driving asset reallocations.\n3. **Draft Investment Briefs**: Propose 2 strategic rebalancing actions for RM teams to discuss with conservative and aggressive client portfolios.",
      "proTip": "By connecting your market data folders via the Document Store Connector, you establish an automated feed that updates NotebookLM analysis boards automatically."
    }
  },
  "it_service_desk": {
    "en": {
      "title": "IT Support Incident Router",
      "summary": "Automate corporate IT incident ticket categorization, severity routing, and compliance logging using Agent Builder.",
      "steps": [
        "In NotebookLM, compile all corporate IT incident handbooks, security protocols, and software compliance manuals.",
        "Use Gemini Agent Designer to construct a supportive conversational assistant named 'IT Operator Assistance Agent'.",
        "Instruct the agent on incident severity tiers (Sev 1 - System Down, Sev 2 - Degraded Service, Sev 3 - Low priority) and routing paths.",
        "Test the agent's ability to analyze system logs and classify incidents under the correct corporate guidelines.",
        "Deploy the custom IT assistance bot on the internal portal to automate internal help desk operations."
      ],
      "prompt": "You are the 'IT Helpdesk Incident Dispatcher Bot' for a banking tenant. Your objective is to classify and route IT service requests.\n1. **Ground your routing logic strictly** in the uploaded company IT service handbooks.\n2. When a user submits an issue (e.g. 'The teller workstation is failing to load database queries'), classify the severity (Sev 1, Sev 2, Sev 3).\n3. If an issue is classified as Sev 1 (Active Security Incident or teller system downtime), draft a Sev 1 emergency dispatch template for the Network Operations Team on-screen and flag immediate escalation protocols.\n4. If an issue is Sev 3, guide the employee through the automated self-service guides in your knowledge base.\nMaintain an efficient, highly technical, and professional tone.",
      "proTip": "Ground the agent designer in software error log templates to allow the bot to read log stack-traces directly, saving IT operator analysis time."
    },
    "zh-TW": {
      "title": "IT Support Incident Router",
      "summary": "Automate corporate IT incident ticket categorization, severity routing, and compliance logging using Agent Builder.",
      "steps": [
        "In NotebookLM, compile all corporate IT incident handbooks, security protocols, and software compliance manuals.",
        "Use Gemini Agent Designer to construct a supportive conversational assistant named 'IT Operator Assistance Agent'.",
        "Instruct the agent on incident severity tiers (Sev 1 - System Down, Sev 2 - Degraded Service, Sev 3 - Low priority) and routing paths.",
        "Test the agent's ability to analyze system logs and classify incidents under the correct corporate guidelines.",
        "Deploy the custom IT assistance bot on the internal portal to automate internal help desk operations."
      ],
      "prompt": "You are the 'IT Helpdesk Incident Dispatcher Bot' for a banking tenant. Your objective is to classify and route IT service requests.\n1. **Ground your routing logic strictly** in the uploaded company IT service handbooks.\n2. When a user submits an issue (e.g. 'The teller workstation is failing to load database queries'), classify the severity (Sev 1, Sev 2, Sev 3).\n3. If an issue is classified as Sev 1 (Active Security Incident or teller system downtime), draft a Sev 1 emergency dispatch template for the Network Operations Team on-screen and flag immediate escalation protocols.\n4. If an issue is Sev 3, guide the employee through the automated self-service guides in your knowledge base.\nMaintain an efficient, highly technical, and professional tone.",
      "proTip": "Ground the agent designer in software error log templates to allow the bot to read log stack-traces directly, saving IT operator analysis time."
    },
    "zh-CN": {
      "title": "IT Support Incident Router",
      "summary": "Automate corporate IT incident ticket categorization, severity routing, and compliance logging using Agent Builder.",
      "steps": [
        "In NotebookLM, compile all corporate IT incident handbooks, security protocols, and software compliance manuals.",
        "Use Gemini Agent Designer to construct a supportive conversational assistant named 'IT Operator Assistance Agent'.",
        "Instruct the agent on incident severity tiers (Sev 1 - System Down, Sev 2 - Degraded Service, Sev 3 - Low priority) and routing paths.",
        "Test the agent's ability to analyze system logs and classify incidents under the correct corporate guidelines.",
        "Deploy the custom IT assistance bot on the internal portal to automate internal help desk operations."
      ],
      "prompt": "You are the 'IT Helpdesk Incident Dispatcher Bot' for a banking tenant. Your objective is to classify and route IT service requests.\n1. **Ground your routing logic strictly** in the uploaded company IT service handbooks.\n2. When a user submits an issue (e.g. 'The teller workstation is failing to load database queries'), classify the severity (Sev 1, Sev 2, Sev 3).\n3. If an issue is classified as Sev 1 (Active Security Incident or teller system downtime), draft a Sev 1 emergency dispatch template for the Network Operations Team on-screen and flag immediate escalation protocols.\n4. If an issue is Sev 3, guide the employee through the automated self-service guides in your knowledge base.\nMaintain an efficient, highly technical, and professional tone.",
      "proTip": "Ground the agent designer in software error log templates to allow the bot to read log stack-traces directly, saving IT operator analysis time."
    }
  },
  "trade_settlement_reconciliation": {
    "en": {
      "title": "T+1 Trade Settlement Reconciliation Agent",
      "summary": "Reconcile daily transaction ledgers against clearinghouse logs to identify trade settlement discrepancies automatically.",
      "steps": [
        "Compile clearinghouse transaction templates, transaction compliance codes, and ledger handbooks in your private database.",
        "Use Gemini Agent Designer to build a conversational agent named 'Trade Settlement Reconciliation Analyst'.",
        "Upload transaction CSVs and clearinghouse reports directly into the agent sandboxed session.",
        "Prompt the agent to cross-reference settlement amounts, transaction timestamps, and client account IDs.",
        "Extract anomalous transaction line items and review the generated clearinghouse dispatch reports."
      ],
      "prompt": "You are the 'Trade Settlement Reconciliation Agent.' Your goal is to audit daily trading accounts and clearinghouse ledgers.\n1. **Compare daily trade records** and clearinghouse logs. Highlight any transaction discrepancy.\n2. Identify any transaction matching failure (e.g. Price mismatch, missing ISIN, incorrect settlement date).\n3. Generate a structured Reconciliation Exception Report detailing: Transaction ID, Client Account, Clearinghouse Code, Discrepancy Margin.\n4. Provide a professional clearinghouse correction dispatch email draft on-screen for the operations manager to review.\nMaintain absolute accuracy and compliance-focused rigor.",
      "proTip": "Grounding your agent in Swift MT548 settlement status message standards enables the AI to automatically parse clearinghouse message payloads without manual translation."
    },
    "zh-TW": {
      "title": "T+1 Trade Settlement Reconciliation Agent",
      "summary": "Reconcile daily transaction ledgers against clearinghouse logs to identify trade settlement discrepancies automatically.",
      "steps": [
        "Compile clearinghouse transaction templates, transaction compliance codes, and ledger handbooks in your private database.",
        "Use Gemini Agent Designer to build a conversational agent named 'Trade Settlement Reconciliation Analyst'.",
        "Upload transaction CSVs and clearinghouse reports directly into the agent sandboxed session.",
        "Prompt the agent to cross-reference settlement amounts, transaction timestamps, and client account IDs.",
        "Extract anomalous transaction line items and review the generated clearinghouse dispatch reports."
      ],
      "prompt": "You are the 'Trade Settlement Reconciliation Agent.' Your goal is to audit daily trading accounts and clearinghouse ledgers.\n1. **Compare daily trade records** and clearinghouse logs. Highlight any transaction discrepancy.\n2. Identify any transaction matching failure (e.g. Price mismatch, missing ISIN, incorrect settlement date).\n3. Generate a structured Reconciliation Exception Report detailing: Transaction ID, Client Account, Clearinghouse Code, Discrepancy Margin.\n4. Provide a professional clearinghouse correction dispatch email draft on-screen for the operations manager to review.\nMaintain absolute accuracy and compliance-focused rigor.",
      "proTip": "Grounding your agent in Swift MT548 settlement status message standards enables the AI to automatically parse clearinghouse message payloads without manual translation."
    },
    "zh-CN": {
      "title": "T+1 Trade Settlement Reconciliation Agent",
      "summary": "Reconcile daily transaction ledgers against clearinghouse logs to identify trade settlement discrepancies automatically.",
      "steps": [
        "Compile clearinghouse transaction templates, transaction compliance codes, and ledger handbooks in your private database.",
        "Use Gemini Agent Designer to build a conversational agent named 'Trade Settlement Reconciliation Analyst'.",
        "Upload transaction CSVs and clearinghouse reports directly into the agent sandboxed session.",
        "Prompt the agent to cross-reference settlement amounts, transaction timestamps, and client account IDs.",
        "Extract anomalous transaction line items and review the generated clearinghouse dispatch reports."
      ],
      "prompt": "You are the 'Trade Settlement Reconciliation Agent.' Your goal is to audit daily trading accounts and clearinghouse ledgers.\n1. **Compare daily trade records** and clearinghouse logs. Highlight any transaction discrepancy.\n2. Identify any transaction matching failure (e.g. Price mismatch, missing ISIN, incorrect settlement date).\n3. Generate a structured Reconciliation Exception Report detailing: Transaction ID, Client Account, Clearinghouse Code, Discrepancy Margin.\n4. Provide a professional clearinghouse correction dispatch email draft on-screen for the operations manager to review.\nMaintain absolute accuracy and compliance-focused rigor.",
      "proTip": "Grounding your agent in Swift MT548 settlement status message standards enables the AI to automatically parse clearinghouse message payloads without manual translation."
    }
  },
  "fraud_incident_responder": {
    "en": {
      "title": "Fraud and AML Incident Audit Responder",
      "summary": "Audit massive collections of transaction histories, audit logs, and firewall event records in NotebookLM to identify anomalies.",
      "steps": [
        "Upload institutional security protocols, transaction guidelines, and regulatory reporting forms to NotebookLM.",
        "Connect your secure network event records and transaction logs directory using the Document Store Connector.",
        "Prompt the AI to cross-reference log entries with standard AML/KYC warning patterns to isolate fraud risks.",
        "Synthesize structured compliance incident reports complete with precise activity timestamps for submission to risk boards."
      ],
      "prompt": "Act as a Lead Financial Crime and Fraud Investigator. Analyze the attached server event sheets and transaction logs.\nGenerate a high-fidelity AML audit report:\n1. **Anomaly Isolation**: Highlight all transactions that violate geographical parameters, single-day limits, or structural limits.\n2. **Log Correlation**: Evaluate if there is a correlation between the IP addresses used in flagged transactions and past known brute-force server attempts.\n3. **Regulatory Draft**: Compile a formatted Suspicious Activity Report (SAR) template with timestamps and transaction hashes.",
      "proTip": "Compiling guidelines and event logs in a secure, sandboxed NotebookLM instance maintains compliance with international security standards and prevents log data leakage."
    },
    "zh-TW": {
      "title": "Fraud and AML Incident Audit Responder",
      "summary": "Audit massive collections of transaction histories, audit logs, and firewall event records in NotebookLM to identify anomalies.",
      "steps": [
        "Upload institutional security protocols, transaction guidelines, and regulatory reporting forms to NotebookLM.",
        "Connect your secure network event records and transaction logs directory using the Document Store Connector.",
        "Prompt the AI to cross-reference log entries with standard AML/KYC warning patterns to isolate fraud risks.",
        "Synthesize structured compliance incident reports complete with precise activity timestamps for submission to risk boards."
      ],
      "prompt": "Act as a Lead Financial Crime and Fraud Investigator. Analyze the attached server event sheets and transaction logs.\nGenerate a high-fidelity AML audit report:\n1. **Anomaly Isolation**: Highlight all transactions that violate geographical parameters, single-day limits, or structural limits.\n2. **Log Correlation**: Evaluate if there is a correlation between the IP addresses used in flagged transactions and past known brute-force server attempts.\n3. **Regulatory Draft**: Compile a formatted Suspicious Activity Report (SAR) template with timestamps and transaction hashes.",
      "proTip": "Compiling guidelines and event logs in a secure, sandboxed NotebookLM instance maintains compliance with international security standards and prevents log data leakage."
    },
    "zh-CN": {
      "title": "Fraud and AML Incident Audit Responder",
      "summary": "Audit massive collections of transaction histories, audit logs, and firewall event records in NotebookLM to identify anomalies.",
      "steps": [
        "Upload institutional security protocols, transaction guidelines, and regulatory reporting forms to NotebookLM.",
        "Connect your secure network event records and transaction logs directory using the Document Store Connector.",
        "Prompt the AI to cross-reference log entries with standard AML/KYC warning patterns to isolate fraud risks.",
        "Synthesize structured compliance incident reports complete with precise activity timestamps for submission to risk boards."
      ],
      "prompt": "Act as a Lead Financial Crime and Fraud Investigator. Analyze the attached server event sheets and transaction logs.\nGenerate a high-fidelity AML audit report:\n1. **Anomaly Isolation**: Highlight all transactions that violate geographical parameters, single-day limits, or structural limits.\n2. **Log Correlation**: Evaluate if there is a correlation between the IP addresses used in flagged transactions and past known brute-force server attempts.\n3. **Regulatory Draft**: Compile a formatted Suspicious Activity Report (SAR) template with timestamps and transaction hashes.",
      "proTip": "Compiling guidelines and event logs in a secure, sandboxed NotebookLM instance maintains compliance with international security standards and prevents log data leakage."
    }
  },
  "hr_onboarding_wizard": {
    "en": {
      "title": "Employee Compliance Onboarding & Training Agent",
      "summary": "Build an interactive employee compliance training agent to guide staff through regulatory onboarding and tests.",
      "steps": [
        "Upload your company's code of conduct, anti-harassment regulations, and AML guidelines to your document store.",
        "Link your document folder using the Document Store Connector in Agent Designer.",
        "Configure the custom Agent to role-play as a Training Coordinator to guide new employees through training steps.",
        "Utilize Video Generation features to automatically script and produce custom 60-second instructional micro-learning videos.",
        "Deploy the onboarding bot to help employees prepare for and complete standard compliance quizzes."
      ],
      "prompt": "You are the 'Compliance Training Advisor Bot' for employee onboarding. Your objective is to guide new hires through regulatory standards.\n1. **Ground your onboarding checkpoints strictly** in the uploaded company code of conduct.\n2. Guide the employee step-by-step through the compliance modules (e.g. Anti-Bribery, Insider Trading, Security Best Practices).\n3. Present interactive scenario-based quiz questions at the end of each module to test retention (e.g. 'If a vendor offers an expensive dinner during an active RFP, what is the standard protocol?').\n4. Grade their answers and provide clear compliance explanations.\nKeep the tone welcoming, instructional, and professional.",
      "proTip": "By connecting the training agent to your secure Document Store, compliance training programs are updated automatically whenever HR uploads a revised code of conduct."
    },
    "zh-TW": {
      "title": "Employee Compliance Onboarding & Training Agent",
      "summary": "Build an interactive employee compliance training agent to guide staff through regulatory onboarding and tests.",
      "steps": [
        "Upload your company's code of conduct, anti-harassment regulations, and AML guidelines to your document store.",
        "Link your document folder using the Document Store Connector in Agent Designer.",
        "Configure the custom Agent to role-play as a Training Coordinator to guide new employees through training steps.",
        "Utilize Video Generation features to automatically script and produce custom 60-second instructional micro-learning videos.",
        "Deploy the onboarding bot to help employees prepare for and complete standard compliance quizzes."
      ],
      "prompt": "You are the 'Compliance Training Advisor Bot' for employee onboarding. Your objective is to guide new hires through regulatory standards.\n1. **Ground your onboarding checkpoints strictly** in the uploaded company code of conduct.\n2. Guide the employee step-by-step through the compliance modules (e.g. Anti-Bribery, Insider Trading, Security Best Practices).\n3. Present interactive scenario-based quiz questions at the end of each module to test retention (e.g. 'If a vendor offers an expensive dinner during an active RFP, what is the standard protocol?').\n4. Grade their answers and provide clear compliance explanations.\nKeep the tone welcoming, instructional, and professional.",
      "proTip": "By connecting the training agent to your secure Document Store, compliance training programs are updated automatically whenever HR uploads a revised code of conduct."
    },
    "zh-CN": {
      "title": "Employee Compliance Onboarding & Training Agent",
      "summary": "Build an interactive employee compliance training agent to guide staff through regulatory onboarding and tests.",
      "steps": [
        "Upload your company's code of conduct, anti-harassment regulations, and AML guidelines to your document store.",
        "Link your document folder using the Document Store Connector in Agent Designer.",
        "Configure the custom Agent to role-play as a Training Coordinator to guide new employees through training steps.",
        "Utilize Video Generation features to automatically script and produce custom 60-second instructional micro-learning videos.",
        "Deploy the onboarding bot to help employees prepare for and complete standard compliance quizzes."
      ],
      "prompt": "You are the 'Compliance Training Advisor Bot' for employee onboarding. Your objective is to guide new hires through regulatory standards.\n1. **Ground your onboarding checkpoints strictly** in the uploaded company code of conduct.\n2. Guide the employee step-by-step through the compliance modules (e.g. Anti-Bribery, Insider Trading, Security Best Practices).\n3. Present interactive scenario-based quiz questions at the end of each module to test retention (e.g. 'If a vendor offers an expensive dinner during an active RFP, what is the standard protocol?').\n4. Grade their answers and provide clear compliance explanations.\nKeep the tone welcoming, instructional, and professional.",
      "proTip": "By connecting the training agent to your secure Document Store, compliance training programs are updated automatically whenever HR uploads a revised code of conduct."
    }
  },
  "email_priority_digest": {
    "en": {
      "title": "Advisor Daily Correspondence Summary & Digest",
      "summary": "Connect Gemini directly to your advisory mailbox to summarize client emails and schedule follow-ups automatically.",
      "steps": [
        "Connect your institutional mailbox using the secure corporate Email Connector.",
        "Link your work calendar to Gemini using the secure Calendar Connector.",
        "Prompt Gemini to analyze all incoming client messages received in the past 24 hours.",
        "Generate a structured, priority-ranked digest of customer wealth inquiries and meeting requests.",
        "Ask Gemini to automatically draft professional client replies and suggest open calendar time slots for scheduling."
      ],
      "prompt": "You are the 'Advisor Personal Assistant Agent'. Analyze all client emails received in the past 24 hours.\nGenerate a structured daily advisor brief:\n1. **Urgent Client Inquiries**: Extract and highlight any urgent buy/sell requests, withdrawal notices, or margin alerts in bold.\n2. **Advisory Meeting Requests**: Synthesize client requests for face-to-face consultations, matching open slots in your corporate calendar.\n3. **Action Items Checklist**: Provide a prioritized checklist of 3 immediate actions.\n4. **Draft Client Correspondence**: For each client query, draft a formal, compliance-checked draft reply (e.g. confirming meeting dates, confirming transaction receipts) directly in Outlook/Gmail Drafts.\nMaintain an extremely professional, polite, and risk-compliant tone.",
      "proTip": "Using the Email Connector maintains absolute data confidentiality, ensuring sensitive client wealth planning emails are never transmitted outside your organization's boundaries."
    },
    "zh-TW": {
      "title": "Advisor Daily Correspondence Summary & Digest",
      "summary": "Connect Gemini directly to your advisory mailbox to summarize client emails and schedule follow-ups automatically.",
      "steps": [
        "Connect your institutional mailbox using the secure corporate Email Connector.",
        "Link your work calendar to Gemini using the secure Calendar Connector.",
        "Prompt Gemini to analyze all incoming client messages received in the past 24 hours.",
        "Generate a structured, priority-ranked digest of customer wealth inquiries and meeting requests.",
        "Ask Gemini to automatically draft professional client replies and suggest open calendar time slots for scheduling."
      ],
      "prompt": "You are the 'Advisor Personal Assistant Agent'. Analyze all client emails received in the past 24 hours.\nGenerate a structured daily advisor brief:\n1. **Urgent Client Inquiries**: Extract and highlight any urgent buy/sell requests, withdrawal notices, or margin alerts in bold.\n2. **Advisory Meeting Requests**: Synthesize client requests for face-to-face consultations, matching open slots in your corporate calendar.\n3. **Action Items Checklist**: Provide a prioritized checklist of 3 immediate actions.\n4. **Draft Client Correspondence**: For each client query, draft a formal, compliance-checked draft reply (e.g. confirming meeting dates, confirming transaction receipts) directly in Outlook/Gmail Drafts.\nMaintain an extremely professional, polite, and risk-compliant tone.",
      "proTip": "Using the Email Connector maintains absolute data confidentiality, ensuring sensitive client wealth planning emails are never transmitted outside your organization's boundaries."
    },
    "zh-CN": {
      "title": "Advisor Daily Correspondence Summary & Digest",
      "summary": "Connect Gemini directly to your advisory mailbox to summarize client emails and schedule follow-ups automatically.",
      "steps": [
        "Connect your institutional mailbox using the secure corporate Email Connector.",
        "Link your work calendar to Gemini using the secure Calendar Connector.",
        "Prompt Gemini to analyze all incoming client messages received in the past 24 hours.",
        "Generate a structured, priority-ranked digest of customer wealth inquiries and meeting requests.",
        "Ask Gemini to automatically draft professional client replies and suggest open calendar time slots for scheduling."
      ],
      "prompt": "You are the 'Advisor Personal Assistant Agent'. Analyze all client emails received in the past 24 hours.\nGenerate a structured daily advisor brief:\n1. **Urgent Client Inquiries**: Extract and highlight any urgent buy/sell requests, withdrawal notices, or margin alerts in bold.\n2. **Advisory Meeting Requests**: Synthesize client requests for face-to-face consultations, matching open slots in your corporate calendar.\n3. **Action Items Checklist**: Provide a prioritized checklist of 3 immediate actions.\n4. **Draft Client Correspondence**: For each client query, draft a formal, compliance-checked draft reply (e.g. confirming meeting dates, confirming transaction receipts) directly in Outlook/Gmail Drafts.\nMaintain an extremely professional, polite, and risk-compliant tone.",
      "proTip": "Using the Email Connector maintains absolute data confidentiality, ensuring sensitive client wealth planning emails are never transmitted outside your organization's boundaries."
    }
  }
};

function enhanceUseCasesDatabase() {
  // Mark all connector-dependent use cases as non-essential except when specified
  useCasesDb.forEach(uc => {
    if (uc.connectors && uc.connectors.length > 0) {
      uc.connectorEssential = false;
    }
  });

  // Overrides for customer_sentiment_auditor
  const customer_sentiment_auditor = useCasesDb.find(uc => uc.id === "customer_sentiment_auditor");
  if (customer_sentiment_auditor) {
    customer_sentiment_auditor.steps = [
      "Gather customer support logs, chat records, and call scripts manually from your local directory.",
      "Directly upload these logs into a secure NotebookLM workspace for private sandbox analysis.",
      "Query NotebookLM to extract the top 5 recurring friction points and overall client sentiment metrics.",
      "Draft a professional customer experience improvement report using Gemini in Google Docs."
    ];
    customer_sentiment_auditor.advancedSteps = [
      "Ground a secure NotebookLM workspace in your shared customer feedback cloud folder via the secure Document Store Connector.",
      "Query NotebookLM to extract the top 5 recurring friction points and overall client sentiment metrics.",
      "Ensure all analytics respect role-based folder permissions without manual data copying.",
      "Draft a professional customer experience improvement report using Gemini in Google Docs."
    ];
    customer_sentiment_auditor.proTip = "Uploading de-identified chat logs manually to NotebookLM ensures maximum data privacy and sandbox control without complex system configurations.";
    customer_sentiment_auditor.advancedProTip = "Connecting your feedback directories via the Document Store Connector allows for live sentiment audits, ensuring your experience dashboards are updated in real-time.";
  }

  // Overrides for compliance_assistance_bot
  const compliance_assistance_bot = useCasesDb.find(uc => uc.id === "compliance_assistance_bot");
  if (compliance_assistance_bot) {
    compliance_assistance_bot.steps = [
      "In NotebookLM, compile all corporate regulatory manuals, compliance guidelines, and KYC protocols.",
      "Create a custom conversational agent using Agent Designer and name it 'Internal Compliance Assistant'.",
      "Draft detailed policy answers on-screen and manually provide escalation templates for complex regulatory queries.",
      "Deploy the compliance bot on the employee intranet for static policy assistance."
    ];
    compliance_assistance_bot.advancedSteps = [
      "Ground your conversational agent in compliance databases and link the secure corporate Email Connector.",
      "Configure automated escalation instructions, allowing the agent to write audit drafts directly in your Email folder.",
      "Test the agent's ability to create compliant, detailed email drafts automatically during suspected AML alerts.",
      "Deploy the agent for complete end-to-end integration and regulatory tracking."
    ];
    compliance_assistance_bot.proTip = "In standalone mode, the compliance bot renders precise, ready-to-copy email escalation templates directly inside the chat interface.";
    compliance_assistance_bot.advancedProTip = "By connecting the Email Connector, the compliance bot can automatically inject audit drafts directly into your corporate Drafts folder, speeding up report cycles.";
  }

  // Overrides for credit_risk_assessment
  const credit_risk_assessment = useCasesDb.find(uc => uc.id === "credit_risk_assessment");
  if (credit_risk_assessment) {
    credit_risk_assessment.steps = [
      "Export an anonymized CSV dataset containing client CRM portfolios and liquidity scores manually.",
      "Upload this CSV directly to your secure Gemini Advanced prompt window.",
      "Instruct Gemini to run predictive risk modeling, flagging accounts with payment warning anomalies.",
      "Generate draft credit check-in emails proposing debt-restructuring options for flagged cohorts."
    ];
    credit_risk_assessment.advancedSteps = [
      "Configure secure API connections from Gemini to your corporate CRM and financial database.",
      "Run multi-dimensional portfolio diagnostic risk checks, flagging accounts with payment warning anomalies.",
      "Configure a secure data privacy layer, ensuring strict compliance with financial regulations and client privacy laws.",
      "Trigger automated, personalized relationship manager alert emails in your corporate draft folder to suggest portfolio restructuring."
    ];
    credit_risk_assessment.proTip = "Exporting de-identified customer datasets manually is a quick, high-security way to run diagnostics without complex API setups.";
    credit_risk_assessment.advancedProTip = "Connecting your CRM database allows for nightly automated risk sweeps, feeding real-time balance metrics directly to relationship manager dashboards.";
  }
}

// Theme Initialization & Handling
function initTheme() {
  const cachedTheme = localStorage.getItem("ge_theme") || "dark";
  applyTheme(cachedTheme);

  const toggleBtn = document.getElementById("btnThemeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    });
  }

  const adminToggleBtn = document.getElementById("btnAdminThemeToggle");
  if (adminToggleBtn) {
    adminToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("ge_theme", theme);

  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    themeIcon.textContent = theme === "dark" ? "dark_mode" : "light_mode";
  }

  const adminThemeIcon = document.getElementById("adminThemeIcon");
  if (adminThemeIcon) {
    adminThemeIcon.textContent = theme === "dark" ? "dark_mode" : "light_mode";
  }
}

// Language Initialization & Handling
function initLanguage() {
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    appState.activeLanguage = newLang;
    
    // Sync all language dropdowns
    const navL = document.getElementById("navLang");
    const wizL = document.getElementById("wizardLang");
    const admL = document.getElementById("adminLang");
    if (navL) navL.value = newLang;
    if (wizL) wizL.value = newLang;
    if (admL) admL.value = newLang;

    // Save language to active profile and global language key
    localStorage.setItem("ge_adoption_lang", newLang);
    const cachedProfile = localStorage.getItem("ge_adoption_profile");
    if (cachedProfile) {
      const profile = JSON.parse(cachedProfile);
      profile.lang = newLang;
      localStorage.setItem("ge_adoption_profile", JSON.stringify(profile));
    }

    // Apply translations across UI and cards
    updateUILanguage();
    renderUseCases();

    // Re-render timeline if currently active
    const timelineView = document.getElementById("timelineView");
    if (timelineView && timelineView.style.display !== "none") {
      renderTimeline();
    }

    // Also reload administrative use cases list if active
    const adminPortal = document.getElementById("adminPortal");
    if (adminPortal && adminPortal.style.display !== "none") {
      loadAdminUseCases();
    }
  };

  const navL = document.getElementById("navLang");
  const wizL = document.getElementById("wizardLang");
  const admL = document.getElementById("adminLang");
  if (navL) navL.addEventListener("change", handleLanguageChange);
  if (wizL) wizL.addEventListener("change", handleLanguageChange);
  if (admL) admL.addEventListener("change", handleLanguageChange);
}

// Translate dynamic and static DOM element values based on language selection
function updateUILanguage() {
  const lang = appState.activeLanguage || "en";
  const t = uiTranslations[lang];

  const safeSetText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  const safeSetHTML = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  // Static strings
  safeSetText("wizardTitle", t.wizardTitle);
  safeSetText("wizardSubtitle", t.wizardSubtitle);
  safeSetText("wizardDesc", t.wizardDesc);
  safeSetText("labelRole", t.labelRole);
  safeSetText("labelLevel", t.labelLevel);
  safeSetText("labelLang", t.labelLang);
  safeSetHTML("btnStart", `<span class="material-symbols-outlined">rocket_launch</span> ${t.btnStart}`);
  
  // Sidebar titles (with robust fallback selectors to match index.html elements)
  const sidebarProfileTitle = document.getElementById("sidebarProfileTitle") || document.getElementById("titleContextProfile");
  if (sidebarProfileTitle) sidebarProfileTitle.textContent = t.sidebarProfileTitle;
  
  const sidebarConnectorsTitle = document.getElementById("sidebarConnectorsTitle");
  if (sidebarConnectorsTitle) sidebarConnectorsTitle.textContent = t.sidebarConnectorsTitle;
  
  const sidebarFeaturesTitle = document.getElementById("sidebarFeaturesTitle") || document.getElementById("titleNavigation");
  if (sidebarFeaturesTitle) sidebarFeaturesTitle.textContent = t.sidebarFeaturesTitle || "Filter by GE Feature";
  
  const sidebarStatusTitle = document.getElementById("sidebarStatusTitle") || document.getElementById("titleFilters");
  if (sidebarStatusTitle) sidebarStatusTitle.textContent = t.sidebarStatusTitle;

  safeSetText("btnChangeContextText", t.btnChangeContextText);

  // Static sidebar filter items
  const statusFilterItems = document.querySelectorAll(".status-filter-item");
  statusFilterItems.forEach(item => {
    const status = item.getAttribute("data-status");
    if (status === "all") {
      item.innerHTML = `<span class="material-symbols-outlined">check_circle</span> ${t.showAllCases || "Show All"}`;
    } else if (status === "unlocked") {
      item.innerHTML = `<span class="material-symbols-outlined">cloud_done</span> ${t.standardToolsOnly || "Ready to Deploy"}`;
    } else if (status === "integration") {
      item.innerHTML = `<span class="material-symbols-outlined">lock_open_right</span> ${t.integrationRequired || "Requires Connectors"}`;
    } else if (status === "liked") {
      item.innerHTML = `<span class="material-symbols-outlined">favorite</span> ${t.filterLiked || "My Liked Cases"}`;
    } else if (status === "deployed") {
      item.innerHTML = `<span class="material-symbols-outlined">rocket_launch</span> ${t.filterDeployed || "My Deployed Cases"}`;
    }
  });

  const featureFilterItems = document.querySelectorAll(".feature-filter-item");
  if (featureFilterItems.length > 0) {
    featureFilterItems[0].innerHTML = `<span class="material-symbols-outlined">apps</span> ${t.allCapabilities || "All Capabilities"}`;
  }

  // Onboarding Dropdown roles
  const roleSelect = document.getElementById("wizardRole");
  if (roleSelect) {
    Array.from(roleSelect.options).forEach(opt => {
      if (t.roles[opt.value]) {
        opt.textContent = t.roles[opt.value];
      }
    });
  }

  // Admin Form Role Dropdown
  const adminRoleSelect = document.getElementById("formCaseRole");
  if (adminRoleSelect) {
    Array.from(adminRoleSelect.options).forEach(opt => {
      if (t.roles[opt.value]) {
        opt.textContent = t.roles[opt.value];
      }
    });
  }

  // Onboarding Dropdown levels
  const levelSelect = document.getElementById("wizardLevel");
  if (levelSelect) {
    Array.from(levelSelect.options).forEach(opt => {
      if (t.levels[opt.value]) {
        opt.textContent = t.levels[opt.value];
      }
    });
  }

  // Dashboard Welcome Msg
  if (appState.isAdmin === true) {
    let adminTitle = "Admin View";
    let adminSub = "Reviewing all playbooks across all roles and levels with full management permissions.";
    if (lang === "zh-TW") {
      adminSub = "正在以完整管理權限審查所有角色與學制層級的學習案例。";
    } else if (lang === "zh-CN") {
      adminSub = "正在以完整管理权限审查所有角色与学制层级学习案例。";
    }
    safeSetText("welcomeMsg", adminTitle);
    safeSetText("welcomeSubtitle", adminSub);
  } else if (appState.userRole) {
    const category = getCategoryByRole(appState.userRole);
    const translatedHub = t.hubs[category] || t.hubs.academic;
    const translatedRole = t.roles[appState.userRole] || appState.userRole;
    safeSetText("welcomeMsg", `${translatedHub} • ${translatedRole}`);
    safeSetText("welcomeSubtitle", t.wizardDesc);
  } else {
    safeSetText("welcomeMsg", t.wizardSubtitle);
    safeSetText("welcomeSubtitle", t.wizardDesc);
  }

  // Help support roles explanation in wizard
  handleWizardRoleChange();

  // Update sidebar profile card and navbar welcome text immediately
  updateSidebarContextUI();

  // Translate Admin Portal elements if they exist
  const adminBrand = document.getElementById("adminBrandText");
  if (adminBrand) {
    adminBrand.textContent = t.adminBrandText || "Admin Control";
    safeSetText("adminMenuNavigationTitle", t.adminMenuNavigationTitle || "Menu Navigation");
    safeSetText("adminPortalTitle", t.adminPortalTitle || "GEMINI EDUCATION MANAGEMENT");
    safeSetText("adminPortalSubtitle", t.adminPortalSubtitle || "Configure users, update learning playbooks, and analyze the last 6 months deployment metrics.");
    safeSetText("adminTabUsersText", t.adminTabUsersText || "Users Provisioning");
    safeSetText("adminTabAnalyticsText", t.adminTabAnalyticsText || "System Analytics");
    safeSetText("adminTabCasesText", t.adminTabCasesText || "Use Cases CRUD");
    safeSetText("btnAdminBackToPortalText", t.btnAdminBackToPortalText || "Learning Portal");
    safeSetText("btnAdminLogoutText", t.btnAdminLogoutText || "Log Out");

    // Dynamic Admin Sub-labels and inputs
    safeSetText("adminProvisionTitle", t.adminProvisionTitle);
    safeSetHTML("adminProvisionDesc", t.adminProvisionDesc);
    safeSetText("adminProvisionLabelEmail", t.adminProvisionLabelEmail);
    const btnProvision = document.getElementById("adminBtnProvision");
    if (btnProvision) {
      btnProvision.innerHTML = `${t.adminBtnProvision || "Provision"} <span class="material-symbols-outlined">person_add</span>`;
    }
    safeSetText("adminRegisteredUsersTitle", t.adminRegisteredUsersTitle);
    safeSetText("adminThUserEmail", t.adminThUserEmail);
    safeSetText("adminThPasswordStatus", t.adminThPasswordStatus);
    safeSetText("adminThCreatedDate", t.adminThCreatedDate);
    safeSetText("adminThAdminActions", t.adminThAdminActions);

    safeSetText("adminLabelTotalUsers", t.adminLabelTotalUsers);
    safeSetText("adminLabelTotalUseCases", t.adminLabelTotalUseCases);
    safeSetText("adminLabelTotalLikes", t.adminLabelTotalLikes);
    safeSetText("adminLabelTotalDeployments", t.adminLabelTotalDeployments);

    safeSetText("adminChartTitle", t.adminChartTitle);
    safeSetText("adminChartDesc", t.adminChartDesc);
    const legendViews = document.getElementById("adminLabelViewsLegend");
    if (legendViews) {
      legendViews.innerHTML = `<span style="display: inline-block; width: 12px; height: 3px; background: var(--color-secondary);"></span> ${t.adminLabelViewsLegend || "PAGE VIEWS"}`;
    }
    const legendLikes = document.getElementById("adminLabelLikesLegend");
    if (legendLikes) {
      legendLikes.innerHTML = `<span style="display: inline-block; width: 12px; height: 3px; background: var(--color-danger);"></span> ${t.adminLabelLikesLegend || "USER LIKES"}`;
    }
    const legendDeployments = document.getElementById("adminLabelDeploymentsLegend");
    if (legendDeployments) {
      legendDeployments.innerHTML = `<span style="display: inline-block; width: 12px; height: 3px; background: var(--color-success);"></span> ${t.adminLabelDeploymentsLegend || "DEPLOYMENTS"}`;
    }

    safeSetText("adminCrudTitle", t.adminCrudTitle);
    const btnExport = document.getElementById("btnAdminExportCases");
    if (btnExport) {
      btnExport.innerHTML = `<span class="material-symbols-outlined">download</span> <span id="adminBtnExportText">${t.adminBtnExportText || "Extract All (JSON)"}</span>`;
    }
    const btnCreate = document.getElementById("btnAdminCreateCase");
    if (btnCreate) {
      btnCreate.innerHTML = `<span class="material-symbols-outlined">add_box</span> <span id="adminBtnCreateCaseText">${t.adminBtnCreateCaseText || "Add Use Case"}</span>`;
    }

    safeSetText("adminCrudThId", t.adminCrudThId);
    safeSetText("adminCrudThTitle", t.adminCrudThTitle);
    safeSetText("adminCrudThCategory", t.adminCrudThCategory);
    safeSetText("adminCrudThRole", t.adminCrudThRole);
    safeSetText("adminCrudThActions", t.adminCrudThActions);

    // Form labels inside modal
    safeSetText("adminFormLabelId", t.adminFormLabelId);
    safeSetText("adminFormLabelCategory", t.adminFormLabelCategory);
    safeSetText("adminFormLabelTitle", t.adminFormLabelTitle);
    safeSetText("adminFormLabelRole", t.adminFormLabelRole);
    safeSetText("adminFormLabelSummary", t.adminFormLabelSummary);
    safeSetText("adminFormLabelDualModeCheckbox", t.adminFormLabelDualModeCheckbox);
    safeSetText("adminFormDescDualModeCheckbox", t.adminFormDescDualModeCheckbox);
    safeSetText("adminFormLabelFeatures", t.adminFormLabelFeatures);
    safeSetText("adminFormLabelConnectors", t.adminFormLabelConnectors);
    safeSetText("adminFormLabelLevel", t.adminFormLabelLevel);
    safeSetText("adminFormLabelSteps", t.adminFormLabelSteps);
    safeSetText("adminFormLabelPrompt", t.adminFormLabelPrompt);
    safeSetText("adminFormLabelProTip", t.adminFormLabelProTip);
    safeSetText("adminFormLabelAdvancedSteps", t.adminFormLabelAdvancedSteps);
    safeSetText("adminFormLabelAdvancedPrompt", t.adminFormLabelAdvancedPrompt);
    safeSetText("adminFormLabelAdvancedProTip", t.adminFormLabelAdvancedProTip);

    safeSetText("adminFormLabelZhtwHeader", t.adminFormLabelZhtwHeader);
    safeSetText("adminFormLabelZhtwTitle", t.adminFormLabelZhtwTitle);
    safeSetText("adminFormLabelZhtwSummary", t.adminFormLabelZhtwSummary);
    safeSetText("adminFormLabelZhtwSteps", t.adminFormLabelZhtwSteps);
    safeSetText("adminFormLabelZhtwPrompt", t.adminFormLabelZhtwPrompt);
    safeSetText("adminFormLabelZhtwProTip", t.adminFormLabelZhtwProTip);
    safeSetText("adminFormLabelZhtwAdvancedSteps", t.adminFormLabelZhtwAdvancedSteps);
    safeSetText("adminFormLabelZhtwAdvancedPrompt", t.adminFormLabelZhtwAdvancedPrompt);
    safeSetText("adminFormLabelZhtwAdvancedProTip", t.adminFormLabelZhtwAdvancedProTip);

    safeSetText("adminFormLabelZhcnHeader", t.adminFormLabelZhcnHeader);
    safeSetText("adminFormLabelZhcnTitle", t.adminFormLabelZhcnTitle);
    safeSetText("adminFormLabelZhcnSummary", t.adminFormLabelZhcnSummary);
    safeSetText("adminFormLabelZhcnSteps", t.adminFormLabelZhcnSteps);
    safeSetText("adminFormLabelZhcnPrompt", t.adminFormLabelZhcnPrompt);
    safeSetText("adminFormLabelZhcnProTip", t.adminFormLabelZhcnProTip);
    safeSetText("adminFormLabelZhcnAdvancedSteps", t.adminFormLabelZhcnAdvancedSteps);
    safeSetText("adminFormLabelZhcnAdvancedPrompt", t.adminFormLabelZhcnAdvancedPrompt);
    safeSetText("adminFormLabelZhcnAdvancedProTip", t.adminFormLabelZhcnAdvancedProTip);

    // Localize the AI Drafting instructions block
    const instructionInput = document.getElementById("formCaseGeminiInstruction");
    if (lang === "zh-TW") {
      safeSetText("adminFormLabelGeminiPromptTitle", "使用 Gemini 智能生成 / 優化案例");
      safeSetText("adminFormLabelGeminiPromptDesc", "輸入您想建立的案例方向，或說明您想對此案例進行的具體修改。Gemini 將會全自動為您編寫高品質的多語言對應、系統提示詞、操作步驟及導入心法。");
      if (instructionInput) instructionInput.placeholder = "例如：使用 Canvas 模式，為高中化學實驗報告建立一份評分量表指南，重點放在實驗安全上...";
    } else if (lang === "zh-CN") {
      safeSetText("adminFormLabelGeminiPromptTitle", "使用 Gemini 智能生成 / 优化案例");
      safeSetText("adminFormLabelGeminiPromptDesc", "输入您想建立的案例方向，或说明您想对此案例进行的具体修改。Gemini 将会全自动为您编写高质量的多语言对应、系统提示词、操作步骤及导入心法。");
      if (instructionInput) instructionInput.placeholder = "例如：使用 Canvas 模式，为高中化学实验报告建立一份评分量表指南，重点放在实验安全上...";
    } else {
      safeSetText("adminFormLabelGeminiPromptTitle", "Generate/Refine Playbook with Gemini");
      safeSetText("adminFormLabelGeminiPromptDesc", "Specify what you want to create, or describe the edits you'd like to apply to this playbook. Gemini will generate high-fidelity, localized playbooks, system prompts, steps, and tips.");
      if (instructionInput) instructionInput.placeholder = "e.g. Create a rubric grading guide for high school chemistry lab reports using Canvas Mode, focusing on safety...";
    }

    safeSetText("btnAdminFormCancel", t.btnAdminFormCancel);
    safeSetText("btnAdminFormSave", t.btnAdminFormSave);
  }
}

function getCategoryByRole(role) {
  if (["Lecturer", "TA"].includes(role)) return "academic";
  if (["Student"].includes(role)) return "student";
  if (["Security", "Finance", "SAO"].includes(role)) return "administrative";
  return "operational";
}

// Handle Wizard Role Selector Change (Disable institution level if administrative support role)
function handleWizardRoleChange() {
  const selectedRole = document.getElementById("wizardRole").value;
  const levelSelect = document.getElementById("wizardLevel");
  const lang = appState.activeLanguage || "en";
  const t = uiTranslations[lang];
  
  // Administrative support roles do not apply to school levels (Primary, High School, Higher Edu)
  const isSupportRole = ["Security", "Finance", "IT Admin", "SAO"].includes(selectedRole);
  
  if (isSupportRole) {
    levelSelect.value = "Generic";
    levelSelect.disabled = true;
    // Add subtle helper description
    document.getElementById("levelFormGroup").style.opacity = "0.5";
    document.getElementById("levelHelperText").textContent = t.levelHelperText;
  } else {
    levelSelect.disabled = false;
    document.getElementById("levelFormGroup").style.opacity = "1";
    document.getElementById("levelHelperText").textContent = "";
  }
}

// Handle Onboarding Completion
async function handleOnboardingSubmit() {
  const role = document.getElementById("wizardRole").value;
  const level = document.getElementById("wizardLevel").value;
  const lang = document.getElementById("wizardLang").value;

  appState.userRole = role;
  appState.institutionLevel = level;
  appState.activeLanguage = lang;

  // Cache in localStorage
  localStorage.setItem("ge_adoption_profile", JSON.stringify({ role, level, lang }));

  // Hide overlay
  document.getElementById("wizardOverlay").style.display = "none";

  // Update UI and load content
  updateUILanguage();
  updateSidebarContextUI();
  
  // Fetch use cases and render
  await loadUseCasesFromServer();
  renderUseCases();
  renderTimeline();
  
  const welcomeText = uiTranslations[lang].profileSetSuccess;
  showToast(welcomeText, "success");
}

// Update Context Profile Cards in UI
function updateSidebarContextUI() {
  const lang = appState.activeLanguage || "en";
  const t = uiTranslations[lang];

  if (appState.isAdmin === true) {
    document.title = "Admin View";

    const navWelcomeEl = document.getElementById("navbarWelcomeText");
    if (navWelcomeEl) navWelcomeEl.textContent = "Admin View";

    const sidebarProfileTitle = document.getElementById("sidebarProfileTitle") || document.getElementById("titleContextProfile");
    if (sidebarProfileTitle) sidebarProfileTitle.textContent = "Admin View";

    const roleEl = document.getElementById("sidebarRole") || document.getElementById("profileRoleName");
    if (roleEl) roleEl.textContent = "Administrator";

    const levelEl = document.getElementById("sidebarLevel") || document.getElementById("profileInstitutionName");
    if (levelEl) levelEl.textContent = "Simulation Mode";
  } else {
    document.title = "Gemini Enterprise - Edu Portal";

    const roleText = t.roles[appState.userRole] || appState.userRole;
    const roleEl = document.getElementById("sidebarRole") || document.getElementById("profileRoleName");
    if (roleEl) roleEl.textContent = roleText;
    
    const isSupportRole = ["Security", "Finance", "IT Admin", "SAO"].includes(appState.userRole);
    const levelEl = document.getElementById("sidebarLevel") || document.getElementById("profileInstitutionName");
    if (levelEl) {
      if (isSupportRole) {
        levelEl.textContent = lang === "en" ? "Global (All Levels)" : (lang === "zh-TW" ? "全局 (所有級別)" : "全局 (所有级别)");
      } else {
        const levelText = t.levels[appState.institutionLevel] || appState.institutionLevel;
        levelEl.textContent = levelText;
      }
    }

    // Update navbar welcome text
    const navWelcomeEl = document.getElementById("navbarWelcomeText");
    if (navWelcomeEl) navWelcomeEl.textContent = roleText;
  }
}

// Configure Connector Toggles
function setupConnectorToggles() {
  const toggles = [
    { id: "toggleOneDrive", key: "onedrive" },
    { id: "toggleOutlook", key: "outlook" },
    { id: "toggleLMS", key: "lms" },
    { id: "toggleGoogle", key: "google" }
  ];

  toggles.forEach(t => {
    const el = document.getElementById(t.id);
    if (!el) {
      console.warn(`Connector toggle element not found: ${t.id}`);
      return;
    }
    el.addEventListener("change", (e) => {
      appState.activeConnectors[t.key] = e.target.checked;
      
      // Update green visual indicators in sidebar list
      const indicator = document.getElementById(`indicator-${t.key}`);
      const lang = appState.activeLanguage || "en";
      const tTrans = uiTranslations[lang];

      if (e.target.checked) {
        if (indicator) indicator.classList.add("active");
        let genericName = t.key.toUpperCase();
        if (t.key === "onedrive") genericName = lang === "en" ? "Drive Connector" : (lang === "zh-TW" ? "雲端硬碟連接器" : "云端硬盘连接器");
        else if (t.key === "outlook") genericName = lang === "en" ? "Email Connector" : (lang === "zh-TW" ? "電子郵件連接器" : "电子邮件连接器");
        else if (t.key === "lms") genericName = lang === "en" ? "LMS Connector" : (lang === "zh-TW" ? "LMS 連接器" : "LMS 连接器");
        else if (t.key === "google") genericName = lang === "en" ? "Calendar Connector" : (lang === "zh-TW" ? "行事曆連接器" : "日历连接器");
        showToast(`${genericName} ${tTrans.linkedAndActive}`, "success");
      } else {
        if (indicator) indicator.classList.remove("active");
      }
      
      // Re-render dashboard cards
      renderUseCases();
    });
  });
}

// Search input handling
function handleSearchInput(e) {
  appState.searchQuery = e.target.value.toLowerCase();
  renderUseCases();
}

// Helper to render New and Updated badges for Use Cases created/updated within 30 days
function getUsecaseBadgeHtml(uc, lang) {
  if (!uc.createdAt) return "";

  const now = new Date();
  const createdDate = new Date(uc.createdAt);
  const diffTimeCreated = Math.abs(now - createdDate);
  const diffDaysCreated = Math.ceil(diffTimeCreated / (1000 * 60 * 60 * 24));

  let isNew = diffDaysCreated <= 30;
  let isUpdated = false;

  if (uc.updatedAt) {
    const updatedDate = new Date(uc.updatedAt);
    const diffTimeUpdated = Math.abs(now - updatedDate);
    const diffDaysUpdated = Math.ceil(diffTimeUpdated / (1000 * 60 * 60 * 24));
    // It's only marked "updated" if it's NOT already marked "new" (to avoid cluttering)
    if (!isNew && diffDaysUpdated <= 30 && updatedDate > createdDate) {
      isUpdated = true;
    }
  }

  if (isNew) {
    const newLabel = lang === 'en' ? 'New' : (lang === 'zh-TW' ? '新' : '新');
    return `<span class="tag" style="background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.25); color: #ef4444; font-weight: 700; font-size: 10px; padding: 4px 8px; text-transform: uppercase; letter-spacing: 0.5px; border-radius: 4px;">${newLabel}</span>`;
  }

  if (isUpdated) {
    const updatedLabel = lang === 'en' ? 'Updated' : (lang === 'zh-TW' ? '已更新' : '已更新');
    return `<span class="tag" style="background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.25); color: #3b82f6; font-weight: 700; font-size: 10px; padding: 4px 8px; text-transform: uppercase; letter-spacing: 0.5px; border-radius: 4px;">${updatedLabel}</span>`;
  }

  return "";
}

// Main Render Loop for Use Cases Grid
function renderUseCases() {
  const container = document.getElementById("useCasesContainer");
  container.innerHTML = ""; // clear current cards
  const lang = appState.activeLanguage || "en";
  const t = uiTranslations[lang];

  // Filter use cases from db based on state
  const filteredUseCases = useCasesDb.filter(useCase => {
    // 1. Role Filter Mapping: Show academic support cases to everyone, but specialize core hubs
    // A. Role match
    let matchesRole = false;
    const isSupportRole = ["Security", "Finance", "IT Admin", "SAO"].includes(appState.userRole);
    
    if (appState.isAdmin === true) {
      matchesRole = true;
    } else if (appState.userRole === "Lecturer") {
      matchesRole = ["Lecturer", "TA"].includes(useCase.role) || useCase.category === "academic";
    } else if (appState.userRole === "TA") {
      matchesRole = ["Lecturer", "TA"].includes(useCase.role) || useCase.category === "academic";
    } else if (appState.userRole === "Student") {
      matchesRole = useCase.role === "Student" || useCase.category === "student";
    } else if (isSupportRole) {
      matchesRole = [appState.userRole, "IT Admin", "Program Leader", "Dean", "SAO"].includes(useCase.role) || 
                    ["operational", "administrative"].includes(useCase.category);
    } else if (appState.userRole === "Program Leader" || appState.userRole === "Dean") {
      matchesRole = ["Lecturer", "Program Leader", "Dean"].includes(useCase.role) || useCase.category === "operational";
    } else {
      matchesRole = true;
    }

    // 2. Institution Level Filter: Support roles ignore this completely.
    let matchesLevel = true;
    if (appState.isAdmin === true) {
      matchesLevel = true;
    } else if (!isSupportRole && useCase.level && useCase.level.length > 0) {
      matchesLevel = useCase.level.includes("Generic") || useCase.level.includes(appState.institutionLevel);
    }

    // 3. Feature Tags filter
    let matchesFeature = true;
    if (appState.activeFilterFeature !== "all") {
      matchesFeature = useCase.features.some(f => f.toLowerCase() === appState.activeFilterFeature.toLowerCase());
    }

    // 4. Status Filter (Connector dependencies)
    let matchesStatus = true;
    const hasMissingConnector = checkMissingConnector(useCase);
    if (appState.activeFilterStatus === "standard" || appState.activeFilterStatus === "unlocked") {
      matchesStatus = !hasMissingConnector;
    } else if (appState.activeFilterStatus === "integration") {
      matchesStatus = hasMissingConnector;
    } else if (appState.activeFilterStatus === "liked") {
      matchesStatus = useCase.isLiked === true || useCase.isLiked === 1;
    } else if (appState.activeFilterStatus === "deployed") {
      matchesStatus = useCase.isDeployed === true || useCase.isDeployed === 1;
    }

    // 5. Search Bar Query
    let matchesSearch = true;
    if (appState.searchQuery) {
      // Localized search lookup
      const trans = useCasesTranslations[useCase.id] ? useCasesTranslations[useCase.id][lang] : null;
      const cTitle = trans ? trans.title : useCase.title;
      const cSummary = trans ? trans.summary : useCase.summary;

      matchesSearch = cTitle.toLowerCase().includes(appState.searchQuery) || 
                      cSummary.toLowerCase().includes(appState.searchQuery) ||
                      useCase.role.toLowerCase().includes(appState.searchQuery) ||
                      useCase.features.some(f => f.toLowerCase().includes(appState.searchQuery));
    }

    // 6. Category Filter (Sidebar navigation)
    let matchesCategory = true;
    if (appState.activeFilterCategory && appState.activeFilterCategory !== "all") {
      const filterCat = appState.activeFilterCategory === "admin" ? "administrative" : appState.activeFilterCategory;
      matchesCategory = useCase.category === filterCat;
    }

    return matchesRole && matchesLevel && matchesFeature && matchesStatus && matchesSearch && matchesCategory;
  });

  // Group filtered use cases by Hub Category
  const categories = {
    academic: { title: t.hubs.academic, icon: "school", class: "hub-academic", items: [] },
    student: { title: t.hubs.student, icon: "diversity_3", class: "hub-student", items: [] },
    operational: { title: t.hubs.operational, icon: "terminal", class: "hub-operational", items: [] },
    administrative: { title: t.hubs.administrative, icon: "admin_panel_settings", class: "hub-admin-support", items: [] }
  };

  filteredUseCases.forEach(uc => {
    if (categories[uc.category]) {
      categories[uc.category].items.push(uc);
    }
  });

  // Sort each Hub Category's items programmatically:
  // Standalone tools (connectors.length === 0) ALWAYS float to the top.
  // Connector required tools (connectors.length > 0) sorted to the very bottom!
  Object.keys(categories).forEach(key => {
    const hub = categories[key];
    hub.items.sort((a, b) => {
      const aHas = a.connectors && a.connectors.length > 0 ? 1 : 0;
      const bHas = b.connectors && b.connectors.length > 0 ? 1 : 0;
      return aHas - bHas; // (0 - 1) means 'a' goes first (at top), (1 - 0) means 'b' goes first.
    });
  });

  // Render Hub Segments
  let renderedCount = 0;
  Object.keys(categories).forEach(key => {
    const hub = categories[key];
    if (hub.items.length === 0) return; // skip empty hubs

    renderedCount += hub.items.length;

    // Create Hub Container
    const hubSection = document.createElement("div");
    hubSection.className = `hub-section ${hub.class}`;

    const hubHeader = document.createElement("div");
    hubHeader.className = "hub-header";
    hubHeader.innerHTML = `
      <div class="hub-title-wrapper">
        <div class="hub-icon-badge">
          <span class="material-symbols-outlined">${hub.icon}</span>
        </div>
        <h2 class="hub-title">${hub.title}</h2>
      </div>
      <span class="hub-count-tag">${hub.items.length} ${lang === "en" ? "Use Case" + (hub.items.length > 1 ? 's' : '') : (lang === "zh-TW" ? "個案例" : "个案例")}</span>
    `;

    const cardsGrid = document.createElement("div");
    cardsGrid.className = "cards-grid";

    // Create Cards
    hub.items.forEach(uc => {
      const card = document.createElement("div");
      card.className = "card glass-panel";
      card.addEventListener("click", () => openUseCaseModal(uc));

      const hasMissingConnector = checkMissingConnector(uc);

      // Extract translated versions
      const trans = useCasesTranslations[uc.id] ? useCasesTranslations[uc.id][lang] : null;
      const cardTitle = trans ? trans.title : uc.title;
      const cardSummary = trans ? trans.summary : uc.summary;

      // Build Tag Pills HTML
      let tagsHtml = "";
      const badgeHtml = getUsecaseBadgeHtml(uc, lang);
      if (badgeHtml) {
        tagsHtml += badgeHtml;
      }

      if (uc.isVerified) {
        const verifiedLabel = lang === 'en' ? 'Verified' : (lang === 'zh-TW' ? '已驗證' : '已验证');
        tagsHtml += `<span class="tag" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.25); color: #10b981; font-weight: 700; display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; text-transform: uppercase; font-size: 10px; letter-spacing: 0.5px;"><span class="material-symbols-outlined" style="font-size: 13px; font-weight: bold;">verified</span>${verifiedLabel}</span>`;
      }

      uc.features.forEach(f => {
        tagsHtml += `<span class="tag tag-feature">${f}</span>`;
      });
      if (uc.level && uc.level.length > 0) {
        const displayLevels = uc.level.length > 1 ? ["Generic"] : uc.level;
        displayLevels.forEach(lvl => {
          const levelText = t.levels[lvl] || lvl;
          tagsHtml += `<span class="tag tag-level">${levelText}</span>`;
        });
      }

      // Connector localized title
      let connectorLabelHtml = "";
      if (uc.connectors.length > 0) {
        const connectorsListText = uc.connectors.map(c => {
          if (c.toLowerCase().includes("drive")) return lang === "en" ? "Drive Connector" : "Drive 連接器";
          if (c.toLowerCase().includes("email")) return lang === "en" ? "Email Connector" : "Email 連接器";
          if (c.toLowerCase().includes("lms")) return lang === "en" ? "LMS Connector" : "LMS 連接器";
          if (c.toLowerCase().includes("calendar") || c.toLowerCase().includes("google")) return lang === "en" ? "Calendar Connector" : "Calendar 連接器";
          return c;
        }).join(', ');
        
        if (uc.connectorEssential === false) {
          connectorLabelHtml = `
            <span class="card-connector-req" style="color: var(--color-primary); background: rgba(79, 70, 229, 0.05); border: 1px dashed rgba(79, 70, 229, 0.25); padding: 4px 10px; border-radius: 20px; display: inline-flex; align-items: center; gap: 6px; font-size: 11px;">
              <span class="material-symbols-outlined" style="color: var(--color-primary); font-size: 14px;">api</span>
              ${connectorsListText} (${lang === "en" ? "Optional" : (lang === "zh-TW" ? "可擴充" : "可扩充")})
            </span>
          `;
        } else {
          connectorLabelHtml = `
            <span class="card-connector-req">
              <span class="material-symbols-outlined">api</span>
              ${connectorsListText} ${lang === "en" ? "Required" : (lang === "zh-TW" ? "集成連線" : "集成连线")}
            </span>
          `;
        }
      } else {
        connectorLabelHtml = `
          <span class="card-connector-req" style="color: var(--color-success)">
            <span class="material-symbols-outlined">check_circle</span>
            ${lang === "en" ? "Standalone Tool" : (lang === "zh-TW" ? "標準工具" : "标准工具")}
          </span>
        `;
      }

      // Build card content
      let cardInnerHtml = `
        <div class="card-top">
          <div class="card-tags">${tagsHtml}</div>
          <h3 class="card-title">${cardTitle}</h3>
          <p class="card-summary">${cardSummary}</p>
        </div>
        <div class="card-bottom">
          <span class="tag" style="background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.05); color: var(--text-secondary)">${t.roles[uc.role] || uc.role}</span>
          ${connectorLabelHtml}
        </div>
      `;

      card.innerHTML = cardInnerHtml;

      // Handle Lock Overlay if connectors configured but toggled off
      if (hasMissingConnector) {
        const missing = uc.connectors.find(c => {
          if (c.toLowerCase().includes("drive")) return !appState.activeConnectors.onedrive;
          if (c.toLowerCase().includes("email")) return !appState.activeConnectors.outlook;
          if (c.toLowerCase().includes("lms")) return !appState.activeConnectors.lms;
          if (c.toLowerCase().includes("calendar") || c.toLowerCase().includes("google")) return !appState.activeConnectors.google;
          return false;
        });

        // Map to a pretty local name
        let prettyMissing = missing;
        if (missing.toLowerCase().includes("drive")) prettyMissing = lang === "en" ? "Drive Connector" : "Drive 連接器";
        else if (missing.toLowerCase().includes("email")) prettyMissing = lang === "en" ? "Email Connector" : "Email 連接器";
        else if (missing.toLowerCase().includes("lms")) prettyMissing = lang === "en" ? "LMS Connector" : "LMS 連接器";
        else if (missing.toLowerCase().includes("calendar") || missing.toLowerCase().includes("google")) prettyMissing = lang === "en" ? "Calendar Connector" : "Calendar 連接器";

        const lockOverlay = document.createElement("div");
        lockOverlay.className = "card-lock-overlay";
        lockOverlay.innerHTML = `
          <div class="lock-icon-wrapper">
            <span class="material-symbols-outlined">lock</span>
          </div>
          <h4 class="lock-title">${t.integrationRequired}</h4>
          <p class="lock-subtitle">${lang === "en" ? `Requires active ${prettyMissing} to run securely.` : `安全操作需要連接 ${prettyMissing}。`}</p>
          <button class="unlock-action-btn" onclick="event.stopPropagation(); handleQuickUnlock('${missing}')">${t.simulatedConnect}</button>
        `;
        card.appendChild(lockOverlay);
      }

      cardsGrid.appendChild(card);
    });

    hubSection.appendChild(hubHeader);
    hubSection.appendChild(cardsGrid);
    container.appendChild(hubSection);
  });

  // Render empty state if no matching cases found
  if (renderedCount === 0) {
    container.innerHTML = `
      <div class="glass-panel" style="padding: 60px; text-align: center; border-style: dashed;">
        <span class="material-symbols-outlined" style="font-size: 48px; color: var(--text-muted); margin-bottom: 16px;">search_off</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">${t.noUseCasesTitle}</h3>
        <p style="color: var(--text-secondary); max-width: 440px; margin: 0 auto 20px auto; font-size: 14px;">${t.noUseCasesDesc}</p>
        <button class="nav-button nav-button-primary" style="margin: 0 auto;" id="btnResetFilters">${t.btnResetFilters}</button>
      </div>
    `;
    document.getElementById("btnResetFilters").addEventListener("click", () => {
      document.getElementById("searchInput").value = "";
      appState.searchQuery = "";
      renderUseCases();
    });
  }
}

// Quick Unlock Connector Toggle from Card Lock Screen
window.handleQuickUnlock = function(connectorName) {
  let toggleId = "";
  let key = "";
  const nameLower = connectorName.toLowerCase();

  if (nameLower.includes("drive")) {
    toggleId = "toggleOneDrive";
    key = "onedrive";
  } else if (nameLower.includes("email") || nameLower.includes("outlook")) {
    toggleId = "toggleOutlook";
    key = "outlook";
  } else if (nameLower.includes("lms")) {
    toggleId = "toggleLMS";
    key = "lms";
  } else if (nameLower.includes("calendar") || nameLower.includes("google")) {
    toggleId = "toggleGoogle";
    key = "google";
  }

  if (toggleId) {
    document.getElementById(toggleId).checked = true;
    appState.activeConnectors[key] = true;
    document.getElementById(`indicator-${key}`).classList.add("active");
    renderUseCases();
    
    const lang = appState.activeLanguage || "en";
    const tTrans = uiTranslations[lang];
    const localizedSuccess = `${connectorName} ${tTrans.connectorLinkedSuccess}`;
    showToast(localizedSuccess, "success");
  }
};

// Check if a use case has missing connector dependencies
function checkMissingConnector(useCase) {
  if (!useCase.connectors || useCase.connectors.length === 0) return false;
  if (useCase.connectorEssential === false) return false; // non-essential connectors never lock the card

  return useCase.connectors.some(c => {
    const cLower = c.toLowerCase();
    if (cLower.includes("drive")) return !appState.activeConnectors.onedrive;
    if (cLower.includes("email") || cLower.includes("outlook")) return !appState.activeConnectors.outlook;
    if (cLower.includes("lms")) return !appState.activeConnectors.lms;
    if (cLower.includes("calendar") || cLower.includes("google")) return !appState.activeConnectors.google;
    return false;
  });
}

// Modal Detail View Rendering
function openUseCaseModal(useCase) {
  const overlay = document.getElementById("modalOverlay");
  const lang = appState.activeLanguage || "en";
  const t = uiTranslations[lang];

  // Look up translations
  const trans = useCasesTranslations[useCase.id] ? useCasesTranslations[useCase.id][lang] : null;
  const title = trans ? trans.title : useCase.title;
  const summary = trans ? trans.summary : useCase.summary;

  // Set Title
  document.getElementById("modalTitle").textContent = title;

  // Set metadata tags
  let tagsHtml = "";
  if (useCase.isVerified) {
    const verifiedLabel = lang === 'en' ? 'Verified' : (lang === 'zh-TW' ? '已驗證' : '已验证');
    tagsHtml += `<span class="tag" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.25); color: #10b981; font-weight: 700; display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; text-transform: uppercase; font-size: 10px; letter-spacing: 0.5px;"><span class="material-symbols-outlined" style="font-size: 13px; font-weight: bold;">verified</span>${verifiedLabel}</span>`;
  }

  useCase.features.forEach(f => {
    tagsHtml += `<span class="tag tag-feature" style="font-size: 11px;">${f}</span>`;
  });
  if (useCase.level && useCase.level.length > 0) {
    const displayLevels = useCase.level.length > 1 ? ["Generic"] : useCase.level;
    displayLevels.forEach(lvl => {
      const levelText = t.levels[lvl] || lvl;
      tagsHtml += `<span class="tag tag-level" style="font-size: 11px;">${levelText}</span>`;
    });
  }
  document.getElementById("modalTags").innerHTML = tagsHtml;

  // Render Body Sections
  const body = document.getElementById("modalDynamicContent");
  body.innerHTML = ""; // clear old modal contents

  // 1. Overview Section
  const overviewSec = document.createElement("div");
  overviewSec.className = "modal-section";
  overviewSec.innerHTML = `
    <h4 class="section-label">
      <span class="material-symbols-outlined">info</span> ${t.overviewLabel}
    </h4>
    <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6;">${summary}</p>
  `;
  body.appendChild(overviewSec);

  // Check if this usecase has connectors
  const hasConnectors = useCase.connectors && useCase.connectors.length > 0;
  const isEssential = useCase.connectorEssential !== false; // defaults to essential if not specified

  // Initialize advanced mode based on current live connection state
  let isAdvanced = false;
  if (hasConnectors && !isEssential) {
    const actualConnectorMissing = checkMissingConnector(useCase);
    isAdvanced = !actualConnectorMissing; // default to true if already connected
  }

  // 2. Integration / Connector Requirements Container
  const integrationContainer = document.createElement("div");
  body.appendChild(integrationContainer);

  // 3. Dynamic Sections Container (for Steps, Prompt, and Pro Tip)
  const dynamicContainer = document.createElement("div");
  body.appendChild(dynamicContainer);

  function renderDynamicParts() {
    dynamicContainer.innerHTML = "";
    integrationContainer.innerHTML = "";

    // A. Render integration box if hasConnectors
    if (hasConnectors) {
      const hasMissing = checkMissingConnector(useCase);
      const connectorGuide = trans ? trans.connectorGuide : useCase.connectorGuide;
      
      let guideHtml = "";
      if (connectorGuide && (isEssential || isAdvanced)) {
        let stepsLi = "";
        connectorGuide.steps.forEach(s => {
          stepsLi += `<li>${s}</li>`;
        });
        guideHtml = `
          <div class="setup-guide-box" style="margin-top: 16px;">
            <div class="setup-guide-header">
              <span class="material-symbols-outlined">settings_suggest</span>
              ${connectorGuide.name} ${lang === "en" ? "Setup Instructions" : "部署設定指南"}
            </div>
            <ol class="setup-steps">${stepsLi}</ol>
          </div>
        `;
      }

      const firstConnector = useCase.connectors[0];
      const statusText = hasMissing ? t.inactiveAccessRestricted : t.linkedAndActive;

      let innerContentHtml = "";
      if (isEssential || isAdvanced) {
        innerContentHtml = `
          <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 12px; padding: 16px 20px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 10px; height: 10px; border-radius: 50%; background: ${hasMissing ? 'var(--color-danger)' : 'var(--color-success)'}; box-shadow: 0 0 10px ${hasMissing ? 'var(--color-danger)' : 'var(--color-success)'}"></div>
              <span style="font-size: 14px; font-weight: 600; color: var(--text-primary)">
                Connector: ${statusText}
              </span>
            </div>
            ${hasMissing ? `
              <button class="nav-button nav-button-primary" style="height: 32px; font-size: 12px; border-radius: 8px;" onclick="handleQuickUnlock('${firstConnector}'); openUseCaseModal(JSON.parse('${escapeQuotesForOnClick(JSON.stringify(useCase))}'));">${t.linkConnector}</button>
            ` : `
              <span style="font-size: 12px; color: var(--color-success); font-weight: 700; display: flex; align-items: center; gap: 4px;">
                <span class="material-symbols-outlined" style="font-size: 18px;">cloud_done</span> ${t.encryptedFederatedActive}
              </span>
            `}
          </div>
          ${guideHtml}
        `;
      } else {
        innerContentHtml = `
          <div style="display: flex; align-items: flex-start; gap: 12px; background: rgba(255, 255, 255, 0.01); border: 1px dashed var(--border-glass); border-radius: 12px; padding: 16px 20px;">
            <span class="material-symbols-outlined" style="color: var(--text-muted); font-size: 20px;">cloud_off</span>
            <div>
              <div style="font-size: 13px; font-weight: 600; color: var(--text-secondary);">${lang === "en" ? "Standalone Mode (Manual File Uploads)" : (lang === "zh-TW" ? "標準模式（手動上傳檔案）" : "标准模式（手动上传档案）")}</div>
              <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">${lang === "en" ? "Currently showing manual workflow. Use the toggle above to enable real-time connector setup." : (lang === "zh-TW" ? "目前顯示手動作業流程。開啟上方切換器以啟用即時連接器整合部署設定。" : "目前显示手动作业流程。开启上方切换器以启用即时连接器整合部署设定。")}</div>
            </div>
          </div>
        `;
      }

      const integrationSec = document.createElement("div");
      integrationSec.className = "modal-section";
      integrationSec.style.marginBottom = "8px";
      integrationSec.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 12px;">
          <h4 class="section-label" style="margin-bottom: 0;">
            <span class="material-symbols-outlined">api</span> ${t.enterpriseIntegrationLabel}
          </h4>
          ${(!isEssential) ? `
            <div style="display: flex; align-items: center; gap: 10px; background: rgba(79, 70, 229, 0.06); border: 1px dashed rgba(79, 70, 229, 0.2); border-radius: 20px; padding: 4px 12px;">
              <span style="font-size: 12px; font-weight: 700; color: var(--color-primary);">${lang === "en" ? "Extend to Advanced Connector" : (lang === "zh-TW" ? "啟用進階連接器" : "启用进阶连接器")}</span>
              <label class="switch">
                <input type="checkbox" id="modalConnectorToggle" ${isAdvanced ? 'checked' : ''}>
                <span class="slider round"></span>
              </label>
            </div>
          ` : ''}
        </div>
        ${innerContentHtml}
      `;
      integrationContainer.appendChild(integrationSec);

      // Bind listener
      const toggleEl = document.getElementById("modalConnectorToggle");
      if (toggleEl) {
        toggleEl.addEventListener("change", (e) => {
          isAdvanced = e.target.checked;
          renderDynamicParts();
        });
      }
    }

    // B. Get active fields (Steps, Prompt, ProTip)
    let currentSteps, currentPrompt, currentProTip;
    if (hasConnectors && !isEssential && isAdvanced) {
      currentSteps = trans ? (trans.advancedSteps || trans.steps) : (useCase.advancedSteps || useCase.steps);
      currentPrompt = trans ? (trans.advancedPrompt || trans.prompt) : (useCase.advancedPrompt || useCase.prompt);
      currentProTip = trans ? (trans.advancedProTip || trans.proTip) : (useCase.advancedProTip || useCase.proTip);
    } else {
      currentSteps = trans ? trans.steps : useCase.steps;
      currentPrompt = trans ? trans.prompt : useCase.prompt;
      currentProTip = trans ? trans.proTip : useCase.proTip;
    }

    // C. Render Steps List
    if (currentSteps && currentSteps.length > 0) {
      const stepsSec = document.createElement("div");
      stepsSec.className = "modal-section";
      let stepLiHtml = "";
      currentSteps.forEach((step, idx) => {
        stepLiHtml += `
          <li class="step-item">
            <div class="step-num">${idx + 1}</div>
            <div>${step}</div>
          </li>
        `;
      });
      stepsSec.innerHTML = `
        <h4 class="section-label">
          <span class="material-symbols-outlined">route</span> ${t.operationalSteps}
        </h4>
        <ul class="steps-list">${stepLiHtml}</ul>
      `;
      dynamicContainer.appendChild(stepsSec);
    }

    // D. Render Prompt Box with padding from Operational Steps above
    if (currentPrompt) {
      const promptSec = document.createElement("div");
      promptSec.className = "modal-section";
      promptSec.style.marginTop = "28px"; // Spacing from last step of operational steps
      promptSec.innerHTML = `
        <h4 class="section-label">
          <span class="material-symbols-outlined">terminal</span> ${t.promptSandbox}
        </h4>
        <div class="prompt-box" id="modalPromptText">${escapeHtml(currentPrompt)}<button class="copy-prompt-btn" onclick="copyPromptToClipboard()"><span class="material-symbols-outlined" style="font-size: 16px;">content_copy</span> ${t.copyPrompt}</button>
        </div>
      `;
      dynamicContainer.appendChild(promptSec);
    }

    // E. Render Pro Tip Box with padding from Prompt Box above
    if (currentProTip) {
      const proTipSec = document.createElement("div");
      proTipSec.className = "modal-section";
      proTipSec.style.marginTop = "28px"; // Spacing from Prompt Box above
      proTipSec.innerHTML = `
        <div class="pro-tip-box">
          <span class="material-symbols-outlined pro-tip-icon">lightbulb</span>
          <div class="pro-tip-content">
            <div class="pro-tip-title">${t.adoptionProTip}</div>
            <p class="pro-tip-text">${currentProTip}</p>
          </div>
        </div>
      `;
      dynamicContainer.appendChild(proTipSec);
    }
  }

  // Render initial dynamic parts
  renderDynamicParts();

  overlay.classList.add("active");
}

// Utility to escape quotes for dynamic inline onClick triggers
function escapeQuotesForOnClick(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// Utility to escape HTML text for raw display
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Close Detail Modal
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}

// Interactive Copy Button Logic
window.copyPromptToClipboard = function() {
  const container = document.getElementById("modalPromptText");
  const lang = appState.activeLanguage || "en";
  const t = uiTranslations[lang];

  // Extract text excluding the button element's innerText
  const text = container.childNodes[0].nodeValue.trim();
  
  navigator.clipboard.writeText(text).then(() => {
    const successCopiedText = t.promptCopiedSuccess;
    showToast(successCopiedText, "success");
    const copyBtn = container.querySelector(".copy-prompt-btn");
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = `<span class="material-symbols-outlined" style="font-size: 16px; color: var(--color-success)">check_circle</span> ${t.copied}`;
    setTimeout(() => {
      copyBtn.innerHTML = originalText;
    }, 2000);
  });
};

// Premium Toast Notification Manager
function showToast(message, type = "success") {
  const toast = document.getElementById("toastNotification");
  const toastMsg = document.getElementById("toastMsg");
  const toastIcon = document.getElementById("toastIcon");

  toastMsg.textContent = message;
  if (type === "success") {
    toastIcon.textContent = "check_circle";
    toast.style.background = "rgba(16, 185, 129, 0.95)";
  } else {
    toastIcon.textContent = "warning";
    toast.style.background = "rgba(245, 158, 11, 0.95)";
  }

  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 3500);
}

// Enhance the useCases database with non-essential connector fallbacks and translations
function enhanceUseCasesDatabase() {
  // Mark all connector-dependent use cases as non-essential except when specified
  useCasesDb.forEach(uc => {
    if (uc.connectors && uc.connectors.length > 0) {
      uc.connectorEssential = false;
    }
  });

  // Overrides for su_advocacy
  const su_advocacy = useCasesDb.find(uc => uc.id === "su_advocacy");
  if (su_advocacy) {
    su_advocacy.steps = [
      "Consolidate unstructured student feedback text files, town hall audio recordings, and survey responses locally.",
      "Upload these files directly to a secure NotebookLM workspace manually.",
      "Query NotebookLM to extract the top 5 pressing student concerns (e.g., dining hours, library quiet spaces) and compute overall sentiment.",
      "Use Gemini in Google Docs to write a structured, data-driven advocacy proposal to submit to the school administration."
    ];
    su_advocacy.advancedSteps = [
      "Consolidate unstructured student feedback text files, town hall audio recordings, and survey responses in a shared Drive folder.",
      "Ground a NotebookLM workspace directly on this folder using the secure Drive Connector.",
      "Query NotebookLM to extract the top 5 pressing student concerns (e.g., dining hours, library quiet spaces) and compute overall sentiment.",
      "Use Gemini in Google Docs to write a structured, data-driven advocacy proposal to submit to the school administration."
    ];
    su_advocacy.proTip = "Uploading student feedback files directly to NotebookLM is secure and maintains total data privacy without any public model training.";
    su_advocacy.advancedProTip = "Linking your student feedback database directly via the Drive Connector keeps the data federated, secure, and up-to-the-minute without copying local files.";
  }

  // Translations for su_advocacy
  if (useCasesTranslations.su_advocacy) {
    useCasesTranslations.su_advocacy.en.steps = su_advocacy.steps;
    useCasesTranslations.su_advocacy.en.advancedSteps = su_advocacy.advancedSteps;
    useCasesTranslations.su_advocacy.en.proTip = su_advocacy.proTip;
    useCasesTranslations.su_advocacy.en.advancedProTip = su_advocacy.advancedProTip;

    useCasesTranslations.su_advocacy["zh-TW"].steps = [
      "在本地整理非結構化學生回饋文字檔、公聽會錄音檔與問卷回覆。",
      "手動將這些檔案直接上傳到安全的 NotebookLM 工作空間。",
      "引導 NotebookLM 提取前 5 大最受關注的學生訴求（如餐廳營業時間、圖書館自修室），並分析整體情緒指標。",
      "在 Google Docs 中使用 Gemini 撰寫結構化、數據導向的權益倡議提案，並提交給學校行政部門。"
    ];
    useCasesTranslations.su_advocacy["zh-TW"].advancedSteps = [
      "在共享的雲端硬碟資料夾中整理非結構化學生回饋文字檔、公聽會錄音與問卷。",
      "使用安全的 Drive Connector，將 NotebookLM 工作空間直接連結至該資料夾。",
      "引導 NotebookLM 提取前 5 大最受關注的學生訴求（如餐廳營業時間、圖書館自修室），並分析整體情緒指標。",
      "在 Google Docs 中使用 Gemini 撰寫結構化、數據導向的權益倡議提案，並提交給學校行政部門。"
    ];
    useCasesTranslations.su_advocacy["zh-TW"].proTip = "手動上傳學生回饋檔案到 NotebookLM 是極安全的，能在不使用公開模型訓練的前提下保障數據隱私。";
    useCasesTranslations.su_advocacy["zh-TW"].advancedProTip = "透過 Drive Connector 直接連結學生意見資料庫，能在不複製本地檔案的前提下，保持數據的同盟性、安全性與即時性。";

    useCasesTranslations.su_advocacy["zh-CN"].steps = [
      "在本地整理非结构化学生反馈文本档、公听会录音档与问卷回复。",
      "手动将这些文件直接上传到安全的 NotebookLM 工作空间。",
      "引导 NotebookLM 提取前 5 大最受关注的学生诉求（如餐厅营业时间、图书馆自修室），并分析整体情绪指标。",
      "在 Google Docs 中使用 Gemini 撰写结构化、数据导向的权益倡议提案，并提交给学校行政部门。"
    ];
    useCasesTranslations.su_advocacy["zh-CN"].advancedSteps = [
      "在共享的云端硬盘文件夹中整理非结构化学生反馈文本档、公听会录音与问卷。",
      "使用安全的 Drive Connector，将 NotebookLM 工作空间直接链接至该文件夹。",
      "引导 NotebookLM 提取前 5 大最受关注的学生诉求（如餐厅营业时间、图书馆自修室），并分析整体情绪指标。",
      "在 Google Docs 中使用 Gemini 撰写结构化、数据导向的权益倡议提案，并提交给学校行政部门。"
    ];
    useCasesTranslations.su_advocacy["zh-CN"].proTip = "手动上传学生反馈文件到 NotebookLM 是极安全的，能在不使用公开模型训练的前提下保障数据隐私。";
    useCasesTranslations.su_advocacy["zh-CN"].advancedProTip = "通过 Drive Connector 直接链接学生意见数据库，能在不复制本地文件的前提下，保持数据的同盟性、安全性与即时性。";
  }

  // Overrides for club_funding
  const club_funding = useCasesDb.find(uc => uc.id === "club_funding");
  if (club_funding) {
    club_funding.steps = [
      "Open NotebookLM and upload your club's past event templates and the official Student Union funding guidelines.",
      "In Canvas Mode, prompt Gemini to brainstorm a calendar of 12 highly engaging club activities aligned with your club's core mission.",
      "Paste or upload your past expense spreadsheet records directly into the prompt to generate a formatted budget table.",
      "Ask Gemini to write a formal budget justification narrative, detailing how each event benefits the wider campus student community."
    ];
    club_funding.advancedSteps = [
      "Open NotebookLM and upload your club's past event templates and the official Student Union funding guidelines.",
      "In Canvas Mode, prompt Gemini to brainstorm a calendar of 12 highly engaging club activities aligned with your club's core mission.",
      "Feed the calendar and past expense records from your shared Drive spreadsheet using the Drive Connector to generate a formatted budget table.",
      "Ask Gemini to write a formal budget justification narrative, detailing how each event benefits the wider campus student community."
    ];
    club_funding.proTip = "Upload the Student Union's official constitutional funding guidelines to NotebookLM first. This prevents your proposal from getting rejected for violating obscure spend-limit policies.";
    club_funding.advancedProTip = "Grounding your shared Drive spreadsheet with the Drive Connector ensures that Gemini always computes budgets against the most up-to-date club account balances.";
  }

  if (useCasesTranslations.club_funding) {
    useCasesTranslations.club_funding.en.steps = club_funding.steps;
    useCasesTranslations.club_funding.en.advancedSteps = club_funding.advancedSteps;
    useCasesTranslations.club_funding.en.proTip = club_funding.proTip;
    useCasesTranslations.club_funding.en.advancedProTip = club_funding.advancedProTip;

    useCasesTranslations.club_funding["zh-TW"].steps = [
      "開啟 NotebookLM 並上傳您社團過往的活動範本與學生會官方補助指南。",
      "在 Canvas Mode 中，引導 Gemini 腦力激盪出 12 個與社團核心宗旨高度契合的精彩活動行事曆。",
      "手動將共享雲端硬碟試算表中的歷史支出紀錄貼入提示詞中，以生成格式化預算表。",
      "引導 Gemini 撰寫正式的預算合理性陳述，詳細說明每項活動將如何使廣大校園社群受益。"
    ];
    useCasesTranslations.club_funding["zh-TW"].advancedSteps = [
      "開啟 NotebookLM 並上傳您社團過往的活動範本與學生會官方補助指南。",
      "在 Canvas Mode 中，引導 Gemini 腦力激盪出 12 個與社團核心宗旨高度契合的精彩活動行事曆。",
      "透過 Drive Connector 讀取共享雲端硬碟試算表中的歷史支出紀錄，以生成格式化預算表。",
      "引導 Gemini 撰寫正式的預算合理性陳述，詳細說明每項活動將如何使廣大校園社群受益。"
    ];
    useCasesTranslations.club_funding["zh-TW"].proTip = "先將學生會的官方章程補助指南上傳至 NotebookLM。這能有效防止您的申請案因違反某些冷門的支出限額規定而被退件。";
    useCasesTranslations.club_funding["zh-TW"].advancedProTip = "透過 Drive Connector 連結您的共享試算表，能確保 Gemini 始終對齊最新的社團帳戶餘額進行預算試算。";

    useCasesTranslations.club_funding["zh-CN"].steps = [
      "开启 NotebookLM 并上传您社团过往的活动模板与学生会官方补助指南。",
      "在 Canvas Mode 中，引导 Gemini 脑力激荡出 12 个与社团核心宗旨高度契合的精彩活动日历。",
      "手动将共享云端硬盘电子表格中的历史支出记录贴入提示词中，以生成格式化预算表。",
      "引导 Gemini 撰写正式的预算合理性陈述，详细说明每项活动将如何使广大校园社群受益。"
    ];
    useCasesTranslations.club_funding["zh-CN"].advancedSteps = [
      "开启 NotebookLM 并上传您社团过往的活动模板与学生会官方补助指南。",
      "在 Canvas Mode 中，引导 Gemini 脑力荡出 12 个与社团核心宗旨高度契合的精彩活动日历。",
      "通过 Drive Connector 读取共享云端硬盘电子表格中的历史支出记录，以生成格式化预算表。",
      "引导 Gemini 撰写正式的预算合理性陈述，详细说明每项活动将如何使广大校园社群受益。"
    ];
    useCasesTranslations.club_funding["zh-CN"].proTip = "先将学生会的官方章程补助指南上传至 NotebookLM。这能有效防止您的申请案因违反某些冷门的支出限额规定而被退件。";
    useCasesTranslations.club_funding["zh-CN"].advancedProTip = "通过 Drive Connector 链接您的共享电子表格，能确保 Gemini 始终对齐最新的社团账户余额进行预算试算。";
  }

  // Overrides for su_helpdesk
  const su_helpdesk = useCasesDb.find(uc => uc.id === "su_helpdesk");
  if (su_helpdesk) {
    su_helpdesk.steps = [
      "In NotebookLM, compile all Student Union club policies, room booking rules, and equipment reservation forms.",
      "Use Gemini Agent Designer to build a conversational agent named 'Student Union Support Assistant'.",
      "Connect the agent to the policy knowledge base and configure it to draft escalation templates for complex bookings.",
      "Test the agent's ability to handle complex queries (e.g. 'Can we book a room after 9 PM?').",
      "Embed the agent on the Student Union portal or social media page for 24/7 club leader support."
    ];
    su_helpdesk.advancedSteps = [
      "In NotebookLM, compile all Student Union club policies, room booking rules, and equipment reservation forms.",
      "Use Gemini Agent Designer to build a conversational agent named 'Student Union Support Assistant'.",
      "Connect the agent to the policy knowledge base and configure custom escalate-by-email instructions via the Email Connector.",
      "Test the agent's ability to handle complex queries (e.g. 'Can we book a room after 9 PM?').",
      "Embed the agent on the Student Union portal or social media page for 24/7 club leader support."
    ];
    su_helpdesk.proTip = "By utilizing the Agent Designer, you can define clear guidelines for the assistant to draft formal, ready-to-copy escalation emails inside the chat UI.";
    su_helpdesk.advancedProTip = "By configuring the Email Connector, the agent can automatically draft escalation emails directly in the user's draft folder when manual intervention is needed.";
  }

  if (useCasesTranslations.su_helpdesk) {
    useCasesTranslations.su_helpdesk.en.steps = su_helpdesk.steps;
    useCasesTranslations.su_helpdesk.en.advancedSteps = su_helpdesk.advancedSteps;
    useCasesTranslations.su_helpdesk.en.proTip = su_helpdesk.proTip;
    useCasesTranslations.su_helpdesk.en.advancedProTip = su_helpdesk.advancedProTip;

    useCasesTranslations.su_helpdesk["zh-TW"].steps = [
      "在 NotebookLM 中，匯整所有學生會社團政策、場地借用規範與設備預約表單。",
      "利用 Gemini Agent Designer 建立名為「學生會支援助理」的對話式服務 Agent。",
      "將 Agent 連結規章知識庫，並設定為在遇到複雜預約時，自動在對話視窗中擬好升級審查信範本。",
      "測試 Agent 處理複雜查詢的能力（例如：「我們可以在晚上 9 點後借用場地嗎？」）。",
      "將 Agent 嵌入至學生會入口網站或社群網頁，提供 24/7 的社團幹部諮詢服務。"
    ];
    useCasesTranslations.su_helpdesk["zh-TW"].advancedSteps = [
      "在 NotebookLM 中，匯整所有學生會社團政策、場地借用規範與設備預約表單。",
      "利用 Gemini Agent Designer 建立名為「學生會支援助理」的對話式服務 Agent。",
      "將此 Agent 連結規章知識庫，並透過 Email Connector（郵件連接器）設定「自動生成郵件草稿」的諮詢升級機制。",
      "測試 Agent 處理複雜查詢的能力（例如：「我們可以在晚上 9 點後借用場地嗎？」）。",
      "將 Agent 嵌入至學生會入口網站或社群網頁，提供 24/7 的社團幹部諮詢服務。"
    ];
    useCasesTranslations.su_helpdesk["zh-TW"].proTip = "使用 Agent Designer，您可以為助理定義明確的指引，以便直接在對話中擬定好結構完整的諮詢升級郵件供您複製。";
    useCasesTranslations.su_helpdesk["zh-TW"].advancedProTip = "配置 Email Connector 後，Agent 可在需要人工審批時，直接在用戶的草稿信箱中擬好一封結構完整的升級審查信，大幅減少行政耗時。";

    useCasesTranslations.su_helpdesk["zh-CN"].steps = [
      "在 NotebookLM 中，汇整所有学生会社团政策、场地借用规范与设备预约表单。",
      "利用 Gemini Agent Designer 建立名为“学生会支援助理”的对话式服务 Agent。",
      "将 Agent 链接规章知识库，并设置为在遇到复杂预约时，自动在对话窗口中拟好升级审查信模板。",
      "测试 Agent 处理复杂查询的能力（例如：“我们可以在晚上 9 点后借用场地吗？”）。",
      "将 Agent 嵌入至学生会入口网站或社群网页，提供 24/7 的社团个人咨询服务。"
    ];
    useCasesTranslations.su_helpdesk["zh-CN"].advancedSteps = [
      "在 NotebookLM 中，汇整所有学生会社团政策、场地借用规范与设备预约表单。",
      "利用 Gemini Agent Designer 建立名为“学生会支援助理”的对话式服务 Agent。",
      "将此 Agent 链接规章知识库，并通过 Email Connector（邮件连接器）设置“自动生成邮件草稿”的咨询升级机制。",
      "测试 Agent 处理复杂查询的能力（例如：“我们可以在晚上 9 点后借用场地吗？”）。",
      "将 Agent 嵌入至学生会入口网站或社群网页，提供 24/7 的社团个人咨询服务。"
    ];
    useCasesTranslations.su_helpdesk["zh-CN"].proTip = "使用 Agent Designer，您可以为助理定义明确的指引，以便直接在对话中拟定好结构完整的咨询升级邮件供您复制。";
    useCasesTranslations.su_helpdesk["zh-CN"].advancedProTip = "配置 Email Connector 后，Agent 可在需要人工审批时，直接在用户的草稿信箱中拟好一封结构完整的升级审查信，大幅减少行政耗时。";
  }

  // Overrides for at_risk_cohort
  const at_risk_cohort = useCasesDb.find(uc => uc.id === "at_risk_cohort");
  if (at_risk_cohort) {
    at_risk_cohort.steps = [
      "Export an anonymized CSV dataset containing student login logs, quiz scores, and forum engagement metrics from your LMS.",
      "Upload this CSV dataset directly into a secure Gemini Advanced prompt.",
      "Instruct Gemini to run multi-dimensional predictive modeling, highlighting student cohorts exhibiting a precipitous drop in engagement.",
      "Generate draft check-in emails suggesting tutoring resources to send to flagged cohorts."
    ];
    at_risk_cohort.advancedSteps = [
      "Configure secure API connections from Gemini to your school's LMS and SIS database using the connectors.",
      "Set up an analytical data store containing anonymized student logs, login frequencies, quiz scores, and forum engagement metrics.",
      "Configure a secure workflow that maps data attributes, ensuring strict compliance with student data privacy laws like FERPA.",
      "Use Gemini to run multi-dimensional predictive modeling, highlighting student cohorts exhibiting a precipitous drop in engagement.",
      "Trigger automated, personalized advisor check-in drafts to provide timely academic support."
    ];
    at_risk_cohort.proTip = "Exporting de-identified datasets manually is a quick, high-security way to run predictive diagnostics without complex system configurations.";
    at_risk_cohort.advancedProTip = "Setting up automated LMS/SIS database connectors allows for nightly automated risk sweeps, feeding real-time engagement alerts directly to counselor dashboards.";
  }

  if (useCasesTranslations.at_risk_cohort) {
    useCasesTranslations.at_risk_cohort.en.steps = at_risk_cohort.steps;
    useCasesTranslations.at_risk_cohort.en.advancedSteps = at_risk_cohort.advancedSteps;
    useCasesTranslations.at_risk_cohort.en.proTip = at_risk_cohort.proTip;
    useCasesTranslations.at_risk_cohort.en.advancedProTip = at_risk_cohort.advancedProTip;

    useCasesTranslations.at_risk_cohort["zh-TW"].steps = [
      "從您的學習管理系統 (LMS) 匯出包含學生登入紀錄、小考成績和論壇互動指標的去識別化 CSV 數據集。",
      "將此 CSV 數據集直接上傳至安全的 Gemini Advanced 提示對話中。",
      "引導 Gemini 進行多維度預測建模，標記出參與度急劇下降的高風險學生群組。",
      "生成關懷確認信草稿，推薦輔導資源給受標記的學生群組。"
    ];
    useCasesTranslations.at_risk_cohort["zh-TW"].advancedSteps = [
      "透過連接器在 Gemini 與學校的 LMS 及學籍系統 (SIS) 資料庫之間，設定安全、加密的 API 介接。",
      "建立一個包含匿名化學生歷程紀錄、登入頻率、測驗分數與論壇參與指標的分析資料庫。",
      "設定安全的資料屬性對照，確保資料傳輸全程符合 FERPA 等嚴格的學生隱私權保護規範。",
      "引導 Gemini 進行多維度預測建模，標記出參與度急劇下降的高風險學生群組。",
      "自動觸發輔導教師的關懷信件草稿，在關鍵時刻提供即時的學術輔導與關懷。"
    ];
    useCasesTranslations.at_risk_cohort["zh-TW"].proTip = "手動匯出去識別化數據集是一種快速且具高安全性的分析方式，免去複雜的系統介接設定。";
    useCasesTranslations.at_risk_cohort["zh-TW"].advancedProTip = "設定自動化的 LMS/SIS 資料庫連接器，可進行每晚的自動風險掃描，將即時警報直接傳送至輔導人員的工作儀表板。";

    useCasesTranslations.at_risk_cohort["zh-CN"].steps = [
      "从您的学习管理系统 (LMS) 导出包含学生登录记录、小考成绩和论坛互动指标的去识别化 CSV 数据集。",
      "将此 CSV 数据集直接上传至安全的 Gemini Advanced 提示对话中。",
      "引导 Gemini 进行多维度预测建模，标记出参与度急剧下降的高风险学生群组。",
      "生成关怀确认信草稿，推荐辅导资源给受标记的学生群组。"
    ];
    useCasesTranslations.at_risk_cohort["zh-CN"].advancedSteps = [
      "通过连接器在 Gemini 与学校的 LMS 及学籍系统 (SIS) 数据库之间，设定安全、加密的 API 介接。",
      "建立一个包含匿名化学生历程记录、登录频率、测验分数与论坛参与指标的分析数据库。",
      "设定安全的数据属性对照，确保数据传输全程符合 FERPA 等严格的学生隐私权保护规范。",
      "引导 Gemini 进行多维度预测建模，标记出参与度急剧下降的高风险学生群组。",
      "自动触发辅导教师的关怀信件草稿，在关键时刻提供即时的学术辅导与关怀。"
    ];
    useCasesTranslations.at_risk_cohort["zh-CN"].proTip = "手动导出去识别化数据集是一种快速且具高安全性的分析方式，免去复杂的系统介接设定。";
    useCasesTranslations.at_risk_cohort["zh-CN"].advancedProTip = "设定自动化的 LMS/SIS 数据库连接器，可进行每晚的自动风险扫描，将实时警报直接传送至辅导人员的工作仪表板。";
  }

  // Overrides for accreditation_reports
  const accreditation_reports = useCasesDb.find(uc => uc.id === "accreditation_reports");
  if (accreditation_reports) {
    accreditation_reports.steps = [
      "Gather 3 years of school syllabi, assurance of learning rubrics, student exit surveys, and advisory board minutes.",
      "Upload these document archives directly into NotebookLM to establish a local, encrypted research workspace.",
      "Prompt NotebookLM to cross-reference your curriculum data against specific accreditation standards.",
      "Generate structured, professional accreditation narrative drafts, complete with inline source evidence and citations.",
      "Review the drafts and collaborate with deans using shared Google Docs to finalize the institutional report."
    ];
    accreditation_reports.advancedSteps = [
      "Upload 3 years of school syllabi, assurance of learning rubrics, student exit surveys, and advisory board minutes to SharePoint.",
      "Establish a federated search connection from Gemini to the Drive folder using the Drive Connector.",
      "In NotebookLM, prompt the model to cross-reference your curriculum data against specific accreditation standards.",
      "Generate structured, professional accreditation narrative drafts, complete with inline source evidence and citations.",
      "Review the drafts and collaborate with deans using shared Google Docs to finalize the institutional report."
    ];
    accreditation_reports.proTip = "NotebookLM acts as an elite research assistant, allowing you to easily paste or upload files up to 500,000 words each for secure local analysis.";
    accreditation_reports.advancedProTip = "By selecting 'Federated Search' for the Drive Connector, your data remains safely stored within your institutional tenant, ensuring absolute data security and sovereignty.";
  }

  if (useCasesTranslations.accreditation_reports) {
    useCasesTranslations.accreditation_reports.en.steps = accreditation_reports.steps;
    useCasesTranslations.accreditation_reports.en.advancedSteps = accreditation_reports.advancedSteps;
    useCasesTranslations.accreditation_reports.en.proTip = accreditation_reports.proTip;
    useCasesTranslations.accreditation_reports.en.advancedProTip = accreditation_reports.advancedProTip;

    useCasesTranslations.accreditation_reports["zh-TW"].steps = [
      "蒐集近 3 年的學校教學大綱、學習保證規準、畢業生流向調查與諮詢委員會會議紀錄。",
      "直接將這些文檔封存檔上傳至 NotebookLM，建立一個本地、加密的自評研究工作空間。",
      "引導 NotebookLM 將您的課程數據與特定的學術認證標準進行多維交叉比對。",
      "自動撰寫結構嚴謹、符合專業規範的自評報告草稿，並自動帶入文檔來源佐證與引用標記。",
      "審閱報告草稿，並透過共享 Google Docs 與各院院長協同修改並最終定稿。"
    ];
    useCasesTranslations.accreditation_reports["zh-TW"].advancedSteps = [
      "將近 3 年的學校教學大綱、學習保證規準、畢業生流向調查與諮詢委員會會議紀錄上傳至雲端系統中。",
      "透過安全的 Drive Connector 建立與 Gemini 的同盟搜尋連線。",
      "在 NotebookLM 中，引導模型將您的課程數據與特定的學術認證標準進行多維交叉比對。",
      "自動撰寫結構嚴謹、符合專業規範的自評報告草稿，並自動帶入文檔來源佐證與引用標記。",
      "審閱報告草稿，並透過共享 Google Docs 與各院院長協同修改並最終定稿。"
    ];
    useCasesTranslations.accreditation_reports["zh-TW"].proTip = "NotebookLM 宛如頂尖研究助理，單一文檔可支援高達 50 萬字，讓手動上傳與分析安全無虞。";
    useCasesTranslations.accreditation_reports["zh-TW"].advancedProTip = "選擇 Drive Connector 的「同盟搜尋 (Federated Search)」，數據將安全地保留在原組織的雲端租戶中，確保絕對的數據主權與資安保障。";

    useCasesTranslations.accreditation_reports["zh-CN"].steps = [
      "搜集近 3 年的学校教学大纲、学习保证规准、毕业生流向调查与咨询委员会会议记录。",
      "直接将这些文档封存档上传至 NotebookLM，建立一个本地、加密的自评研究空间。",
      "引导 NotebookLM 将您的课程数据与特定的学术认证标准进行多维交叉比对。",
      "自动撰写结构严谨、符合专业规范的自评报告草稿，并自动带入文档来源佐证与引用标记。",
      "审阅报告草稿，并通过共享 Google Docs 与各院院长协同修改并最终定稿。"
    ];
    useCasesTranslations.accreditation_reports["zh-CN"].advancedSteps = [
      "将近 3 年的学校教学大纲、学习保证规准、毕业生流向调查与咨询委员会会议记录上传至云端系统中。",
      "通过安全的 Drive Connector 建立与 Gemini 的同盟搜寻连线。",
      "在 NotebookLM 中，引导模型将您的课程数据与特定的学术认证标准进行多维交叉比对。",
      "自动撰写结构严谨、符合专业规范的自评报告草稿，并自动带入文档来源佐证与引用标记。",
      "审阅报告草稿，并通过共享 Google Docs 与各院院长协同修改并最终定稿。"
    ];
    useCasesTranslations.accreditation_reports["zh-CN"].proTip = "NotebookLM 宛如顶尖研究助理，单一文档可支持高达 50 万字，让手动上传与分析安全无虞。";
    useCasesTranslations.accreditation_reports["zh-CN"].advancedProTip = "选择 Drive Connector 的“同盟搜寻 (Federated Search)”，数据将安全地保留在原组织的云端租户中，确保绝对的数据主权与资安保障。";
  }

  // Overrides for finance_compliance
  const finance_compliance = useCasesDb.find(uc => uc.id === "finance_compliance");
  if (finance_compliance) {
    finance_compliance.steps = [
      "Upload school purchasing guidelines, vendor policies, and standard accounting codes directly to NotebookLM.",
      "Upload the student club's submitted annual expense spreadsheet and digital PDF receipts to the same workspace.",
      "Prompt NotebookLM to cross-reference each expense item with the approved guidelines to verify compliance.",
      "Generate an automated compliance audit report, highlighting non-compliant spending and budget overruns."
    ];
    finance_compliance.advancedSteps = [
      "Upload all school purchasing guidelines, vendor policies, and standard accounting codes to a secure cloud folder.",
      "Use the Drive Connector to ground your NotebookLM workspace in this policy archive.",
      "Upload a student club's submitted annual expense spreadsheet and digital PDF receipts.",
      "Prompt NotebookLM to cross-reference each expense item with the approved guidelines to verify compliance.",
      "Generate an automated compliance audit report, highlighting non-compliant spending and budget overruns."
    ];
    finance_compliance.proTip = "By compiling the procurement guidelines and receipts manually in NotebookLM, you retain complete over-the-shoulder human review of all financial evaluations.";
    finance_compliance.advancedProTip = "By linking your secure cloud folders using the Drive Connector, you can automatically run audit checks as soon as clubs drop new receipts into their shared directories.";
  }

  if (useCasesTranslations.finance_compliance) {
    useCasesTranslations.finance_compliance.en.steps = finance_compliance.steps;
    useCasesTranslations.finance_compliance.en.advancedSteps = finance_compliance.advancedSteps;
    useCasesTranslations.finance_compliance.en.proTip = finance_compliance.proTip;
    useCasesTranslations.finance_compliance.en.advancedProTip = finance_compliance.advancedProTip;

    useCasesTranslations.finance_compliance["zh-TW"].steps = [
      "將學校採購與請款指南、廠商合約政策與標準會計科目直接上傳至 NotebookLM。",
      "將社團提交的年度支出明細試算表與數位 PDF 收據手動上傳至同一個工作空間。",
      "引導 NotebookLM 將每筆支出項目與核准的請款指南逐一比對以驗證合規性。",
      "生成自動化合規審計報告，具體標示非合規性消費支出與超出預算的項目。"
    ];
    useCasesTranslations.finance_compliance["zh-TW"].advancedSteps = [
      "將所有學校採購與請款指南、廠商合約政策與標準會計科目上傳至雲端硬碟的安全資料夾中。",
      "使用 Drive Connector，將您的 NotebookLM 工作空間直接連結至該政策資料庫。",
      "上傳社團提交的年度支出明細試算表與數位 PDF 收據檔。",
      "引導 NotebookLM 將每筆支出項目與核准的請款指南逐一比對以驗證合規性。",
      "生成自動化合規審計報告，具體標示非合規性消費支出與超出預算的項目。"
    ];
    useCasesTranslations.finance_compliance["zh-TW"].proTip = "手動在 NotebookLM 中比對採購指南與收據，可以讓您保持對所有財務審查的即時主導，保留高水準的人工覆核機制。";
    useCasesTranslations.finance_compliance["zh-TW"].advancedProTip = "透過 Drive Connector 連結您的安全雲端資料夾，一旦社團將新收據放入共享目錄，您即可自動執行即時審計對照。";

    useCasesTranslations.finance_compliance["zh-CN"].steps = [
      "将学校采购与请款指南、厂商合约政策与标准会计科目直接上传至 NotebookLM。",
      "将社团提交的年度支出明细电子表格与数字 PDF 收据手动上传至同一个工作空间。",
      "引导 NotebookLM 将每笔支出项目与核准的请款指南逐一比对以验证合规性。",
      "生成自动化合规审计报告，具体标示非合规性消费支出与超出预算的项目。"
    ];
    useCasesTranslations.finance_compliance["zh-CN"].advancedSteps = [
      "将所有学校采购与请款指南、厂商合约政策与标准会计科目上传至云端硬盘的安全文件夹中。",
      "使用 Drive Connector，将您的 NotebookLM 工作空间直接链接至该政策数据库。",
      "上传社团提交的年度支出明细电子表格与数字 PDF 收据档。",
      "引导 NotebookLM 将每笔支出项目与核准的请款指南逐一比对以验证合规性。",
      "生成自动化合规审计报告，具体标示非合规性消费支出与超出预算的项目。"
    ];
    useCasesTranslations.finance_compliance["zh-CN"].proTip = "手动在 NotebookLM 中比对采购指南与收据，可以让您保持对所有财务审查的即时主导，保留高水平的人工覆核机制。";
    useCasesTranslations.finance_compliance["zh-CN"].advancedProTip = "通过 Drive Connector 链接您的安全云端文件夹，一旦社团将新收据放入共享目录，您即可自动执行即时审计对照。";
  }

  // Overrides for security_simulator
  const security_simulator = useCasesDb.find(uc => uc.id === "security_simulator");
  if (security_simulator) {
    security_simulator.steps = [
      "Upload your campus safety handbook, building layout PDFs, and emergency protocols directly into Agent Designer.",
      "Configure the custom Agent to role-play as an Emergency Dispatcher during a simulated crisis scenario (e.g., power outage, severe storm).",
      "Generate high-fidelity instructional video clips and animated scenario prompts using Video Generation features.",
      "Have security staff interact with the simulator, typing real-time responses to evolving scenario prompts.",
      "Generate a post-simulation feedback report, assessing the staff's compliance with safety handbooks."
    ];
    security_simulator.advancedSteps = [
      "Ground a custom Security Drill Agent in your campus safety handbook, building layouts, and emergency protocols via the secure Drive Connector.",
      "Configure the Agent to role-play as an Emergency Dispatcher during a simulated crisis scenario (e.g., power outage, severe storm).",
      "Generate high-fidelity instructional video clips and animated scenario prompts using Video Generation features.",
      "Have security staff interact with the simulator, typing real-time responses to evolving scenario prompts.",
      "Generate a post-simulation feedback report, assessing the staff's compliance with safety handbooks."
    ];
    security_simulator.proTip = "By uploading safety documents manually, you can easily sandbox separate crisis simulations for different campus sites without cross-contaminating response guidelines.";
    security_simulator.advancedProTip = "Connecting directly to your security team's shared Drive ensures that safety drills always use the absolute latest building escape routes and marshal duty schedules.";
  }

  if (useCasesTranslations.security_simulator) {
    useCasesTranslations.security_simulator.en.steps = security_simulator.steps;
    useCasesTranslations.security_simulator.en.advancedSteps = security_simulator.advancedSteps;
    useCasesTranslations.security_simulator.en.proTip = security_simulator.proTip;
    useCasesTranslations.security_simulator.en.advancedProTip = security_simulator.advancedProTip;

    useCasesTranslations.security_simulator["zh-TW"].steps = [
      "手動將您的校園安全手冊、大樓空間平面 PDF 檔與緊急應變協議上傳至 Agent Designer。",
      "設定客製化的安全演練 Agent，使其在模擬危機情境（如停電、強烈颱風）中扮演「緊急派遣調度員」。",
      "使用 Video Generation（影片生成）技術，自動生成高畫質的指示性影片與生動的情境動態提示。",
      "指派維安或駐衛警人員與模擬器互動，輸入實時的緊急應變策略以應對不斷變化的危機事件。",
      "生成演練後的成效評估報告，評估演練人員對安全防護手冊規範的執行合規度。"
    ];
    useCasesTranslations.security_simulator["zh-TW"].advancedSteps = [
      "透過安全的 Drive Connector，將客製化安全演練 Agent 植基於您的校園安全手冊、大樓空間平面圖與緊急應變協議文檔。",
      "設定客製化的安全演練 Agent，使其在模擬危機情境（如停電、強烈颱風）中扮演「緊急派遣調度員」。",
      "使用 Video Generation（影片生成）技術，自動生成高畫質的指示性影片與生動的情境動態提示。",
      "指派維安或駐衛警人員與模擬器互動，輸入實時的緊急應變策略以應對不斷變化的危機事件。",
      "生成演練後的成效評估報告，評估演練人員對安全防護手冊規範的執行合規度。"
    ];
    useCasesTranslations.security_simulator["zh-TW"].proTip = "手動上傳校園維安文件，能讓您輕鬆針對不同的校區或場地建立獨立沙盒模擬，避免不同應變標準相互混淆。";
    useCasesTranslations.security_simulator["zh-TW"].advancedProTip = "直接連接至安全團隊的共享雲端硬碟，能確保您的危機演練始終基於最新的逃生路線與現場指揮人員值班表進行。";

    useCasesTranslations.security_simulator["zh-CN"].steps = [
      "手动将您的校园安全手册、大楼空间平面 PDF 档与紧急应变协议上传至 Agent Designer。",
      "设定定制的安全演练 Agent，使其在模拟危机情境（如停电、强烈台风）中扮演“紧急派遣调度员”。",
      "使用 Video Generation（影片生成）技术，自动生成高画质的指示性影片与生动的情境动态提示。",
      "指派维安或驻卫警人员与模拟器互动，输入实时的紧急应变策略以应对不断变化的危机事件。",
      "生成演练后的成效评估报告，评估演练人员对安全防护手册规范的执行合规度。"
    ];
    useCasesTranslations.security_simulator["zh-CN"].advancedSteps = [
      "通过安全的 Drive Connector，将定制安全演练 Agent 植基于您的校园安全手册、大楼空间平面图与紧急应变协议文档。",
      "设定定制的安全演练 Agent，使其在模拟危机情境（如停电、强烈台风）中扮演“紧急派遣调度员”。",
      "使用 Video Generation（影片生成）技术，自动生成高画质的指示性影片与生动的情境动态提示。",
      "指派维安或驻卫警人员与模拟器互动，输入实时的紧急应变策略以应对不断变化的危机事件。",
      "生成演练后的成效评估报告，评估演练人员对安全防护手册规范的执行合规度。"
    ];
    useCasesTranslations.security_simulator["zh-CN"].proTip = "手动上传校园维安文件，能让您轻松针对不同的校区或场地建立独立沙盒模拟，避免不同应变标准相互混淆。";
    useCasesTranslations.security_simulator["zh-CN"].advancedProTip = "直接连接至安全团队的共享云端硬盘，能确保您的危机演练始终基于最新的逃生路线与现场指挥人员值班表进行。";
  }

  // Add the brand new essential email-connector usecase!
  useCasesDb.push({
    id: "email_digest",
    title: "Daily Academic Email Digest & Priority Planner",
    category: "academic",
    summary: "Connect Gemini directly to your institutional inbox to summarize daily administrative announcements, faculty updates, and extract key deadlines.",
    features: ["NotebookLM"],
    connectors: ["Email Connector"],
    connectorEssential: true,
    role: "Student",
    level: ["University & College", "High School", "Generic"],
    steps: [
      "Connect your institutional email inbox using the secure, encrypted Email Connector.",
      "Navigate to NotebookLM and create a new secure notebook titled 'Daily Academic Digests'.",
      "Prompt Gemini to fetch and analyze your school emails received over the past 24 hours.",
      "Generate a structured, localized bullet-point digest of critical department deadlines, exam announcements, and class schedule changes.",
      "Ask Gemini to automatically draft brief, professional email replies to professors and upload them directly to your email draft folders."
    ],
    prompt: `You are the 'Academic Personal Assistant'. Analyze all institutional emails received in the past 24 hours.
Generate a comprehensive daily digest that includes:
1. **Priority Deadline Alert**: Extract any homework, project, or exam deadlines. Highlight them in bold with dates.
2. **Class Schedule Updates**: List any room changes, office hour announcements, or rescheduled lectures.
3. **Action Items**: Provide a clear checklist of 3 immediate things that require the user's attention.
4. **Draft Professional Replies**: For any urgent emails from professors, draft brief, formal response emails (e.g. confirming attendance, requesting meeting times) and place them in Drafts.
Keep the tone respectful, clear, and highly organized.`,
    proTip: "By utilizing the Email Connector, your emails remain fully within your university's secure tenant, guaranteeing that personal correspondence is never leaked or used for training.",
    connectorGuide: {
      name: "Email Connector",
      steps: [
        "Enable the Email Connector inside your sidebar panel settings.",
        "Provide your institutional authorization to grant secure draft and read access.",
        "Ground your NotebookLM workspace in the synchronized email stream for automated digest runs."
      ]
    }
  });

  // Inject translations for email_digest
  useCasesTranslations.email_digest = {
    "en": {
      title: "Daily Academic Email Digest & Priority Planner",
      summary: "Connect Gemini directly to your institutional inbox to summarize daily administrative announcements, faculty updates, and extract key deadlines.",
      steps: [
        "Connect your institutional email inbox using the secure, encrypted Email Connector.",
        "Navigate to NotebookLM and create a new secure notebook titled 'Daily Academic Digests'.",
        "Prompt Gemini to fetch and analyze your school emails received over the past 24 hours.",
        "Generate a structured, localized bullet-point digest of critical department deadlines, exam announcements, and class schedule changes.",
        "Ask Gemini to automatically draft brief, professional email replies to professors and upload them directly to your email draft folders."
      ],
      prompt: `You are the 'Academic Personal Assistant'. Analyze all institutional emails received in the past 24 hours.
Generate a comprehensive daily digest that includes:
1. **Priority Deadline Alert**: Extract any homework, project, or exam deadlines. Highlight them in bold with dates.
2. **Class Schedule Updates**: List any room changes, office hour announcements, or rescheduled lectures.
3. **Action Items**: Provide a clear checklist of 3 immediate things that require the user's attention.
4. **Draft Professional Replies**: For any urgent emails from professors, draft brief, formal response emails (e.g. confirming attendance, requesting meeting times) and place them in Drafts.
Keep the tone respectful, clear, and highly organized.`,
      proTip: "By utilizing the Email Connector, your emails remain fully within your university's secure tenant, guaranteeing that personal correspondence is never leaked or used for training."
    },
    "zh-TW": {
      title: "每日學術郵件摘要與優先級計畫",
      summary: "直接整合學校信箱，自動分析並摘要過去 24 小時內的行政公告、教授通知與課程快報，快速整理出急迫的待辦期限與日程。",
      steps: [
        "使用安全加密的 Email Connector（郵件連接器）連結您的學校信箱。",
        "在 NotebookLM 中建立一個名為「每日學術摘要」的工作空間。",
        "引導 Gemini 讀取並分析過去 24 小時內收到的學校信件。",
        "自動生成結構清晰的摘要，列出關鍵截止日期、考程異動、停調課通知與行政公告。",
        "對教授或行政人員的緊急信件，自動擬好專業的草稿並同步至您的郵件草稿匣。"
      ],
      prompt: `請扮演專業的「學術個人助理」。分析過去 24 小時內收到的所有學校電子郵件。
生成一份全面的每日摘要，其中包括：
1. **優先截止日期警報**：提取任何作業、項目或考試截止日期。用粗體突出顯示日期。
2. **課程時間表更新**：列出任何教室異動、辦公時間公告或重新安排的講座。
3. **行動項目**：提供一份清晰的清單，列出 3 個需要用戶立即注意的事項。
4. **起草專業回覆**：對於教授發送的任何緊急郵件，起草簡短、正式的回覆郵件（例如確認出席、要求會議時間）並將其放入草稿箱。
保持禮貌、清晰且高度組織化的語氣。`,
      proTip: "透過 Email Connector，所有信件均維持在學校安全的雲端租戶內進行處理，絕不會被外部模型訓練，確保個人隱私萬無一失。"
    },
    "zh-CN": {
      title: "每日学术邮件摘要与优先级计划",
      summary: "直接整合学校邮箱，自动分析并摘要过去 24 小时内的行政公告、教授通知与课程快报，快速整理出急迫的待办期限与日程。",
      steps: [
        "使用安全加密的 Email Connector（邮件连接器）链接您的学校邮箱。",
        "在 NotebookLM 中创建一个名为“每日学术摘要”的工作空间。",
        "引导 Gemini 读取并分析过去 24 小时内收到的学校邮件。",
        "自动生成结构清晰的摘要，列出关键截止日期、考程异动、停调课通知与行政公告。",
        "对教授或行政人员的紧急邮件，自动拟好专业的草稿并同步至您的邮件草稿匣。"
      ],
      prompt: `请扮演专业的“学术个人助理”。分析过去 24 小时内收到的所有学校电子邮件。
生成一份全面的每日摘要，其中包括：
1. **优先截止日期警报**：提取任何作业、项目或考试截止日期。用粗体突出显示日期。
2. **课程时间表更新**：列出任何教室异动、办公时间公告或重新安排的讲座。
3. **行动项目**：提供一份清晰的清单，列出 3 个需要用户立即注意的事项。
4. **起草专业回复**：对于教授发送的任何紧急邮件，起草简短、正式的回复邮件（例如确认出席、要求会议时间）并将其放入草稿箱。
保持礼貌、清晰且高度组织化的语气。`,
      proTip: "通过 Email Connector，所有邮件均维持在学校安全的云端租户内进行处理，绝不会被外部模型训练，确保个人隐私万无一失。"
    }
  };
}

// Bind initialization lifecycle on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  // Master Authentication and Dynamic Database Initialization Lifecycle
  initApp();
});

// ============================================================================
// GEMINI ENTERPRISE PORTAL - AUTHENTICATION, DATABASE & ADMIN MANAGEMENT SUITE
// ============================================================================

// 1. Dynamic Server-Side Use Case Database Syncing
async function loadUseCasesFromServer() {
  try {
    const res = await fetch('/api/use-cases');
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      // Overwrite the local in-memory arrays so existing templates run smoothly
      useCasesDb.length = 0;
      useCasesDb.push(...data);

      // Re-assign translations dynamically from fetched payload
      for (const key in useCasesTranslations) {
        delete useCasesTranslations[key];
      }
      data.forEach(uc => {
        if (uc.translations) {
          useCasesTranslations[uc.id] = uc.translations;
        }
      });
      console.log(`🌐 Synced ${data.length} editable playbooks from server database.`);
      renderUseCases();
    }
  } catch (err) {
    console.error("⚠️ Failed to load use cases from server. Falling back to local static databases.", err);
  }
}

// 2. Overridden renderUseCases containing interactive Likes & Deployments
const baseRenderUseCases = renderUseCases;
renderUseCases = function() {
  // Call original render engine to establish HTML layout
  baseRenderUseCases();

  // Post-process DOM to inject Likes and Deployments indicators
  const cards = document.querySelectorAll("#useCasesContainer .card");
  cards.forEach(card => {
    const titleEl = card.querySelector(".card-title");
    if (!titleEl) return;
    const titleText = titleEl.textContent.trim();

    // Map card back to local useCasesDb item
    const uc = useCasesDb.find(u => {
      const lang = appState.activeLanguage || "en";
      const trans = useCasesTranslations[u.id] ? useCasesTranslations[u.id][lang] : null;
      const cTitle = trans ? trans.title : u.title;
      return cTitle.trim() === titleText;
    });

    if (!uc) return;

    const cardBottom = card.querySelector(".card-bottom");
    if (cardBottom) {
      // Create user preference controls
      const prefBar = document.createElement("div");
      prefBar.className = "card-preferences-bar";
      prefBar.style.display = "flex";
      prefBar.style.gap = "8px";
      prefBar.style.alignItems = "center";
      prefBar.style.marginLeft = "auto";
      prefBar.style.position = "relative";
      prefBar.style.zIndex = "10";

      const likeActive = uc.isLiked === true || uc.isLiked === 1;
      const deployActive = uc.isDeployed === true || uc.isDeployed === 1;
      const totalLikes = uc.totalLikes || 0;

      prefBar.innerHTML = `
        <button class="pref-btn btn-like" style="background: none; border: none; padding: 4px; display: inline-flex; align-items: center; cursor: pointer; color: ${likeActive ? 'var(--color-danger)' : 'var(--text-muted)'}; transition: color 0.2s; gap: 4px;" title="Like Use Case">
          <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' ${likeActive ? 1 : 0}">${likeActive ? 'favorite' : 'favorite'}</span>
          <span class="likes-count" style="font-size: 12px; font-family: inherit; font-weight: 500;">${totalLikes}</span>
        </button>
        <button class="pref-btn btn-deploy" style="background: none; border: none; padding: 4px; display: inline-flex; align-items: center; cursor: pointer; color: ${deployActive ? 'var(--color-success)' : 'var(--text-muted)'}; transition: color 0.2s;" title="Active Deployment Status">
          <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' ${deployActive ? 1 : 0}">${deployActive ? 'rocket_launch' : 'rocket_launch'}</span>
        </button>
      `;

      cardBottom.appendChild(prefBar);

      // Prevent card detail popup modal when liking or deploying
      const likeBtn = prefBar.querySelector(".btn-like");
      likeBtn.addEventListener("click", async (e) => {
        e.stopPropagation();
        const newStatus = !uc.isLiked;
        const resObj = await syncUserPreference(uc.id, 'like', newStatus);
        if (resObj && resObj.success) {
          uc.isLiked = newStatus;
          uc.totalLikes = resObj.totalLikes;
          likeBtn.style.color = newStatus ? 'var(--color-danger)' : 'var(--text-muted)';
          likeBtn.querySelector(".material-symbols-outlined").style.fontVariationSettings = `'FILL' ${newStatus ? 1 : 0}`;
          likeBtn.querySelector(".likes-count").textContent = resObj.totalLikes;
          showToast(newStatus ? "Added to your favorites!" : "Removed from favorites");
        }
      });

      const deployBtn = prefBar.querySelector(".btn-deploy");
      deployBtn.addEventListener("click", async (e) => {
        e.stopPropagation();
        const newStatus = !uc.isDeployed;
        const success = await syncUserPreference(uc.id, 'deploy', newStatus);
        if (success) {
          uc.isDeployed = newStatus;
          deployBtn.style.color = newStatus ? 'var(--color-success)' : 'var(--text-muted)';
          deployBtn.querySelector(".material-symbols-outlined").style.fontVariationSettings = `'FILL' ${newStatus ? 1 : 0}`;
          showToast(newStatus ? "Deployment marked as active!" : "Deployment marked as inactive");
        }
      });
    }
  });
};

// Sync Likes & Deployments to DB
async function syncUserPreference(useCaseId, action, value) {
  try {
    const endpoint = action === 'like' ? '/api/use-cases/like' : '/api/use-cases/deploy';
    const bodyKey = action === 'like' ? 'isLiked' : 'isDeployed';
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ useCaseId, [bodyKey]: value })
    });
    const data = await res.json();
    return action === 'like' ? { success: data.success, totalLikes: data.totalLikes } : data.success;
  } catch (error) {
    console.error(`Preference sync error (${action}):`, error);
    return false;
  }
}

function injectAdminBackButton() {
  if (!document.getElementById("btnBackToAdminDash")) {
    const backBtn = document.createElement("button");
    backBtn.className = "nav-button nav-button-primary";
    backBtn.id = "btnBackToAdminDash";
    backBtn.style.marginLeft = "12px";
    backBtn.innerHTML = `<span class="material-symbols-outlined">shield</span> <span>Admin Dash</span>`;
    backBtn.onclick = () => {
      sessionStorage.setItem("ge_current_view", "admin");
      document.getElementById("appLayout").style.display = "none";
      document.getElementById("adminPortal").style.display = "block";
      initAdminPortal();
    };
    const navRight = document.querySelector(".navbar-right");
    if (navRight) navRight.appendChild(backBtn);
  }
}

// 3. User & Admin Lifecycle Controller (Session checking & Login gating)
async function initApp() {
  // Execute base configs
  enhanceUseCasesDatabase();
  await loadVerificationCheckpoints();
  initTheme();
  initLanguage();
  initTimeline();
  initFeedbackSystem();

  // Establish base auth elements on start
  const overlay = document.getElementById("wizardOverlay");
  const loginCard = document.getElementById("loginCard");
  const resetCard = document.getElementById("resetCard");
  const profileCard = document.getElementById("profileCard");

  // Reset display status
  loginCard.style.display = "none";
  resetCard.style.display = "none";
  profileCard.style.display = "none";

  try {
    // Validate session
    const res = await fetch('/api/auth/session');
    const auth = await res.json();

    if (auth.loggedIn) {
      appState.userEmail = auth.user.email;
      appState.isAdmin = auth.user.isAdmin;
      appState.isAssist = auth.user.isAssist || false;

      if (appState.isAdmin) {
        // Admin redirect or simulated view restore
        const savedView = sessionStorage.getItem("ge_current_view") || "admin";
        overlay.style.display = "none";
        
        if (savedView === "user") {
          document.getElementById("adminPortal").style.display = "none";
          document.getElementById("appLayout").style.display = "flex";
          injectAdminBackButton();
          
          appState.userRole = "Lecturer";
          appState.institutionLevel = "University & College";
          updateSidebarContextUI();
          
          updateUILanguage(); // Make sure admin headers are drawn!
          await loadUseCasesFromServer();
          renderUseCases();
        } else {
          document.getElementById("appLayout").style.display = "none";
          document.getElementById("adminPortal").style.display = "block";
          initAdminPortal();
        }
      } else {
        // Standard user login paths
        if (auth.user.isTemp) {
          // Force reset temp accounts
          overlay.style.display = "flex";
          resetCard.style.display = "block";
          setupPasswordResetHandlers();
        } else {
          // Check profile onboarding status
          if (auth.user.role && auth.user.institutionLevel) {
            // Profile exists in DB
            appState.userRole = auth.user.role;
            appState.institutionLevel = auth.user.institutionLevel;
            appState.activeLanguage = localStorage.getItem("ge_adoption_lang") || "en";

            overlay.style.display = "none";
            document.getElementById("navLang").value = appState.activeLanguage;
            document.getElementById("wizardLang").value = appState.activeLanguage;

            document.getElementById("navbarWelcomeText").textContent = `Logged in: ${appState.userEmail}`;

            updateUILanguage();
            updateSidebarContextUI();
            
            // Fetch use cases and render
            await loadUseCasesFromServer();
            renderUseCases();
          } else {
            // New user requires profile configuration
            overlay.style.display = "flex";
            profileCard.style.display = "block";
            setupProfileOnboardingHandlers();
          }
        }
      }
    } else {
      // Prompt Sign-in
      overlay.style.display = "flex";
      loginCard.style.display = "block";
      setupLoginHandlers();
    }
  } catch (error) {
    console.error("Initialization error:", error);
    overlay.style.display = "flex";
    loginCard.style.display = "block";
    setupLoginHandlers();
  }

  // Restore filter values from sessionStorage
  appState.activeFilterCategory = sessionStorage.getItem("ge_active_category") || "all";
  appState.activeFilterFeature = sessionStorage.getItem("ge_active_feature") || "all";
  appState.activeFilterStatus = sessionStorage.getItem("ge_active_status") || "all";

  // Set event listeners for search and feature/status sidebars
  document.getElementById("searchInput").addEventListener("input", handleSearchInput);

  const categoryItems = document.querySelectorAll(".category-filter-item");
  categoryItems.forEach(item => {
    const cat = item.getAttribute("data-category");
    if (cat === appState.activeFilterCategory) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
    item.addEventListener("click", () => {
      categoryItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      appState.activeFilterCategory = cat;
      sessionStorage.setItem("ge_active_category", cat);
      renderUseCases();
    });
  });

  const featureItems = document.querySelectorAll(".feature-filter-item");
  featureItems.forEach(item => {
    const feat = item.getAttribute("data-feature");
    if (feat === appState.activeFilterFeature) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
    item.addEventListener("click", () => {
      featureItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      appState.activeFilterFeature = feat;
      sessionStorage.setItem("ge_active_feature", feat);
      renderUseCases();
    });
  });

  const statusItems = document.querySelectorAll(".status-filter-item");
  statusItems.forEach(item => {
    const stat = item.getAttribute("data-status");
    if (stat === appState.activeFilterStatus) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
    item.addEventListener("click", () => {
      statusItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      appState.activeFilterStatus = stat;
      sessionStorage.setItem("ge_active_status", stat);
      renderUseCases();
    });
  });

  setupConnectorToggles();

  // Profile Context switch trigger
  document.getElementById("btnChangeContext").addEventListener("click", () => {
    overlay.style.display = "flex";
    profileCard.style.display = "block";
    loginCard.style.display = "none";
    resetCard.style.display = "none";

    if (appState.userRole) document.getElementById("wizardRole").value = appState.userRole;
    if (appState.institutionLevel) document.getElementById("wizardLevel").value = appState.institutionLevel;
    document.getElementById("wizardLang").value = appState.activeLanguage;
    handleWizardRoleChange();
    setupProfileOnboardingHandlers();
  });

  // Global Logout binding
  document.getElementById("btnLogout").addEventListener("click", triggerUserLogout);

  // Modal details slider close bindings
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalOverlay")) closeModal();
  });

  // Portal View Tab Switching (Explore Playbooks vs Adoption Roadmap)
  const viewPlaybooksNav = document.getElementById("viewPlaybooksNav");
  const viewTimelineNav = document.getElementById("viewTimelineNav");
  const playbooksView = document.getElementById("playbooksView");
  const timelineView = document.getElementById("timelineView");
  const sidebarCategorySection = document.getElementById("sidebarCategorySection");
  const sidebarFeatureSection = document.getElementById("sidebarFeatureSection");
  const sidebarStatusSection = document.getElementById("sidebarStatusSection");

  const switchPortalView = (viewName) => {
    document.querySelectorAll(".portal-view-item").forEach(i => i.classList.remove("active"));
    
    if (viewName === "playbooks") {
      if (viewPlaybooksNav) viewPlaybooksNav.classList.add("active");
      if (playbooksView) playbooksView.style.display = "block";
      if (timelineView) timelineView.style.display = "none";
      if (sidebarCategorySection) sidebarCategorySection.style.display = "block";
      if (sidebarFeatureSection) sidebarFeatureSection.style.display = "block";
      if (sidebarStatusSection) sidebarStatusSection.style.display = "block";
    } else {
      if (viewTimelineNav) viewTimelineNav.classList.add("active");
      if (playbooksView) playbooksView.style.display = "none";
      if (timelineView) timelineView.style.display = "block";
      if (sidebarCategorySection) sidebarCategorySection.style.display = "none";
      if (sidebarFeatureSection) sidebarFeatureSection.style.display = "none";
      if (sidebarStatusSection) sidebarStatusSection.style.display = "none";
      
      renderTimeline(); // render the interactive timeline elements
    }
  };

  if (viewPlaybooksNav) {
    viewPlaybooksNav.addEventListener("click", () => switchPortalView("playbooks"));
  }
  if (viewTimelineNav) {
    viewTimelineNav.addEventListener("click", () => switchPortalView("timeline"));
  }

  // Mobile responsive sidebar drawer hooks
  const btnMobileMenu = document.getElementById("btnMobileMenu");
  const btnMobileSidebarClose = document.getElementById("btnMobileSidebarClose");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const appSidebar = document.getElementById("appSidebar");

  const openMobileSidebar = () => {
    if (appSidebar) appSidebar.classList.add("active");
    if (sidebarOverlay) sidebarOverlay.classList.add("active");
  };

  const closeMobileSidebar = () => {
    if (appSidebar) appSidebar.classList.remove("active");
    if (sidebarOverlay) sidebarOverlay.classList.remove("active");
  };

  if (btnMobileMenu) {
    btnMobileMenu.addEventListener("click", openMobileSidebar);
  }

  if (btnMobileSidebarClose) {
    btnMobileSidebarClose.addEventListener("click", closeMobileSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeMobileSidebar);
  }

  // Auto-close sidebar drawer when navigating filters on mobile
  document.querySelectorAll(".category-filter-item, .feature-filter-item, .status-filter-item").forEach(item => {
    item.addEventListener("click", closeMobileSidebar);
  });

  // Mobile responsive admin sidebar drawer hooks
  const btnAdminMobileMenu = document.getElementById("btnAdminMobileMenu");
  const btnAdminMobileSidebarClose = document.getElementById("btnAdminMobileSidebarClose");
  const adminSidebar = document.getElementById("adminSidebar");

  const openAdminMobileSidebar = () => {
    if (adminSidebar) adminSidebar.classList.add("active");
    if (sidebarOverlay) sidebarOverlay.classList.add("active");
  };

  const closeAdminMobileSidebar = () => {
    if (adminSidebar) adminSidebar.classList.remove("active");
    if (sidebarOverlay) sidebarOverlay.classList.remove("active");
  };

  if (btnAdminMobileMenu) {
    btnAdminMobileMenu.addEventListener("click", openAdminMobileSidebar);
  }

  if (btnAdminMobileSidebarClose) {
    btnAdminMobileSidebarClose.addEventListener("click", closeAdminMobileSidebar);
  }

  // Close admin sidebar on tab selections or clicking the overlay
  document.querySelectorAll(".admin-tab-item").forEach(item => {
    item.addEventListener("click", closeAdminMobileSidebar);
  });
  
  // Make sidebarOverlay close the active admin sidebar too
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeAdminMobileSidebar);
  }
}

// 4. Session Operations (Login, Reset, Profile, Logout)
function setupLoginHandlers() {
  const btnLogin = document.getElementById("btnLogin");
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const errorMsg = document.getElementById("loginErrorMsg");

  // Enable pressing Enter to log in
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      btnLogin.click();
    }
  };
  emailInput.addEventListener("keydown", handleEnterKey);
  passwordInput.addEventListener("keydown", handleEnterKey);

  btnLogin.onclick = async () => {
    errorMsg.style.display = "none";
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
      errorMsg.textContent = "Please fill in all authentication fields.";
      errorMsg.style.display = "block";
      return;
    }

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();

      if (data.success) {
        if (data.isAdmin) {
          sessionStorage.setItem("ge_current_view", "admin");
        }
        showToast("Access Granted. Redirecting...");
        setTimeout(() => {
          window.location.reload();
        }, 800);
      } else {
        errorMsg.textContent = data.message || "Invalid login credentials.";
        errorMsg.style.display = "block";
      }
    } catch (err) {
      errorMsg.textContent = "Unable to connect to the authentication server.";
      errorMsg.style.display = "block";
    }
  };
}

function setupPasswordResetHandlers() {
  const btnReset = document.getElementById("btnSubmitReset");
  const p1 = document.getElementById("resetPassword1");
  const p2 = document.getElementById("resetPassword2");
  const errorMsg = document.getElementById("resetErrorMsg");

  // Enable pressing Enter to submit password reset
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      btnReset.click();
    }
  };
  p1.addEventListener("keydown", handleEnterKey);
  p2.addEventListener("keydown", handleEnterKey);

  btnReset.onclick = async () => {
    errorMsg.style.display = "none";
    const pass = p1.value;
    const confirm = p2.value;

    if (!pass || pass.length < 6) {
      errorMsg.textContent = "Password must be at least 6 characters long.";
      errorMsg.style.display = "block";
      return;
    }

    if (pass !== confirm) {
      errorMsg.textContent = "Passwords do not match. Please verify.";
      errorMsg.style.display = "block";
      return;
    }

    // Since we are forcing password reset, we can also collect their initial onboarding details on this screen or proceed to profile wizard!
    // We will let them set their password, then automatically transition them to Card 3 (Profile Card) so they can complete their onboarding context profile!
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword: pass })
      });
      const data = await res.json();

      if (data.success) {
        showToast("Password updated successfully!");
        document.getElementById("resetCard").style.display = "none";
        document.getElementById("profileCard").style.display = "block";
        setupProfileOnboardingHandlers();
      } else {
        errorMsg.textContent = data.message || "Failed to reset password.";
        errorMsg.style.display = "block";
      }
    } catch (err) {
      errorMsg.textContent = "Database connection error.";
      errorMsg.style.display = "block";
    }
  };
}

function setupProfileOnboardingHandlers() {
  const btnStart = document.getElementById("btnStart");
  const selectRole = document.getElementById("wizardRole");
  const selectLevel = document.getElementById("wizardLevel");
  const selectLang = document.getElementById("wizardLang");

  selectRole.addEventListener("change", handleWizardRoleChange);
  handleWizardRoleChange(); // Initial alignment of helpers

  btnStart.onclick = async () => {
    const role = selectRole.value;
    const level = selectLevel.value;
    const lang = selectLang.value;

    try {
      // Save profile context configuration to database
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword: "", role, institutionLevel: level }) // Empty pass skips hashing, updates metadata!
      });
      const data = await res.json();

      if (data.success) {
        appState.userRole = role;
        appState.institutionLevel = level;
        appState.activeLanguage = lang;
        localStorage.setItem("ge_adoption_lang", lang);

        document.getElementById("navLang").value = lang;
        document.getElementById("wizardOverlay").style.display = "none";
        
        document.getElementById("navbarWelcomeText").textContent = `Logged in: ${appState.userEmail}`;

        updateUILanguage();
        updateSidebarContextUI();

        // Fetch use cases and render
        await loadUseCasesFromServer();
        renderUseCases();
        renderTimeline();
        showToast("Workspace fully configured!");
      }
    } catch (err) {
      console.error("Onboarding saving failed:", err);
    }
  };
}

async function triggerUserLogout() {
  try {
    sessionStorage.removeItem("ge_current_view");
    await fetch('/api/auth/logout', { method: 'POST' });
    showToast("Logged out successfully.");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    window.location.reload();
  }
}

// 5. Swiss Minimalist Administration Portal Dashboard Engine
let currentAdminTab = 'users';

function initAdminPortal() {
  const isAssist = appState.isAssist === true;
  const isSuperAdmin = (appState.userEmail === 'fsi_portal_s_admin');

  let savedTab = sessionStorage.getItem("ge_current_admin_tab") || "users";
  if (isAssist && savedTab === "users") {
    savedTab = "cases";
  }
  currentAdminTab = savedTab;

  const btnCreate = document.getElementById("btnAdminCreateCase");
  if (btnCreate) {
    btnCreate.style.display = isAssist ? "none" : "block";
  }

  // Hide Users Provisioning sidebar navigation tab for Assist Admin completely
  const usersNav = document.getElementById("adminTabUsersNav");
  if (usersNav) {
    usersNav.style.display = isAssist ? "none" : "flex";
  }

  // Hide Use Cases Import button for Assist Admin completely
  const btnImport = document.getElementById("btnAdminImportCases");
  if (btnImport) {
    btnImport.style.display = isAssist ? "none" : "block";
  }

  // Hide "Add Checklist Item" button for Assist Admin completely
  const btnCreateCheckpointNav = document.getElementById("btnAdminCreateCheckpoint");
  if (btnCreateCheckpointNav) {
    btnCreateCheckpointNav.style.display = isAssist ? "none" : "flex";
  }

  // Allow both Super Admin and Assist Admin to view Feedbacks list tab
  const feedbacksNav = document.getElementById("adminTabFeedbacksNav");
  if (feedbacksNav) {
    feedbacksNav.style.display = (isSuperAdmin || isAssist) ? "flex" : "none";
  }

  const tabs = document.querySelectorAll(".admin-tab-item");
  tabs.forEach(tab => {
    const target = tab.getAttribute("data-tab");
    if (target === savedTab) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  document.getElementById("adminTabUsers").style.display = savedTab === 'users' ? 'block' : 'none';
  document.getElementById("adminTabAnalytics").style.display = savedTab === 'analytics' ? 'block' : 'none';
  document.getElementById("adminTabCases").style.display = savedTab === 'cases' ? 'block' : 'none';
  
  const tabFeedbacks = document.getElementById("adminTabFeedbacks");
  if (tabFeedbacks) {
    tabFeedbacks.style.display = savedTab === 'feedbacks' ? 'block' : 'none';
  }

  const tabChecklists = document.getElementById("adminTabChecklists");
  if (tabChecklists) {
    tabChecklists.style.display = savedTab === 'checklists' ? 'block' : 'none';
  }

  if (savedTab === 'users') loadAdminUsers();
  else if (savedTab === 'analytics') loadAdminStats();
  else if (savedTab === 'cases') loadAdminUseCases();
  else if (savedTab === 'feedbacks' && (isSuperAdmin || isAssist)) loadAdminFeedbacks();
  else if (savedTab === 'checklists') loadAdminChecklists();

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const target = tab.getAttribute("data-tab");
      currentAdminTab = target;
      sessionStorage.setItem("ge_current_admin_tab", target);

      document.getElementById("adminTabUsers").style.display = target === 'users' ? 'block' : 'none';
      document.getElementById("adminTabAnalytics").style.display = target === 'analytics' ? 'block' : 'none';
      document.getElementById("adminTabCases").style.display = target === 'cases' ? 'block' : 'none';
      if (tabFeedbacks) {
        tabFeedbacks.style.display = target === 'feedbacks' ? 'block' : 'none';
      }
      if (tabChecklists) {
        tabChecklists.style.display = target === 'checklists' ? 'block' : 'none';
      }

      if (target === 'users') loadAdminUsers();
      else if (target === 'analytics') loadAdminStats();
      else if (target === 'cases') loadAdminUseCases();
      else if (target === 'feedbacks' && (isSuperAdmin || isAssist)) loadAdminFeedbacks();
      else if (target === 'checklists') loadAdminChecklists();
    });
  });

  // Admin Logout
  document.getElementById("btnAdminLogout").addEventListener("click", triggerUserLogout);

  // Return to Standard Playbook views
  document.getElementById("btnAdminBackToPortal").addEventListener("click", () => {
    sessionStorage.setItem("ge_current_view", "user");
    document.getElementById("adminPortal").style.display = "none";
    document.getElementById("appLayout").style.display = "flex";
    
    injectAdminBackButton();

    // Default simulation load
    appState.userRole = "Lecturer";
    appState.institutionLevel = "University & College";
    updateSidebarContextUI();
    updateUILanguage(); // Make sure admin headers are drawn!
    loadUseCasesFromServer().then(() => renderUseCases());
  });

  // User tab form hook
  const formAddUser = document.getElementById("formAddUser");
  formAddUser.onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("inputNewUserEmail").value.trim();
    const feedback = document.getElementById("userActionFeedback");
    feedback.style.display = "none";

    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();

      if (data.success) {
        formAddUser.reset();
        if (data.multiple) {
          const succList = data.summary.success.map(e => `<li><code>${e}</code></li>`).join('');
          const dupList = data.summary.duplicates.length > 0 
            ? `<div style="margin-top: 8px; font-size: 11px; color: var(--text-secondary);"><strong>Skipped Duplicates:</strong><br>${data.summary.duplicates.join(', ')}</div>` 
            : '';
          const errList = data.summary.errors.length > 0 
            ? `<div style="margin-top: 8px; font-size: 11px; color: var(--color-danger);"><strong>Failed Accounts:</strong><br>${data.summary.errors.join(', ')}</div>` 
            : '';

          feedback.innerHTML = `
            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 4px; padding: 12px; font-size: 13px; color: var(--color-success);">
              <strong>✅ Multiple User Accounts Provisioned!</strong><br>
              <div style="margin-top: 6px; font-size: 12px;">
                Successfully created accounts:
                <ul style="margin: 4px 0; padding-left: 20px; text-align: left;">${succList || '<li>None</li>'}</ul>
              </div>
              Default Temporary Password for all: <strong style="font-family: monospace; background: var(--bg-prompt-box); padding: 2px 6px; border-radius: 4px; color: var(--text-prompt-box); border: 1px solid var(--border-glass);">${data.defaultPassword}</strong>
              <p style="font-size: 11px; margin-top: 6px; color: var(--text-secondary);">The provisioned users will be prompted to reset their password immediately on their first login.</p>
              ${dupList}
              ${errList}
            </div>
          `;
        } else {
          feedback.innerHTML = `
            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 4px; padding: 12px; font-size: 13px; color: var(--color-success);">
              <strong>✅ User Account Provisioned!</strong><br>
              Email: <code>${data.email}</code><br>
              Temporary Password: <strong style="font-family: monospace; background: var(--bg-prompt-box); padding: 2px 6px; border-radius: 4px; color: var(--text-prompt-box); border: 1px solid var(--border-glass);">${data.tempPassword}</strong>
              <p style="font-size: 11px; margin-top: 4px; color: var(--text-secondary);">Share this credentials with the user. They will be prompted to reset it immediately on sign-in.</p>
            </div>
          `;
        }
        feedback.style.display = "block";
        loadAdminUsers();
      } else {
        feedback.innerHTML = `<div style="background: var(--color-danger-glow); border: 1px solid rgba(239,68,68,0.2); border-radius: 4px; padding: 10px; color: var(--color-danger); font-size: 12px;">${data.message}</div>`;
        feedback.style.display = "block";
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Case CRUD create/export hooks
  document.getElementById("btnAdminCreateCase").onclick = () => openAdminEditModal(null);
  document.getElementById("btnAdminExportCases").onclick = () => {
    const checkedBoxes = document.querySelectorAll(".admin-case-checkbox:checked");
    if (checkedBoxes.length === 0) {
      alert("Please select at least one use case to export by checking the boxes in the table rows.");
      return;
    }

    const selectedIds = Array.from(checkedBoxes).map(cb => cb.value);
    const allCases = appState.loadedAdminUseCases || [];
    const exportData = allCases.filter(uc => selectedIds.includes(uc.id)).map(uc => {
      return {
        id: uc.id,
        category: uc.category,
        title: uc.title,
        summary: uc.summary || "",
        features: typeof uc.features === 'string' ? JSON.parse(uc.features) : (uc.features || []),
        connectors: typeof uc.connectors === 'string' ? JSON.parse(uc.connectors) : (uc.connectors || []),
        role: uc.role || "Lecturer",
        level: typeof uc.level === 'string' ? JSON.parse(uc.level) : (uc.level || ["Generic"]),
        steps: typeof uc.steps === 'string' ? JSON.parse(uc.steps) : (uc.steps || []),
        prompt: uc.prompt || "",
        proTip: uc.proTip || uc.pro_tip || "",
        connectorGuide: typeof uc.connectorGuide === 'string' ? JSON.parse(uc.connectorGuide) : (uc.connectorGuide || uc.connector_guide || null),
        translations: typeof uc.translations === 'string' ? JSON.parse(uc.translations) : (uc.translations || {}),
        isVerified: uc.isVerified !== undefined ? uc.isVerified : false
      };
    });

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `gemini_playbooks_export_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  document.getElementById("btnAdminImportCases").onclick = () => {
    document.getElementById("inputAdminImportFile").click();
  };

  document.getElementById("inputAdminImportFile").onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        const importData = JSON.parse(evt.target.result);
        const importedArray = Array.isArray(importData) ? importData : [importData];

        if (importedArray.length === 0) {
          alert("Selected JSON file does not contain any valid playbooks.");
          return;
        }

        // Fetch the very latest use cases list from server for lookup
        const checkRes = await fetch('/api/use-cases');
        const existingList = await checkRes.json();
        const existingIds = existingList.map(uc => uc.id);

        let createdCount = 0;
        let updatedCount = 0;
        let skippedCount = 0;

        for (const uc of importedArray) {
          if (!uc.id || !uc.title || !uc.category) {
            console.warn("Skipping imported use case with missing parameters:", uc);
            skippedCount++;
            continue;
          }

          const alreadyExists = existingIds.includes(uc.id);
          let shouldOverwrite = true;

          if (alreadyExists) {
            shouldOverwrite = confirm(`Use case ID "${uc.id}" ("${uc.title}") already exists in the system.\n\nDo you want to overwrite and replace it?`);
          }

          if (shouldOverwrite) {
            const method = alreadyExists ? 'PUT' : 'POST';
            const url = '/api/admin/use-cases';

            // Ensure expected fields are structured
            const payload = {
              id: uc.id,
              category: uc.category,
              title: uc.title,
              summary: uc.summary || "",
              features: uc.features || [],
              connectors: uc.connectors || [],
              role: uc.role || "Lecturer",
              level: uc.level || ["Generic"],
              steps: uc.steps || [],
              prompt: uc.prompt || "",
              proTip: uc.proTip || uc.pro_tip || "",
              connectorGuide: uc.connectorGuide || uc.connector_guide || null,
              translations: uc.translations || {},
              isVerified: uc.isVerified !== undefined ? uc.isVerified : false
            };

            const res = await fetch(url, {
              method: method,
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });
            const resData = await res.json();

            if (resData.success) {
              if (alreadyExists) updatedCount++;
              else createdCount++;
            } else {
              console.error(`Failed to import playbook ${uc.id}:`, resData.message || resData.error);
              skippedCount++;
            }
          } else {
            skippedCount++;
          }
        }

        alert(`Playbook import completed!\n\nSuccessfully Imported: ${createdCount}\nSuccessfully Overwritten: ${updatedCount}\nSkipped/Failed: ${skippedCount}`);
        
        // Reload all data arrays and render lists
        loadAdminUseCases();
        loadUseCasesFromServer().then(() => renderUseCases());

      } catch (err) {
        console.error("Failed to parse or import file:", err);
        alert("An error occurred. Make sure you selected a valid playbook JSON backup file.");
      } finally {
        // Reset the file selector so the user can select the same file again if needed
        e.target.value = "";
      }
    };
    reader.readAsText(file);
  };

  document.getElementById("adminCaseModalClose").onclick = () => {
    document.getElementById("adminCaseEditModal").classList.remove("active");
  };
  document.getElementById("btnAdminFormCancel").onclick = () => {
    document.getElementById("adminCaseEditModal").classList.remove("active");
  };

  const btnGemini = document.getElementById("btnAdminFormGemini");
  if (btnGemini) {
    btnGemini.onclick = async () => {
      await triggerGeminiPlaybookGeneration();
    };
  }

  // Trigger form saving
  const formCase = document.getElementById("formAdminSaveCase");
  formCase.onsubmit = async (e) => {
    e.preventDefault();
    await saveAdminUseCase();
  };

  // Phase Verification Checkpoint listeners
  const btnCreateCheckpoint = document.getElementById("btnAdminCreateCheckpoint");
  if (btnCreateCheckpoint) {
    btnCreateCheckpoint.onclick = () => openAdminCheckpointModal(null);
  }
  const closeCheckpointModalBtn = document.getElementById("adminCheckpointModalClose");
  if (closeCheckpointModalBtn) {
    closeCheckpointModalBtn.onclick = () => {
      document.getElementById("adminCheckpointEditModal").classList.remove("active");
    };
  }
  const cancelCheckpointBtn = document.getElementById("btnAdminCheckpointCancel");
  if (cancelCheckpointBtn) {
    cancelCheckpointBtn.onclick = () => {
      document.getElementById("adminCheckpointEditModal").classList.remove("active");
    };
  }
  const saveCheckpointBtn = document.getElementById("btnAdminCheckpointSave");
  if (saveCheckpointBtn) {
    saveCheckpointBtn.onclick = async (e) => {
      e.preventDefault();
      await saveAdminCheckpoint();
    };
  }

  const selectCheckpointRoleFilter = document.getElementById("selectAdminCheckpointRoleFilter");
  if (selectCheckpointRoleFilter) {
    selectCheckpointRoleFilter.onchange = () => {
      loadAdminChecklists();
    };
  }

  // Default load
  loadAdminUsers();
}


// Admin Tab 1: Load users table
async function loadAdminUsers() {
  const tbody = document.getElementById("adminUsersTableBody");
  tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: var(--text-muted);">Loading users list...</td></tr>`;

  try {
    const res = await fetch('/api/admin/users');
    const users = await res.json();

    if (users.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: var(--text-muted);">No users registered yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = "";
    users.forEach(u => {
      const tr = document.createElement("tr");
      tr.style.borderBottom = "1px solid var(--border-glass)";
      
      const date = new Date(u.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
      const statusText = u.isTemp ? 
        `<span style="color: var(--color-warning); font-weight: 700;">Temporary (Pending Reset)</span>` : 
        `<span style="color: var(--color-success); font-weight: 700;">Active Account</span>`;

      tr.innerHTML = `
        <td style="padding: 12px 8px; font-weight: 500;">${u.email}</td>
        <td style="padding: 12px 8px;">${statusText}</td>
        <td style="padding: 12px 8px; color: var(--text-muted);">${date}</td>
        <td style="padding: 12px 8px; text-align: right; display: flex; gap: 8px; justify-content: flex-end;">
          <button class="nav-button btn-reset-user" style="height: 28px; padding: 0 10px; font-size: 11px;">Reset Access</button>
          <button class="nav-button btn-revoke-user" style="height: 28px; padding: 0 10px; font-size: 11px; background: var(--color-danger); border-color: var(--color-danger); color: #ffffff !important;">Revoke</button>
        </td>
      `;

      tbody.appendChild(tr);

      // Reset Password button bind
      tr.querySelector(".btn-reset-user").onclick = async () => {
        const feedback = document.getElementById("userActionFeedback");
        feedback.style.display = "none";
        if (confirm(`Generate a new temporary password for ${u.email}?`)) {
          try {
            const r = await fetch('/api/admin/users/reset', {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: u.email })
            });
            const data = await r.json();
            if (data.success) {
              feedback.innerHTML = `
                <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 4px; padding: 12px; font-size: 13px; color: var(--color-success);">
                  <strong>✅ Password Re-Generated!</strong><br>
                  Email: <code>${data.email}</code><br>
                  New Temporary Password: <strong style="font-family: monospace; background: var(--bg-prompt-box); padding: 2px 6px; border-radius: 4px; color: var(--text-prompt-box); border: 1px solid var(--border-glass);">${data.tempPassword}</strong>
                </div>
              `;
              feedback.style.display = "block";
              loadAdminUsers();
            }
          } catch (err) { console.error(err); }
        }
      };

      // Revoke user bind
      tr.querySelector(".btn-revoke-user").onclick = async () => {
        if (confirm(`Are you absolutely sure you want to revoke and delete the account for ${u.email}?`)) {
          try {
            const r = await fetch('/api/admin/users', {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: u.email })
            });
            const data = await r.json();
            if (data.success) {
              showToast("User successfully deleted.");
              loadAdminUsers();
            }
          } catch (err) { console.error(err); }
        }
      };
    });
  } catch (error) {
    console.error(error);
  }
}

// Admin Tab 2: Load metrics & SVG charts
async function loadAdminStats() {
  try {
    const res = await fetch('/api/admin/stats');
    const data = await res.json();

    document.getElementById("statTotalUsers").textContent = data.totalUsers;
    document.getElementById("statTotalUseCases").textContent = data.totalUseCases;
    document.getElementById("statTotalLikes").textContent = data.totalLikes;
    document.getElementById("statTotalDeployments").textContent = data.totalDeployments;

    renderAdminStatsChart(data.history);

    // Render Most Liked Playbooks Leaderboard
    const leaderboardContainer = document.getElementById("adminMostLikedList");
    if (leaderboardContainer && data.mostLiked) {
      leaderboardContainer.innerHTML = "";
      if (data.mostLiked.length === 0) {
        leaderboardContainer.innerHTML = `<p style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 24px;">No user likes recorded yet.</p>`;
      } else {
        data.mostLiked.forEach((item, index) => {
          const rank = index + 1;
          let rankBadgeBg = "var(--border-glass)";
          let rankBadgeColor = "var(--text-secondary)";
          if (rank === 1) {
            rankBadgeBg = "rgba(255, 215, 0, 0.15)";
            rankBadgeColor = "#FFD700";
          } else if (rank === 2) {
            rankBadgeBg = "rgba(192, 192, 192, 0.15)";
            rankBadgeColor = "#C0C0C0";
          } else if (rank === 3) {
            rankBadgeBg = "rgba(205, 127, 50, 0.15)";
            rankBadgeColor = "#CD7F32";
          }
          
          const categoryName = item.category === 'academic' ? 'Academic' : (item.category === 'operational' ? 'Operational' : 'Strategic Support');
          const cardHtml = `
            <div class="glass-panel" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 20px; transition: transform 0.2s, box-shadow 0.2s; cursor: default;">
              <div style="display: flex; align-items: center; gap: 16px;">
                <!-- Rank Badge -->
                <div style="width: 32px; height: 32px; border-radius: 50%; background: ${rankBadgeBg}; color: ${rankBadgeColor}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; font-family: var(--font-heading);">
                  ${rank}
                </div>
                <!-- Playbook Info -->
                <div>
                  <div style="font-size: 14px; font-weight: 700; color: var(--text-primary);">${item.title}</div>
                  <div style="display: flex; gap: 8px; margin-top: 4px; align-items: center;">
                    <span style="font-size: 10px; background: rgba(255,255,255,0.05); color: var(--text-secondary); padding: 2px 8px; border-radius: 12px; font-weight: 500; text-transform: capitalize; border: 1px solid var(--border-hairline);">${categoryName}</span>
                    <span style="font-size: 10px; background: rgba(255,255,255,0.05); color: var(--text-muted); padding: 2px 8px; border-radius: 12px; font-weight: 500; border: 1px solid var(--border-hairline);">${item.role}</span>
                  </div>
                </div>
              </div>
              
              <!-- Likes Count -->
              <div style="display: flex; align-items: center; gap: 6px; background: rgba(235, 87, 87, 0.1); border: 1px solid rgba(235, 87, 87, 0.2); padding: 6px 12px; border-radius: 16px; color: var(--color-danger); font-weight: 700; font-size: 13px;">
                <span class="material-symbols-outlined" style="font-size: 16px; font-variation-settings: 'FILL' 1;">favorite</span>
                <span>${item.likes_count}</span>
              </div>
            </div>
          `;
          leaderboardContainer.insertAdjacentHTML('beforeend', cardHtml);
        });
      }
    }
  } catch (error) {
    console.error("Failed to load statistics:", error);
  }
}

// Render dynamic minimalist high-contrast SVG trend graph
function renderAdminStatsChart(history) {
  const container = document.getElementById("adminChartContainer");
  container.innerHTML = "";

  if (!history || history.length === 0) return;

  container.style.position = "relative";

  const width = container.clientWidth || 600;
  const height = 240;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  // Find max value to auto-scale coordinates
  let maxVal = 10;
  history.forEach(h => {
    if (h.views > maxVal) maxVal = h.views;
    if (h.likes > maxVal) maxVal = h.likes;
    if (h.deployments > maxVal) maxVal = h.deployments;
  });
  maxVal = Math.ceil(maxVal / 10) * 10; // Round up to nearest 10 for gridlines

  // Calculate coordinates
  const pointsViews = [];
  const pointsLikes = [];
  const pointsDeploy = [];

  const stepX = chartWidth / (history.length - 1);

  history.forEach((h, i) => {
    const x = paddingLeft + (i * stepX);
    const yViews = paddingTop + chartHeight - ((h.views / maxVal) * chartHeight);
    const yLikes = paddingTop + chartHeight - ((h.likes / maxVal) * chartHeight);
    const yDeploy = paddingTop + chartHeight - ((h.deployments / maxVal) * chartHeight);

    pointsViews.push(`${x},${yViews}`);
    pointsLikes.push(`${x},${yLikes}`);
    pointsDeploy.push(`${x},${yDeploy}`);
  });

  // Build Gridlines HTML
  let gridlinesHtml = "";
  const gridSteps = 4;
  for (let i = 0; i <= gridSteps; i++) {
    const ratio = i / gridSteps;
    const y = paddingTop + chartHeight - (ratio * chartHeight);
    const labelVal = Math.round(ratio * maxVal);
    gridlinesHtml += `
      <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="var(--border-hairline)" stroke-dasharray="3,3" />
      <text x="${paddingLeft - 10}" y="${y + 4}" fill="var(--text-muted)" font-size="10" text-anchor="end" font-family="monospace">${labelVal}</text>
    `;
  }

  // Monthly Labels at bottom
  let labelsHtml = "";
  history.forEach((h, i) => {
    const x = paddingLeft + (i * stepX);
    labelsHtml += `
      <text x="${x}" y="${height - 8}" fill="var(--text-secondary)" font-size="10" text-anchor="middle" font-weight="700">${h.month}</text>
      <circle cx="${x}" cy="${paddingTop + chartHeight}" r="2" fill="var(--border-hairline)" />
    `;
  });

  // Create absolute glassmorphic tooltip box
  const tooltip = document.createElement("div");
  tooltip.id = "chartTooltip";
  tooltip.style.position = "absolute";
  tooltip.style.display = "none";
  tooltip.style.background = "var(--bg-sidebar)";
  tooltip.style.border = "1px solid var(--border-glass-focused)";
  tooltip.style.backdropFilter = "blur(16px)";
  tooltip.style.padding = "10px 14px";
  tooltip.style.borderRadius = "8px";
  tooltip.style.pointerEvents = "none";
  tooltip.style.zIndex = "10";
  tooltip.style.fontSize = "11px";
  tooltip.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.4)";
  tooltip.style.color = "var(--text-primary)";
  tooltip.style.minWidth = "130px";
  tooltip.style.transition = "opacity 0.15s ease, left 0.15s ease, top 0.15s ease";
  container.appendChild(tooltip);

  // Put it all together inside dynamic SVG
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", height);
  svg.style.overflow = "visible";

  svg.innerHTML = `
    <!-- Grid Layout -->
    ${gridlinesHtml}
    ${labelsHtml}

    <!-- Interactive Hover vertical guide -->
    <line id="hoverLine" x1="0" y1="${paddingTop}" x2="0" y2="${paddingTop + chartHeight}" stroke="var(--color-primary)" stroke-width="1.5" stroke-dasharray="3,3" opacity="0" pointer-events="none" />

    <!-- Trend Lines -->
    <polyline points="${pointsViews.join(' ')}" fill="none" stroke="var(--color-secondary)" stroke-width="2" />
    <polyline points="${pointsLikes.join(' ')}" fill="none" stroke="var(--color-danger)" stroke-width="2" />
    <polyline points="${pointsDeploy.join(' ')}" fill="none" stroke="var(--color-success)" stroke-width="2" />

    <!-- Data Markers -->
    ${history.map((h, i) => {
      const x = paddingLeft + (i * stepX);
      const yViews = paddingTop + chartHeight - ((h.views / maxVal) * chartHeight);
      const yLikes = paddingTop + chartHeight - ((h.likes / maxVal) * chartHeight);
      const yDeploy = paddingTop + chartHeight - ((h.deployments / maxVal) * chartHeight);
      return `
        <circle cx="${x}" cy="${yViews}" r="4" fill="var(--bg-dark-base)" stroke="var(--color-secondary)" stroke-width="2" class="chart-dot" style="cursor: pointer;" />
        <circle cx="${x}" cy="${yLikes}" r="4" fill="var(--bg-dark-base)" stroke="var(--color-danger)" stroke-width="2" class="chart-dot" style="cursor: pointer;" />
        <circle cx="${x}" cy="${yDeploy}" r="4" fill="var(--bg-dark-base)" stroke="var(--color-success)" stroke-width="2" class="chart-dot" style="cursor: pointer;" />
      `;
    }).join('')}

    <!-- Interactive Hover Markers -->
    <circle id="hoverViewsCircle" r="5.5" fill="var(--color-secondary)" stroke="#ffffff" stroke-width="1.5" opacity="0" pointer-events="none" />
    <circle id="hoverLikesCircle" r="5.5" fill="var(--color-danger)" stroke="#ffffff" stroke-width="1.5" opacity="0" pointer-events="none" />
    <circle id="hoverDeploysCircle" r="5.5" fill="var(--color-success)" stroke="#ffffff" stroke-width="1.5" opacity="0" pointer-events="none" />
  `;

  // Interaction handlers
  svg.addEventListener("mousemove", (e) => {
    const rect = svg.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (mouseX < paddingLeft || mouseX > width - paddingRight) {
      hideTooltip();
      return;
    }

    const relativeX = mouseX - paddingLeft;
    const idx = Math.round(relativeX / stepX);
    if (idx < 0 || idx >= history.length) {
      hideTooltip();
      return;
    }

    const h = history[idx];
    const x = paddingLeft + (idx * stepX);

    const yViews = paddingTop + chartHeight - ((h.views / maxVal) * chartHeight);
    const yLikes = paddingTop + chartHeight - ((h.likes / maxVal) * chartHeight);
    const yDeploy = paddingTop + chartHeight - ((h.deployments / maxVal) * chartHeight);

    const hLine = svg.getElementById("hoverLine");
    if (hLine) {
      hLine.setAttribute("x1", x);
      hLine.setAttribute("x2", x);
      hLine.setAttribute("opacity", "0.6");
    }

    const cViews = svg.getElementById("hoverViewsCircle");
    const cLikes = svg.getElementById("hoverLikesCircle");
    const cDeploys = svg.getElementById("hoverDeploysCircle");

    if (cViews) { cViews.setAttribute("cx", x); cViews.setAttribute("cy", yViews); cViews.setAttribute("opacity", "1"); }
    if (cLikes) { cLikes.setAttribute("cx", x); cLikes.setAttribute("cy", yLikes); cLikes.setAttribute("opacity", "1"); }
    if (cDeploys) { cDeploys.setAttribute("cx", x); cDeploys.setAttribute("cy", yDeploy); cDeploys.setAttribute("opacity", "1"); }

    tooltip.style.display = "block";
    tooltip.style.opacity = "1";
    if (x <= width / 2) {
      tooltip.style.left = `${x + 15}px`;
    } else {
      tooltip.style.left = `${x - 145}px`;
    }
    tooltip.style.top = `${Math.min(mouseY - 10, height - 95)}px`;

    const lang = appState.activeLanguage || "en";
    let labelViews = "Views";
    let labelLikes = "Likes";
    let labelDeploys = "Deploys";

    if (lang === "zh-TW") {
      labelViews = "查看次數";
      labelLikes = "按讚數";
      labelDeploys = "部署次數";
    } else if (lang === "zh-CN") {
      labelViews = "查看次数";
      labelLikes = "点赞数";
      labelDeploys = "部署次数";
    }

    tooltip.innerHTML = `
      <div style="font-weight: 700; margin-bottom: 6px; border-bottom: 1px solid var(--border-glass); padding-bottom: 4px; color: var(--color-primary); font-family: var(--font-heading); font-size: 11px;">${h.month}</div>
      <div style="display: flex; justify-content: space-between; gap: 16px; margin-bottom: 3px;">
        <span style="color: var(--text-secondary); display: flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 6px; height: 6px; background: var(--color-secondary); border-radius: 50%;"></span>${labelViews}:</span>
        <strong style="color: var(--text-primary); font-family: monospace;">${h.views}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; gap: 16px; margin-bottom: 3px;">
        <span style="color: var(--text-secondary); display: flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 6px; height: 6px; background: var(--color-danger); border-radius: 50%;"></span>${labelLikes}:</span>
        <strong style="color: var(--text-primary); font-family: monospace;">${h.likes}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; gap: 16px;">
        <span style="color: var(--text-secondary); display: flex; align-items: center; gap: 4px;"><span style="display: inline-block; width: 6px; height: 6px; background: var(--color-success); border-radius: 50%;"></span>${labelDeploys}:</span>
        <strong style="color: var(--text-primary); font-family: monospace;">${h.deployments}</strong>
      </div>
    `;
  });

  svg.addEventListener("mouseleave", () => {
    hideTooltip();
  });

  function hideTooltip() {
    tooltip.style.display = "none";
    tooltip.style.opacity = "0";
    const hLine = svg.getElementById("hoverLine");
    if (hLine) hLine.setAttribute("opacity", "0");

    const cViews = svg.getElementById("hoverViewsCircle");
    const cLikes = svg.getElementById("hoverLikesCircle");
    const cDeploys = svg.getElementById("hoverDeploysCircle");

    if (cViews) cViews.setAttribute("opacity", "0");
    if (cLikes) cLikes.setAttribute("opacity", "0");
    if (cDeploys) cDeploys.setAttribute("opacity", "0");
  }

  container.appendChild(svg);
}

// Admin Tab 3: Load Use Cases CRUD
async function loadAdminUseCases() {
  const tbody = document.getElementById("adminCasesTableBody");
  tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 20px; color: var(--text-muted);">Loading use cases...</td></tr>`;

  try {
    const res = await fetch('/api/use-cases');
    const cases = await res.json();
    appState.loadedAdminUseCases = cases;

    // Reset select all checkbox
    const selectAllCheckbox = document.getElementById("chkAdminSelectAllCases");
    if (selectAllCheckbox) {
      selectAllCheckbox.checked = false;
      selectAllCheckbox.onchange = (e) => {
        const isChecked = e.target.checked;
        document.querySelectorAll(".admin-case-checkbox").forEach(cb => {
          cb.checked = isChecked;
        });
      };
    }

    tbody.innerHTML = "";
    const activeLang = appState.activeLanguage || "en";
    cases.forEach(uc => {
      const tr = document.createElement("tr");
      tr.style.borderBottom = "1px solid var(--border-glass)";

      const trans = uc.translations ? uc.translations[activeLang] : null;
      const titleText = (trans && trans.title) ? trans.title : uc.title;

      let badgeMarkup = "";
      const badgeHtml = getUsecaseBadgeHtml(uc, activeLang);
      if (badgeHtml) {
        badgeMarkup = `<span style="margin-left: 6px;">${badgeHtml}</span>`;
      }

      const verifiedLabel = uc.isVerified 
        ? `<span class="tag" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.25); color: #10b981; font-weight: 700; display: inline-flex; align-items: center; gap: 4px; padding: 2px 6px; text-transform: uppercase; font-size: 10px; letter-spacing: 0.5px; border-radius: 4px;"><span class="material-symbols-outlined" style="font-size: 12px; font-weight: bold;">verified</span>${activeLang === 'en' ? 'Yes' : (activeLang === 'zh-TW' ? '是' : '是')}</span>`
        : `<span class="tag" style="background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.05); color: var(--text-muted); font-size: 10px; padding: 2px 6px; border-radius: 4px;">${activeLang === 'en' ? 'No' : (activeLang === 'zh-TW' ? '否' : '否')}</span>`;

      const isAssist = appState.isAssist === true;
      tr.innerHTML = `
        <td style="padding: 12px 8px; text-align: center;">
          <input type="checkbox" class="admin-case-checkbox" value="${uc.id}" style="cursor: pointer; width: 15px; height: 15px; accent-color: var(--color-primary);">
        </td>
        <td style="padding: 12px 8px; font-family: monospace; font-size: 11px; color: var(--color-primary); font-weight: 700;">${uc.id}</td>
        <td style="padding: 12px 8px; font-weight: 500;">
          <div style="display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
            <span>${titleText}</span>
            ${badgeMarkup}
          </div>
        </td>
        <td style="padding: 12px 8px; text-transform: capitalize; color: var(--text-secondary);">${uc.category}</td>
        <td style="padding: 12px 8px; color: var(--text-muted);">${uc.role}</td>
        <td style="padding: 12px 8px;">${verifiedLabel}</td>
        <td style="padding: 12px 8px; text-align: right; display: flex; gap: 8px; justify-content: flex-end;">
          <button class="nav-button btn-edit-case" style="height: 28px; padding: 0 10px; font-size: 11px;">${isAssist ? 'View' : 'Edit'}</button>
          ${isAssist ? '' : '<button class="nav-button btn-delete-case" style="height: 28px; padding: 0 10px; font-size: 11px; background: var(--color-danger); border-color: var(--color-danger); color: #ffffff !important;">Delete</button>'}
        </td>
      `;

      tbody.appendChild(tr);

      tr.querySelector(".btn-edit-case").onclick = () => openAdminEditModal(uc);
      if (!isAssist) {
        tr.querySelector(".btn-delete-case").onclick = () => deleteAdminUseCase(uc.id);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

// CRUD Modal Manager
let editingUseCaseId = null;

function toggleFormDualModeFields(isDualMode) {
  const dualIndicator = document.getElementById("adminFormDualModeIndicator");

  // Standard groupings
  const standardStepsGroup = document.getElementById("formCaseSteps") ? document.getElementById("formCaseSteps").closest(".form-group") : null;
  const standardPromptGroup = document.getElementById("formCasePrompt") ? document.getElementById("formCasePrompt").closest(".form-group") : null;
  const standardProTipGroup = document.getElementById("formCaseProTip") ? document.getElementById("formCaseProTip").closest(".form-group") : null;

  const twStepsGroup = document.getElementById("formTransZhtwSteps") ? document.getElementById("formTransZhtwSteps").closest(".form-group") : null;
  const twPromptGroup = document.getElementById("formTransZhtwPrompt") ? document.getElementById("formTransZhtwPrompt").closest(".form-group") : null;
  const twProTipGroup = document.getElementById("formTransZhtwProTip") ? document.getElementById("formTransZhtwProTip").closest(".form-group") : null;

  const cnStepsGroup = document.getElementById("formTransZhcnSteps") ? document.getElementById("formTransZhcnSteps").closest(".form-group") : null;
  const cnPromptGroup = document.getElementById("formTransZhcnPrompt") ? document.getElementById("formTransZhcnPrompt").closest(".form-group") : null;
  const cnProTipGroup = document.getElementById("formTransZhcnProTip") ? document.getElementById("formTransZhcnProTip").closest(".form-group") : null;

  // Advanced groupings
  const advStepsGroup = document.getElementById("formCaseAdvancedSteps") ? document.getElementById("formCaseAdvancedSteps").closest(".form-group") : null;
  const advPromptGroup = document.getElementById("formCaseAdvancedPrompt") ? document.getElementById("formCaseAdvancedPrompt").closest(".form-group") : null;
  const advProTipGroup = document.getElementById("formCaseAdvancedProTip") ? document.getElementById("formCaseAdvancedProTip").closest(".form-group") : null;

  const twAdvStepsGroup = document.getElementById("formTransZhtwAdvancedSteps") ? document.getElementById("formTransZhtwAdvancedSteps").closest(".form-group") : null;
  const twAdvPromptGroup = document.getElementById("formTransZhtwAdvancedPrompt") ? document.getElementById("formTransZhtwAdvancedPrompt").closest(".form-group") : null;
  const twAdvProTipGroup = document.getElementById("formTransZhtwAdvancedProTip") ? document.getElementById("formTransZhtwAdvancedProTip").closest(".form-group") : null;

  const cnAdvStepsGroup = document.getElementById("formTransZhcnAdvancedSteps") ? document.getElementById("formTransZhcnAdvancedSteps").closest(".form-group") : null;
  const cnAdvPromptGroup = document.getElementById("formTransZhcnAdvancedPrompt") ? document.getElementById("formTransZhcnAdvancedPrompt").closest(".form-group") : null;
  const cnAdvProTipGroup = document.getElementById("formTransZhcnAdvancedProTip") ? document.getElementById("formTransZhcnAdvancedProTip").closest(".form-group") : null;

  if (isDualMode) {
    if (dualIndicator) {
      dualIndicator.style.display = "block";
      const lang = appState.activeLanguage || "en";
      if (lang === "zh-TW") {
        dualIndicator.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--color-primary); margin-bottom: 4px;">
            <span class="material-symbols-outlined" style="font-size: 18px;">api</span> 
            已啟用雙重模式範本 (標準手動 + 進階連接器整合)
          </div>
          <div style="font-size: 11px; color: var(--text-secondary);">
            此學習案例同時支援手動檔案工作流程與進階連接器模式。在此雙重配置下，<strong>標準提示詞與步驟由系統自動對應，您僅需直接編輯進階整合提示詞與引導步驟。</strong>
          </div>
        `;
      } else if (lang === "zh-CN") {
        dualIndicator.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--color-primary); margin-bottom: 4px;">
            <span class="material-symbols-outlined" style="font-size: 18px;">api</span> 
            已启用双重模式范本 (标准手动 + 进阶连接器整合)
          </div>
          <div style="font-size: 11px; color: var(--text-secondary);">
            此学习案例同时支持手动档案工作流程与进阶连接器模式。在此双重配置下，<strong>标准提示词与步骤将由系统自动对应，您仅需直接编辑进阶整合提示词与引导步骤。</strong>
          </div>
        `;
      } else {
        dualIndicator.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--color-primary); margin-bottom: 4px;">
            <span class="material-symbols-outlined" style="font-size: 18px;">api</span> 
            Dual-Mode Template Enabled (Standalone + Advanced)
          </div>
          <div style="font-size: 11px; color: var(--text-secondary);">
            This playbook supports both standard manual file workflows and advanced integration modes. In this dual configuration, <strong>standard prompts are auto-managed, so you are editing the Advanced (Active-Integration) prompts directly.</strong>
          </div>
        `;
      }
    }

    // Hide standard fields
    [standardStepsGroup, standardPromptGroup, standardProTipGroup, twStepsGroup, twPromptGroup, twProTipGroup, cnStepsGroup, cnPromptGroup, cnProTipGroup].forEach(g => {
      if (g) g.style.display = "none";
    });

    // Show advanced fields
    [advStepsGroup, advPromptGroup, advProTipGroup, twAdvStepsGroup, twAdvPromptGroup, twAdvProTipGroup, cnAdvStepsGroup, cnAdvPromptGroup, cnAdvProTipGroup].forEach(g => {
      if (g) g.style.display = "block";
    });

  } else {
    if (dualIndicator) dualIndicator.style.display = "none";

    // Show standard fields
    [standardStepsGroup, standardPromptGroup, standardProTipGroup, twStepsGroup, twPromptGroup, twProTipGroup, cnStepsGroup, cnPromptGroup, cnProTipGroup].forEach(g => {
      if (g) g.style.display = "block";
    });

    // Hide advanced fields
    [advStepsGroup, advPromptGroup, advProTipGroup, twAdvStepsGroup, twAdvPromptGroup, twAdvProTipGroup, cnAdvStepsGroup, cnAdvPromptGroup, cnAdvProTipGroup].forEach(g => {
      if (g) g.style.display = "none";
    });
  }
}

function openAdminEditModal(uc) {
  const modal = document.getElementById("adminCaseEditModal");
  const title = document.getElementById("adminCaseModalTitle");
  const feedback = document.getElementById("adminFormFeedback");
  const form = document.getElementById("formAdminSaveCase");

  feedback.style.display = "none";
  form.reset();

  const idInput = document.getElementById("formCaseId");

  const isAssist = appState.isAssist === true;
  document.getElementById("btnAdminFormSave").style.display = isAssist ? "none" : "block";
  document.getElementById("btnAdminFormGemini").style.display = isAssist ? "none" : "flex";

  const inputs = form.querySelectorAll("input, select, textarea");
  inputs.forEach(input => {
    if (input.id === "formCaseId" && uc) {
      input.disabled = true;
    } else {
      input.disabled = isAssist;
    }
  });

  if (uc) {
    // EDIT MODE
    editingUseCaseId = uc.id;
    title.textContent = `Edit Playbook: ${uc.title}`;
    idInput.value = uc.id;
    idInput.disabled = true; // Immutable

    document.getElementById("formCaseCategory").value = uc.category || "";
    document.getElementById("formCaseTitle").value = uc.title || "";
    const roleVal = uc.role || "Lecturer";
    const selectEl = document.getElementById("formCaseRole");
    let optionExists = false;
    if (selectEl) {
      for (let i = 0; i < selectEl.options.length; i++) {
        if (selectEl.options[i].value === roleVal) {
          optionExists = true;
          break;
        }
      }
      selectEl.value = optionExists ? roleVal : "Lecturer";
    }
    document.getElementById("formCaseSummary").value = uc.summary || "";
    
    const stepsArray = Array.isArray(uc.steps) ? uc.steps : [];
    document.getElementById("formCaseSteps").value = stepsArray.join("\n");
    
    document.getElementById("formCasePrompt").value = uc.prompt || "";
    document.getElementById("formCaseProTip").value = uc.proTip || "";

    const advStepsArray = Array.isArray(uc.advancedSteps) ? uc.advancedSteps : (uc.translations && uc.translations.en && Array.isArray(uc.translations.en.advancedSteps) ? uc.translations.en.advancedSteps : []);
    document.getElementById("formCaseAdvancedSteps").value = advStepsArray.join("\n");
    document.getElementById("formCaseAdvancedPrompt").value = uc.advancedPrompt || (uc.translations && uc.translations.en && uc.translations.en.advancedPrompt) || "";
    document.getElementById("formCaseAdvancedProTip").value = uc.advancedProTip || (uc.translations && uc.translations.en && uc.translations.en.advancedProTip) || "";

    // Checkbox mapping Features safely
    const featuresArray = Array.isArray(uc.features) ? uc.features : [];
    const featureBoxes = document.querySelectorAll("input[name='formFeatures']");
    featureBoxes.forEach(box => {
      box.checked = featuresArray.includes(box.value);
    });

    // Checkbox mapping Connectors safely (supporting case-insensitive legacy mappings)
    const connectorsArray = Array.isArray(uc.connectors) ? uc.connectors : [];
    const connBoxes = document.querySelectorAll("input[name='formConnectors']");
    connBoxes.forEach(box => {
      const valLower = box.value.toLowerCase();
      box.checked = connectorsArray.some(c => {
        const cLower = c.toLowerCase();
        if (valLower.includes("drive") && cLower.includes("drive")) return true;
        if (valLower.includes("email") && cLower.includes("email")) return true;
        if (valLower.includes("lms") && cLower.includes("lms")) return true;
        if (valLower.includes("calendar") && (cLower.includes("calendar") || cLower.includes("google"))) return true;
        return cLower === valLower;
      });
    });

    // Checkbox mapping levels safely
    const levelArray = Array.isArray(uc.level) ? uc.level : [];
    const levelBoxes = document.querySelectorAll("input[name='formLevel']");
    levelBoxes.forEach(box => {
      box.checked = levelArray.includes(box.value);
    });

    // Set verified state
    const verifiedBox = document.getElementById("formCaseVerified");
    if (verifiedBox) {
      verifiedBox.checked = !!uc.isVerified;
    }

    // Translation values pre-population safely
    const trans = uc.translations || {};
    
    const zhtw = trans["zh-TW"] || {};
    document.getElementById("formTransZhtwTitle").value = zhtw.title || "";
    document.getElementById("formTransZhtwSummary").value = zhtw.summary || "";
    document.getElementById("formTransZhtwSteps").value = Array.isArray(zhtw.steps) ? zhtw.steps.join("\n") : "";
    document.getElementById("formTransZhtwPrompt").value = zhtw.prompt || "";
    document.getElementById("formTransZhtwProTip").value = zhtw.proTip || "";

    const zhtwAdvSteps = Array.isArray(zhtw.advancedSteps) ? zhtw.advancedSteps : [];
    document.getElementById("formTransZhtwAdvancedSteps").value = zhtwAdvSteps.join("\n");
    document.getElementById("formTransZhtwAdvancedPrompt").value = zhtw.advancedPrompt || "";
    document.getElementById("formTransZhtwAdvancedProTip").value = zhtw.advancedProTip || "";

    const zhcn = trans["zh-CN"] || {};
    document.getElementById("formTransZhcnTitle").value = zhcn.title || "";
    document.getElementById("formTransZhcnSummary").value = zhcn.summary || "";
    document.getElementById("formTransZhcnSteps").value = Array.isArray(zhcn.steps) ? zhcn.steps.join("\n") : "";
    document.getElementById("formTransZhcnPrompt").value = zhcn.prompt || "";
    document.getElementById("formTransZhcnProTip").value = zhcn.proTip || "";

    const zhcnAdvSteps = Array.isArray(zhcn.advancedSteps) ? zhcn.advancedSteps : [];
    document.getElementById("formTransZhcnAdvancedSteps").value = zhcnAdvSteps.join("\n");
    document.getElementById("formTransZhcnAdvancedPrompt").value = zhcn.advancedPrompt || "";
    document.getElementById("formTransZhcnAdvancedProTip").value = zhcn.advancedProTip || "";

  } else {
    // CREATE MODE
    editingUseCaseId = null;
    title.textContent = "Create New Playbook Template";
    idInput.value = "";
    idInput.disabled = false; // Mutable during creation

    // Default checked boxes
    document.querySelectorAll("input[name='formFeatures']").forEach(b => b.checked = false);
    document.querySelectorAll("input[name='formConnectors']").forEach(b => b.checked = false);
    document.querySelectorAll("input[name='formLevel']").forEach(b => b.checked = false);

    // Clear all form text inputs
    document.getElementById("formCaseCategory").value = "academic";
    document.getElementById("formCaseTitle").value = "";
    document.getElementById("formCaseRole").value = "Lecturer";
    document.getElementById("formCaseSummary").value = "";
    document.getElementById("formCaseSteps").value = "";
    document.getElementById("formCasePrompt").value = "";
    document.getElementById("formCaseProTip").value = "";
    document.getElementById("formCaseAdvancedSteps").value = "";
    document.getElementById("formCaseAdvancedPrompt").value = "";
    document.getElementById("formCaseAdvancedProTip").value = "";
    
    const verifiedBox = document.getElementById("formCaseVerified");
    if (verifiedBox) {
      verifiedBox.checked = false;
    }

    // Clear all translation inputs
    document.getElementById("formTransZhtwTitle").value = "";
    document.getElementById("formTransZhtwSummary").value = "";
    document.getElementById("formTransZhtwSteps").value = "";
    document.getElementById("formTransZhtwPrompt").value = "";
    document.getElementById("formTransZhtwProTip").value = "";
    document.getElementById("formTransZhtwAdvancedSteps").value = "";
    document.getElementById("formTransZhtwAdvancedPrompt").value = "";
    document.getElementById("formTransZhtwAdvancedProTip").value = "";

    document.getElementById("formTransZhcnTitle").value = "";
    document.getElementById("formTransZhcnSummary").value = "";
    document.getElementById("formTransZhcnSteps").value = "";
    document.getElementById("formTransZhcnPrompt").value = "";
    document.getElementById("formTransZhcnProTip").value = "";
    document.getElementById("formTransZhcnAdvancedSteps").value = "";
    document.getElementById("formTransZhcnAdvancedPrompt").value = "";
    document.getElementById("formTransZhcnAdvancedProTip").value = "";
  }

  // Handle conditional displaying of standard/advanced prompt fields
  const isDualMode = !!(uc && Array.isArray(uc.connectors) && uc.connectors.length > 0 && uc.connectorEssential === false);
  const dualCheckbox = document.getElementById("formCaseDualMode");
  if (dualCheckbox) {
    dualCheckbox.checked = isDualMode;
    dualCheckbox.onchange = (e) => toggleFormDualModeFields(e.target.checked);
  }

  toggleFormDualModeFields(isDualMode);
  modal.classList.add("active");
}

async function saveAdminUseCase() {
  if (appState.isAssist) {
    alert("Administrative assistants are not permitted to save or modify templates.");
    return;
  }
  const feedback = document.getElementById("adminFormFeedback");
  feedback.style.display = "none";

  const id = document.getElementById("formCaseId").value.trim();
  const category = document.getElementById("formCaseCategory").value;
  const title = document.getElementById("formCaseTitle").value.trim();
  const role = document.getElementById("formCaseRole").value.trim();
  const summary = document.getElementById("formCaseSummary").value.trim();
  const stepsRaw = document.getElementById("formCaseSteps").value;
  const prompt = document.getElementById("formCasePrompt").value.trim();
  const proTip = document.getElementById("formCaseProTip").value.trim();

  if (!id || !title || !category || !role) {
    feedback.textContent = "ID, Title, Category and Role are mandatory.";
    feedback.style.display = "block";
    return;
  }

  const steps = stepsRaw.split("\n").map(s => s.trim()).filter(s => s.length > 0);

  // Compile Features
  const features = [];
  document.querySelectorAll("input[name='formFeatures']:checked").forEach(b => features.push(b.value));

  // Compile Connectors
  const connectors = [];
  document.querySelectorAll("input[name='formConnectors']:checked").forEach(b => connectors.push(b.value));

  // Compile Levels
  const level = [];
  document.querySelectorAll("input[name='formLevel']:checked").forEach(b => level.push(b.value));

  // Compile Translations
  const transZhtwSteps = document.getElementById("formTransZhtwSteps").value.split("\n").map(s => s.trim()).filter(s => s.length > 0);
  const transZhtwAdvancedSteps = document.getElementById("formTransZhtwAdvancedSteps").value.split("\n").map(s => s.trim()).filter(s => s.length > 0);
  const transZhcnSteps = document.getElementById("formTransZhcnSteps").value.split("\n").map(s => s.trim()).filter(s => s.length > 0);
  const transZhcnAdvancedSteps = document.getElementById("formTransZhcnAdvancedSteps").value.split("\n").map(s => s.trim()).filter(s => s.length > 0);

  const advancedStepsRaw = document.getElementById("formCaseAdvancedSteps").value;
  const advancedPrompt = document.getElementById("formCaseAdvancedPrompt").value.trim();
  const advancedProTip = document.getElementById("formCaseAdvancedProTip").value.trim();
  const advancedSteps = advancedStepsRaw.split("\n").map(s => s.trim()).filter(s => s.length > 0);

  const translations = {
    "en": { 
      title, 
      summary, 
      steps, 
      prompt, 
      proTip,
      advancedSteps: advancedSteps.length > 0 ? advancedSteps : null,
      advancedPrompt: advancedPrompt || null,
      advancedProTip: advancedProTip || null
    },
    "zh-TW": {
      title: document.getElementById("formTransZhtwTitle").value.trim() || title,
      summary: document.getElementById("formTransZhtwSummary").value.trim() || summary,
      steps: transZhtwSteps.length > 0 ? transZhtwSteps : steps,
      prompt: document.getElementById("formTransZhtwPrompt").value.trim() || prompt,
      proTip: document.getElementById("formTransZhtwProTip").value.trim() || proTip,
      advancedSteps: transZhtwAdvancedSteps.length > 0 ? transZhtwAdvancedSteps : (advancedSteps.length > 0 ? advancedSteps : null),
      advancedPrompt: document.getElementById("formTransZhtwAdvancedPrompt").value.trim() || (advancedPrompt || null),
      advancedProTip: document.getElementById("formTransZhtwAdvancedProTip").value.trim() || (advancedProTip || null)
    },
    "zh-CN": {
      title: document.getElementById("formTransZhcnTitle").value.trim() || title,
      summary: document.getElementById("formTransZhcnSummary").value.trim() || summary,
      steps: transZhcnSteps.length > 0 ? transZhcnSteps : steps,
      prompt: document.getElementById("formTransZhcnPrompt").value.trim() || prompt,
      proTip: document.getElementById("formTransZhcnProTip").value.trim() || proTip,
      advancedSteps: transZhcnAdvancedSteps.length > 0 ? transZhcnAdvancedSteps : (advancedSteps.length > 0 ? advancedSteps : null),
      advancedPrompt: document.getElementById("formTransZhcnAdvancedPrompt").value.trim() || (advancedPrompt || null),
      advancedProTip: document.getElementById("formTransZhcnAdvancedProTip").value.trim() || (advancedProTip || null)
    }
  };

  const isDualMode = document.getElementById("formCaseDualMode").checked;
  const connectorGuide = { connectorEssential: !isDualMode };
  const isVerified = document.getElementById("formCaseVerified").checked;

  const payload = {
    id, category, title, role, summary, features, connectors, level, steps, prompt, proTip, connectorGuide, translations, isVerified
  };

  try {
    const isEdit = editingUseCaseId !== null;
    const endpoint = '/api/admin/use-cases';
    const method = isEdit ? 'PUT' : 'POST';

    const res = await fetch(endpoint, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (data.success) {
      document.getElementById("adminCaseEditModal").classList.remove("active");
      showToast(isEdit ? "Playbook template updated." : "New playbook template added!");
      loadAdminUseCases();
    } else {
      feedback.textContent = data.error || "Failed to save template. Please verify input ID is unique.";
      feedback.style.display = "block";
    }
  } catch (err) {
    feedback.textContent = "Server database connection failure.";
    feedback.style.display = "block";
  }
}

async function deleteAdminUseCase(id) {
  if (confirm(`Are you absolutely sure you want to delete the template [${id}]? This cannot be undone.`)) {
    try {
      const res = await fetch('/api/admin/use-cases', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      const data = await res.json();
      if (data.success) {
        showToast("Playbook template deleted.");
        loadAdminUseCases();
      }
    } catch (err) {
      console.error(err);
    }
  }
}

// ==========================================
// AI-Assisted Playbook Drafting & Diff Review (Vertex AI Gemini Integration)
// ==========================================
async function triggerGeminiPlaybookGeneration() {
  const btn = document.getElementById("btnAdminFormGemini");
  const feedback = document.getElementById("adminFormFeedback");
  
  if (feedback) {
    feedback.style.display = "none";
    feedback.textContent = "";
  }

  const title = document.getElementById("formCaseTitle").value.trim();
  const instructionEl = document.getElementById("formCaseGeminiInstruction");
  const instruction = instructionEl ? instructionEl.value.trim() : "";

  if (!title && !instruction) {
    if (feedback) {
      feedback.style.display = "block";
      feedback.textContent = "Please specify either a playbook title or custom instructions so Gemini can draft relevant content.";
      feedback.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  // Gather current inputs
  const category = document.getElementById("formCaseCategory").value;
  const role = document.getElementById("formCaseRole").value.trim() || "Lecturer";
  const isDualMode = document.getElementById("formCaseDualMode").checked;

  const features = [];
  document.querySelectorAll("input[name='formFeatures']:checked").forEach(b => features.push(b.value));
  
  const connectors = [];
  document.querySelectorAll("input[name='formConnectors']:checked").forEach(b => connectors.push(b.value));

  const level = [];
  document.querySelectorAll("input[name='formLevel']:checked").forEach(b => level.push(b.value));

  // Activate dynamic Gemini generating loader overlay
  const loader = document.getElementById("geminiLoadingOverlay");
  if (loader) {
    const lang = appState.activeLanguage || "en";
    const genLabel = document.getElementById("adminFormLabelGenerating");
    const genDesc = document.getElementById("adminFormLabelGeneratingDesc");
    if (genLabel && genDesc) {
      if (lang === "zh-TW") {
        genLabel.textContent = "Gemini 正在生成學習案例中...";
        genDesc.textContent = "正在即時優化導引、提示詞與繁體中文本地化資料。";
      } else if (lang === "zh-CN") {
        genLabel.textContent = "Gemini 正在生成学习案例中...";
        genDesc.textContent = "正在即时优化指引、提示词与简体中文本地化数据。";
      } else {
        genLabel.textContent = "Gemini is drafting playbook...";
        genDesc.textContent = "Optimizing guidelines, prompts, and localizations in real-time.";
      }
    }
    loader.classList.add("active");
  }

  // Change button state
  const originalBtnHtml = btn.innerHTML;
  btn.disabled = true;
  btn.style.opacity = "0.7";
  btn.innerHTML = `<span class="material-symbols-outlined" style="font-size: 16px; animation: spin 1s linear infinite;">autorenew</span> <span>Generating...</span>`;

  try {
    const res = await fetch('/api/admin/generate-gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: editingUseCaseId, // null if creation
        title,
        category,
        features,
        connectors,
        role,
        level,
        isDualMode,
        instruction
      })
    });

    let data = null;
    try {
      data = await res.json();
    } catch (parseErr) {
      console.error("Failed to parse error response JSON:", parseErr);
    }

    if (!res.ok || !data || !data.success) {
      const errMsg = (data && data.error) ? data.error : "Failed to generate content from Gemini.";
      if (feedback) {
        feedback.style.display = "block";
        feedback.textContent = errMsg;
        feedback.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const aiRes = data.result;

    // Successful generation: clear the instruction field
    if (instructionEl) {
      instructionEl.value = "";
    }

    if (!editingUseCaseId) {
      // CREATION MODE: Apply suggestions directly!
      applyGeminiSuggestions(aiRes, isDualMode);
      showToast("Gemini has successfully drafted your new playbook!");
    } else {
      // EDITING MODE: Show Side-by-Side Diff modal!
      showDiffViewer(aiRes, isDualMode);
    }

  } catch (err) {
    console.error("Gemini generation error:", err);
    if (feedback) {
      feedback.style.display = "block";
      feedback.textContent = "An error occurred during Gemini AI drafting: " + err.message;
      feedback.scrollIntoView({ behavior: 'smooth' });
    }
  } finally {
    if (loader) {
      loader.classList.remove("active");
    }
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.innerHTML = originalBtnHtml;
  }
}

function applyGeminiSuggestions(aiRes, isDualMode) {
  // English (en)
  const en = aiRes.en || {};
  if (en.title) {
    document.getElementById("formCaseTitle").value = en.title;
  }
  if (aiRes.category) {
    document.getElementById("formCaseCategory").value = aiRes.category;
  }
  if (aiRes.role) {
    const rVal = aiRes.role.trim();
    const select = document.getElementById("formCaseRole");
    if (select) {
      let found = false;
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value.toLowerCase() === rVal.toLowerCase()) {
          select.selectedIndex = i;
          found = true;
          break;
        }
      }
      if (!found) {
        const lower = rVal.toLowerCase();
        if (lower.includes("lecturer") || lower.includes("teacher") || lower.includes("educator") || lower.includes("faculty")) {
          select.value = "Lecturer";
        } else if (lower.includes("assistant") || lower.includes("ta")) {
          select.value = "TA";
        } else if (lower.includes("student") || lower.includes("club")) {
          select.value = "Student";
        } else if (lower.includes("leader") || lower.includes("head") || lower.includes("director")) {
          select.value = "Program Leader";
        } else if (lower.includes("dean") || lower.includes("educational")) {
          select.value = "Dean";
        } else if (lower.includes("it") || lower.includes("admin") || lower.includes("sysadmin")) {
          select.value = "IT Admin";
        } else if (lower.includes("affairs") || lower.includes("sao")) {
          select.value = "SAO";
        } else if (lower.includes("security") || lower.includes("safety") || lower.includes("officer")) {
          select.value = "Security";
        } else if (lower.includes("finance") || lower.includes("audit") || lower.includes("accountant")) {
          select.value = "Finance";
        } else {
          select.value = "Lecturer";
        }
      }
    }
  }
  if (aiRes.id && !editingUseCaseId) {
    document.getElementById("formCaseId").value = aiRes.id;
  }

  // Apply Features suggestions if returned by Gemini
  if (Array.isArray(aiRes.features)) {
    const featureBoxes = document.querySelectorAll("input[name='formFeatures']");
    featureBoxes.forEach(box => {
      box.checked = aiRes.features.includes(box.value);
    });
  }

  // Apply Connectors suggestions if returned by Gemini
  if (Array.isArray(aiRes.connectors)) {
    const connBoxes = document.querySelectorAll("input[name='formConnectors']");
    connBoxes.forEach(box => {
      const valLower = box.value.toLowerCase();
      // Case-insensitive / legacy compatible check
      box.checked = aiRes.connectors.some(c => {
        const cLower = c.toLowerCase();
        if (valLower.includes("drive") && cLower.includes("drive")) return true;
        if (valLower.includes("email") && cLower.includes("email")) return true;
        if (valLower.includes("lms") && cLower.includes("lms")) return true;
        if (valLower.includes("calendar") && (cLower.includes("calendar") || cLower.includes("google"))) return true;
        return cLower === valLower;
      });
    });
  }

  // Apply Dual-Mode flag suggestions if returned by Gemini
  const suggestedIsDualMode = typeof aiRes.isDualMode === "boolean" ? aiRes.isDualMode : isDualMode;
  const dualCheckbox = document.getElementById("formCaseDualMode");
  if (dualCheckbox) {
    dualCheckbox.checked = suggestedIsDualMode;
    toggleFormDualModeFields(suggestedIsDualMode);
  }

  document.getElementById("formCaseSummary").value = en.summary || "";
  
  // Populate standard English steps/prompt/proTip
  const steps = Array.isArray(en.steps) ? en.steps : [];
  document.getElementById("formCaseSteps").value = steps.join("\n");
  document.getElementById("formCasePrompt").value = en.prompt || "";
  document.getElementById("formCaseProTip").value = en.proTip || "";

  // Populate advanced English steps/prompt/proTip
  const advSteps = Array.isArray(en.advancedSteps) ? en.advancedSteps : [];
  document.getElementById("formCaseAdvancedSteps").value = advSteps.join("\n");
  document.getElementById("formCaseAdvancedPrompt").value = en.advancedPrompt || "";
  document.getElementById("formCaseAdvancedProTip").value = en.advancedProTip || "";

  // Traditional Chinese (zh-TW)
  const zhtw = aiRes["zh-TW"] || {};
  document.getElementById("formTransZhtwTitle").value = zhtw.title || document.getElementById("formCaseTitle").value;
  document.getElementById("formTransZhtwSummary").value = zhtw.summary || "";
  
  const twSteps = Array.isArray(zhtw.steps) ? zhtw.steps : [];
  document.getElementById("formTransZhtwSteps").value = twSteps.join("\n");
  document.getElementById("formTransZhtwPrompt").value = zhtw.prompt || "";
  document.getElementById("formTransZhtwProTip").value = zhtw.proTip || "";

  const twAdvSteps = Array.isArray(zhtw.advancedSteps) ? zhtw.advancedSteps : [];
  document.getElementById("formTransZhtwAdvancedSteps").value = twAdvSteps.join("\n");
  document.getElementById("formTransZhtwAdvancedPrompt").value = zhtw.advancedPrompt || "";
  document.getElementById("formTransZhtwAdvancedProTip").value = zhtw.advancedProTip || "";

  // Simplified Chinese (zh-CN)
  const zhcn = aiRes["zh-CN"] || {};
  document.getElementById("formTransZhcnTitle").value = zhcn.title || document.getElementById("formCaseTitle").value;
  document.getElementById("formTransZhcnSummary").value = zhcn.summary || "";

  const cnSteps = Array.isArray(zhcn.steps) ? zhcn.steps : [];
  document.getElementById("formTransZhcnSteps").value = cnSteps.join("\n");
  document.getElementById("formTransZhcnPrompt").value = zhcn.prompt || "";
  document.getElementById("formTransZhcnProTip").value = zhcn.proTip || "";

  const cnAdvSteps = Array.isArray(zhcn.advancedSteps) ? zhcn.advancedSteps : [];
  document.getElementById("formTransZhcnAdvancedSteps").value = cnAdvSteps.join("\n");
  document.getElementById("formTransZhcnAdvancedPrompt").value = zhcn.advancedPrompt || "";
  document.getElementById("formTransZhcnAdvancedProTip").value = zhcn.advancedProTip || "";
}

function showDiffViewer(aiRes, isDualMode) {
  const modal = document.getElementById("adminDiffViewerModal");
  const scrollContainer = document.getElementById("adminDiffScrollContainer");
  if (!modal || !scrollContainer) return;
  
  scrollContainer.innerHTML = "";

  // Compile list of comparison elements
  const diffItems = [];

  // Compile Current checked states
  const currentFeatures = [];
  document.querySelectorAll("input[name='formFeatures']:checked").forEach(b => currentFeatures.push(b.value));
  
  const currentConnectors = [];
  document.querySelectorAll("input[name='formConnectors']:checked").forEach(b => currentConnectors.push(b.value));
  
  const currentIsDualMode = document.getElementById("formCaseDualMode").checked;

  // Compile Proposed checked states
  const proposedFeatures = Array.isArray(aiRes.features) ? aiRes.features : currentFeatures;
  const proposedConnectors = Array.isArray(aiRes.connectors) ? aiRes.connectors : currentConnectors;
  const proposedIsDualMode = typeof aiRes.isDualMode === "boolean" ? aiRes.isDualMode : currentIsDualMode;

  // 1. Required Gemini Features
  diffItems.push({
    label: "Required Gemini Features",
    current: currentFeatures.join(", ") || "(None)",
    proposed: proposedFeatures.join(", ") || "(None)"
  });

  // 2. Required Connectors
  diffItems.push({
    label: "Required Connectors",
    current: currentConnectors.join(", ") || "(None)",
    proposed: proposedConnectors.join(", ") || "(None)"
  });

  // 3. Enable Dual-Mode Template
  diffItems.push({
    label: "Enable Dual-Mode Template with Advanced Prompt",
    current: currentIsDualMode ? "Enabled (Dual-Mode)" : "Disabled (Standard Prompt Only)",
    proposed: proposedIsDualMode ? "Enabled (Dual-Mode)" : "Disabled (Standard Prompt Only)"
  });

  // English Summary
  diffItems.push({
    label: "English Summary Description",
    current: document.getElementById("formCaseSummary").value,
    proposed: aiRes.en?.summary || ""
  });

  const hasDualMode = currentIsDualMode || proposedIsDualMode;

  if (hasDualMode) {
    // English Advanced Steps
    diffItems.push({
      label: "English Advanced Steps (Active-Integration Mode)",
      current: document.getElementById("formCaseAdvancedSteps").value,
      proposed: Array.isArray(aiRes.en?.advancedSteps) ? aiRes.en.advancedSteps.join("\n") : ""
    });
    // English Advanced Prompt
    diffItems.push({
      label: "English Advanced Prompt (Active-Integration Mode)",
      current: document.getElementById("formCaseAdvancedPrompt").value,
      proposed: aiRes.en?.advancedPrompt || ""
    });
    // English Advanced Pro Tip
    diffItems.push({
      label: "English Advanced Pro Tip (Active-Integration Mode)",
      current: document.getElementById("formCaseAdvancedProTip").value,
      proposed: aiRes.en?.advancedProTip || ""
    });
  }

  // English Steps
  diffItems.push({
    label: "English Guide Steps",
    current: document.getElementById("formCaseSteps").value,
    proposed: Array.isArray(aiRes.en?.steps) ? aiRes.en.steps.join("\n") : ""
  });
  // English Prompt
  diffItems.push({
    label: "English Prompt Instruction",
    current: document.getElementById("formCasePrompt").value,
    proposed: aiRes.en?.prompt || ""
  });
  // English Pro Tip
  diffItems.push({
    label: "English Pro Tip",
    current: document.getElementById("formCaseProTip").value,
    proposed: aiRes.en?.proTip || ""
  });

  // Traditional Chinese Translations
  diffItems.push({
    label: "Traditional Chinese Translated Title",
    current: document.getElementById("formTransZhtwTitle").value,
    proposed: aiRes["zh-TW"]?.title || document.getElementById("formCaseTitle").value
  });
  diffItems.push({
    label: "Traditional Chinese Translated Summary",
    current: document.getElementById("formTransZhtwSummary").value,
    proposed: aiRes["zh-TW"]?.summary || ""
  });

  if (hasDualMode) {
    diffItems.push({
      label: "Traditional Chinese Advanced Steps",
      current: document.getElementById("formTransZhtwAdvancedSteps").value,
      proposed: Array.isArray(aiRes["zh-TW"]?.advancedSteps) ? aiRes["zh-TW"].advancedSteps.join("\n") : ""
    });
    diffItems.push({
      label: "Traditional Chinese Advanced Prompt",
      current: document.getElementById("formTransZhtwAdvancedPrompt").value,
      proposed: aiRes["zh-TW"]?.advancedPrompt || ""
    });
    diffItems.push({
      label: "Traditional Chinese Advanced Pro Tip",
      current: document.getElementById("formTransZhtwAdvancedProTip").value,
      proposed: aiRes["zh-TW"]?.advancedProTip || ""
    });
  }

  diffItems.push({
    label: "Traditional Chinese Steps",
    current: document.getElementById("formTransZhtwSteps").value,
    proposed: Array.isArray(aiRes["zh-TW"]?.steps) ? aiRes["zh-TW"].steps.join("\n") : ""
  });
  diffItems.push({
    label: "Traditional Chinese Prompt",
    current: document.getElementById("formTransZhtwPrompt").value,
    proposed: aiRes["zh-TW"]?.prompt || ""
  });
  diffItems.push({
    label: "Traditional Chinese Pro Tip",
    current: document.getElementById("formTransZhtwProTip").value,
    proposed: aiRes["zh-TW"]?.proTip || ""
  });

  // Simplified Chinese Translations
  diffItems.push({
    label: "Simplified Chinese Translated Title",
    current: document.getElementById("formTransZhcnTitle").value,
    proposed: aiRes["zh-CN"]?.title || document.getElementById("formCaseTitle").value
  });
  diffItems.push({
    label: "Simplified Chinese Translated Summary",
    current: document.getElementById("formTransZhcnSummary").value,
    proposed: aiRes["zh-CN"]?.summary || ""
  });

  if (hasDualMode) {
    diffItems.push({
      label: "Simplified Chinese Advanced Steps",
      current: document.getElementById("formTransZhcnAdvancedSteps").value,
      proposed: Array.isArray(aiRes["zh-CN"]?.advancedSteps) ? aiRes["zh-CN"].advancedSteps.join("\n") : ""
    });
    diffItems.push({
      label: "Simplified Chinese Advanced Prompt",
      current: document.getElementById("formTransZhcnAdvancedPrompt").value,
      proposed: aiRes["zh-CN"]?.advancedPrompt || ""
    });
    diffItems.push({
      label: "Simplified Chinese Advanced Pro Tip",
      current: document.getElementById("formTransZhcnAdvancedProTip").value,
      proposed: aiRes["zh-CN"]?.advancedProTip || ""
    });
  }

  diffItems.push({
    label: "Simplified Chinese Steps",
    current: document.getElementById("formTransZhcnSteps").value,
    proposed: Array.isArray(aiRes["zh-CN"]?.steps) ? aiRes["zh-CN"].steps.join("\n") : ""
  });
  diffItems.push({
    label: "Simplified Chinese Prompt",
    current: document.getElementById("formTransZhcnPrompt").value,
    proposed: aiRes["zh-CN"]?.prompt || ""
  });
  diffItems.push({
    label: "Simplified Chinese Pro Tip",
    current: document.getElementById("formTransZhcnProTip").value,
    proposed: aiRes["zh-CN"]?.proTip || ""
  });

  // Render comparative items
  diffItems.forEach(item => {
    // Only display if at least one of the sides is not empty, or they differ
    if (!item.current && !item.proposed) return;
    
    const isDifferent = item.current.trim() !== item.proposed.trim();

    const section = document.createElement("div");
    section.style.display = "flex";
    section.style.flexDirection = "column";
    section.style.gap = "6px";
    section.style.borderBottom = "1px solid var(--border-glass)";
    section.style.paddingBottom = "12px";

    section.innerHTML = `
      <div style="font-size: 11px; font-weight: 700; color: ${isDifferent ? 'var(--color-primary)' : 'var(--text-secondary)'}; display: flex; align-items: center; gap: 4px;">
        <span class="material-symbols-outlined" style="font-size: 14px;">${isDifferent ? 'pending_actions' : 'check_circle'}</span>
        <span>${item.label}</span>
        ${isDifferent ? '<span style="font-size: 9px; padding: 2px 6px; border-radius: 4px; background: rgba(79, 70, 229, 0.15); color: var(--color-primary); margin-left: auto;">OPTIMIZED SUGGESTION AVAILABLE</span>' : ''}
      </div>
      <div style="display: flex; flex-direction: column; border: 1px solid ${isDifferent ? 'var(--color-primary)' : 'var(--border-glass)'}; border-radius: 8px; overflow: hidden; background: var(--bg-dark-surface);">
        ${renderLineDiff(item.current, item.proposed)}
      </div>
    `;
    scrollContainer.appendChild(section);
  });

  // Bind Accept / Reject buttons
  document.getElementById("btnDiffAccept").onclick = () => {
    applyGeminiSuggestions(aiRes, isDualMode);
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
    showToast("Gemini suggestions applied successfully to form!");
  };

  document.getElementById("btnDiffReject").onclick = () => {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
    showToast("Gemini suggestions declined. Kept current version.");
  };

  document.getElementById("adminDiffViewerClose").onclick = () => {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  };

  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);
}

// PREMIUM LCS SPLIT LINE-BY-LINE ALIGNMENT DIFF ENGINE
function renderLineDiff(oldStr, newStr) {
  const lines1 = (oldStr || "").split("\n");
  const lines2 = (newStr || "").split("\n");
  
  const m = lines1.length;
  const n = lines2.length;
  
  // DP table for Longest Common Subsequence
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (lines1[i - 1].trim() === lines2[j - 1].trim()) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  
  // Traceback to align
  let i = m, j = n;
  const aligned = [];
  
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && lines1[i - 1].trim() === lines2[j - 1].trim()) {
      aligned.unshift({ op: "equal", left: lines1[i - 1], right: lines2[j - 1] });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      aligned.unshift({ op: "insert", left: "", right: lines2[j - 1] });
      j--;
    } else {
      aligned.unshift({ op: "delete", left: lines1[i - 1], right: "" });
      i--;
    }
  }
  
  let html = "";
  aligned.forEach((line, idx) => {
    const isLast = idx === aligned.length - 1;
    const borderStyle = isLast ? "" : "border-bottom: 1px solid var(--border-glass);";
    
    if (line.op === "equal") {
      html += `
        <div class="diff-row" style="${borderStyle}">
          <div class="diff-cell-left" style="color: var(--text-secondary); background: transparent;">
            ${escapeHtmlDiff(line.left)}
          </div>
          <div class="diff-cell-right" style="color: var(--text-primary); background: transparent;">
            ${escapeHtmlDiff(line.right)}
          </div>
        </div>
      `;
    } else if (line.op === "insert") {
      html += `
        <div class="diff-row" style="${borderStyle} background: rgba(34, 197, 94, 0.08);">
          <div class="diff-cell-left" style="color: transparent; background: transparent; user-select: none;">
            &nbsp;
          </div>
          <div class="diff-cell-right" style="color: #22c55e; font-weight: 600;">
            + ${escapeHtmlDiff(line.right)}
          </div>
        </div>
      `;
    } else if (line.op === "delete") {
      html += `
        <div class="diff-row" style="${borderStyle} background: rgba(239, 68, 68, 0.08);">
          <div class="diff-cell-left" style="color: #ef4444; text-decoration: line-through; font-weight: 600;">
            - ${escapeHtmlDiff(line.left)}
          </div>
          <div class="diff-cell-right" style="color: transparent; background: transparent; user-select: none;">
            &nbsp;
          </div>
        </div>
      `;
    }
  });
  
  return html;
}

function escapeHtmlDiff(str) {
  return (str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==========================================================================
   INTERACTIVE ADOPTION ROADMAP TIMELINE LOGIC (REDESIGNED V2)
   ========================================================================== */

const TIMELINE_STAGES_STORAGE_KEY = "ge_adoption_stages_v3";
const VERIFICATION_STORAGE_KEY = "ge_verification_checkpoints_v3";

const defaultTimelineStages = [
  {
    "id": "day0",
    "title": "Month 1: Foundation Setup",
    "titleZh": "第 1 個月：基礎環境建立 (Day 0)",
    "subtitle": "Tech Provisioning",
    "subtitleZh": "技術環境配置與部署",
    "color": "#6366f1",
    "description": "Initialize backend environments, configure Identity Provider (IdP) authentication loops, and map baseline database structures before the first rollout phase.",
    "descriptionZh": "初始化後端環境、配置身份提供商 (IdP) 認證迴路，並在首階段推廣前建立基礎資料庫結構。",
    "playbookIds": [
      "it_service_desk",
      "trade_settlement_reconciliation"
    ]
  },
  {
    "id": "pre",
    "title": "Months 2-3: Core Pilots & Launch",
    "titleZh": "第 2-3 個月：核心試點啟動",
    "subtitle": "Launch & Onboard",
    "subtitleZh": "試點啟動與引導",
    "color": "#f59e0b",
    "description": "Align core advisory playbooks, upload underwriting criteria, and coordinate initial AI assistant designs ahead of active pilot groups.",
    "descriptionZh": "整理核心諮詢方案、上傳授信評估標準，並在試點團隊啟用前協調 AI 輔助智能體之基礎設計。",
    "playbookIds": [
      "equity_research_copilot",
      "underwriting_manual_creator"
    ]
  },
  {
    "id": "sem1",
    "title": "Months 4-9: Division Expansion",
    "titleZh": "第 4-9 個月：跨部門擴展",
    "subtitle": "Evaluation Pilot",
    "subtitleZh": "擴展與評估試點",
    "color": "#10b981",
    "description": "Onboard clients and portfolio managers, establish baseline AI familiarity, and register support queues.",
    "descriptionZh": "引導客戶與資產經理、建立對 AI 的基礎熟練度並登記服務支援佇列。",
    "playbookIds": [
      "portfolio_advisory_architect",
      "compliance_assistance_bot"
    ]
  },
  {
    "id": "mid",
    "title": "Months 10-18+: Enterprise Scale",
    "titleZh": "第 10-18+ 個月：企業級規模推廣",
    "subtitle": "Scale & Evaluation",
    "subtitleZh": "全面規模化評估",
    "color": "#3b82f6",
    "description": "Launch targeted pilots for asset evaluations, portfolio-based grading assistance, and operations performance audits.",
    "descriptionZh": "啟動資產評估、基於組合的分析協助和運營表現審計的針對性試點。",
    "playbookIds": [
      "client_meeting_brief",
      "credit_risk_assessment",
      "portfolio_sentiment_tracker"
    ]
  },
  {
    "id": "end",
    "title": "Continuous Security & Governance Compliance",
    "titleZh": "持續性安全與合規監管 (Audit & Security)",
    "subtitle": "Audit & Security",
    "subtitleZh": "持續審計與安全合規",
    "color": "#ef4444",
    "description": "Secure data repository sweeps, audit financial reporting, compile regulatory analytics, and lock audit portals.",
    "descriptionZh": "執行安全數據儲存庫清理、審計財務報表、編譯法規分析數據並鎖定審計門戶。",
    "playbookIds": [
      "fraud_incident_responder"
    ]
  },
  {
    "id": "track2",
    "title": "Continuous Rolling Security & Governance Compliance",
    "titleZh": "持續性滾動安全與合規監管 (Track 2)",
    "subtitle": "Continuous (Track 2)",
    "subtitleZh": "軌道二：常態性推進",
    "color": "#a855f7",
    "description": "Ongoing operational milestones, customer-led co-development, and constant security optimization reviews.",
    "descriptionZh": "持續進行的運營里程碑、客戶主導的協作計畫以及持續的安全與合規優化審查。",
    "playbookIds": [
      "customer_sentiment_auditor",
      "hr_onboarding_wizard",
      "email_priority_digest"
    ]
  }
];

let roleVerificationCheckpoints = {
  "IT Operator": {
    "day0": [
      {
        "id": "ita_d0_1",
        "text": "Configure federated IdP single sign-on (SSO) loops with corporate active directories",
        "textZh": "與企業活動目錄配置 IdP 聯邦單一登入 (SSO) 整合"
      },
      {
        "id": "ita_d0_2",
        "text": "Establish enterprise workspace secure tenant boundaries for cloud data security",
        "textZh": "為雲端數據與 AI 工作空間建立企業級安全租戶隔離邊界"
      }
    ],
    "pre": [
      {
        "id": "ita_pre_1",
        "text": "Validate banking CRM API endpoints and sandbox connectivity",
        "textZh": "驗證與測試銀行 CRM 系統 API 端點與沙盒連接性"
      },
      {
        "id": "ita_pre_2",
        "text": "Verify core cloud drive connector sharing permissions and compliance rules",
        "textZh": "審查與驗證雲端硬碟連接器的共用存取規則與合規設定"
      }
    ],
    "sem1": [
      {
        "id": "ita_sem1_1",
        "text": "Monitor system performance and API quota usage logs in cloud console",
        "textZh": "在雲端控制台監控系統效能、請求延遲與 API 配額使用日誌"
      },
      {
        "id": "ita_sem1_2",
        "text": "Review onboarding group provisioning metrics for corporate employees",
        "textZh": "審查企業員工之自動化帳號配置與群組導入指標"
      }
    ],
    "mid": [
      {
        "id": "ita_mid_1",
        "text": "Audit active workspace sharing metrics and restrict public access links",
        "textZh": "審計活動中的工作區共享指標並限制公開存取連結"
      },
      {
        "id": "ita_mid_2",
        "text": "Verify automated banking CRM enrollment synchronization scripts",
        "textZh": "驗證 CRM 名單與 AI 平台之自動化同步排程腳本"
      }
    ],
    "end": [
      {
        "id": "ita_end_1",
        "text": "Coordinate database administrative audit locks on customer asset portfolios",
        "textZh": "協調並鎖定客戶資產包檔案之管理稽核權限"
      },
      {
        "id": "ita_end_2",
        "text": "Compile platform API usage metrics and generate usage reports",
        "textZh": "彙整平台 API 與運算資源之使用指標並產生使用分析報告"
      }
    ],
    "track2": [
      {
        "id": "ita_t2_1",
        "text": "Conduct rolling security and network routing vulnerability scans",
        "textZh": "定期執行滾動式安全與網路路由弱點掃描"
      },
      {
        "id": "ita_t2_2",
        "text": "Maintain and update connector integration frameworks for cloud resources",
        "textZh": "維護並更新各項雲端資源連接器整合框架"
      }
    ]
  },
  "Financial Analyst": {
    "day0": [
      {
        "id": "lec_d0_1",
        "text": "Acquire role-based analyst access tokens and verify sign-in loops",
        "textZh": "取得分析師權限 Token 並驗證登入整合迴路"
      },
      {
        "id": "lec_d0_2",
        "text": "Complete financial platform onboarding tutorials and sandbox tests",
        "textZh": "完成金融平台應用導入教學與沙盒演練"
      }
    ],
    "pre": [
      {
        "id": "lec_pre_1",
        "text": "Prepare and review corporate filings and transcript sources for upload",
        "textZh": "整理並審查企業 10-K 申報、財務報告與對話源文件"
      },
      {
        "id": "lec_pre_2",
        "text": "Draft analyst prompt recipes and custom Agent instructions in Canvas Mode",
        "textZh": "在 Canvas Mode 中編寫分析專用 Prompt 配方與客製化 Agent 指令"
      }
    ],
    "sem1": [
      {
        "id": "lec_sem1_1",
        "text": "Publish Equity Research Copilot Agent links on the research portal",
        "textZh": "在研究門戶顯著位置發布股權研究 Copilot 智能體存取連結"
      },
      {
        "id": "lec_sem1_2",
        "text": "Deliver introductory analyst briefings on AI compliance and prompting",
        "textZh": "向分析團隊講授關於 AI 使用合規、防範幻覺與 Prompt 技巧之導引"
      }
    ],
    "mid": [
      {
        "id": "lec_mid_1",
        "text": "Deploy evaluation templates to help analysts review corporate transcripts",
        "textZh": "部署財務比率評核助理協助同仁審查企業申報材料與報告"
      },
      {
        "id": "lec_mid_2",
        "text": "Review user feedback reports regarding Equity Research Agent helpfulness",
        "textZh": "收集並審查分析同仁關於股權研究 Agent 實用性之問卷"
      }
    ],
    "end": [
      {
        "id": "lec_end_1",
        "text": "Create structured market valuation summaries inside NotebookLM",
        "textZh": "在 NotebookLM 中建立結構化的市場估值與分析備考指南"
      },
      {
        "id": "lec_end_2",
        "text": "Audit secure document folders to ensure zero financial data leaks",
        "textZh": "稽核安全檔案目錄夾，確保敏感金融與財報資訊零外洩"
      }
    ],
    "track2": [
      {
        "id": "lec_t2_1",
        "text": "Analyze research portal usage and analyst engagement metrics",
        "textZh": "分析研究門戶註冊、AI 互動率與研究成果轉化指標"
      },
      {
        "id": "lec_t2_2",
        "text": "Attend end-of-year corporate financial AI adoption roundtables",
        "textZh": "出席年終企業金融 AI 導入與成效分享圓桌會議"
      }
    ]
  },
  "Relationship Manager": {
    "day0": [
      {
        "id": "ta_d0_1",
        "text": "Confirm relationship assistant account provisioning on the platform",
        "textZh": "確認客戶經理助理帳號權限已在平台上成功配置"
      },
      {
        "id": "ta_d0_2",
        "text": "Establish secure collaborative folders for client investment profiles",
        "textZh": "為客戶諮詢、財富目標與資產組合建立安全協作雲端目錄"
      }
    ],
    "pre": [
      {
        "id": "ta_pre_1",
        "text": "Draft wealth management guidelines and client meeting brief templates",
        "textZh": "編寫詳細財富管理與客製化客戶晤談簡報範本"
      },
      {
        "id": "ta_pre_2",
        "text": "Test custom asset allocation prompt parameters inside Canvas Mode",
        "textZh": "在 Canvas Mode 中測試資產配置與回撤模型 Prompt 產生參數"
      }
    ],
    "sem1": [
      {
        "id": "ta_sem1_1",
        "text": "Distribute interactive financial literacy materials to advisory clients",
        "textZh": "向諮詢客戶分發互動式理財宣導、計算工具與資產指南"
      },
      {
        "id": "ta_sem1_2",
        "text": "Setup active weekly office hour AI advisory support queues",
        "textZh": "建立每週客戶諮詢 AI 答疑服務佇列與線上諮詢時間"
      }
    ],
    "mid": [
      {
        "id": "ta_mid_1",
        "text": "Utilize secure NotebookLM instances to aggregate client portfolio progress",
        "textZh": "利用安全 NotebookLM 彙整客戶理財表現與財富增長趨勢"
      },
      {
        "id": "ta_mid_2",
        "text": "Calibrate meeting brief prompt guidelines to align advisor consistency",
        "textZh": "校準晤談簡報 Prompt 指令，確保多位客戶關係經理反饋一致性"
      }
    ],
    "end": [
      {
        "id": "ta_end_1",
        "text": "Generate client portfolio performance reports for management reviews",
        "textZh": "生成客戶資產表現綜合分析儀表板供主管與合規審核參考"
      },
      {
        "id": "ta_end_2",
        "text": "Clean and purge personal RM storage workspaces of sensitive client files",
        "textZh": "清理與封存個人客戶關係經理工作空間中的客戶財務敏感檔案"
      }
    ],
    "track2": [
      {
        "id": "ta_t2_1",
        "text": "Document advisory best practices for future advisor onboarding handovers",
        "textZh": "撰寫理財諮詢 AI 輔導實務指南，留作團隊經驗傳承文檔"
      },
      {
        "id": "ta_t2_2",
        "text": "Monitor ongoing client compliance with risk disclosure guidelines",
        "textZh": "持續監控客戶在諮詢過程中對風險揭露與 AI 免責規則之遵循情況"
      }
    ]
  },
  "Claims Processor": {
    "day0": [
      {
        "id": "stu_d0_1",
        "text": "Confirm registration and activate company-issued platform account",
        "textZh": "確認註冊並啟用公司發放之 AI 平台帳戶"
      },
      {
        "id": "stu_d0_2",
        "text": "Register claims operations and interest groups in the main directory",
        "textZh": "在核賠與理賠目錄中登記本季度理賠案例或活動資訊"
      }
    ],
    "pre": [
      {
        "id": "stu_pre_1",
        "text": "Establish secure collaborative cloud folders for claims operations",
        "textZh": "為理賠日常運營與申報材料建立安全協作雲端資料夾"
      },
      {
        "id": "stu_pre_2",
        "text": "Set up study portals with links to uploaded underwriting guides",
        "textZh": "建立理賠操作入口，彙整核保指引與核賠對照手冊"
      }
    ],
    "sem1": [
      {
        "id": "stu_sem1_1",
        "text": "Complete claims introductory prompt engineering tutorial videos",
        "textZh": "完成核賠入門級 Prompt 提示工程與 AI 倫理微課程"
      },
      {
        "id": "stu_sem1_2",
        "text": "Link personal portfolio files to verified cloud storage directories",
        "textZh": "將個人理賠申報與公司端雲端安全硬碟連結"
      }
    ],
    "mid": [
      {
        "id": "stu_mid_1",
        "text": "Utilize collaborative NotebookLM workspaces for team study sessions",
        "textZh": "利用 NotebookLM 小組共享理賠與欺詐防範空間進行協作研討"
      },
      {
        "id": "stu_mid_2",
        "text": "Compile client feedback surveys regarding platform utility",
        "textZh": "填寫並整理同仁對於理賠平台軟硬體與 AI 助理功能之滿意度問卷"
      }
    ],
    "end": [
      {
        "id": "stu_end_1",
        "text": "Verify cloud folders contain correct materials for year-end compliance audits",
        "textZh": "確認理賠雲端資料夾已彙整期末稽核與評鑑所需核賠文檔"
      },
      {
        "id": "stu_end_2",
        "text": "Synthesize client advisory summaries from verified audio records",
        "textZh": "利用 AI 筆記摘要核賠重點，建立理賠防範專題"
      }
    ],
    "track2": [
      {
        "id": "stu_t2_1",
        "text": "Track and log certificate completions for professional training workshops",
        "textZh": "登錄並存檔個人在 FSI 共建 AI 工作坊中取得之證書"
      },
      {
        "id": "stu_t2_2",
        "text": "Participate in developer-led hackathons or custom agent competitions",
        "textZh": "參加企業主導之金融科技黑客松或客製化 AI 應用競賽"
      }
    ]
  },
  "Customer Service": {
    "day0": [
      {
        "id": "sec_d0_1",
        "text": "Initialize active security credentials for emergency CS response teams",
        "textZh": "啟用客戶服務應變團隊專用安全登入憑證"
      },
      {
        "id": "sec_d0_2",
        "text": "Map secure communications and dispatcher roles in the CRM system",
        "textZh": "在客服系統中配置各項緊急事件通訊與值班調度角色"
      }
    ],
    "pre": [
      {
        "id": "sec_pre_1",
        "text": "Draft customer service simulator guidelines inside Canvas Mode",
        "textZh": "在 Gemini Canvas Mode 中編寫客服應變與話術模擬訓練大綱"
      },
      {
        "id": "sec_pre_2",
        "text": "Establish secure data parameters for customer interaction playbooks",
        "textZh": "為客戶服務應變與隱私防護操作手冊設定安全邊界"
      }
    ],
    "sem1": [
      {
        "id": "sec_sem1_1",
        "text": "Run service dispatcher roleplay simulations with incoming personnel",
        "textZh": "與新進人員開展緊急應變調度角色扮演與 AI 客服模擬訓練"
      },
      {
        "id": "sec_sem1_2",
        "text": "Distribute customer support reference guidelines on the portal",
        "textZh": "在客服支援門戶發布更新後之客戶常見問題疑難排解指引"
      }
    ],
    "mid": [
      {
        "id": "sec_mid_1",
        "text": "Conduct midterm audits on physical banking queues and AI routing",
        "textZh": "進行期中服務渠道審查，並配合 AI 自動化服務紀錄與分類"
      },
      {
        "id": "sec_mid_2",
        "text": "Extract service incident trends using secure text summary tools",
        "textZh": "使用安全文本分析工具，彙整分析期中客戶投訴與滿意度趨勢"
      }
    ],
    "end": [
      {
        "id": "sec_end_1",
        "text": "Audit branch security systems during quarter-end transaction spikes",
        "textZh": "在季度末交易高峰週期間加強各大分行與設施之實體安全審計"
      },
      {
        "id": "sec_end_2",
        "text": "Audit customer hotlines network routing and verify active status",
        "textZh": "對客服中心與電話通訊網路進行通訊測試與線路稽核"
      }
    ],
    "track2": [
      {
        "id": "sec_t2_1",
        "text": "Collaborate on customer experience training reviews",
        "textZh": "共同參與客戶體驗與服務品質提升教育訓練與案例回顧會議"
      },
      {
        "id": "sec_t2_2",
        "text": "Optimize customer interaction custom Agents for faster dispatch",
        "textZh": "優化智能客服 Agent 指令，提高報案分類與工單派單速度"
      }
    ]
  },
  "HR Consultant": {
    "day0": [
      {
        "id": "fin_d0_1",
        "text": "Establish HR-grade credentials and verify local data storage boundaries",
        "textZh": "建立人力資源等級之安全登入憑證並確認本地數據邊界"
      },
      {
        "id": "fin_d0_2",
        "text": "Set audit rules for departmental workforce ledger checks",
        "textZh": "設定各部門人力成本支出之自動化審計與預算稽核規則"
      }
    ],
    "pre": [
      {
        "id": "fin_pre_1",
        "text": "Draft pre-fiscal-year budget spreadsheets inside Gemini Canvas Mode",
        "textZh": "在 Gemini Canvas Mode 中編寫新財年人力預算籌劃與科目配置表"
      },
      {
        "id": "fin_pre_2",
        "text": "Verify approved status of departmental hiring and training projects",
        "textZh": "審查與確認各項人才引進與培訓項目之經費核撥許可"
      }
    ],
    "sem1": [
      {
        "id": "fin_sem1_1",
        "text": "Distribute standard corporate travel & expense policies on the admin portal",
        "textZh": "在行政系統發布新版差旅與經費報銷電子核對清單"
      },
      {
        "id": "fin_sem1_2",
        "text": "Onboard employees to compliant expense forms and HR guidelines",
        "textZh": "對行內員工開展標準化預算、報銷流程與 HR 政策指引"
      }
    ],
    "mid": [
      {
        "id": "fin_mid_1",
        "text": "Conduct midterm workforce spend audits across major departments",
        "textZh": "進行期中人力經費支用與預算執行進度中期稽核"
      },
      {
        "id": "fin_mid_2",
        "text": "Compile expenditure summaries and audit logs with data models",
        "textZh": "使用數據模型彙整各類人事支出報表並分析核銷異常值"
      }
    ],
    "end": [
      {
        "id": "fin_end_1",
        "text": "Verify HR spending logs match internal compliance mandates",
        "textZh": "查核各項報銷經費，確保其完全符合內部財務與合規控制制度"
      },
      {
        "id": "fin_end_2",
        "text": "Publish year-end budget reconciliation and forecasting reports",
        "textZh": "彙整並發布年終人力預算執行與績效審查報告"
      }
    ],
    "track2": [
      {
        "id": "fin_t2_1",
        "text": "Run continuous spending audits to check for travel billing outliers",
        "textZh": "常態化執行經費審查，偵測重複報銷或異常採購數據"
      },
      {
        "id": "fin_t2_2",
        "text": "Optimize next-semester workforce forecasting models",
        "textZh": "優化下學期人力預算預測模型，提升調配效率"
      }
    ]
  },
  "Compliance Officer": {
    "day0": [
      {
        "id": "sao_d0_1",
        "text": "Initialize compliance accounts with high-security privacy controls",
        "textZh": "啟用合規與風險審查專用高隱私安全等級登入帳戶"
      },
      {
        "id": "sao_d0_2",
        "text": "Verify secure customer data repositories are active and partitioned",
        "textZh": "驗證客群敏感檔案與交易紀錄安全存儲目錄已正常隔離與啟用"
      }
    ],
    "pre": [
      {
        "id": "sao_pre_1",
        "text": "Draft regulatory guidelines and checklist items inside Canvas Mode",
        "textZh": "在 Gemini Canvas Mode 中編寫金融法規政策與合規操守查核手冊"
      },
      {
        "id": "sao_pre_2",
        "text": "Upload transaction compliance interactive check-point rules and alerts",
        "textZh": "上傳法規諮詢、反洗錢 (AML) 交互式合規關卡規則與警戒提示"
      }
    ],
    "sem1": [
      {
        "id": "sao_sem1_1",
        "text": "Activate Compliance Assistance Bot for banking staff",
        "textZh": "發布並啟用行員專用金融法規與 AML 諮詢智能助理"
      },
      {
        "id": "sao_sem1_2",
        "text": "Deploy active support hotline contacts on the risk page",
        "textZh": "在合規網頁發布最新的風險通報與法規支持熱線聯絡資訊"
      }
    ],
    "mid": [
      {
        "id": "sao_mid_1",
        "text": "Review compliance incident statistics using text-summary metrics",
        "textZh": "利用合規數據工具摘要分析期中違規通報與反洗錢審查趨勢"
      },
      {
        "id": "sao_mid_2",
        "text": "Verify active audit log archives and compile feedback responses",
        "textZh": "歸檔合規審查之卷宗記錄與行員互動指標數據"
      }
    ],
    "end": [
      {
        "id": "sao_end_1",
        "text": "Coordinate stress-testing on internal accounting and transaction pipelines",
        "textZh": "協調並執行內部核數與結算管道之壓力測試與風險防範"
      },
      {
        "id": "sao_end_2",
        "text": "Audit and purge sensitive client PII data temporary logs",
        "textZh": "清理與刪除合規演練暫存檔案中涉及客戶隱私之臨時紀錄"
      }
    ],
    "track2": [
      {
        "id": "sao_t2_1",
        "text": "Analyze corporate compliance workshop and AML certificate stats",
        "textZh": "統計並分析行內合規教育訓練與反洗錢證照通過率"
      },
      {
        "id": "sao_t2_2",
        "text": "Maintain custom supportive regulatory compliance chatbots",
        "textZh": "維護並微調客製化金融合規、誠信執業與暖心諮詢 AI 機器人"
      }
    ]
  },
  "Loan Officer": {
    "day0": [
      {
        "id": "pl_d0_1",
        "text": "Confirm lending platform licensing quotas and manager credentials",
        "textZh": "確認信貸授信平台授權配額與管理人員帳號安全"
      },
      {
        "id": "pl_d0_2",
        "text": "Initialize lending guidelines and credit proposal templates",
        "textZh": "初始化企業信貸範本、授信指引與合規審核流程"
      }
    ],
    "pre": [
      {
        "id": "pl_pre_1",
        "text": "Draft credit proposal guidelines and alignment checklists inside Canvas Mode",
        "textZh": "在 Canvas Mode 中撰寫授信審查指引與合規查核清單"
      },
      {
        "id": "pl_pre_2",
        "text": "Organize training workshops for departmental AI credit tool adoptions",
        "textZh": "組織授信與信貸部門 AI 輔助審查工具應用導入培訓工作坊"
      }
    ],
    "sem1": [
      {
        "id": "pl_sem1_1",
        "text": "Approve individual credit proposal configurations and CRM links",
        "textZh": "審查並核准個別信貸案件之 AI 案例配置與 CRM 介接"
      },
      {
        "id": "pl_sem1_2",
        "text": "Distribute credit integrity and compliance manuals across all branches",
        "textZh": "向所有融資網點分發授信合規與誠信放貸管理規範"
      }
    ],
    "mid": [
      {
        "id": "pl_mid_1",
        "text": "Review loan portfolio performance and customer credit satisfaction logs",
        "textZh": "審查信貸部門期中資產質量調查與客戶信貸滿意度指標"
      },
      {
        "id": "pl_mid_2",
        "text": "Audit alignment of credit delivery with corporate lending policies",
        "textZh": "查核放貸進度與銀行信用集中度、風險政策之對齊情況"
      }
    ],
    "end": [
      {
        "id": "pl_end_1",
        "text": "Review credit performance data and compile bad-debt statistics",
        "textZh": "審查授信資產質量表現數據並分析期末壞賬與資產減值統計"
      },
      {
        "id": "pl_end_2",
        "text": "Archive credit dossiers and document successful adoption case-studies",
        "textZh": "封存授信卷宗並記錄成功的信貸 AI 導入與風險控制案例"
      }
    ],
    "track2": [
      {
        "id": "pl_t2_1",
        "text": "Optimize credit pipeline structure for future funding cycles",
        "textZh": "優化下一期信貸審核管道結構、流程與信用集中度指引"
      },
      {
        "id": "pl_t2_2",
        "text": "Facilitate cross-departmental risk and corporate lending resource sharing",
        "textZh": "促進跨部門風險協作、融資研究與信貸資源共享"
      }
    ]
  },
  "Underwriter": {
    "day0": [
      {
        "id": "dn_d0_1",
        "text": "Establish institutional risk frameworks and data compliance boundaries",
        "textZh": "確立銀行級信用核保與風險管理 AI 戰略指標與數據合規邊界"
      },
      {
        "id": "dn_d0_2",
        "text": "Confirm credit funding allocations and verify budget lines are active",
        "textZh": "確認授信專項撥備資金與核保預算已核撥到位"
      }
    ],
    "pre": [
      {
        "id": "dn_pre_1",
        "text": "Draft comprehensive risk strategy roadmaps inside Gemini Canvas Mode",
        "textZh": "在 Gemini Canvas Mode 中編寫全面風險管理與核保戰略規劃"
      },
      {
        "id": "dn_pre_2",
        "text": "Establish credit risk steering committees for quality assurance audits",
        "textZh": "成立信用風險諮詢與審查委員會，推動核保質量保證"
      }
    ],
    "sem1": [
      {
        "id": "dn_sem1_1",
        "text": "Approve lending quotas and risk management welcome address",
        "textZh": "核定各區域與分行之授信放款配額與核保授權額度"
      },
      {
        "id": "dn_sem1_2",
        "text": "Deliver risk welcome address on financial innovation and AI ethics",
        "textZh": "發表關於金融創新、風險控制、AI 倫理與未來核保願景之主管致詞"
      }
    ],
    "mid": [
      {
        "id": "dn_mid_1",
        "text": "Review credit telemetry dashboards and active risk portfolios",
        "textZh": "審查全行信貸資產質量 AI 數據儀表板與期中撥備執行進度"
      },
      {
        "id": "dn_mid_2",
        "text": "Conduct inter-departmental risk reviews with Loan Officers",
        "textZh": "與各信貸主管召開信用風險協調會，評估授信與核保成效"
      }
    ],
    "end": [
      {
        "id": "dn_end_1",
        "text": "Receive external regulatory audit reports and verify compliance",
        "textZh": "審閱外規與審計報告，確保各項放貸完全符合金管與質量標準"
      },
      {
        "id": "dn_end_2",
        "text": "Publish annual financial risk & compliance reports and success stories",
        "textZh": "發布年度信用核保與風險管理成果報告與最佳實務案例"
      }
    ],
    "track2": [
      {
        "id": "dn_t2_1",
        "text": "Maintain and update strategic collaboration frameworks with regulatory partners",
        "textZh": "維護並更新與同業夥伴、監管機構之策略聯盟與風險防範框架"
      },
      {
        "id": "dn_t2_2",
        "text": "Drive continuous advisor risk capacity building and research center setups",
        "textZh": "持續推動行員信用分析、核保與風險計量 AI 能力提升"
      }
    ]
  }
};

let timelineStages = [];

// Initialize or load configuration
function initTimeline() {
  const savedStages = localStorage.getItem(TIMELINE_STAGES_STORAGE_KEY);
  if (savedStages) {
    try {
      timelineStages = JSON.parse(savedStages);
    } catch (e) {
      timelineStages = JSON.parse(JSON.stringify(defaultTimelineStages));
    }
  } else {
    timelineStages = JSON.parse(JSON.stringify(defaultTimelineStages));
  }

  if (!appState.roadmapActiveStage) {
    appState.roadmapActiveStage = localStorage.getItem("ge_roadmap_active_stage_v2") || "day0";
    if (!timelineStages.some(s => s.id === appState.roadmapActiveStage)) {
      appState.roadmapActiveStage = "day0";
    }
  }
}

// Save states to local storage
function saveTimeline() {
  localStorage.setItem(TIMELINE_STAGES_STORAGE_KEY, JSON.stringify(timelineStages));
}

// Dynamic role-related use case filter helper
function isUsecaseRelatedToRole(useCase, role) {
  if (!role) return true;
  if (appState.isAdmin === true) return true;
  
  // IT Admins have administrative rights to map all cases
  if (role === "IT Admin") return true;
  
  // Lecturer has academic-level supervisor responsibilities (includes TAs)
  if (role === "Lecturer") {
    return useCase.role === "Lecturer" || useCase.role === "TA" || useCase.category === "academic";
  }
  // TAs see their own and academic tasks
  if (role === "TA") {
    return useCase.role === "TA" || useCase.role === "Lecturer" || useCase.category === "academic";
  }
  // Student sees Student & club operations
  if (role === "Student") {
    return useCase.role === "Student" || useCase.category === "student";
  }
  // Program Leader has departmental supervisor capabilities
  if (role === "Program Leader") {
    return useCase.role === "Program Leader" || useCase.role === "Lecturer" || useCase.role === "TA" || useCase.category === "academic";
  }
  // Dean has college-wide strategic oversight capabilities (sees academic and operational)
  if (role === "Dean") {
    return useCase.role === "Dean" || useCase.role === "Program Leader" || useCase.role === "Lecturer" || useCase.role === "TA" || useCase.category === "academic" || useCase.category === "operational";
  }
  // Support roles see their exact roles
  return useCase.role === role;
}

// Core Roadmap Rendering Router
function renderTimeline() {
  initTimeline();
  const container = document.getElementById("unifiedRoadmapContainer");
  if (!container) return;

  const isZh = appState.activeLanguage === "zh-TW" || appState.activeLanguage === "zh-CN";
  const role = appState.userRole || "Lecturer";

  // Calculate stats for each stage
  const stageStats = {};
  timelineStages.forEach(stage => {
    // Checklist Stats
    const tasks = roleVerificationCheckpoints[role]?.[stage.id] || [];
    const totalTasks = tasks.length;
    let completedTasks = 0;
    tasks.forEach(t => {
      const key = `ge_roadmap_chk_${role}_${stage.id}_${t.id}`;
      if (localStorage.getItem(key) === "true") {
        completedTasks++;
      }
    });
    const isCompleted = totalTasks > 0 ? (completedTasks === totalTasks) : true;
    const checklistPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 100;

    // Playbook stats
    let totalPlaybooks = 0;
    let deployedPlaybooks = 0;
    stage.playbookIds.forEach(id => {
      const uc = useCasesDb.find(u => u.id === id);
      if (uc && isUsecaseRelatedToRole(uc, role)) {
        totalPlaybooks++;
        if (uc.isDeployed === true || uc.isDeployed === 1) {
          deployedPlaybooks++;
        }
      }
    });
    const playbookPercent = totalPlaybooks > 0 ? Math.round((deployedPlaybooks / totalPlaybooks) * 100) : 0;

    stageStats[stage.id] = {
      totalTasks,
      completedTasks,
      isCompleted,
      checklistPercent,
      totalPlaybooks,
      deployedPlaybooks,
      playbookPercent
    };
  });

  const stageOrder = ["day0", "pre", "sem1", "mid", "end", "track2"];

  // Calculate Track 1 progress fill
  const track1Stages = ["day0", "pre", "sem1", "mid", "end"];
  const positions1 = [10, 30, 50, 70, 90];
  let progressWidth1 = 10;
  for (let i = 0; i < track1Stages.length; i++) {
    if (stageStats[track1Stages[i]].isCompleted) {
      progressWidth1 = positions1[i];
    } else {
      break;
    }
  }

  // Calculate Track 2 progress fill
  const track2Stats = stageStats["track2"];
  const progressWidth2 = 10 + (80 * (track2Stats.checklistPercent / 100));

  // 1. Desktop Dual-Track Timeline (Track 1 is compressed horizontal, Track 2 is continuous interactive bar)
  let desktopHtml = `
    <div class="alternating-timeline-container">
      
      <!-- TRACK 1: ACADEMIC CALENDAR MILESTONES -->
      <div class="timeline-track-block track-block-1">
        <div class="timeline-track-header">
          <span class="material-symbols-outlined track-header-icon" style="color: #6366f1;">calendar_month</span>
          <span class="track-header-title">${isZh ? "軌道一：學期限制性部署" : "Track 1: Academic Calendar Milestones"}</span>
        </div>
        
        <!-- Horizontal track baseline is a peer sibling -->
        <div class="timeline-horizontal-track">
          <div class="timeline-track-progress" style="width: ${progressWidth1}%;"></div>
        </div>
  `;

  track1Stages.forEach((id, index) => {
    const stage = timelineStages.find(s => s.id === id);
    const stats = stageStats[id];
    const isActive = appState.roadmapActiveStage === id;
    const isCompleted = stats.isCompleted;
    const isUp = index % 2 === 0; // Alternating height layouts! Even UP, Odd DOWN
    const pos = positions1[index];

    const stageSubtitle = isZh ? stage.subtitleZh : stage.subtitle;
    
    // Custom label inside card
    let shortName = id === "day0" ? (isZh ? "Day 0 配置" : "Day 0 Setup")
                  : id === "pre" ? (isZh ? "學期準備" : "Pre-Semester")
                  : id === "sem1" ? (isZh ? "正式啟動" : "Sem 1 Launch")
                  : id === "mid" ? (isZh ? "期中試點" : "Mid-Term Pilot")
                  : (isZh ? "期末審計" : "Exam Audit");

    desktopHtml += `
      <!-- Node Joint ${id} -->
      <div class="timeline-node-joint ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
           style="left: ${pos}%; --node-color: ${stage.color};" 
           onclick="selectRoadmapStage('${id}')">
        <span class="material-symbols-outlined node-joint-icon">
          ${isCompleted ? 'check' : (id === 'day0' ? 'settings' : 'pending')}
        </span>
      </div>

      <!-- Connector line -->
      <div class="alternating-marker-pin ${isUp ? 'pin-up' : 'pin-down'}" style="left: ${pos}%; --node-color: ${stage.color};"></div>

      <!-- Floating Schedule Flag -->
      <div class="floating-schedule-flag ${isUp ? 'flag-up' : 'flag-down'} ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
           style="left: ${pos}%; --node-color: ${stage.color};"
           onclick="selectRoadmapStage('${id}')">
        <div class="flag-date-label">${stageSubtitle}</div>
        <div class="flag-title-label">${shortName}</div>
        <div class="flag-subtitle-label">${stats.completedTasks}/${stats.totalTasks} ${isZh ? '已驗證' : 'Verified'}</div>
      </div>
    `;
  });

  desktopHtml += `
      </div>

      <!-- Divider line -->
      <div class="timeline-track-divider"></div>

      <!-- TRACK 2: CONTINUOUS PIPELINE (Ultra-compact continuous bar) -->
      <div class="timeline-track-block-continuous">
        <div class="timeline-track-header">
          <span class="material-symbols-outlined track-header-icon" style="color: #a855f7;">all_inclusive</span>
          <span class="track-header-title">${isZh ? "軌道二：持續滾動式項目" : "Track 2: Continuous Anytime-Proceeded Initiatives"}</span>
        </div>
  `;

  {
    const id = "track2";
    const stage = timelineStages.find(s => s.id === id);
    const stats = stageStats[id];
    const isActive = appState.roadmapActiveStage === id;
    const isCompleted = stats.isCompleted;

    const stageSubtitle = isZh ? stage.subtitleZh : stage.subtitle;

    desktopHtml += `
        <!-- Thick Clickable Arrow Progress Pipeline (No popups/flags) -->
        <div class="continuous-pipeline-capsule ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
             onclick="selectRoadmapStage('track2')">
          
          <!-- Baseline track with pulsating arrow indicator -->
          <div class="continuous-pipeline-track">
            <div class="continuous-pipeline-progress" style="width: ${stats.checklistPercent}%;"></div>
            <div class="continuous-pipeline-arrow">▶</div>
          </div>
          
          <!-- Content Overlay labels -->
          <div class="continuous-pipeline-overlay">
            <span class="pipeline-badge" style="background: ${stage.color};">${isZh ? "滾動項目" : "Rolling Projects"}</span>
            <span class="pipeline-subtitle">${stageSubtitle}</span>
            <span class="pipeline-stats-pill">${stats.completedTasks}/${stats.totalTasks} ${isZh ? '已驗證' : 'Verified'} (${stats.checklistPercent}%)</span>
          </div>
        </div>
    `;
  }

  desktopHtml += `
      </div>

    </div>
  `;

  // 2. Mobile vertical stream layout
  let mobileHtml = `<div class="chronological-timeline-mobile">`;
  stageOrder.forEach(id => {
    const stage = timelineStages.find(s => s.id === id);
    const stats = stageStats[id];
    const isActive = appState.roadmapActiveStage === id;
    const isCompleted = stats.isCompleted;

    const stageTitle = isZh ? stage.titleZh : stage.title;
    const stageSubtitle = isZh ? stage.subtitleZh : stage.subtitle;

    mobileHtml += `
      <div class="mobile-timeline-item ${isActive ? 'active' : ''}" onclick="selectRoadmapStage('${id}')">
        <div class="mobile-timeline-connector"></div>
        <div class="mobile-timeline-badge" style="background: ${stage.color};"></div>
        <div class="mobile-timeline-content-card">
          <div class="mobile-card-header">
            <span class="mobile-card-subtitle" style="color: ${stage.color};">${stageSubtitle}</span>
            ${isCompleted ? '<span class="material-symbols-outlined" style="color: #10b981; font-size:18px;">verified</span>' : ''}
          </div>
          <h4 class="mobile-card-title">${stageTitle}</h4>
          <div class="mobile-card-progress">
            <div class="mobile-card-progress-bar" style="width: ${stats.checklistPercent}%; background: ${stage.color};"></div>
          </div>
        </div>
      </div>
    `;
  });
  mobileHtml += `</div>`;

  // Write base layout structure into DOM
  container.innerHTML = `
    ${desktopHtml}
    ${mobileHtml}
    <div class="roadmap-split-dashboard">
      <!-- Left Column: Verification Checklists -->
      <div class="roadmap-dashboard-card" id="roadmapChecklistCard"></div>
      
      <!-- Right Column: Role-Specific Use-Case Playbooks -->
      <div class="roadmap-dashboard-card" id="roadmapPlaybookCard"></div>
    </div>
  `;

  renderRoadmapDashboardDetails();
}

// Select milestone trigger
window.selectRoadmapStage = function(stageId) {
  appState.roadmapActiveStage = stageId;
  localStorage.setItem("ge_roadmap_active_stage_v2", stageId);

  // Quick state sync without full rebuilds
  document.querySelectorAll(".timeline-node-joint, .floating-schedule-flag, .mobile-timeline-item").forEach(el => {
    if (el.getAttribute("onclick") && el.getAttribute("onclick").includes(`'${stageId}'`)) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  renderRoadmapDashboardDetails();
};

// Render Stage Details dual-column dashboards
function renderRoadmapDashboardDetails() {
  const checkCard = document.getElementById("roadmapChecklistCard");
  const playCard = document.getElementById("roadmapPlaybookCard");
  if (!checkCard || !playCard) return;

  const stageId = appState.roadmapActiveStage || "day0";
  const stage = timelineStages.find(s => s.id === stageId);
  if (!stage) return;

  const isZh = appState.activeLanguage === "zh-TW" || appState.activeLanguage === "zh-CN";
  const role = appState.userRole || "Lecturer";

  const stageTitle = isZh ? stage.titleZh : stage.title;
  const stageDesc = isZh ? stage.descriptionZh : stage.description;

  // Render Left Column: Checkbox Checklist
  const tasks = roleVerificationCheckpoints[role]?.[stageId] || [];
  let checkedCount = 0;
  let checklistHtml = "";

  tasks.forEach(t => {
    const key = `ge_roadmap_chk_${role}_${stageId}_${t.id}`;
    const isChecked = localStorage.getItem(key) === "true";
    if (isChecked) checkedCount++;

    const taskText = appState.activeLanguage === "zh-TW" 
      ? (t.textZh || t.text) 
      : (appState.activeLanguage === "zh-CN" 
          ? (t.textCn || t.textZh || t.text) 
          : t.text);

    checklistHtml += `
      <label class="roadmap-task-label ${isChecked ? 'checked' : ''}">
        <input type="checkbox" 
               onchange="handleRoadmapTaskToggle('${stageId}', '${t.id}', this)" 
               ${isChecked ? 'checked' : ''} />
        <div class="roadmap-checkbox-indicator"></div>
        <span class="roadmap-task-text">${taskText}</span>
      </label>
    `;
  });

  if (tasks.length === 0) {
    checklistHtml = `<p class="empty-playbook-msg">${appState.activeLanguage === 'zh-TW' ? '此階段對您的角色無特定驗證項目。' : (appState.activeLanguage === 'zh-CN' ? '此阶段对您的角色无特定验证项目。' : 'No verification items for your role in this phase.')}</p>`;
  }

  const checklistPercent = tasks.length > 0 ? Math.round((checkedCount / tasks.length) * 100) : 100;
  const isChecklistCompleted = checklistPercent === 100;

  const cardTitle = appState.activeLanguage === "zh-TW" 
    ? '階段驗證檢查清單' 
    : (appState.activeLanguage === "zh-CN" 
        ? '阶段验证检查清单' 
        : 'Phase Verification Checklist');
  const cardStatusVerified = appState.activeLanguage === "zh-TW" 
    ? '已完全驗證' 
    : (appState.activeLanguage === "zh-CN" 
        ? '已完全验证' 
        : 'Verified');
  const cardStatusPending = appState.activeLanguage === "zh-TW" 
    ? '待驗證' 
    : (appState.activeLanguage === "zh-CN" 
        ? '待验证' 
        : 'Pending Verification');

  checkCard.innerHTML = `
    <div class="roadmap-card-header-bar" style="background: ${stage.color};"></div>
    <div class="roadmap-card-body">
      <div class="roadmap-section-meta-row">
        <h4 class="roadmap-section-title">${cardTitle}</h4>
        <span class="roadmap-section-badge ${isChecklistCompleted ? 'verified' : 'pending'}">
          ${isChecklistCompleted ? cardStatusVerified : cardStatusPending} (${checklistPercent}%)
        </span>
      </div>
      <p class="roadmap-section-desc">${stageDesc}</p>
      <div class="roadmap-checklist-container">
        ${checklistHtml}
      </div>
    </div>
  `;

  // Render Right Column: Associated Use Cases Playbooks
  let deployedCount = 0;
  let playbooksHtml = "";
  let rolePlaybookCount = 0;

  stage.playbookIds.forEach(id => {
    const uc = useCasesDb.find(u => u.id === id);
    // Filter strictly based on active user role
    if (uc && isUsecaseRelatedToRole(uc, role)) {
      rolePlaybookCount++;
      const isUcDeployed = uc.isDeployed === true || uc.isDeployed === 1;
      if (isUcDeployed) deployedCount++;

      const ucTitle = uc.translations && uc.translations[appState.activeLanguage] && uc.translations[appState.activeLanguage].title 
        ? uc.translations[appState.activeLanguage].title 
        : uc.title;

      playbooksHtml += `
        <div class="milestone-playbook-item">
          <div class="milestone-playbook-info">
            <div class="milestone-playbook-status-dot ${isUcDeployed ? 'active' : ''}"></div>
            <span class="milestone-playbook-title ${isUcDeployed ? 'completed' : ''}" title="${ucTitle}">
              ${ucTitle}
            </span>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button class="btn-toggle-deploy-mini ${isUcDeployed ? 'active' : ''}" 
                    onclick="toggleTimelinePlaybookDeploy('${stageId}', '${id}', ${isUcDeployed})"
                    title="${isUcDeployed ? (isZh ? '停用部署' : 'Mark Inactive') : (isZh ? '啟用部署' : 'Mark Active')}">
              <span class="material-symbols-outlined" style="font-size: 15px;">rocket_launch</span>
            </button>
            <button class="btn-remove-playbook" onclick="removePlaybookFromStage('${stageId}', '${id}')" title="${isZh ? '解除關聯' : 'Remove play'}">
              <span class="material-symbols-outlined" style="font-size: 15px;">close</span>
            </button>
          </div>
        </div>
      `;
    }
  });

  if (rolePlaybookCount === 0) {
    playbooksHtml = `<p class="empty-playbook-msg">${isZh ? '此階段對您的角色目前無關聯使用案例。' : 'No playbooks mapped to your role in this phase.'}</p>`;
  }

  const progressPercent = rolePlaybookCount > 0 ? Math.round((deployedCount / rolePlaybookCount) * 100) : 0;
  const progressText = isZh 
    ? `已部署 ${deployedCount} / ${rolePlaybookCount} 個案例 (${progressPercent}%)` 
    : `${deployedCount} of ${rolePlaybookCount} playbooks deployed (${progressPercent}%)`;

  // Compile strictly filtered dropdown selection option list
  let dropdownOptionsHtml = `<option value="">${isZh ? '選擇學習案例...' : 'Select a Playbook...'}</option>`;
  
  const sortedUseCases = [...useCasesDb]
    .filter(uc => isUsecaseRelatedToRole(uc, role))
    .sort((a, b) => {
      const titleA = a.translations && a.translations[appState.activeLanguage] && a.translations[appState.activeLanguage].title 
        ? a.translations[appState.activeLanguage].title 
        : a.title;
      const titleB = b.translations && b.translations[appState.activeLanguage] && b.translations[appState.activeLanguage].title 
        ? b.translations[appState.activeLanguage].title 
        : b.title;
      return titleA.localeCompare(titleB);
    });

  let hasUnassigned = false;
  sortedUseCases.forEach(uc => {
    if (!stage.playbookIds.includes(uc.id)) {
      hasUnassigned = true;
      const ucTitle = uc.translations && uc.translations[appState.activeLanguage] && uc.translations[appState.activeLanguage].title 
        ? uc.translations[appState.activeLanguage].title 
        : uc.title;
      dropdownOptionsHtml += `<option value="${uc.id}">${ucTitle}</option>`;
    }
  });

  playCard.innerHTML = `
    <div class="roadmap-card-header-bar" style="background: ${stage.color};"></div>
    <div class="roadmap-card-body">
      <div class="roadmap-section-meta-row">
        <h4 class="roadmap-section-title">${isZh ? '角色關聯使用場景' : 'Role-Specific Playbooks'}</h4>
        <span class="roadmap-section-badge verified" style="background: ${stage.color}15; color: ${stage.color};">
          ${progressPercent}%
        </span>
      </div>
      
      <!-- Progress meter -->
      <div class="milestone-progress-wrapper" style="margin-top: 14px; margin-bottom: 24px;">
        <div class="milestone-progress-text" style="display: flex; justify-content: space-between; font-size: 11px; font-weight:700; color: var(--text-secondary); margin-bottom:6px;">
          <span>${isZh ? '部署進度' : 'Deployment Progress'}</span>
          <span>${progressText}</span>
        </div>
        <div class="milestone-progress-bar" style="height:6px; background: rgba(0,0,0,0.05); border-radius:3px; overflow:hidden;">
          <div class="milestone-progress-fill" style="width: ${progressPercent}%; height:100%; background: ${stage.color}; transition: width 0.3s ease;"></div>
        </div>
      </div>

      <!-- Playbook assignments list -->
      <div class="milestone-playbooks-list">
        ${playbooksHtml}
      </div>

      <!-- Assignment dropdown -->
      <div class="add-playbook-dropdown-wrapper">
        <select class="select-add-playbook" style="border-color: ${stage.color}40;" onchange="handleAssignPlaybook(this, '${stageId}')" ${!hasUnassigned ? 'disabled' : ''}>
          ${dropdownOptionsHtml}
        </select>
      </div>
    </div>
  `;
}

// Checkbox change handler
window.handleRoadmapTaskToggle = function(stageId, taskId, checkboxEl) {
  const role = appState.userRole || "Lecturer";
  const key = `ge_roadmap_chk_${role}_${stageId}_${taskId}`;
  localStorage.setItem(key, checkboxEl.checked ? "true" : "false");

  // Re-run entire rendering loop to fill timeline segments and re-calculate percents instantly
  renderTimeline();
};

// Toggle playbook deployment status
window.toggleTimelinePlaybookDeploy = async function(stageId, playbookId, currentStatus) {
  const uc = useCasesDb.find(u => u.id === playbookId);
  if (!uc) return;

  const newStatus = !currentStatus;
  const success = await syncUserPreference(playbookId, 'deploy', newStatus);
  if (success) {
    uc.isDeployed = newStatus;
    showToast(newStatus 
      ? (appState.activeLanguage === "zh-TW" || appState.activeLanguage === "zh-CN" ? "部署場景已啟用！" : "Deployment marked active!") 
      : (appState.activeLanguage === "zh-TW" || appState.activeLanguage === "zh-CN" ? "部署場景已停用" : "Deployment marked inactive")
    );
    
    renderTimeline();
  }
};

// Assign unassigned playbook to phase
window.handleAssignPlaybook = function(selectEl, stageId) {
  const ucId = selectEl.value;
  if (ucId) {
    // Ensure playbook only belongs to one stage
    timelineStages.forEach(stage => {
      stage.playbookIds = stage.playbookIds.filter(id => id !== ucId);
    });

    const stage = timelineStages.find(s => s.id === stageId);
    if (stage) {
      stage.playbookIds.push(ucId);
      saveTimeline();
      renderTimeline();
      showToast(appState.activeLanguage === "zh-TW" || appState.activeLanguage === "zh-CN" 
        ? "案例分配成功！" 
        : "Playbook assigned to phase!");
    }
  }
};

// Remove playbook association
window.removePlaybookFromStage = function(stageId, useCaseId) {
  const stage = timelineStages.find(s => s.id === stageId);
  if (stage) {
    stage.playbookIds = stage.playbookIds.filter(id => id !== useCaseId);
    saveTimeline();
    renderTimeline();
    showToast(appState.activeLanguage === "zh-TW" || appState.activeLanguage === "zh-CN" 
      ? "已解除此關聯" 
      : "Playbook association removed!");
  }
};

// ==========================================
// User Feedback System Client Engine
// ==========================================
window.initFeedbackSystem = function() {
  const btn = document.getElementById("btnFloatingFeedback");
  const modal = document.getElementById("feedbackSubmissionModal");
  const closeBtn = document.getElementById("feedbackModalClose");
  const cancelBtn = document.getElementById("btnCancelFeedback");
  const txtContent = document.getElementById("txtFeedbackContent");

  if (!btn || !modal) return;

  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.classList.add("active");
    txtContent.value = "";
    txtContent.focus();
  });

  const hideModal = () => {
    modal.classList.remove("active");
    modal.style.display = "none";
  };

  closeBtn.addEventListener("click", hideModal);
  cancelBtn.addEventListener("click", hideModal);

  // Close modal on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
  });
};

window.handleFeedbackSubmit = async function(event) {
  event.preventDefault();
  const txtContent = document.getElementById("txtFeedbackContent");
  if (!txtContent) return;

  const feedbackText = txtContent.value.trim();
  if (!feedbackText) return;

  try {
    const res = await fetch('/api/feedbacks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ feedback_text: feedbackText })
    });
    const data = await res.json();
    if (data.success) {
      showToast(appState.activeLanguage === 'zh-TW' ? "感謝您的回饋！" : (appState.activeLanguage === 'zh-CN' ? "感谢您的反馈！" : "Feedback submitted successfully!"));
      const modal = document.getElementById("feedbackSubmissionModal");
      if (modal) {
        modal.classList.remove("active");
        modal.style.display = "none";
      }
    } else {
      alert(data.error || "Failed to submit feedback.");
    }
  } catch (err) {
    alert("Server connection failure. Please try again.");
  }
};

window.loadAdminFeedbacks = async function() {
  const tbody = document.getElementById("adminFeedbacksTableBody");
  if (!tbody) return;
  tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 24px; color: var(--text-muted);">Loading feedbacks...</td></tr>`;
  try {
    const res = await fetch('/api/feedbacks');
    const data = await res.json();
    if (!data.success) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 24px; color: var(--color-danger);">${data.error || 'Failed to load feedbacks'}</td></tr>`;
      return;
    }
    if (data.feedbacks.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 24px; color: var(--text-muted);">No feedback suggestions submitted yet.</td></tr>`;
      return;
    }
    
    const isAssist = appState.isAssist === true;
    let html = '';
    data.feedbacks.forEach(fb => {
      const d = new Date(fb.created_at);
      const dateStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      html += `
        <tr style="border-bottom: 1px solid var(--border-glass); transition: background 0.2s ease;">
          <td style="padding: 12px 8px; font-weight: 700; color: var(--text-primary); font-family: var(--font-heading);">${fb.user_email}</td>
          <td style="padding: 12px 8px; color: var(--text-secondary); line-height: 1.5; white-space: pre-wrap;">${fb.feedback_text}</td>
          <td style="padding: 12px 8px; color: var(--text-muted); font-size: 11px;">${dateStr}</td>
          <td style="padding: 12px 8px; text-align: right;">
            ${isAssist ? '' : `
            <button class="nav-button" onclick="deleteFeedback(${fb.id})" style="padding: 4px; min-width: auto; border: none; background: transparent; color: var(--text-muted); transition: color 0.2s ease;" onmouseover="this.style.color='var(--color-danger)'" onmouseout="this.style.color='var(--text-muted)'">
              <span class="material-symbols-outlined" style="font-size: 18px;">close</span>
            </button>
            `}
          </td>
        </tr>
      `;
    });
    tbody.innerHTML = html;
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 24px; color: var(--color-danger);">Server connection error.</td></tr>`;
  }
};

window.deleteFeedback = async function(id) {
  if (!confirm("Are you sure you want to dismiss this feedback?")) return;
  try {
    const res = await fetch('/api/feedbacks/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    const data = await res.json();
    if (data.success) {
      showToast("Feedback dismissed successfully.");
      loadAdminFeedbacks();
    } else {
      alert(data.error || "Failed to dismiss feedback.");
    }
  } catch (err) {
    alert("Server connection failure.");
  }
};

// ==========================================
// Phase Verification Checklist CRUD Engine
// ==========================================

async function loadVerificationCheckpoints() {
  try {
    const res = await fetch('/api/checkpoints');
    if (!res.ok) throw new Error("Failed to load checkpoints");
    const checkpoints = await res.json();
    
    // Reconstruct the roleVerificationCheckpoints structure!
    const newCheckpoints = {};
    checkpoints.forEach(cp => {
      if (!newCheckpoints[cp.role]) {
        newCheckpoints[cp.role] = {};
      }
      if (!newCheckpoints[cp.role][cp.phase]) {
        newCheckpoints[cp.role][cp.phase] = [];
      }
      newCheckpoints[cp.role][cp.phase].push({
        id: cp.id,
        text: cp.text,
        textZh: cp.text_zh
      });
    });
    
    // Assign to our global variable
    roleVerificationCheckpoints = newCheckpoints;
  } catch (err) {
    console.error("Error loading verification checkpoints from server, keeping local fallbacks:", err);
  }
}

async function loadAdminChecklists() {
  const tbody = document.getElementById("adminCheckpointsTableBody");
  if (!tbody) return;
  tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 20px; color: var(--text-muted);">Loading checklist items...</td></tr>`;

  try {
    const res = await fetch('/api/checkpoints');
    let checkpoints = await res.json();

    const roleFilter = document.getElementById("selectAdminCheckpointRoleFilter")?.value || "all";
    if (roleFilter !== "all") {
      checkpoints = checkpoints.filter(cp => cp.role === roleFilter);
    }

    tbody.innerHTML = "";
    const isAssist = appState.isAssist === true;

    if (checkpoints.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 20px; color: var(--text-muted);">No checkpoints found for the selected filter.</td></tr>`;
      return;
    }

    checkpoints.forEach(cp => {
      const tr = document.createElement("tr");
      tr.style.borderBottom = "1px solid var(--border-glass)";

      tr.innerHTML = `
        <td style="padding: 12px 8px; font-family: monospace; font-size: 11px; color: var(--color-primary); font-weight: 700;">${cp.id}</td>
        <td style="padding: 12px 8px; font-weight: 500;">${cp.role}</td>
        <td style="padding: 12px 8px; text-transform: uppercase; font-size: 11px; font-weight: bold; color: var(--text-muted);">${cp.phase}</td>
        <td style="padding: 12px 8px; line-height: 1.4;">${cp.text}</td>
        <td style="padding: 12px 8px; line-height: 1.4; color: var(--text-secondary);">${cp.text_zh}</td>
        <td style="padding: 12px 8px; line-height: 1.4; color: var(--text-secondary);">${cp.text_cn || cp.text_zh || cp.text}</td>
        <td style="padding: 12px 8px; text-align: right; display: flex; gap: 8px; justify-content: flex-end;">
          <button class="nav-button btn-edit-checkpoint" style="height: 28px; padding: 0 10px; font-size: 11px;">${isAssist ? 'View' : 'Edit'}</button>
          ${isAssist ? '' : '<button class="nav-button btn-delete-checkpoint" style="height: 28px; padding: 0 10px; font-size: 11px; background: var(--color-danger); border-color: var(--color-danger); color: #ffffff !important;">Delete</button>'}
        </td>
      `;

      tbody.appendChild(tr);

      tr.querySelector(".btn-edit-checkpoint").onclick = () => openAdminCheckpointModal(cp);
      if (!isAssist) {
        tr.querySelector(".btn-delete-checkpoint").onclick = () => deleteAdminCheckpoint(cp.id);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

let editingCheckpointId = null;

function openAdminCheckpointModal(cp = null) {
  const modal = document.getElementById("adminCheckpointEditModal");
  const modalTitle = document.getElementById("adminCheckpointModalTitle");
  const form = document.getElementById("formAdminSaveCheckpoint");
  const feedback = document.getElementById("adminCheckpointFormFeedback");

  if (!modal || !modalTitle || !form) return;

  feedback.style.display = "none";
  form.reset();

  const isAssist = appState.isAssist === true;
  const isEditing = cp !== null;
  editingCheckpointId = isEditing ? cp.id : null;

  modalTitle.textContent = isEditing ? "Edit Checklist Item" : "Add Checklist Item";

  const idInput = document.getElementById("formCheckpointId");
  if (isEditing) {
    idInput.value = cp.id;
    idInput.disabled = true; // Immutable on edit
    document.getElementById("formCheckpointRole").value = cp.role;
    document.getElementById("formCheckpointPhase").value = cp.phase;
    document.getElementById("formCheckpointText").value = cp.text;
    document.getElementById("formCheckpointTextZh").value = cp.text_zh;
    document.getElementById("formCheckpointTextCn").value = cp.text_cn || cp.text_zh || "";
  } else {
    idInput.value = "";
    idInput.disabled = false;
    document.getElementById("formCheckpointTextCn").value = "";
  }

  const saveBtn = document.getElementById("btnAdminCheckpointSave");
  if (saveBtn) {
    saveBtn.style.display = isAssist ? "none" : "block";
  }

  modal.classList.add("active");
}

async function saveAdminCheckpoint() {
  const id = document.getElementById("formCheckpointId").value.trim();
  const role = document.getElementById("formCheckpointRole").value;
  const phase = document.getElementById("formCheckpointPhase").value;
  const text = document.getElementById("formCheckpointText").value.trim();
  const text_zh = document.getElementById("formCheckpointTextZh").value.trim();
  const text_cn = document.getElementById("formCheckpointTextCn").value.trim();
  const feedback = document.getElementById("adminCheckpointFormFeedback");

  if (!id || !text || !text_zh || !text_cn) {
    feedback.textContent = "All fields are mandatory.";
    feedback.style.display = "block";
    return;
  }

  const payload = { id, role, phase, text, text_zh, text_cn };
  const isEditing = editingCheckpointId !== null;
  const url = '/api/admin/checkpoints';
  const method = isEditing ? 'PUT' : 'POST';

  try {
    const res = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (data.success) {
      document.getElementById("adminCheckpointEditModal").classList.remove("active");
      await loadVerificationCheckpoints(); // Reload dynamic user roadmap structures!
      loadAdminChecklists();               // Refresh checklist admin table!
    } else {
      feedback.textContent = data.message || "Failed to save checklist item.";
      feedback.style.display = "block";
    }
  } catch (err) {
    console.error(err);
    feedback.textContent = "An error occurred while connecting to the database.";
    feedback.style.display = "block";
  }
}

async function deleteAdminCheckpoint(id) {
  if (!confirm(`Are you sure you want to delete checklist item "${id}"?`)) {
    return;
  }

  try {
    const res = await fetch('/api/admin/checkpoints', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    const data = await res.json();

    if (data.success) {
      await loadVerificationCheckpoints(); // Reload dynamic user roadmap structures!
      loadAdminChecklists();               // Refresh checklist admin table!
    } else {
      alert(data.message || "Failed to delete checklist item.");
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred while deleting the checklist item.");
  }
}
