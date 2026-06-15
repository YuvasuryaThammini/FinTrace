const navGroups = [
  {
    label: "Operations",
    items: [
      ["command", "layout-dashboard", "Command Center", "12"],
      ["queue", "inbox", "My Work Queue", "18"],
      ["alerts", "siren", "Alert Triage", "47", "danger"],
      ["live", "radio-tower", "Live Operations", "9"]
    ]
  },
  {
    label: "Investigations",
    items: [
      ["aml", "scan-search", "AML Investigations", "24"],
      ["kyc", "contact-round", "KYC / CDD", "31"],
      ["edd", "user-search", "Enhanced Due Diligence", "11"],
      ["sanctions", "shield-alert", "Sanctions & PEP", "16", "danger"],
      ["ctf", "crosshair", "CTF / Proliferation", "8", "danger"],
      ["fraud", "fingerprint", "Fraud & Scams", "22"],
      ["crypto", "bitcoin", "Crypto / VASP", "13"],
      ["trade", "container", "Trade Finance / TBML", "7"],
      ["correspondent", "landmark", "Correspondent Banking", "6"]
    ]
  },
  {
    label: "Predicate Offences",
    items: [
      ["corruption", "badge-dollar-sign", "Bribery & Corruption", "9"],
      ["tax", "receipt-text", "Tax Crime / Evasion", "7"],
      ["trafficking", "users", "Trafficking / Modern Slavery", "5", "danger"],
      ["environmental", "leaf", "Environmental / Wildlife", "6"],
      ["cyber", "bug", "Cybercrime / Ransomware", "8", "danger"],
      ["market", "chart-candlestick", "Market Abuse", "4"]
    ]
  },
  {
    label: "Intelligence",
    items: [
      ["monitoring", "activity", "Transaction Monitoring", "184"],
      ["graph", "network", "Entity Network Graph", ""],
      ["screening", "scan-line", "Screening Hub", "29"],
      ["media", "newspaper", "Adverse Media", "14"],
      ["watchlists", "list-checks", "Watchlists", "5"],
      ["device", "laptop-minimal-check", "Device & IP Intelligence", "19"],
      ["typologies", "book-open-check", "Typology Library", "186"]
    ]
  },
  {
    label: "Reporting",
    items: [
      ["sar", "file-pen-line", "SAR / STR Studio", "9"],
      ["fiu", "send", "FIU Gateway", "4"],
      ["requests", "file-key-2", "Regulatory Requests", "3"],
      ["recovery", "hand-coins", "Asset Recovery", "6"]
    ]
  },
  {
    label: "Controls",
    items: [
      ["models", "sliders-horizontal", "Model Governance", "4"],
      ["qa", "clipboard-check", "QA & Audit", "12"],
      ["analytics", "chart-no-axes-combined", "Risk Analytics", ""],
      ["admin", "settings", "Administration", ""]
    ]
  }
];

const cases = [
  {
    id: "FC-2026-10482",
    entity: "NovaTrade Exports Ltd",
    initials: "NT",
    type: "Corporate",
    module: "trade",
    risk: 94,
    severity: "critical",
    status: "Escalated",
    owner: "Yuvasurya T.",
    sla: "01:42",
    title: "Suspected trade-based laundering and sanctions circumvention",
    summary: "Invoice inflation, circular counterparties and maritime payments linked to a recently designated logistics network.",
    jurisdiction: "United Kingdom",
    opened: "15 Jun 2026, 08:14",
    value: "USD 2.46M",
    scenario: "TBML-INV-07",
    customerSince: "2019",
    industry: "Industrial machinery exporter",
    country: "United Kingdom",
    kyc: "EDD overdue by 12 days",
    pep: "No direct PEP",
    sanctions: "Indirect 2-hop match",
    adverseMedia: "3 material articles",
    ubo: "Elena Markovic, 68%",
    indicators: [
      ["INV", "Invoice value anomaly", "Unit prices 285% above peer median across four shipments.", "Critical"],
      ["NET", "Circular counterparty flow", "Funds moved UK > UAE > Turkiye > UK within 72 hours.", "High"],
      ["SAN", "Sanctions proximity", "Freight agent shares director with a recently designated entity.", "Critical"],
      ["SHP", "Shipping document mismatch", "Bill of lading weight differs from customs declaration by 41%.", "High"]
    ],
    transactions: [
      ["TRX-921840", "14 Jun 2026 16:22", "NovaTrade Exports Ltd", "Orion Gulf FZE", "USD 780,000", "UAE", "Cross-border wire", "High"],
      ["TRX-921302", "13 Jun 2026 09:18", "Orion Gulf FZE", "Marmara Logistics AS", "USD 741,500", "Turkiye", "Cross-border wire", "Critical"],
      ["TRX-919887", "11 Jun 2026 12:44", "Marmara Logistics AS", "NovaTrade Exports Ltd", "USD 702,300", "United Kingdom", "Return payment", "Critical"],
      ["TRX-915401", "06 Jun 2026 14:04", "NovaTrade Exports Ltd", "Baltic Components OU", "EUR 214,800", "Estonia", "Trade payment", "Medium"]
    ],
    evidence: [
      ["Commercial invoice NT-8841", "Pricing anomaly confirmed", "Reviewed"],
      ["Bill of lading BL-44709", "Weight mismatch", "Reviewed"],
      ["Corporate registry extract", "Shared director identified", "Reviewed"],
      ["Customer explanation email", "Economic rationale incomplete", "Pending"]
    ],
    network: [
      ["NovaTrade Exports", "Subject", 43, 42, "high"],
      ["Orion Gulf FZE", "Counterparty", 72, 18, "medium"],
      ["Marmara Logistics", "Freight agent", 75, 68, "high"],
      ["Baltic Components", "Supplier", 18, 72, "medium"],
      ["Elena Markovic", "UBO 68%", 18, 20, ""]
    ],
    narrative: "Between 6 and 14 June 2026, NovaTrade Exports Ltd conducted a series of high-value cross-border trade payments totaling approximately USD 2.46 million. The activity was inconsistent with the customer's historic profile and involved invoices materially above peer pricing, circular movement of funds, and a freight intermediary linked through a shared director to a designated logistics entity. The customer has not provided a complete economic rationale or satisfactory shipping evidence."
  },
  {
    id: "FC-2026-10476",
    entity: "Amina Relief Foundation",
    initials: "AR",
    type: "Non-profit organisation",
    module: "ctf",
    risk: 91,
    severity: "critical",
    status: "Senior review",
    owner: "M. Hassan",
    sla: "00:58",
    title: "Potential terrorist financing through rapid NPO pass-through",
    summary: "Donation inflows were rapidly dispersed to cash-intensive remitters near a conflict zone with limited programme evidence.",
    jurisdiction: "European Union",
    opened: "15 Jun 2026, 06:45",
    value: "EUR 684K",
    scenario: "CTF-NPO-04",
    customerSince: "2023",
    industry: "Humanitarian charity",
    country: "Germany",
    kyc: "Valid; programme review required",
    pep: "One trustee former public official",
    sanctions: "No direct match",
    adverseMedia: "2 unverified reports",
    ubo: "N/A - trustees identified",
    indicators: [
      ["NPO", "Rapid pass-through", "82% of donations dispersed within 24 hours.", "Critical"],
      ["GEO", "Conflict-zone proximity", "Beneficiaries located within 20 km of restricted region.", "High"],
      ["CSH", "Cash-intensive remitters", "Four recipients primarily settle in cash.", "High"],
      ["DOC", "Programme evidence gap", "No beneficiary lists for two funded projects.", "Critical"]
    ],
    transactions: [
      ["TRX-922114", "15 Jun 2026 05:41", "Public donations pool", "Amina Relief Foundation", "EUR 220,000", "Germany", "Inbound credits", "Medium"],
      ["TRX-922166", "15 Jun 2026 07:12", "Amina Relief Foundation", "Al Noor Exchange", "EUR 180,000", "Jordan", "Remittance", "Critical"],
      ["TRX-922173", "15 Jun 2026 07:25", "Amina Relief Foundation", "Hope Corridor Services", "EUR 142,000", "Turkiye", "Service payment", "High"],
      ["TRX-922180", "15 Jun 2026 07:47", "Amina Relief Foundation", "Cash Relief Network", "EUR 96,000", "Lebanon", "Remittance", "Critical"]
    ],
    evidence: [
      ["Trustee identification pack", "All trustees verified", "Reviewed"],
      ["Programme budget 2026", "Does not reconcile to transfers", "Reviewed"],
      ["Beneficiary register", "Missing for two projects", "Missing"],
      ["Correspondence with remitters", "Enhanced questions sent", "Pending"]
    ],
    network: [
      ["Amina Relief", "Subject", 45, 45, "high"],
      ["Al Noor Exchange", "Remitter", 72, 20, "high"],
      ["Hope Corridor", "Service provider", 74, 70, "medium"],
      ["Cash Relief Network", "Remitter", 17, 73, "high"],
      ["Dr. Samir Q.", "Trustee", 18, 20, "medium"]
    ],
    narrative: "Amina Relief Foundation received a concentration of donations and rapidly transferred the majority to cash-intensive remitters and service providers operating near a conflict-affected region. The activity lacks complete beneficiary-level evidence and differs from the charity's stated programme schedule. The pattern may indicate diversion of charitable funds or terrorist financing exposure and requires senior CTF review."
  },
  {
    id: "FC-2026-10451",
    entity: "ChainBridge Markets LLC",
    initials: "CM",
    type: "Virtual asset service provider",
    module: "crypto",
    risk: 88,
    severity: "high",
    status: "In investigation",
    owner: "A. Chen",
    sla: "04:12",
    title: "Layering through mixer exposure and rapid chain hopping",
    summary: "Customer wallets received assets from a mixer cluster before converting across three chains and off-ramping.",
    jurisdiction: "United States",
    opened: "14 Jun 2026, 19:32",
    value: "USD 1.18M",
    scenario: "VA-MIX-12",
    customerSince: "2024",
    industry: "Digital asset brokerage",
    country: "United States",
    kyc: "Corporate KYC complete",
    pep: "No match",
    sanctions: "0.8% indirect exposure",
    adverseMedia: "1 material article",
    ubo: "Daniel Mercer, 54%",
    indicators: [
      ["MIX", "Mixer exposure", "USD 312K originated from a known mixer cluster.", "Critical"],
      ["HOP", "Rapid chain hopping", "Five swaps across BTC, ETH and TRX in 47 minutes.", "High"],
      ["VSP", "Unhosted wallet concentration", "73% of inflows from unverified self-hosted wallets.", "High"],
      ["OFF", "Immediate off-ramp", "Funds converted to fiat within 18 minutes of receipt.", "High"]
    ],
    transactions: [
      ["0x8f...21c", "14 Jun 2026 18:51", "Mixer cluster 44", "ChainBridge wallet 7", "312,400 USDT", "Ethereum", "Virtual asset transfer", "Critical"],
      ["bc1q...9kp", "14 Jun 2026 19:08", "ChainBridge wallet 7", "Swap service X", "5.84 BTC", "Bitcoin", "Chain hop", "High"],
      ["TQ5...88P", "14 Jun 2026 19:27", "Swap service X", "ChainBridge wallet 12", "294,120 USDT", "Tron", "Chain hop", "High"],
      ["TRX-919992", "14 Jun 2026 19:45", "ChainBridge Markets", "Commercial bank account", "USD 286,000", "United States", "Fiat off-ramp", "Critical"]
    ],
    evidence: [
      ["Blockchain tracing report", "Mixer attribution 92% confidence", "Reviewed"],
      ["Travel Rule message", "Originator data unavailable", "Missing"],
      ["Wallet ownership declaration", "Customer asserts treasury use", "Reviewed"],
      ["Source of funds request", "Response due 17 Jun", "Pending"]
    ],
    network: [
      ["ChainBridge", "Subject VASP", 46, 45, "high"],
      ["Mixer Cluster 44", "High-risk service", 75, 20, "high"],
      ["Swap Service X", "DEX aggregator", 76, 70, "medium"],
      ["Daniel Mercer", "UBO 54%", 17, 20, ""],
      ["Fiat Account", "Off-ramp", 18, 72, "medium"]
    ],
    narrative: "ChainBridge Markets LLC received virtual assets with material exposure to a known mixer cluster, followed by rapid swaps across multiple chains and near-immediate conversion to fiat. Travel Rule originator data was unavailable for key transfers. The activity is inconsistent with the declared treasury purpose and presents elevated money laundering and sanctions-evasion risk."
  },
  {
    id: "FC-2026-10439",
    entity: "Orion Capital Advisory",
    initials: "OC",
    type: "Private investment company",
    module: "edd",
    risk: 84,
    severity: "high",
    status: "Awaiting documents",
    owner: "S. Williams",
    sla: "09:30",
    title: "Opaque beneficial ownership and PEP-linked source of wealth",
    summary: "Layered ownership through trusts and nominees obscures a close associate of a senior foreign public official.",
    jurisdiction: "Singapore",
    opened: "14 Jun 2026, 14:09",
    value: "USD 9.7M AUM",
    scenario: "EDD-PEP-03",
    customerSince: "Application",
    industry: "Investment advisory",
    country: "Singapore",
    kyc: "Onboarding suspended",
    pep: "Close associate match",
    sanctions: "No match",
    adverseMedia: "6 material articles",
    ubo: "Unconfirmed through Alder Trust",
    indicators: [
      ["UBO", "Ownership opacity", "Three legal arrangements across four jurisdictions.", "Critical"],
      ["PEP", "Close associate link", "Director previously managed assets for a senior PEP.", "High"],
      ["SOW", "Source of wealth gap", "Property sale documents explain only 28% of declared wealth.", "High"],
      ["MED", "Corruption allegations", "Credible reporting links associate to procurement inquiry.", "High"]
    ],
    transactions: [
      ["APP-7712", "12 Jun 2026", "Alder Trust", "Orion Capital Advisory", "USD 4,200,000", "British Virgin Islands", "Proposed funding", "Critical"],
      ["APP-7713", "12 Jun 2026", "Northstar Nominees", "Orion Capital Advisory", "USD 2,800,000", "Jersey", "Proposed funding", "High"],
      ["APP-7714", "13 Jun 2026", "Private bank reference", "Orion Capital Advisory", "USD 2,700,000", "Switzerland", "Source of funds", "High"]
    ],
    evidence: [
      ["Corporate structure chart", "Nominees disclosed; trust settlor absent", "Reviewed"],
      ["Source of wealth statement", "Material gap remains", "Reviewed"],
      ["Independent legal opinion", "Requested", "Pending"],
      ["PEP close-associate assessment", "Probable match", "Reviewed"]
    ],
    network: [
      ["Orion Capital", "Applicant", 47, 46, "high"],
      ["Alder Trust", "Shareholder 72%", 74, 20, "high"],
      ["Northstar Nominees", "Nominee director", 75, 70, "medium"],
      ["Victor Halden", "PEP associate", 18, 20, "high"],
      ["Senior PEP", "Indirect link", 18, 73, "high"]
    ],
    narrative: "Orion Capital Advisory's proposed ownership and funding structure involves layered trusts, nominees and multiple high-secrecy jurisdictions. Available evidence does not establish the ultimate beneficial owner or fully explain the source of wealth. A director has a probable close-associate relationship with a senior foreign public official linked to corruption allegations."
  },
  {
    id: "FC-2026-10412",
    entity: "Javier Morales",
    initials: "JM",
    type: "Retail individual",
    module: "fraud",
    risk: 79,
    severity: "high",
    status: "Account restricted",
    owner: "L. Okafor",
    sla: "02:24",
    title: "Suspected money mule receiving authorised push-payment fraud",
    summary: "New account received transfers from eight scam victims and dispersed funds to crypto and cash withdrawals.",
    jurisdiction: "United Kingdom",
    opened: "14 Jun 2026, 10:18",
    value: "GBP 146K",
    scenario: "FRD-MULE-09",
    customerSince: "34 days",
    industry: "Hospitality worker",
    country: "United Kingdom",
    kyc: "Verified; profile inconsistent",
    pep: "No match",
    sanctions: "No match",
    adverseMedia: "None",
    ubo: "N/A",
    indicators: [
      ["VIC", "Multiple victim credits", "Eight unrelated originators reported APP fraud.", "Critical"],
      ["VEL", "High velocity dispersal", "93% of funds moved within 37 minutes.", "High"],
      ["ATM", "Cash withdrawal pattern", "Maximum daily ATM limits used across three cities.", "High"],
      ["DEV", "Device sharing", "Device linked to four previously exited accounts.", "Critical"]
    ],
    transactions: [
      ["TRX-918811", "14 Jun 2026 08:41", "Victim A", "Javier Morales", "GBP 24,500", "United Kingdom", "Faster Payment", "Critical"],
      ["TRX-918829", "14 Jun 2026 08:49", "Javier Morales", "Crypto Exchange Z", "GBP 19,800", "United Kingdom", "Card transfer", "High"],
      ["TRX-918842", "14 Jun 2026 09:04", "Javier Morales", "Cash withdrawal", "GBP 4,000", "United Kingdom", "ATM", "High"],
      ["TRX-918860", "14 Jun 2026 09:18", "Javier Morales", "External mule account", "GBP 31,200", "United Kingdom", "Faster Payment", "Critical"]
    ],
    evidence: [
      ["Victim bank reports", "Eight linked claims", "Reviewed"],
      ["Device intelligence report", "Four exited-account links", "Reviewed"],
      ["Customer occupation evidence", "Income inconsistent", "Reviewed"],
      ["Customer interview", "Scheduled for 16 Jun", "Pending"]
    ],
    network: [
      ["Javier Morales", "Subject", 46, 45, "high"],
      ["8 scam victims", "Originators", 75, 18, "high"],
      ["Crypto Exchange Z", "Off-ramp", 75, 70, "medium"],
      ["Shared Device", "4 account links", 17, 20, "high"],
      ["Mule Account B", "Beneficiary", 18, 72, "high"]
    ],
    narrative: "The account received funds from multiple unrelated originators subsequently identified as victims of authorised push-payment fraud. Funds were rapidly dispersed through cryptocurrency purchases, cash withdrawals and transfers to another suspected mule. Device intelligence links the customer's device to four previously exited accounts."
  },
  {
    id: "FC-2026-10398",
    entity: "Baltic Maritime Services SA",
    initials: "BM",
    type: "Shipping company",
    module: "sanctions",
    risk: 96,
    severity: "critical",
    status: "Payment blocked",
    owner: "R. Kapoor",
    sla: "00:31",
    title: "Vessel ownership sanctions match and possible proliferation financing",
    summary: "Payment references a vessel with recent ownership changes, AIS gaps and a beneficial owner linked to a designated industrial group.",
    jurisdiction: "Global",
    opened: "15 Jun 2026, 09:03",
    value: "USD 3.9M",
    scenario: "SAN-VES-15",
    customerSince: "2020",
    industry: "Maritime services",
    country: "Panama",
    kyc: "Refresh in progress",
    pep: "No direct PEP",
    sanctions: "Probable vessel and UBO match",
    adverseMedia: "4 material articles",
    ubo: "Seabright Holdings, disputed",
    indicators: [
      ["VES", "Vessel identifier match", "IMO number matches a recently designated vessel alias.", "Critical"],
      ["AIS", "AIS dark activity", "Three location gaps near ship-to-ship transfer zones.", "High"],
      ["OWN", "Rapid ownership changes", "Registered owner changed twice in 60 days.", "High"],
      ["CPF", "Dual-use goods reference", "Payment memo references precision control equipment.", "Critical"]
    ],
    transactions: [
      ["TRX-922441", "15 Jun 2026 08:58", "Baltic Maritime SA", "Eastern Navigation Pte", "USD 3,900,000", "Singapore", "SWIFT MT103", "Critical"],
      ["TRX-910221", "29 May 2026", "Seabright Holdings", "Baltic Maritime SA", "USD 620,000", "Panama", "Capital contribution", "High"],
      ["TRX-906115", "12 May 2026", "Baltic Maritime SA", "Harbor Technical Co", "USD 488,000", "Hong Kong", "Service payment", "Medium"]
    ],
    evidence: [
      ["Vessel screening result", "Probable alias match", "Reviewed"],
      ["AIS movement report", "Three anomalous gaps", "Reviewed"],
      ["Beneficial ownership registry", "Conflicting owner data", "Reviewed"],
      ["Goods classification documents", "Requested", "Pending"]
    ],
    network: [
      ["Baltic Maritime", "Subject", 45, 45, "high"],
      ["MV North Star", "Vessel alias", 74, 18, "high"],
      ["Eastern Navigation", "Beneficiary", 75, 70, "high"],
      ["Seabright Holdings", "Purported UBO", 17, 20, "medium"],
      ["Designated Group", "2-hop link", 18, 72, "high"]
    ],
    narrative: "A USD 3.9 million payment by Baltic Maritime Services SA references a vessel whose IMO number appears to match a recently designated alias. The vessel shows anomalous AIS gaps and rapid ownership changes. The payment description may involve dual-use equipment, creating sanctions-evasion and proliferation-financing risk."
  },
  {
    id: "FC-2026-10377",
    entity: "BlueWave Remittance PLC",
    initials: "BR",
    type: "Money service business",
    module: "correspondent",
    risk: 76,
    severity: "medium",
    status: "RFI issued",
    owner: "P. Morgan",
    sla: "18:40",
    title: "Nested correspondent activity and weak downstream respondent controls",
    summary: "A respondent bank appears to provide indirect access to unapproved remitters in high-risk corridors.",
    jurisdiction: "European Union",
    opened: "13 Jun 2026, 16:22",
    value: "EUR 8.2M",
    scenario: "CB-NEST-02",
    customerSince: "2017",
    industry: "Money remittance",
    country: "Ireland",
    kyc: "Annual review complete",
    pep: "No match",
    sanctions: "No direct match",
    adverseMedia: "1 regulatory article",
    ubo: "Public company",
    indicators: [
      ["NEST", "Nested access", "Payment originators include unapproved downstream remitters.", "High"],
      ["COR", "High-risk corridor growth", "Volume to three corridors increased 340% in 60 days.", "High"],
      ["RFI", "Incomplete respondent data", "Originator occupation and purpose fields repeatedly blank.", "Medium"],
      ["CTL", "Control assurance gap", "Latest independent AML audit is 28 months old.", "High"]
    ],
    transactions: [
      ["BATCH-7718", "13 Jun 2026", "BlueWave Remittance", "Respondent Bank Q", "EUR 3,100,000", "Multiple", "Correspondent batch", "High"],
      ["BATCH-7704", "12 Jun 2026", "BlueWave Remittance", "Respondent Bank Q", "EUR 2,800,000", "Multiple", "Correspondent batch", "High"],
      ["BATCH-7682", "10 Jun 2026", "BlueWave Remittance", "Respondent Bank R", "EUR 2,300,000", "Multiple", "Correspondent batch", "Medium"]
    ],
    evidence: [
      ["Respondent due diligence file", "Downstream list incomplete", "Reviewed"],
      ["Independent AML audit", "Outdated", "Reviewed"],
      ["Payment message quality report", "Persistent data gaps", "Reviewed"],
      ["Request for information", "Due 18 Jun", "Pending"]
    ],
    network: [
      ["BlueWave Remit", "Subject MSB", 45, 45, "medium"],
      ["Respondent Bank Q", "Correspondent", 74, 20, "high"],
      ["Remitter Alpha", "Nested client", 76, 70, "high"],
      ["Respondent Bank R", "Correspondent", 17, 20, "medium"],
      ["Remitter Beta", "Nested client", 18, 72, "high"]
    ],
    narrative: "BlueWave Remittance PLC appears to be facilitating nested correspondent access for downstream remitters not approved under the relationship. Payment message quality is persistently weak and transaction volumes to high-risk corridors have increased materially. The respondent's independent AML assurance is outdated."
  },
  {
    id: "FC-2026-10355",
    entity: "Mira Sen",
    initials: "MS",
    type: "Private banking individual",
    module: "kyc",
    risk: 68,
    severity: "medium",
    status: "Periodic review",
    owner: "N. Patel",
    sla: "2d 04h",
    title: "KYC refresh with unexplained residency and tax profile changes",
    summary: "Customer changed tax residency twice in one year while receiving private-company dividends from an undisclosed jurisdiction.",
    jurisdiction: "India",
    opened: "12 Jun 2026, 11:10",
    value: "USD 2.1M AUM",
    scenario: "KYC-PR-11",
    customerSince: "2018",
    industry: "Technology executive",
    country: "India / UAE",
    kyc: "Periodic review open",
    pep: "No match",
    sanctions: "No match",
    adverseMedia: "None material",
    ubo: "Self",
    indicators: [
      ["TAX", "Tax residency changes", "Two changes in 12 months with incomplete evidence.", "Medium"],
      ["INC", "Income source mismatch", "Dividends not present in prior wealth profile.", "High"],
      ["JUR", "Undisclosed jurisdiction", "Payer incorporated in a jurisdiction not declared.", "Medium"],
      ["DOC", "Document inconsistency", "Address proof conflicts with account activity.", "Medium"]
    ],
    transactions: [
      ["TRX-905112", "02 Jun 2026", "CloudArc Holdings", "Mira Sen", "USD 480,000", "Mauritius", "Dividend", "High"],
      ["TRX-897244", "14 Apr 2026", "CloudArc Holdings", "Mira Sen", "USD 390,000", "Mauritius", "Dividend", "High"],
      ["TRX-883149", "01 Feb 2026", "Mira Sen", "UAE property developer", "AED 1,400,000", "UAE", "Property deposit", "Medium"]
    ],
    evidence: [
      ["Passport and national ID", "Valid", "Reviewed"],
      ["Tax residency certificate", "One period missing", "Pending"],
      ["Dividend entitlement letter", "Requested", "Pending"],
      ["Source of wealth profile", "Requires update", "Reviewed"]
    ],
    network: [
      ["Mira Sen", "Subject", 45, 45, "medium"],
      ["CloudArc Holdings", "Dividend payer", 74, 20, "medium"],
      ["UAE Property Co", "Beneficiary", 75, 70, ""],
      ["Indian Employer", "Historic income", 17, 20, ""],
      ["Family Office", "Advisor", 18, 72, ""]
    ],
    narrative: "Mira Sen's periodic review identified tax residency changes, an undisclosed dividend-paying company and inconsistencies between address documentation and observed activity. Additional evidence is required to update source of wealth and establish the economic rationale for cross-border dividend income."
  }
];

const liveEvents = [
  ["Critical alert", "Vessel alias match confirmed for FC-2026-10398", "Sanctions", "red"],
  ["New alert", "Rapid cash dispersion detected on retail account", "Transaction Monitoring", "amber"],
  ["Screening update", "PEP close-associate confidence raised to 87%", "Screening Hub", "amber"],
  ["FIU status", "STR-2026-00841 accepted by gateway", "Reporting", ""],
  ["Crypto trace", "Mixer cluster attribution updated to 92%", "Virtual Assets", "red"],
  ["RFI received", "BlueWave respondent supplied partial downstream list", "Correspondent Banking", ""]
];

const priorityNotifications = [
  {
    id: "NTF-10398",
    icon: "ship-wheel",
    tone: "red",
    title: "Sanctions payment requires action",
    text: "Vessel alias match confirmed for Baltic Maritime Services SA.",
    time: "1m",
    caseId: "FC-2026-10398"
  },
  {
    id: "NTF-10476",
    icon: "triangle-alert",
    tone: "red",
    title: "CTF case approaching SLA",
    text: "Amina Relief Foundation has less than one hour remaining.",
    time: "4m",
    caseId: "FC-2026-10476"
  },
  {
    id: "NTF-10482",
    icon: "container",
    tone: "amber",
    title: "Trade evidence mismatch",
    text: "Shipping weight differs from the customs declaration by 41%.",
    time: "8m",
    caseId: "FC-2026-10482"
  },
  {
    id: "NTF-10451",
    icon: "bitcoin",
    tone: "amber",
    title: "Mixer attribution updated",
    text: "ChainBridge exposure confidence increased to 92%.",
    time: "12m",
    caseId: "FC-2026-10451"
  },
  {
    id: "NTF-FIU-841",
    icon: "send",
    tone: "blue",
    title: "FIU report accepted",
    text: "STR-2026-00841 was accepted by the reporting gateway.",
    time: "18m",
    view: "fiu"
  },
  {
    id: "NTF-10412",
    icon: "fingerprint",
    tone: "amber",
    title: "Fraud restriction recorded",
    text: "Javier Morales account restriction is ready for review.",
    time: "23m",
    caseId: "FC-2026-10412"
  },
  {
    id: "NTF-MODEL-4",
    icon: "sliders-horizontal",
    tone: "blue",
    title: "Model approval pending",
    text: "Four scenario changes are waiting for governance approval.",
    time: "31m",
    view: "models"
  }
];

const moduleDefinitions = {
  alerts: {
    title: "Alert Triage",
    eyebrow: "Detection and prioritisation",
    help: "Review alerts generated by transaction monitoring, screening, device intelligence and other detection systems.",
    metrics: [["Open alerts", "184", "47 high priority"], ["Auto-closed", "62%", "Rules and model consensus"], ["Median age", "3.8h", "Inside target"], ["Escalation rate", "18%", "Last 30 days"]],
    cards: [
      ["TM-Structuring", "34 alerts", "Cash deposits below reporting thresholds across linked branches.", "High"],
      ["TM-RapidMovement", "28 alerts", "Inbound funds dispersed to unrelated beneficiaries within one hour.", "Critical"],
      ["TM-CircularFlow", "19 alerts", "Funds returned to originator through intermediary accounts.", "Critical"],
      ["TM-DormantAccount", "17 alerts", "Sudden high-value activity after prolonged inactivity.", "Medium"],
      ["TM-HighRiskGeo", "31 alerts", "Transfers involving high-risk or monitored corridors.", "High"],
      ["TM-ProfileDeviation", "55 alerts", "Activity materially inconsistent with expected customer behaviour.", "Medium"]
    ]
  },
  kyc: {
    title: "KYC / Customer Due Diligence",
    eyebrow: "Identity and customer risk",
    help: "Manage identity verification, customer risk assessments, beneficial ownership and periodic review obligations.",
    metrics: [["Reviews due", "31", "7 overdue"], ["Identity pass", "96.4%", "Current month"], ["BO gaps", "12", "Legal persons"], ["Risk upgrades", "8", "This week"]],
    cards: [
      ["Identity verification", "4 exceptions", "Document, biometric and database verification results.", "Medium"],
      ["Beneficial ownership", "12 gaps", "Ultimate owners, controllers, nominees and legal arrangements.", "High"],
      ["Source of funds", "9 reviews", "Origin and legitimacy of transaction-level funding.", "High"],
      ["Source of wealth", "6 reviews", "How total wealth was accumulated and evidenced.", "High"],
      ["Periodic reviews", "31 due", "Risk-based refresh and event-driven review population.", "Medium"],
      ["Tax residency", "7 conflicts", "FATCA/CRS and declared residency inconsistencies.", "Medium"]
    ]
  },
  edd: {
    title: "Enhanced Due Diligence",
    eyebrow: "High-risk customer controls",
    help: "Conduct deeper reviews for high-risk customers, PEPs, complex ownership, unusual wealth and elevated jurisdictions.",
    metrics: [["EDD cases", "11", "3 senior review"], ["PEP-related", "5", "Domestic and foreign"], ["SOW gaps", "7", "Evidence incomplete"], ["Approval SLA", "1.8d", "Average"]],
    cards: [
      ["Complex ownership", "4 cases", "Layered companies, trusts, nominees and control arrangements.", "Critical"],
      ["PEP assessment", "5 cases", "Position, influence, close associates and family relationships.", "High"],
      ["Wealth corroboration", "7 cases", "Independent evidence supporting source of wealth.", "High"],
      ["High-risk jurisdiction", "6 cases", "Exposure assessed against product and customer context.", "High"],
      ["Senior approval", "3 pending", "Documented risk acceptance by authorised management.", "Critical"],
      ["Ongoing monitoring", "8 enhanced", "Increased frequency and tailored scenarios.", "Medium"]
    ]
  },
  sanctions: {
    title: "Sanctions & PEP Investigations",
    eyebrow: "Screening and targeted financial sanctions",
    help: "Investigate name, entity, vessel and ownership matches; assess PEP exposure and sanctions-evasion indicators.",
    metrics: [["Potential matches", "16", "5 critical"], ["Payments held", "7", "USD 8.4M"], ["Ownership matches", "4", "50% rule review"], ["PEP cases", "9", "3 foreign PEP"]],
    cards: [
      ["Name screening", "29 hits", "Individuals and entities against global watchlists.", "High"],
      ["Ownership screening", "4 cases", "Direct and indirect sanctioned ownership or control.", "Critical"],
      ["Vessel screening", "3 cases", "IMO, aliases, ownership changes and AIS anomalies.", "Critical"],
      ["Payment screening", "7 held", "Originator, beneficiary, bank and free-text review.", "High"],
      ["PEP / RCA", "9 cases", "PEPs, relatives and close associates.", "High"],
      ["Evasion typologies", "6 alerts", "Front companies, transshipment and payment stripping.", "Critical"]
    ]
  },
  ctf: {
    title: "CTF / Proliferation Financing",
    eyebrow: "Terrorist and proliferation financing",
    help: "Assess small-value networks, NPO abuse, conflict-zone exposure, foreign fighters, dual-use goods and targeted financial sanctions.",
    metrics: [["Active CTF cases", "8", "2 urgent"], ["NPO reviews", "5", "Programme evidence"], ["CPF indicators", "4", "Dual-use goods"], ["Network links", "27", "Under analysis"]],
    cards: [
      ["NPO abuse", "5 cases", "Diversion of charitable funds and cash-intensive remitters.", "Critical"],
      ["Conflict-zone flows", "9 alerts", "Payments and beneficiaries near high-risk regions.", "High"],
      ["Small-value networks", "14 alerts", "Repeated low-value payments across connected actors.", "High"],
      ["Foreign fighter indicators", "2 cases", "Travel, remittance and device link analysis.", "Critical"],
      ["Dual-use goods", "4 cases", "Trade payments with proliferation-sensitive descriptions.", "Critical"],
      ["Targeted sanctions", "3 holds", "Terrorism and proliferation designations.", "Critical"]
    ]
  },
  fraud: {
    title: "Fraud & Scam Investigations",
    eyebrow: "Customer and payment protection",
    help: "Investigate APP fraud, account takeover, money mules, cards, identity fraud, scams and insider threats.",
    metrics: [["Open fraud cases", "22", "6 victim urgent"], ["Funds protected", "GBP 1.2M", "Today"], ["Mule accounts", "14", "Restricted"], ["Recovery rate", "61%", "Last 30 days"]],
    cards: [
      ["APP fraud", "18 cases", "Impersonation, investment, romance and purchase scams.", "Critical"],
      ["Money mules", "14 cases", "Victim credits followed by rapid dispersal.", "High"],
      ["Account takeover", "9 cases", "Device, SIM, credential and behavioural anomalies.", "Critical"],
      ["Card fraud", "21 cases", "Card-not-present, counterfeit and merchant compromise.", "High"],
      ["Identity fraud", "7 cases", "Synthetic, stolen and manipulated identity evidence.", "High"],
      ["Insider threat", "2 cases", "Employee access and transaction anomalies.", "Critical"]
    ]
  },
  crypto: {
    title: "Crypto / VASP Investigations",
    eyebrow: "Virtual asset financial crime",
    help: "Trace blockchain exposure, assess VASPs and self-hosted wallets, review Travel Rule data and identify laundering typologies.",
    metrics: [["Wallet alerts", "13", "4 critical"], ["Mixer exposure", "USD 2.8M", "30 days"], ["Travel Rule gaps", "17", "Missing fields"], ["High-risk VASPs", "6", "Under review"]],
    cards: [
      ["Blockchain tracing", "13 alerts", "Wallet flows, clusters, services and exposure paths.", "Critical"],
      ["Mixer / tumbler", "4 cases", "Direct and indirect privacy-service exposure.", "Critical"],
      ["Chain hopping", "7 alerts", "Rapid swaps across multiple assets and chains.", "High"],
      ["Travel Rule", "17 gaps", "Originator and beneficiary information quality.", "High"],
      ["Unhosted wallets", "11 reviews", "Ownership, control and source-of-funds assessment.", "High"],
      ["Scam proceeds", "6 cases", "Crypto investment and recovery-scam tracing.", "Critical"]
    ]
  },
  trade: {
    title: "Trade Finance / TBML",
    eyebrow: "Trade-based money laundering",
    help: "Review invoices, goods, pricing, shipping, counterparties and payment flows for trade-based laundering and sanctions evasion.",
    metrics: [["Trade cases", "7", "3 critical"], ["Invoices reviewed", "142", "This week"], ["Pricing anomalies", "18", "Peer variance"], ["Goods holds", "4", "Dual-use review"]],
    cards: [
      ["Over / under invoicing", "18 alerts", "Pricing outside market and peer benchmarks.", "Critical"],
      ["Phantom shipments", "3 cases", "Payments without credible movement of goods.", "Critical"],
      ["Multiple invoicing", "6 alerts", "Reused documents across banks or facilities.", "High"],
      ["Goods mismatch", "9 alerts", "Description, quantity, weight and tariff conflicts.", "High"],
      ["Shipping anomalies", "7 cases", "Route, vessel, AIS and bill-of-lading concerns.", "Critical"],
      ["Dual-use goods", "4 holds", "Export-control and proliferation-sensitive goods.", "Critical"]
    ]
  },
  correspondent: {
    title: "Correspondent Banking",
    eyebrow: "Institution and respondent risk",
    help: "Assess respondent banks, nested relationships, payable-through access, transaction quality and high-risk corridors.",
    metrics: [["Respondent reviews", "6", "2 enhanced"], ["Nested concerns", "3", "Unapproved access"], ["RFI pending", "8", "Data quality"], ["Corridor alerts", "14", "Last 7 days"]],
    cards: [
      ["Respondent due diligence", "6 reviews", "Ownership, licences, controls and regulatory history.", "High"],
      ["Nested relationships", "3 cases", "Downstream institutions accessing the relationship.", "Critical"],
      ["Payable-through accounts", "2 reviews", "Direct customer access to correspondent services.", "High"],
      ["Message quality", "8 RFIs", "Missing or stripped originator and beneficiary data.", "High"],
      ["High-risk corridors", "14 alerts", "Unexpected volumes to elevated jurisdictions.", "High"],
      ["Shell bank controls", "0 hits", "Prohibition and ownership checks.", "Critical"]
    ]
  },
  corruption: {
    title: "Bribery & Corruption",
    eyebrow: "Public-integrity financial crime",
    help: "Investigate bribery, kickbacks, procurement corruption, embezzlement, state-asset diversion and PEP-linked illicit finance.",
    metrics: [["Active cases", "9", "3 PEP-linked"], ["Public funds", "USD 14.8M", "Under review"], ["Procurement alerts", "18", "Last 30 days"], ["SOW gaps", "6", "Material"]],
    cards: [
      ["Procurement kickbacks", "4 cases", "Payments to intermediaries linked to public contract awards.", "Critical"],
      ["State-asset diversion", "2 cases", "Public funds routed through private companies or relatives.", "Critical"],
      ["PEP unexplained wealth", "5 reviews", "Assets and expenditure inconsistent with legitimate income.", "High"],
      ["Facilitation payments", "7 alerts", "Repeated payments to officials or government-linked agents.", "High"],
      ["Embezzlement", "3 cases", "Misappropriation through false vendors and related parties.", "Critical"],
      ["Political donations", "6 reviews", "Unusual donors, intermediaries and campaign-linked payments.", "High"]
    ]
  },
  tax: {
    title: "Tax Crime / Evasion",
    eyebrow: "Tax-related financial crime",
    help: "Investigate hidden income, sham invoices, offshore structures, carousel fraud, undeclared assets and laundering of tax-crime proceeds.",
    metrics: [["Active cases", "7", "2 urgent"], ["Offshore entities", "23", "Linked"], ["Invoice anomalies", "14", "Potential sham"], ["Undeclared value", "USD 9.1M", "Estimated"]],
    cards: [
      ["Offshore concealment", "4 cases", "Accounts and entities inconsistent with declared tax residence.", "High"],
      ["Sham invoicing", "6 alerts", "Services lacking substance used to shift profit or extract funds.", "Critical"],
      ["VAT / carousel fraud", "2 cases", "Circular goods and tax-credit claims across jurisdictions.", "Critical"],
      ["Undeclared assets", "5 reviews", "Property, investments and accounts absent from customer profile.", "High"],
      ["Payroll tax fraud", "3 alerts", "False employees, contractor misuse and diverted payroll.", "High"],
      ["Tax-amnesty abuse", "1 case", "Voluntary disclosure used to legitimise criminal proceeds.", "Critical"]
    ]
  },
  trafficking: {
    title: "Human Trafficking & Modern Slavery",
    eyebrow: "Exploitation-linked financial intelligence",
    help: "Identify payment, payroll, remittance, cash and merchant patterns associated with trafficking, forced labour and exploitation.",
    metrics: [["Active networks", "5", "2 urgent"], ["Potential victims", "46", "Protected review"], ["Linked merchants", "18", "High risk"], ["Cash intensity", "78%", "Network average"]],
    cards: [
      ["Wage control", "4 cases", "Multiple salaries paid into one controller account.", "Critical"],
      ["Recruitment debt", "6 alerts", "Recurring payments to labour brokers and transport operators.", "High"],
      ["Cash concentration", "9 alerts", "Frequent withdrawals near accommodation and work sites.", "High"],
      ["Online exploitation", "3 cases", "Platform, wallet and payment links to commercial exploitation.", "Critical"],
      ["Document retention", "2 cases", "Payments for passports, visas or identity documents controlled by third parties.", "Critical"],
      ["Victim remittances", "7 reviews", "Low-value transfers with shared devices and addresses.", "High"]
    ]
  },
  environmental: {
    title: "Environmental & Wildlife Crime",
    eyebrow: "Natural-resource illicit finance",
    help: "Investigate illegal logging, mining, waste trafficking, wildlife trade, fishing offences and related corruption or laundering.",
    metrics: [["Active cases", "6", "2 cross-border"], ["Trade value", "USD 6.7M", "Under review"], ["High-risk permits", "11", "Validation pending"], ["Corruption links", "4", "Public officials"]],
    cards: [
      ["Illegal logging", "3 cases", "Timber exporters, false certificates and high-risk concessions.", "Critical"],
      ["Illegal mining", "4 alerts", "Gold and mineral flows inconsistent with licensed production.", "Critical"],
      ["Waste trafficking", "2 cases", "Misdeclared hazardous waste and circular shipping routes.", "High"],
      ["Wildlife trafficking", "5 alerts", "Payments linked to protected species and trading networks.", "Critical"],
      ["Illegal fishing", "3 reviews", "Vessel ownership, AIS gaps and opaque seafood supply chains.", "High"],
      ["Permit corruption", "4 links", "Payments to officials around licences and inspections.", "Critical"]
    ]
  },
  cyber: {
    title: "Cybercrime & Ransomware",
    eyebrow: "Digitally enabled financial crime",
    help: "Trace ransomware, business-email compromise, credential theft, dark-web services, malware proceeds and cyber-enabled laundering.",
    metrics: [["Open cases", "8", "3 ransomware"], ["Crypto exposure", "USD 4.4M", "Attributed"], ["BEC attempts", "21", "This month"], ["Infrastructure links", "34", "Wallets and devices"]],
    cards: [
      ["Ransomware", "3 cases", "Victim payments, affiliate wallets and exchange off-ramps.", "Critical"],
      ["Business email compromise", "9 alerts", "Invoice diversion and beneficiary changes.", "Critical"],
      ["Credential theft", "7 cases", "Phishing, session hijack and account takeover proceeds.", "High"],
      ["Dark-web markets", "4 alerts", "Wallet and merchant exposure to illicit marketplaces.", "Critical"],
      ["Malware services", "5 links", "Hosting, crypters, loaders and access brokers.", "High"],
      ["Crypto laundering", "8 traces", "Mixers, bridges, chain hopping and mule off-ramps.", "Critical"]
    ]
  },
  market: {
    title: "Market Abuse",
    eyebrow: "Capital-markets integrity",
    help: "Investigate insider dealing, manipulation, spoofing, layering, wash trading and suspicious securities activity.",
    metrics: [["Open reviews", "4", "1 urgent"], ["Orders analysed", "18,440", "Last 7 days"], ["Linked accounts", "27", "Network review"], ["STOR candidates", "3", "Approval pending"]],
    cards: [
      ["Insider dealing", "2 cases", "Trading before material non-public announcements.", "Critical"],
      ["Spoofing / layering", "4 alerts", "Non-bona-fide orders intended to move market price.", "High"],
      ["Wash trading", "3 alerts", "Common-control accounts trading without economic change.", "High"],
      ["Pump and dump", "2 cases", "Coordinated promotion followed by concentrated selling.", "Critical"],
      ["Cross-market manipulation", "1 case", "Derivatives and underlying instruments used together.", "Critical"],
      ["Suspicious orders", "3 STORs", "Regulatory reports awaiting authorised approval.", "High"]
    ]
  },
  screening: {
    title: "Screening Hub",
    eyebrow: "Name and transaction screening",
    help: "Unified sanctions, PEP, adverse media, internal watchlist, vessel and payment screening operations.",
    metrics: [["Today's hits", "29", "16 unresolved"], ["True match rate", "7.2%", "Last 30 days"], ["Median review", "11m", "Inside SLA"], ["Lists current", "100%", "Last sync 09:02"]],
    cards: [
      ["Customer screening", "12 hits", "Names, aliases, dates of birth and identifiers.", "High"],
      ["Payment screening", "7 holds", "Parties, banks, free text and location fields.", "Critical"],
      ["PEP screening", "9 hits", "PEPs, family members and close associates.", "High"],
      ["Vessel screening", "3 hits", "IMO numbers, names, flags and ownership.", "Critical"],
      ["Adverse media", "14 hits", "Material crime, corruption and regulatory reporting.", "Medium"],
      ["Internal watchlists", "5 hits", "Exited customers, devices and known counterparties.", "High"]
    ]
  },
  media: {
    title: "Adverse Media Intelligence",
    eyebrow: "Open-source risk intelligence",
    help: "Review relevant and credible reporting on financial crime, corruption, sanctions, fraud and regulatory misconduct.",
    metrics: [["Unreviewed hits", "14", "5 material"], ["Entities monitored", "2,841", "Continuous"], ["New sources", "126", "Last 24h"], ["False positive", "42%", "Name ambiguity"]],
    cards: [
      ["Financial crime", "6 hits", "Money laundering, fraud, bribery and tax offences.", "High"],
      ["Corruption", "4 hits", "Public procurement and abuse-of-office allegations.", "High"],
      ["Regulatory action", "3 hits", "Fines, licence restrictions and enforcement.", "Medium"],
      ["Organised crime", "2 hits", "Credible links to criminal networks.", "Critical"],
      ["Environmental crime", "2 hits", "Illegal mining, logging and waste trafficking.", "High"],
      ["Human trafficking", "1 hit", "Labour exploitation and trafficking indicators.", "Critical"]
    ]
  },
  watchlists: {
    title: "Watchlist Management",
    eyebrow: "Internal and external lists",
    help: "Maintain regulatory lists, internal risk lists, law-enforcement notices and operational suppression rules.",
    metrics: [["External lists", "42", "All current"], ["Internal entries", "1,284", "5 new today"], ["Pending approval", "5", "Four-eye control"], ["Expired entries", "0", "Automated review"]],
    cards: [
      ["Sanctions lists", "18 sources", "UN, national and regional designations.", "Critical"],
      ["PEP datasets", "6 sources", "Positions, relatives and close associates.", "High"],
      ["Internal exit list", "842 entries", "Customers exited for financial-crime risk.", "High"],
      ["Device watchlist", "219 entries", "Devices linked to confirmed abuse.", "Critical"],
      ["Law enforcement", "38 notices", "Confidential requests and production orders.", "Critical"],
      ["Suppressions", "64 rules", "Documented false-positive handling.", "Medium"]
    ]
  },
  device: {
    title: "Device & IP Intelligence",
    eyebrow: "Digital identity and behavioural links",
    help: "Investigate devices, IP addresses, sessions, SIM changes, geolocation and cross-account behavioural connections.",
    metrics: [["Linked devices", "19", "High risk"], ["Shared accounts", "46", "Under review"], ["Impossible travel", "8", "Last 24h"], ["TOR / proxy", "12", "Active sessions"]],
    cards: [
      ["Device sharing", "19 alerts", "One device accessing multiple unrelated customers.", "Critical"],
      ["Impossible travel", "8 alerts", "Sessions too distant for elapsed time.", "High"],
      ["SIM swap", "6 alerts", "Recent telecom changes before sensitive activity.", "High"],
      ["Proxy / TOR", "12 sessions", "Anonymised network access.", "Medium"],
      ["Emulator use", "4 alerts", "Automated or virtualised device environment.", "High"],
      ["Behavioural anomaly", "17 alerts", "Typing, navigation and transaction-pattern changes.", "Medium"]
    ]
  },
  typologies: {
    title: "Financial Crime Typology Library",
    eyebrow: "Investigative knowledge base",
    help: "Search maintained typologies, red flags, investigative questions, evidence sources, controls and reporting considerations.",
    metrics: [["Typologies", "186", "Across 24 domains"], ["Red flags", "1,248", "Curated"], ["Updated this month", "17", "Threat intelligence"], ["Control mappings", "94%", "Coverage"]],
    cards: [
      ["Money laundering", "42 typologies", "Placement, layering, integration, structuring and funnel accounts.", "High"],
      ["Terrorist financing", "18 typologies", "NPO abuse, small-value networks, remitters and conflict zones.", "Critical"],
      ["Sanctions evasion", "21 typologies", "Front companies, ownership concealment, transshipment and payment stripping.", "Critical"],
      ["Fraud and scams", "36 typologies", "APP fraud, mules, identity abuse, cards and account takeover.", "High"],
      ["Virtual assets", "24 typologies", "Mixers, chain hopping, unhosted wallets and high-risk VASPs.", "High"],
      ["Predicate offences", "45 typologies", "Corruption, tax, trafficking, cyber, environmental and market abuse.", "Critical"]
    ]
  },
  requests: {
    title: "Regulatory & Law-Enforcement Requests",
    eyebrow: "Protected information exchange",
    help: "Track subpoenas, production orders, account information requests and authorised disclosures.",
    metrics: [["Open requests", "3", "1 urgent"], ["Due today", "1", "Production order"], ["Legal holds", "7", "Records preserved"], ["Completed", "26", "This quarter"]],
    cards: [
      ["Production orders", "2 open", "Court-authorised records and transaction evidence.", "Critical"],
      ["Information requests", "1 open", "Regulator or FIU follow-up questions.", "High"],
      ["Account preservation", "3 active", "Prevent alteration or deletion of records.", "Critical"],
      ["Law-enforcement liaison", "4 tasks", "Controlled communication and disclosure tracking.", "High"],
      ["Consent requests", "1 pending", "Jurisdiction-specific transaction consent process.", "Critical"],
      ["Disclosure audit", "26 complete", "Recipient, legal basis and data scope recorded.", "Medium"]
    ]
  },
  recovery: {
    title: "Asset Recovery",
    eyebrow: "Tracing, restraint and recovery",
    help: "Coordinate fund tracing, recalls, holds, freezing actions and law-enforcement recovery support.",
    metrics: [["Active recoveries", "6", "USD 4.1M"], ["Funds restrained", "USD 2.8M", "Current cases"], ["Recall success", "58%", "Last quarter"], ["Victims supported", "23", "Open"]],
    cards: [
      ["Payment recalls", "8 actions", "Bank-to-bank recall and beneficiary contact.", "High"],
      ["Account restraint", "4 cases", "Internal holds and legal freezing actions.", "Critical"],
      ["Crypto recovery", "2 cases", "Exchange liaison and wallet tracing.", "Critical"],
      ["Victim restitution", "6 cases", "Validated loss and recovery allocation.", "High"],
      ["Asset tracing", "9 tasks", "Accounts, companies, property and virtual assets.", "High"],
      ["Law-enforcement handoff", "3 cases", "Evidence package and chain-of-custody transfer.", "Critical"]
    ]
  },
  models: {
    title: "Model & Scenario Governance",
    eyebrow: "Detection control effectiveness",
    help: "Manage transaction-monitoring rules, models, thresholds, validation, explainability and change approvals.",
    metrics: [["Models in use", "24", "4 due validation"], ["Scenarios", "116", "Across products"], ["Precision", "18.7%", "Investigator yield"], ["Changes pending", "4", "Approval workflow"]],
    cards: [
      ["Scenario inventory", "116 controls", "Purpose, typology, threshold and coverage.", "High"],
      ["Model validation", "4 due", "Independent performance and conceptual soundness.", "Critical"],
      ["Threshold tuning", "9 reviews", "Alert volume, risk appetite and effectiveness.", "Medium"],
      ["Data lineage", "3 gaps", "Source, transformation and control traceability.", "High"],
      ["Explainability", "100% mapped", "Reason codes and contributing features.", "High"],
      ["Change governance", "4 pending", "Testing, approval and deployment evidence.", "Critical"]
    ]
  },
  qa: {
    title: "Quality Assurance & Audit",
    eyebrow: "Investigation control testing",
    help: "Perform quality reviews, control testing, audit sampling, issue management and investigator calibration.",
    metrics: [["QA reviews", "12", "5 due today"], ["Pass rate", "91.4%", "Rolling 30 days"], ["Material defects", "2", "Remediation open"], ["Audit actions", "7", "3 overdue"]],
    cards: [
      ["Case QA", "12 reviews", "Evidence, rationale, decision and timeliness.", "High"],
      ["SAR quality", "5 reviews", "Completeness, chronology, facts and typology.", "Critical"],
      ["Screening QA", "8 samples", "Match logic and disposition support.", "High"],
      ["Control testing", "6 tests", "Design and operating effectiveness.", "High"],
      ["Issue management", "7 actions", "Root cause, owner, due date and validation.", "Critical"],
      ["Calibration", "3 sessions", "Consistent risk decisions across investigators.", "Medium"]
    ]
  },
  analytics: {
    title: "Financial Crime Risk Analytics",
    eyebrow: "Portfolio risk and effectiveness",
    help: "Monitor risk exposure, investigation outcomes, control performance, typology trends and operational capacity.",
    metrics: [["Cases opened", "284", "This month"], ["SAR conversion", "14.2%", "Investigated cases"], ["Backlog", "7.6d", "Average age"], ["Loss prevented", "USD 18.4M", "Quarter to date"]],
    cards: [
      ["Portfolio risk", "High stable", "Customer, product, geography and channel exposure.", "High"],
      ["Alert effectiveness", "18.7% yield", "Alerts resulting in material investigation outcomes.", "Medium"],
      ["Case outcomes", "41 SARs", "Filed, exited, restricted, monitored and closed.", "High"],
      ["Emerging typologies", "7 active", "New patterns from cases, FIUs and industry intelligence.", "Critical"],
      ["Investigator capacity", "82% utilised", "Workload, skills, ageing and SLA pressure.", "Medium"],
      ["Control coverage", "94%", "Mapped risks with active preventive or detective controls.", "High"]
    ]
  },
  admin: {
    title: "Administration",
    eyebrow: "Platform configuration and access",
    help: "Manage roles, permissions, teams, taxonomies, service levels, integrations and data retention.",
    metrics: [["Active users", "142", "12 teams"], ["Privileged roles", "9", "Quarterly review"], ["Integrations", "28", "All operational"], ["Policy version", "6.4", "Effective 01 Jun"]],
    cards: [
      ["Roles & permissions", "31 roles", "Least-privilege access and four-eye controls.", "Critical"],
      ["Teams & queues", "12 teams", "Skills, jurisdictions and workload routing.", "Medium"],
      ["Taxonomies", "186 values", "Typologies, outcomes, risk factors and evidence types.", "Medium"],
      ["SLA policies", "14 policies", "Priority and jurisdiction-based service levels.", "High"],
      ["Integrations", "28 services", "Core banking, screening, blockchain, registry and FIU.", "High"],
      ["Retention", "9 policies", "Legal, regulatory and privacy requirements.", "Critical"]
    ]
  }
};

const pageMeta = {
  command: ["Operations", "Command Center", "A live view of alerts, investigations, reporting obligations and control health across the financial-crime programme."],
  queue: ["Investigator operations", "My Work Queue", "Prioritised investigations assigned to the current investigator, including SLA, risk and required action."],
  aml: ["Case investigation", "AML Investigations", "Case-led review of suspicious activity, customer behaviour, transaction flows, networks, evidence and reporting decisions."],
  monitoring: ["Detection operations", "Transaction Monitoring", "Monitor scenarios, prioritise alerts and investigate unusual activity across products and customer segments."],
  graph: ["Network intelligence", "Entity Network Graph", "Explore relationships between customers, accounts, counterparties, devices, companies, wallets and risk entities."],
  sar: ["Regulatory reporting", "SAR / STR Studio", "Prepare confidential suspicious activity or transaction reports with evidence, narrative controls and approval workflow."],
  fiu: ["Regulatory reporting", "FIU Gateway", "Submit, track and manage confidential reports and follow-up communications with the relevant Financial Intelligence Unit."],
  live: ["Enterprise operations", "Live FinCrime Operations", "Observe investigators, alert engines, screening services and reporting workflows moving in real time."]
};

let activeView = "command";
let selectedCaseId = cases[0].id;
let activeCaseTab = "overview";
let activeAlertFilter = "All";
let liveTick = 0;
let liveTimer = null;
let readNotificationIds = new Set();
const navDrag = {
  active: false,
  moved: false,
  pointerId: null,
  startX: 0,
  startScrollLeft: 0,
  suppressClick: false
};

const elements = {
  shell: document.querySelector("#appShell"),
  nav: document.querySelector("#primaryNav"),
  appView: document.querySelector("#appView"),
  pageEyebrow: document.querySelector("#pageEyebrow"),
  pageTitle: document.querySelector("#pageTitle"),
  pageHelp: document.querySelector("#pageHelp"),
  liveStrip: document.querySelector("#liveStrip"),
  globalSearch: document.querySelector("#globalSearch"),
  toastRegion: document.querySelector("#toastRegion"),
  notificationCount: document.querySelector("#notificationCount"),
  notificationButton: document.querySelector(".notification-button"),
  notificationPanel: document.querySelector("#notificationPanel"),
  notificationList: document.querySelector("#notificationList"),
  closeNotifications: document.querySelector("#closeNotifications"),
  markAllRead: document.querySelector("#markAllRead"),
  openAlertCenter: document.querySelector("#openAlertCenter"),
  railToggle: document.querySelector("#railToggle"),
  mobileMenu: document.querySelector("#mobileMenu"),
  mobileScrim: document.querySelector("#mobileScrim"),
  brandHome: document.querySelector("#brandHome")
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function loadNotificationState() {
  try {
    const stored = JSON.parse(localStorage.getItem("fintraceReadNotifications") || "[]");
    if (Array.isArray(stored)) readNotificationIds = new Set(stored);
  } catch {
    readNotificationIds = new Set();
  }
}

function saveNotificationState() {
  localStorage.setItem("fintraceReadNotifications", JSON.stringify([...readNotificationIds]));
}

function updateNotificationCount() {
  const unread = priorityNotifications.filter((item) => !readNotificationIds.has(item.id)).length;
  elements.notificationCount.textContent = unread;
  elements.notificationCount.hidden = unread === 0;
  elements.notificationButton.setAttribute("aria-label", unread ? `${unread} priority notifications` : "No unread priority notifications");
}

function renderNotifications() {
  elements.notificationList.innerHTML = priorityNotifications.map((item) => `
    <button class="notification-item ${readNotificationIds.has(item.id) ? "" : "unread"}" type="button" data-notification-id="${item.id}">
      <span class="notification-symbol ${item.tone === "amber" ? "amber" : item.tone === "blue" ? "blue" : ""}">
        <i data-lucide="${item.icon}"></i>
      </span>
      <span class="notification-copy">
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.text)}</span>
      </span>
      <time>${escapeHtml(item.time)}</time>
    </button>
  `).join("");

  elements.notificationList.querySelectorAll("[data-notification-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = priorityNotifications.find((notification) => notification.id === button.dataset.notificationId);
      if (!item) return;
      readNotificationIds.add(item.id);
      saveNotificationState();
      updateNotificationCount();
      closeNotificationPanel();
      if (item.caseId) {
        selectedCaseId = item.caseId;
        activeCaseTab = "overview";
        activeView = "aml";
      } else {
        activeView = item.view || "alerts";
      }
      render();
    });
  });

  updateNotificationCount();
  refreshIcons();
}

function openNotificationPanel() {
  renderNotifications();
  elements.notificationPanel.hidden = false;
  elements.notificationButton.setAttribute("aria-expanded", "true");
}

function closeNotificationPanel() {
  elements.notificationPanel.hidden = true;
  elements.notificationButton.setAttribute("aria-expanded", "false");
}

function toggleNotificationPanel() {
  if (elements.notificationPanel.hidden) openNotificationPanel();
  else closeNotificationPanel();
}

function riskClass(score) {
  if (score >= 90) return "risk-critical";
  if (score >= 75) return "risk-high";
  if (score >= 55) return "risk-medium";
  return "risk-low";
}

function nowTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function tip(title, text, level = 2) {
  return `
    <div class="panel-title">
      <div>
        <h${level}>${escapeHtml(title)}</h${level}>
      </div>
      <span class="info-tip" tabindex="0" data-tip="${escapeHtml(text)}" aria-label="Section information"><i data-lucide="info"></i></span>
    </div>
  `;
}

function renderNav() {
  elements.nav.innerHTML = navGroups.map((group) => `
    <section class="nav-group">
      <span class="nav-group-title">${escapeHtml(group.label)}</span>
      ${group.items.map(([id, icon, label, count, countClass]) => `
        <button class="nav-item ${activeView === id ? "active" : ""}" type="button" data-view="${id}" title="${escapeHtml(label)}">
          <span class="nav-icon"><i data-lucide="${escapeHtml(icon)}"></i></span>
          <span class="nav-label">${escapeHtml(label)}</span>
          ${count ? `<span class="nav-count ${countClass || ""}">${escapeHtml(count)}</span>` : ""}
        </button>
      `).join("")}
    </section>
  `).join("");

  elements.nav.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      if (navDrag.suppressClick) return;
      activeView = button.dataset.view;
      activeCaseTab = "overview";
      elements.shell.classList.remove("mobile-nav-open");
      render();
    });
  });
}

function setPageMeta() {
  const moduleMeta = moduleDefinitions[activeView];
  const meta = pageMeta[activeView] || (moduleMeta ? [moduleMeta.eyebrow, moduleMeta.title, moduleMeta.help] : pageMeta.command);
  elements.pageEyebrow.textContent = meta[0];
  elements.pageTitle.textContent = meta[1];
  elements.pageHelp.dataset.tip = meta[2];
}

function renderLiveStrip() {
  const event = liveEvents[liveTick % liveEvents.length];
  elements.liveStrip.innerHTML = `
    <span class="status-beacon"></span>
    <strong>${escapeHtml(event[0])}</strong>
    <span>${escapeHtml(event[1])}</span>
    <span class="badge ${event[3] === "red" ? "critical" : event[3] === "amber" ? "medium" : "info"}">${escapeHtml(event[2])}</span>
    <span class="spacer">SYNC ${nowTime()} | LATENCY 1.4S | 28/28 CONNECTORS</span>
  `;
}

function renderMetrics(metrics) {
  return `
    <section class="metric-grid">
      ${metrics.map(([label, value, note, state]) => `
        <article class="metric-card ${state || ""}">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
          <small>${escapeHtml(note)}</small>
        </article>
      `).join("")}
    </section>
  `;
}

function caseRows(items) {
  return items.map((item) => `
    <tr data-open-case="${item.id}">
      <td><span class="cell-title">${escapeHtml(item.id)}</span><span class="cell-subtitle">${escapeHtml(item.opened)}</span></td>
      <td><span class="cell-title">${escapeHtml(item.entity)}</span><span class="cell-subtitle">${escapeHtml(item.type)}</span></td>
      <td><span class="cell-title">${escapeHtml(item.title)}</span><span class="cell-subtitle">${escapeHtml(item.scenario)}</span></td>
      <td><span class="risk-score ${riskClass(item.risk)}">${item.risk}</span></td>
      <td><span class="badge ${item.severity}">${escapeHtml(item.severity)}</span></td>
      <td><span class="cell-title">${escapeHtml(item.status)}</span><span class="cell-subtitle">${escapeHtml(item.owner)}</span></td>
      <td>${escapeHtml(item.sla)}</td>
    </tr>
  `).join("");
}

function renderTrendChart() {
  return `
    <svg class="trend-chart" viewBox="0 0 720 210" role="img" aria-label="Alerts and investigations over the last seven days">
      <defs>
        <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b9ef59" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#b9ef59" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <line class="grid-line" x1="48" y1="25" x2="700" y2="25"/>
      <line class="grid-line" x1="48" y1="70" x2="700" y2="70"/>
      <line class="grid-line" x1="48" y1="115" x2="700" y2="115"/>
      <line class="grid-line" x1="48" y1="160" x2="700" y2="160"/>
      <text x="8" y="29">240</text><text x="8" y="74">180</text><text x="8" y="119">120</text><text x="18" y="164">60</text>
      <path class="area" d="M48 137 L152 112 L256 121 L360 77 L464 91 L568 48 L700 61 L700 160 L48 160 Z"/>
      <path class="line" d="M48 137 L152 112 L256 121 L360 77 L464 91 L568 48 L700 61"/>
      <path class="line-secondary" d="M48 151 L152 143 L256 146 L360 126 L464 132 L568 109 L700 103"/>
      <circle class="point" cx="48" cy="137" r="3.5"/><circle class="point" cx="152" cy="112" r="3.5"/>
      <circle class="point" cx="256" cy="121" r="3.5"/><circle class="point" cx="360" cy="77" r="3.5"/>
      <circle class="point" cx="464" cy="91" r="3.5"/><circle class="point" cx="568" cy="48" r="3.5"/>
      <circle class="point" cx="700" cy="61" r="3.5"/>
      <text x="39" y="190">Mon</text><text x="143" y="190">Tue</text><text x="247" y="190">Wed</text>
      <text x="351" y="190">Thu</text><text x="455" y="190">Fri</text><text x="559" y="190">Sat</text><text x="687" y="190">Sun</text>
    </svg>
  `;
}

function renderHeatmap() {
  const rows = [
    ["AML", 2, 2, 3, 2, 3, 4, 3],
    ["Sanctions", 1, 2, 2, 3, 3, 5, 4],
    ["Fraud", 3, 4, 3, 4, 5, 4, 3],
    ["CTF / CPF", 0, 1, 1, 2, 1, 3, 2],
    ["Crypto", 1, 2, 3, 2, 4, 3, 3],
    ["KYC / EDD", 2, 1, 2, 2, 3, 2, 2]
  ];
  return `
    <div class="heatmap" aria-label="Risk event intensity by domain and day">
      <span></span>
      ${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => `<span class="heatmap-day">${day}</span>`).join("")}
      ${rows.map(([label, ...values]) => `
        <span class="heatmap-label">${label}</span>
        ${values.map((value) => `<span class="heat-cell ${value ? `l${value}` : ""}" title="${label}: risk intensity ${value}/5"></span>`).join("")}
      `).join("")}
    </div>
  `;
}

function renderCommand() {
  const operations = [
    ["radar", "Transaction monitoring", "24 detection scenarios active", "1.2s", "Healthy"],
    ["scan-line", "Screening services", "Sanctions, PEP and adverse media", "0.8s", "Healthy"],
    ["network", "Entity resolution", "14.8M relationships indexed", "2.1s", "Healthy"],
    ["bitcoin", "Blockchain intelligence", "12 chains and 41 VASPs", "3.4s", "Healthy"],
    ["send", "FIU reporting gateway", "4 jurisdiction endpoints", "0 queued", "Online"]
  ];
  return `
    ${renderMetrics([
      ["Open alerts", "184", "+12 since 08:00", "danger"],
      ["Active investigations", "86", "12 assigned to you", "warning"],
      ["Critical SLA", "7", "3 due within one hour", "danger"],
      ["Value under review", "$27.4M", "Across 14 jurisdictions", "warning"],
      ["SAR / STR due", "9", "Next deadline in 4h", ""],
      ["Control effectiveness", "94.2%", "+1.8% month on month", "good"]
    ])}

    <div class="command-grid">
      <div class="command-main">
        <div class="chart-grid">
          <section class="panel chart-panel">
            <div class="panel-header">
              ${tip("Detection and investigation volume", "Seven-day operational volume showing generated alerts against investigations opened.")}
              <div class="chart-toolbar">
                <div class="chart-legend"><span><i class="legend-dot"></i>Alerts</span><span><i class="legend-dot blue"></i>Cases opened</span></div>
                <button class="button" type="button" data-module-open="Operational trend"><i data-lucide="download"></i>Export</button>
              </div>
            </div>
            <div class="panel-body">${renderTrendChart()}</div>
          </section>

          <section class="panel chart-panel">
            <div class="panel-header">${tip("Risk concentration", "Distribution of open investigations by primary financial-crime domain.", 3)}<span class="badge info">86 active</span></div>
            <div class="panel-body donut-layout">
              <div class="donut"><div class="donut-center"><strong>86</strong><span>active cases</span></div></div>
              <div class="legend-list">
                <div class="legend-row"><i class="legend-dot red"></i><span>Fraud and mule</span><strong>20</strong></div>
                <div class="legend-row"><i class="legend-dot amber"></i><span>AML layering</span><strong>20</strong></div>
                <div class="legend-row"><i class="legend-dot"></i><span>Sanctions / CTF</span><strong>21</strong></div>
                <div class="legend-row"><i class="legend-dot blue"></i><span>KYC / EDD</span><strong>14</strong></div>
                <div class="legend-row"><i class="legend-dot" style="background:#9a83ca"></i><span>Crypto / other</span><strong>11</strong></div>
              </div>
            </div>
          </section>
        </div>

        <section class="panel">
          <div class="panel-header">
            ${tip("Priority investigation queue", "Cases ranked using risk severity, SLA exposure, monetary value and regulatory impact.")}
            <button class="button" type="button" data-view-link="queue">View all cases<i data-lucide="arrow-right"></i></button>
          </div>
          <div class="panel-body" style="padding:0;overflow-x:auto">
            <table class="data-table">
              <thead><tr><th style="width:15%">Case</th><th style="width:18%">Subject</th><th style="width:29%">Investigation</th><th style="width:7%">Risk</th><th style="width:9%">Severity</th><th style="width:14%">Status / owner</th><th style="width:8%">SLA</th></tr></thead>
              <tbody>${caseRows(cases.slice(0, 6))}</tbody>
            </table>
          </div>
        </section>

        <section class="panel">
          <div class="panel-header">
            ${tip("Risk event intensity", "Volume and severity of material events by domain over the last seven days.")}
            <span class="badge medium">14-day high</span>
          </div>
          <div class="panel-body">${renderHeatmap()}</div>
        </section>
      </div>

      <aside class="command-side">
        <section class="panel">
          <div class="panel-header">${tip("Live intelligence", "Material events from monitoring, sanctions screening, cases, reporting gateways and external intelligence.", 3)}<span class="badge low">Live</span></div>
          <div class="panel-body feed" id="commandFeed">
            ${liveEvents.map(([type, text, source, colour], index) => `
              <article class="feed-item">
                <span class="feed-dot ${colour}"></span>
                <p><strong>${escapeHtml(type)}</strong><br>${escapeHtml(text)}<br><span class="cell-subtitle">${escapeHtml(source)}</span></p>
                <time>${index + 1}m</time>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="panel">
          <div class="panel-header">${tip("Platform operations", "Current health and response time of the services supporting investigation workflows.", 3)}<button class="button-icon" type="button" data-view-link="live" title="Open live operations"><i data-lucide="external-link"></i></button></div>
          <div class="panel-body operations-list">
            ${operations.map(([icon, name, detail, value, state]) => `
              <div class="operation-row">
                <span class="operation-icon"><i data-lucide="${icon}"></i></span>
                <span class="operation-copy"><strong>${name}</strong><span>${detail}</span></span>
                <span class="operation-value"><strong>${value}</strong><small>${state}</small></span>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="panel">
          <div class="panel-header">${tip("Team capacity", "Active caseload and SLA exposure for investigation teams.", 3)}<span class="badge info">38 online</span></div>
          <div class="panel-body">
            ${[
              ["AML investigations", "18 analysts", 82, "4 SLA risks"],
              ["Sanctions and CTF", "9 analysts", 91, "2 SLA risks"],
              ["Fraud operations", "14 analysts", 76, "1 SLA risk"],
              ["KYC and EDD", "11 analysts", 68, "On target"]
            ].map(([name, team, load, note]) => `
              <div class="typology-row">
                <span><strong>${name}</strong><small>${team}</small></span>
                <div class="bar"><span style="width:${load}%"></span></div>
                <span><strong>${load}%</strong><small>${note}</small></span>
              </div>
            `).join("")}
          </div>
        </section>
      </aside>
    </div>
  `;
}

function filteredCases(module) {
  const query = elements.globalSearch.value.trim().toLowerCase();
  let items = cases;
  if (module && !["aml", "queue"].includes(module)) {
    items = items.filter((item) => item.module === module);
  }
  if (query) {
    items = items.filter((item) => [
      item.id,
      item.entity,
      item.title,
      item.scenario,
      item.country,
      item.owner
    ].join(" ").toLowerCase().includes(query));
  }
  return items;
}

function renderCaseQueue(module = "aml") {
  const items = filteredCases(module);
  if (!items.some((item) => item.id === selectedCaseId) && items.length) {
    selectedCaseId = items[0].id;
  }
  const selected = cases.find((item) => item.id === selectedCaseId) || items[0] || cases[0];
  return `
    <div class="workspace-grid">
      <aside class="queue-panel">
        <div class="panel-header">
          ${tip(module === "queue" ? "Assigned cases" : "Investigation queue", "Select a case to load the full investigation workspace.", 3)}
          <span class="badge">${items.length} cases</span>
        </div>
        <div class="queue-list">
          ${items.length ? items.map((item) => `
            <button class="case-card ${item.id === selected.id ? "active" : ""}" type="button" data-case-id="${item.id}">
              <div class="case-card-top">
                <span class="badge ${item.severity}">${escapeHtml(item.severity)}</span>
                <span class="risk-score ${riskClass(item.risk)}">${item.risk}</span>
              </div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.entity)} - ${escapeHtml(item.value)}</p>
              <div class="case-card-bottom">
                <span class="badge">${escapeHtml(item.status)}</span>
                <strong>${escapeHtml(item.sla)}</strong>
              </div>
            </button>
          `).join("") : `<div class="empty-state">No cases match this view.</div>`}
        </div>
      </aside>
      ${renderCaseDetail(selected)}
      ${renderContextPanel(selected)}
    </div>
  `;
}

function renderCaseDetail(item) {
  return `
    <section class="detail-panel">
      <header class="case-header">
        <div class="case-header-row">
          <div>
            <div class="inline">
              <span class="badge">${escapeHtml(item.id)}</span>
              <span class="badge ${item.severity}">${escapeHtml(item.severity)}</span>
              <span class="badge info">${escapeHtml(item.scenario)}</span>
            </div>
            <h2>${escapeHtml(item.title)}</h2>
            <p>${escapeHtml(item.summary)}</p>
          </div>
          <div class="detail-actions">
            <button class="button" type="button" data-case-action="note">Add note</button>
            <button class="button danger" type="button" data-case-action="restrict">Restrict</button>
            <button class="button primary" type="button" data-case-action="sar">Draft SAR / STR</button>
          </div>
        </div>
      </header>
      <nav class="case-tabs" aria-label="Investigation tabs">
        ${[
          ["overview", "Overview"],
          ["transactions", "Transactions"],
          ["network", "Entity network"],
          ["evidence", "Evidence"],
          ["decision", "Decision"]
        ].map(([id, label]) => `
          <button class="case-tab ${activeCaseTab === id ? "active" : ""}" type="button" data-case-tab="${id}">${label}</button>
        `).join("")}
      </nav>
      <div class="case-content">${renderCaseTab(item)}</div>
    </section>
  `;
}

function renderCaseTab(item) {
  if (activeCaseTab === "transactions") return renderTransactions(item);
  if (activeCaseTab === "network") return renderNetwork(item);
  if (activeCaseTab === "evidence") return renderEvidence(item);
  if (activeCaseTab === "decision") return renderDecision(item);
  return renderOverview(item);
}

function renderOverview(item) {
  return `
    <div class="summary-grid">
      <div class="summary-cell"><span>Risk score</span><strong>${item.risk} / 100</strong></div>
      <div class="summary-cell"><span>Value reviewed</span><strong>${escapeHtml(item.value)}</strong></div>
      <div class="summary-cell"><span>Jurisdiction</span><strong>${escapeHtml(item.jurisdiction)}</strong></div>
      <div class="summary-cell"><span>Case owner</span><strong>${escapeHtml(item.owner)}</strong></div>
      <div class="summary-cell"><span>Status</span><strong>${escapeHtml(item.status)}</strong></div>
      <div class="summary-cell"><span>SLA remaining</span><strong>${escapeHtml(item.sla)}</strong></div>
    </div>
    <section class="section-block">
      <div class="section-heading">
        <h3>Risk indicators and investigative rationale</h3>
        <span class="badge">${item.indicators.length} material indicators</span>
      </div>
      <div class="section-body indicator-list">
        ${item.indicators.map(([code, title, text, level]) => `
          <article class="indicator-row">
            <span class="indicator-icon">${escapeHtml(code)}</span>
            <div><strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span></div>
            <span class="badge ${level.toLowerCase()}">${escapeHtml(level)}</span>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section-block">
      <div class="section-heading"><h3>Recent material transactions</h3><button class="button" type="button" data-case-tab-link="transactions">View all</button></div>
      <div class="section-body transaction-list">
        ${item.transactions.slice(0, 3).map(renderTransaction).join("")}
      </div>
    </section>
  `;
}

function renderTransaction(transaction) {
  const [id, date, from, to, amount, geography, type, risk] = transaction;
  return `
    <article class="transaction">
      <div class="transaction-head">
        <div><strong>${escapeHtml(id)}</strong><span class="cell-subtitle">${escapeHtml(date)} - ${escapeHtml(type)}</span></div>
        <span class="transaction-amount">${escapeHtml(amount)}</span>
      </div>
      <p>${escapeHtml(from)} -> ${escapeHtml(to)} | ${escapeHtml(geography)}</p>
      <span class="badge ${risk.toLowerCase()}">${escapeHtml(risk)} risk</span>
    </article>
  `;
}

function renderTransactions(item) {
  return `
    <section class="section-block" style="margin-top:0">
      <div class="section-heading">
        <h3>Transaction analysis</h3>
        <div class="segmented"><button class="active" type="button">Timeline</button><button type="button">Table</button><button type="button">Flow</button></div>
      </div>
      <div class="section-body transaction-list">${item.transactions.map(renderTransaction).join("")}</div>
    </section>
  `;
}

function renderNetwork(item) {
  const positions = item.network.map(([name, role, x, y, risk], index) => {
    if (index === 0) return "";
    const startX = 49;
    const startY = 50;
    const dx = x - startX;
    const dy = y - startY;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    return `<span class="network-line" style="left:${startX}%;top:${startY}%;width:${length}%;transform:rotate(${angle}deg)"></span>`;
  }).join("");
  return `
    <section class="section-block" style="margin-top:0">
      <div class="section-heading"><h3>Entity relationship graph</h3><span class="badge info">${item.network.length} nodes</span></div>
      <div class="section-body">
        <div class="network-canvas">
          ${positions}
          ${item.network.map(([name, role, x, y, risk]) => `
            <div class="network-node ${risk}" style="left:calc(${x}% - 56px);top:calc(${y}% - 27px)">
              <strong>${escapeHtml(name)}</strong><span>${escapeHtml(role)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderEvidence(item) {
  return `
    <section class="section-block" style="margin-top:0">
      <div class="section-heading"><h3>Evidence register</h3><button class="button primary" type="button" data-case-action="evidence">Add evidence</button></div>
      <div class="section-body evidence-list">
        ${item.evidence.map(([name, finding, status], index) => `
          <article class="indicator-row">
            <span class="indicator-icon">${index + 1}</span>
            <div><strong>${escapeHtml(name)}</strong><span>${escapeHtml(finding)}</span></div>
            <span class="badge ${status === "Reviewed" ? "low" : status === "Missing" ? "critical" : "medium"}">${escapeHtml(status)}</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDecision(item) {
  return `
    <section class="section-block" style="margin-top:0">
      <div class="section-heading"><h3>Investigation decision</h3><span class="badge medium">Four-eye approval required</span></div>
      <div class="section-body">
        <div class="field full">
          <label>Decision rationale</label>
          <textarea id="decisionText">${escapeHtml(item.narrative)}</textarea>
        </div>
        <div class="decision-row" style="margin-top:10px">
          <div class="inline">
            <label class="check-row" style="border:0"><input type="checkbox" checked> Material suspicion established</label>
            <label class="check-row" style="border:0"><input type="checkbox"> Exit relationship</label>
          </div>
          <div class="inline">
            <button class="button" type="button" data-case-action="monitor">Continue monitoring</button>
            <button class="button primary" type="button" data-case-action="sar">Escalate to SAR / STR</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderContextPanel(item) {
  return `
    <aside class="context-panel">
      <div class="panel-header">${tip("Entity risk profile", "Consolidated customer, ownership, screening and risk information.", 3)}</div>
      <div class="context-scroll">
        <section class="context-section">
          <div class="entity-head">
            <div class="inline"><span class="entity-avatar">${escapeHtml(item.initials)}</span><div><h3>${escapeHtml(item.entity)}</h3><p>${escapeHtml(item.type)} - ${escapeHtml(item.country)}</p></div></div>
            <span class="risk-score ${riskClass(item.risk)}">${item.risk}</span>
          </div>
        </section>
        <section class="context-section">
          <h4>Customer due diligence</h4>
          <div class="key-value"><span>Customer since</span><strong>${escapeHtml(item.customerSince)}</strong></div>
          <div class="key-value"><span>Industry</span><strong>${escapeHtml(item.industry)}</strong></div>
          <div class="key-value"><span>KYC status</span><strong>${escapeHtml(item.kyc)}</strong></div>
          <div class="key-value"><span>Beneficial owner</span><strong>${escapeHtml(item.ubo)}</strong></div>
        </section>
        <section class="context-section">
          <h4>Screening status</h4>
          <div class="key-value"><span>PEP / RCA</span><strong>${escapeHtml(item.pep)}</strong></div>
          <div class="key-value"><span>Sanctions</span><strong>${escapeHtml(item.sanctions)}</strong></div>
          <div class="key-value"><span>Adverse media</span><strong>${escapeHtml(item.adverseMedia)}</strong></div>
        </section>
        <section class="context-section">
          <h4>Case controls</h4>
          <div class="key-value"><span>Opened</span><strong>${escapeHtml(item.opened)}</strong></div>
          <div class="key-value"><span>Scenario</span><strong>${escapeHtml(item.scenario)}</strong></div>
          <div class="key-value"><span>Audit logging</span><strong>Active</strong></div>
          <div class="key-value"><span>PII display</span><strong>Masked</strong></div>
        </section>
      </div>
    </aside>
  `;
}

function renderModuleDashboard(definition) {
  return `
    ${renderMetrics(definition.metrics.map((metric, index) => [...metric, index === 0 ? "warning" : ""]))}
    <section class="module-grid">
      ${definition.cards.map(([title, count, description, risk]) => `
        <article class="module-card">
          <div class="module-card-top">
            <span class="badge ${risk.toLowerCase()}">${escapeHtml(risk)}</span>
            <strong>${escapeHtml(count)}</strong>
          </div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(description)}</p>
          <div class="module-card-footer">
            <span>Updated ${Math.floor(Math.random() * 8) + 1} min ago</span>
            <button class="button" type="button" data-module-open="${escapeHtml(title)}">Review</button>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderAnalytics() {
  const scenarios = [
    ["Rapid movement", 84, "22.8%", "18 cases"],
    ["Sanctions ownership", 72, "31.4%", "11 cases"],
    ["Mule network", 66, "27.1%", "14 cases"],
    ["TBML pricing", 48, "18.3%", "7 cases"],
    ["Mixer exposure", 42, "36.9%", "9 cases"]
  ];
  const outcomes = [
    ["SAR / STR filed", 41, "blue"],
    ["Relationship exited", 28, "red"],
    ["Enhanced monitoring", 54, "teal"],
    ["False positive", 96, "muted"],
    ["RFI / EDD pending", 37, "amber"]
  ];
  return `
    ${renderMetrics([
      ["Cases opened", "284", "+8.4% vs May", "warning"],
      ["SAR conversion", "14.2%", "+2.1 percentage points", "good"],
      ["Median case age", "3.8d", "-0.6d month on month", "good"],
      ["Backlog exposure", "7.6d", "Above 7-day appetite", "danger"],
      ["Loss prevented", "$18.4M", "Quarter to date", "good"],
      ["Alert precision", "18.7%", "+3.2% after tuning", "good"]
    ])}
    <div class="analytics-grid">
      <section class="panel analytics-wide">
        <div class="panel-header">
          ${tip("Portfolio risk trajectory", "Alert volume and investigation conversion across the last seven reporting periods.")}
          <div class="chart-legend"><span><i class="legend-dot"></i>Alerts</span><span><i class="legend-dot blue"></i>Cases</span></div>
        </div>
        <div class="panel-body">${renderTrendChart()}</div>
      </section>
      <section class="panel">
        <div class="panel-header">${tip("Investigation outcomes", "Rolling 30-day case outcomes and regulatory reporting decisions.", 3)}<span class="badge info">256 decisions</span></div>
        <div class="panel-body outcome-chart">
          ${outcomes.map(([label, value, colour]) => `
            <div class="outcome-row">
              <span>${label}</span>
              <div class="outcome-bar"><i class="${colour}" style="width:${Math.min(value, 100)}%"></i></div>
              <strong>${value}</strong>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">${tip("Scenario effectiveness", "Investigator yield and resulting case volume for leading detection scenarios.", 3)}<button class="button" type="button" data-module-open="Scenario tuning">Tune scenarios</button></div>
        <div class="panel-body scenario-list">
          ${scenarios.map(([name, volume, yieldValue, casesValue]) => `
            <div class="scenario-row">
              <span><strong>${name}</strong><small>${casesValue} opened</small></span>
              <div class="bar"><span style="width:${volume}%"></span></div>
              <span><strong>${yieldValue}</strong><small>yield</small></span>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">${tip("Geographic exposure", "Relative volume of high-risk events across active jurisdiction corridors.", 3)}<span class="badge medium">14 jurisdictions</span></div>
        <div class="panel-body geo-list">
          ${[
            ["United Kingdom", 78, "42 cases"],
            ["United States", 64, "31 cases"],
            ["European Union", 59, "28 cases"],
            ["Middle East corridor", 52, "19 cases"],
            ["Southeast Asia", 38, "15 cases"],
            ["Offshore centres", 31, "12 cases"]
          ].map(([name, value, casesValue]) => `
            <div class="geo-row"><span>${name}</span><div class="bar"><span style="width:${value}%"></span></div><strong>${casesValue}</strong></div>
          `).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">${tip("Risk event heatmap", "Material event intensity across financial-crime domains.", 3)}<span class="badge low">Updated now</span></div>
        <div class="panel-body">${renderHeatmap()}</div>
      </section>
    </div>
  `;
}

function renderAlertTriage() {
  const alerts = [
    ["ALT-88214", "Rapid movement", "Javier Morales", "GBP 146K", "Critical", "New"],
    ["ALT-88209", "Sanctions vessel alias", "Baltic Maritime SA", "USD 3.9M", "Critical", "Payment held"],
    ["ALT-88192", "Invoice price anomaly", "NovaTrade Exports", "USD 2.46M", "High", "Escalated"],
    ["ALT-88177", "Mixer exposure", "ChainBridge Markets", "USD 312K", "High", "In review"],
    ["ALT-88151", "NPO pass-through", "Amina Relief Foundation", "EUR 684K", "Critical", "Senior review"],
    ["ALT-88124", "Dormant account activation", "Falcon Services Ltd", "USD 89K", "Medium", "New"]
  ];
  const visible = activeAlertFilter === "All" ? alerts : alerts.filter((item) => item[4] === activeAlertFilter);
  return `
    ${renderMetrics([
      ["Open alerts", "184", "47 high priority", "danger"],
      ["New today", "63", "Across all systems", "warning"],
      ["Auto-closed", "62%", "Low-risk consensus", "good"],
      ["Oldest alert", "18.4h", "Within 24h target", ""],
      ["Escalated", "28", "To investigation", ""],
      ["Data quality", "97.1%", "Required fields", "good"]
    ])}
    <section class="panel">
      <div class="panel-header">
        ${tip("Unified alert inbox", "Alerts from transaction monitoring, sanctions, fraud, screening, device intelligence and blockchain analytics.")}
        <div class="segmented">
          ${["All", "Critical", "High", "Medium"].map((filter) => `<button class="${activeAlertFilter === filter ? "active" : ""}" type="button" data-alert-filter="${filter}">${filter}</button>`).join("")}
        </div>
      </div>
      <div class="panel-body" style="padding:0">
        <table class="data-table">
          <thead><tr><th>Alert</th><th>Typology</th><th>Entity</th><th>Value</th><th>Severity</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            ${visible.map(([id, typology, entity, value, severity, status]) => `
              <tr>
                <td><span class="cell-title">${id}</span><span class="cell-subtitle">15 Jun 2026</span></td>
                <td>${escapeHtml(typology)}</td>
                <td>${escapeHtml(entity)}</td>
                <td>${escapeHtml(value)}</td>
                <td><span class="badge ${severity.toLowerCase()}">${severity}</span></td>
                <td>${escapeHtml(status)}</td>
                <td><button class="button primary" type="button" data-alert-open="${id}">Investigate</button></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderLiveOperations() {
  const investigators = [
    ["Nina Patel", "Sanctions", "FC-2026-10398", "Reviewing vessel ownership", "Critical"],
    ["Ahmed Chen", "Virtual Assets", "FC-2026-10451", "Tracing chain-hop exposure", "High"],
    ["Maya Hassan", "CTF", "FC-2026-10476", "Preparing senior escalation", "Critical"],
    ["Liam Okafor", "Fraud", "FC-2026-10412", "Coordinating funds recall", "High"],
    ["Rhea Kapoor", "Trade Finance", "FC-2026-10482", "Comparing shipping documents", "Critical"],
    ["Sofia Williams", "EDD", "FC-2026-10439", "Assessing source of wealth", "High"]
  ];
  return `
    ${renderMetrics([
      ["Investigators online", "38", "Across 9 teams", "good"],
      ["Cases active", "86", "12 critical", "danger"],
      ["Alert engines", "24 / 24", "All operational", "good"],
      ["Screening latency", "1.4s", "Within target", "good"],
      ["Reports transmitting", "4", "FIU gateway", ""],
      ["Platform incidents", "0", "No degradation", "good"]
    ])}
    <div class="dashboard-grid">
      <section class="panel">
        <div class="panel-header">${tip("Live investigator activity", "Read-only view of colleagues actively working investigations and control tasks.")}<span class="badge low">Observe only</span></div>
        <div class="panel-body">
          <div class="module-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">
            ${investigators.map(([name, team, caseId, action, severity], index) => `
              <article class="module-card">
                <div class="entity-head">
                  <div class="inline"><span class="avatar">${name.split(" ").map((part) => part[0]).join("")}</span><div><h3>${escapeHtml(name)}</h3><p>${escapeHtml(team)} investigator</p></div></div>
                  <span class="status-beacon"></span>
                </div>
                <h3>${escapeHtml(action)}</h3>
                <p>${escapeHtml(caseId)} - live workspace lock held by colleague.</p>
                <div class="module-card-footer"><span class="badge ${severity.toLowerCase()}">${severity}</span><button class="button" type="button" disabled>Observe only</button></div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
      <div class="side-stack">
        <section class="panel">
          <div class="panel-header">${tip("Backend event stream", "Live operational events from detection, screening, case and reporting services.", 3)}</div>
          <div class="panel-body feed" id="backendFeed">
            ${liveEvents.map(([type, text, source, colour], index) => `
              <article class="feed-item">
                <span class="feed-dot ${colour}"></span>
                <p><strong>${escapeHtml(type)}</strong><br>${escapeHtml(text)}<br><span class="cell-subtitle">${escapeHtml(source)}</span></p>
                <time>${index + 1}m</time>
              </article>
            `).join("")}
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderGraphWorkspace() {
  return `
    <section class="panel">
      <div class="panel-header">${tip("Cross-case entity graph", "Explore common entities and risk links across multiple investigations.")}<span class="badge info">27 entities</span></div>
      <div class="panel-body">
        <div class="network-canvas" style="min-height:620px">
          <span class="network-line" style="left:49%;top:48%;width:29%;transform:rotate(-36deg)"></span>
          <span class="network-line" style="left:49%;top:48%;width:31%;transform:rotate(38deg)"></span>
          <span class="network-line" style="left:49%;top:48%;width:31%;transform:rotate(148deg)"></span>
          <span class="network-line" style="left:49%;top:48%;width:30%;transform:rotate(214deg)"></span>
          <span class="network-line" style="left:22%;top:30%;width:55%;transform:rotate(1deg)"></span>
          <span class="network-line" style="left:22%;top:70%;width:55%;transform:rotate(-1deg)"></span>
          <div class="network-node high" style="left:calc(49% - 56px);top:calc(48% - 27px)"><strong>Eastern Trade Network</strong><span>Shared risk cluster</span></div>
          <div class="network-node high" style="left:calc(77% - 56px);top:calc(28% - 27px)"><strong>NovaTrade Exports</strong><span>TBML case</span></div>
          <div class="network-node high" style="left:calc(77% - 56px);top:calc(68% - 27px)"><strong>Baltic Maritime</strong><span>Sanctions case</span></div>
          <div class="network-node medium" style="left:calc(22% - 56px);top:calc(29% - 27px)"><strong>Orion Gulf FZE</strong><span>Counterparty</span></div>
          <div class="network-node high" style="left:calc(22% - 56px);top:calc(70% - 27px)"><strong>Marmara Logistics</strong><span>Freight agent</span></div>
          <div class="network-node medium" style="left:calc(48% - 56px);top:calc(12% - 27px)"><strong>Seabright Holdings</strong><span>Ownership link</span></div>
          <div class="network-node high" style="left:calc(48% - 56px);top:calc(86% - 27px)"><strong>Designated Group</strong><span>Sanctions link</span></div>
        </div>
      </div>
    </section>
  `;
}

function renderSarStudio() {
  const item = cases.find((caseItem) => caseItem.id === selectedCaseId) || cases[0];
  return `
    <div class="report-layout">
      <section class="panel">
        <div class="panel-header">${tip("SAR / STR narrative workspace", "Confidential report drafting with structured facts, chronology, typology, subject and transaction details.")}<span class="badge medium">Draft</span></div>
        <div class="panel-body">
          <div class="form-grid">
            <div class="field"><label>Linked case</label><select id="sarCase">${cases.map((caseItem) => `<option value="${caseItem.id}" ${caseItem.id === item.id ? "selected" : ""}>${caseItem.id} - ${escapeHtml(caseItem.entity)}</option>`).join("")}</select></div>
            <div class="field"><label>Reporting jurisdiction</label><select><option>United Kingdom - NCA</option><option>United States - FinCEN</option><option>Germany - FIU</option><option>Singapore - STRO</option></select></div>
            <div class="field"><label>Report type</label><select><option>Suspicious Activity Report</option><option>Suspicious Transaction Report</option><option>Supplemental report</option></select></div>
            <div class="field"><label>Primary typology</label><input value="${escapeHtml(item.scenario)}"></div>
            <div class="field"><label>Suspicious amount</label><input value="${escapeHtml(item.value)}"></div>
            <div class="field"><label>Filing deadline</label><input value="18 Jun 2026, 17:00"></div>
            <div class="field full"><label>Narrative</label><textarea id="sarNarrative">${escapeHtml(item.narrative)}</textarea></div>
          </div>
          <div class="detail-actions" style="margin-top:10px">
            <button class="button" type="button" data-report-action="save">Save draft</button>
            <button class="button" type="button" data-report-action="validate">Validate report</button>
            <button class="button primary" type="button" data-report-action="approval">Send for approval</button>
          </div>
        </div>
      </section>
      <aside class="panel">
        <div class="panel-header">${tip("Filing quality controls", "Pre-submission checks for completeness, confidentiality and evidential consistency.", 3)}</div>
        <div class="panel-body">
          ${[
            "Subject details are complete and verified",
            "Narrative explains who, what, when, where, why and how",
            "Transactions reconcile to the case evidence",
            "Typology and suspicion are clearly distinguished from facts",
            "No customer notification or tipping-off language",
            "Supporting documents are retained in the case"
          ].map((label, index) => `<label class="check-row"><input type="checkbox" ${index < 4 ? "checked" : ""}>${escapeHtml(label)}</label>`).join("")}
          <div class="summary-cell" style="margin-top:10px"><span>Narrative quality</span><strong>82 / 100</strong></div>
        </div>
      </aside>
    </div>
  `;
}

function renderFiuGateway() {
  const reports = [
    ["STR-2026-00841", "NovaTrade Exports Ltd", "United Kingdom NCA", "Accepted", "15 Jun 09:12"],
    ["SAR-2026-00418", "Javier Morales", "FinCEN", "Acknowledged", "14 Jun 18:41"],
    ["STR-2026-00792", "Amina Relief Foundation", "German FIU", "Follow-up requested", "14 Jun 12:20"],
    ["STR-2026-00761", "ChainBridge Markets", "Singapore STRO", "Pending transmission", "13 Jun 16:55"]
  ];
  return `
    ${renderMetrics([
      ["Reports this month", "41", "9 due", ""],
      ["Accepted", "28", "68.3%", "good"],
      ["Follow-up requests", "4", "Action required", "warning"],
      ["Transmission failures", "0", "Gateway healthy", "good"],
      ["Median approval", "4.2h", "Inside SLA", ""],
      ["Confidentiality breaches", "0", "No incidents", "good"]
    ])}
    <section class="panel">
      <div class="panel-header">${tip("FIU submission tracker", "Track confidential filing, acknowledgement, consent and follow-up status by jurisdiction.")}<button class="button primary" type="button" data-view-link="sar">New SAR / STR</button></div>
      <div class="panel-body" style="padding:0">
        <table class="data-table">
          <thead><tr><th>Report</th><th>Subject</th><th>FIU</th><th>Status</th><th>Last update</th><th>Action</th></tr></thead>
          <tbody>${reports.map(([id, subject, fiu, status, updated]) => `<tr><td><span class="cell-title">${id}</span></td><td>${subject}</td><td>${fiu}</td><td><span class="badge ${status.includes("Follow") ? "medium" : status.includes("Pending") ? "info" : "low"}">${status}</span></td><td>${updated}</td><td><button class="button" type="button" data-report-open="${id}">Open</button></td></tr>`).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderView() {
  if (activeView === "command") return renderCommand();
  if (activeView === "queue" || activeView === "aml") return renderCaseQueue(activeView);
  if (activeView === "alerts") return renderAlertTriage();
  if (activeView === "live") return renderLiveOperations();
  if (activeView === "monitoring") return renderAlertTriage();
  if (activeView === "graph") return renderGraphWorkspace();
  if (activeView === "sar") return renderSarStudio();
  if (activeView === "fiu") return renderFiuGateway();
  if (activeView === "analytics") return renderAnalytics();

  const caseModules = ["kyc", "edd", "sanctions", "ctf", "fraud", "crypto", "trade", "correspondent"];
  if (caseModules.includes(activeView)) {
    const matching = filteredCases(activeView);
    if (matching.length) return renderCaseQueue(activeView);
  }

  const definition = moduleDefinitions[activeView];
  return definition ? renderModuleDashboard(definition) : renderCommand();
}

function bindInteractions() {
  elements.appView.querySelectorAll("[data-view-link]").forEach((button) => {
    button.addEventListener("click", () => {
      activeView = button.dataset.viewLink;
      render();
    });
  });

  elements.appView.querySelectorAll("[data-open-case]").forEach((row) => {
    row.addEventListener("click", () => {
      selectedCaseId = row.dataset.openCase;
      activeView = "aml";
      activeCaseTab = "overview";
      render();
    });
  });

  elements.appView.querySelectorAll("[data-case-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCaseId = button.dataset.caseId;
      activeCaseTab = "overview";
      render();
    });
  });

  elements.appView.querySelectorAll("[data-case-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCaseTab = button.dataset.caseTab;
      render();
    });
  });

  elements.appView.querySelectorAll("[data-case-tab-link]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCaseTab = button.dataset.caseTabLink;
      render();
    });
  });

  elements.appView.querySelectorAll("[data-case-action]").forEach((button) => {
    button.addEventListener("click", () => handleCaseAction(button.dataset.caseAction));
  });

  elements.appView.querySelectorAll("[data-alert-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAlertFilter = button.dataset.alertFilter;
      render();
    });
  });

  elements.appView.querySelectorAll("[data-alert-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = [...elements.appView.querySelectorAll("[data-alert-open]")].indexOf(button);
      selectedCaseId = cases[Math.min(index, cases.length - 1)].id;
      activeView = "aml";
      render();
    });
  });

  elements.appView.querySelectorAll("[data-module-open]").forEach((button) => {
    button.addEventListener("click", () => showToast(`${button.dataset.moduleOpen} queue opened in review mode.`));
  });

  elements.appView.querySelectorAll("[data-report-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.reportAction;
      showToast(action === "approval" ? "Report routed to MLRO approval queue." : action === "validate" ? "Validation complete: two advisory checks remain." : "Confidential draft saved to the case.");
    });
  });

  elements.appView.querySelectorAll("[data-report-open]").forEach((button) => {
    button.addEventListener("click", () => showToast(`${button.dataset.reportOpen} opened in protected reporting workspace.`));
  });

  const sarCase = elements.appView.querySelector("#sarCase");
  if (sarCase) {
    sarCase.addEventListener("change", () => {
      selectedCaseId = sarCase.value;
      render();
    });
  }
}

function handleCaseAction(action) {
  const item = cases.find((caseItem) => caseItem.id === selectedCaseId);
  if (!item) return;
  if (action === "sar") {
    activeView = "sar";
    render();
    return;
  }
  if (action === "restrict") {
    item.status = "Restricted pending review";
    showToast(`${item.entity}: account restriction recorded in the audit trail.`);
  } else if (action === "note") {
    showToast("Investigator note added to the case timeline.");
  } else if (action === "evidence") {
    showToast("Evidence intake opened with chain-of-custody controls.");
  } else if (action === "monitor") {
    item.status = "Enhanced monitoring";
    showToast(`${item.entity}: enhanced monitoring decision saved.`);
  }
  render();
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  elements.toastRegion.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function startLiveEngine() {
  if (liveTimer) return;
  liveTimer = setInterval(() => {
    liveTick += 1;
    renderLiveStrip();
    if (activeView === "live" || activeView === "command") {
      const feed = document.querySelector(activeView === "live" ? "#backendFeed" : "#commandFeed");
      if (feed) {
        const event = liveEvents[liveTick % liveEvents.length];
        const node = document.createElement("article");
        node.className = "feed-item";
        node.innerHTML = `<span class="feed-dot ${event[3]}"></span><p><strong>${escapeHtml(event[0])}</strong><br>${escapeHtml(event[1])}<br><span class="cell-subtitle">${escapeHtml(event[2])}</span></p><time>now</time>`;
        feed.prepend(node);
        while (feed.children.length > 7) feed.lastElementChild.remove();
      }
    }
  }, 3200);
}

function render() {
  renderNav();
  setPageMeta();
  renderLiveStrip();
  elements.appView.innerHTML = renderView();
  bindInteractions();
  refreshIcons();
}

elements.globalSearch.addEventListener("input", () => {
  if (["queue", "aml", "kyc", "edd", "sanctions", "ctf", "fraud", "crypto", "trade", "correspondent"].includes(activeView)) {
    render();
  }
});

elements.globalSearch.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || !elements.globalSearch.value.trim()) return;
  activeView = "aml";
  activeCaseTab = "overview";
  render();
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    elements.globalSearch.focus();
  }
  if (event.key === "Escape") {
    closeNotificationPanel();
    elements.shell.classList.remove("mobile-nav-open");
  }
});

document.querySelector("#jurisdiction").addEventListener("change", (event) => {
  showToast(`Jurisdiction context changed to ${event.target.value}.`);
});

elements.notificationButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleNotificationPanel();
});

elements.closeNotifications.addEventListener("click", closeNotificationPanel);

elements.markAllRead.addEventListener("click", () => {
  priorityNotifications.forEach((item) => readNotificationIds.add(item.id));
  saveNotificationState();
  renderNotifications();
  showToast("All priority notifications marked as read.");
});

elements.openAlertCenter.addEventListener("click", () => {
  closeNotificationPanel();
  activeView = "alerts";
  render();
});

elements.notificationPanel.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", closeNotificationPanel);

elements.brandHome.addEventListener("click", () => {
  activeView = "command";
  render();
});

document.querySelector("#exportWorkspace").addEventListener("click", () => {
  showToast(`${document.querySelector("#pageTitle").textContent} export prepared with masked demo data.`);
});

document.querySelector("#newInvestigation").addEventListener("click", () => {
  activeView = "alerts";
  render();
  showToast("Select an alert to create a new investigation.");
});

elements.railToggle.addEventListener("click", () => {
  const collapsed = elements.shell.classList.toggle("rail-collapsed");
  elements.railToggle.title = collapsed ? "Show module dock" : "Hide module dock";
  elements.railToggle.setAttribute("aria-label", elements.railToggle.title);
  elements.railToggle.innerHTML = `<i data-lucide="${collapsed ? "chevron-down" : "chevron-up"}"></i><span>Modules</span>`;
  refreshIcons();
});

elements.nav.addEventListener("pointerdown", (event) => {
  if (event.button !== 0 || window.matchMedia("(max-width: 760px)").matches) return;
  navDrag.active = true;
  navDrag.moved = false;
  navDrag.pointerId = event.pointerId;
  navDrag.startX = event.clientX;
  navDrag.startScrollLeft = elements.nav.scrollLeft;
});

elements.nav.addEventListener("pointermove", (event) => {
  if (!navDrag.active || event.pointerId !== navDrag.pointerId) return;
  const distance = event.clientX - navDrag.startX;
  if (Math.abs(distance) > 4) {
    if (!navDrag.moved) {
      elements.nav.setPointerCapture(event.pointerId);
    }
    navDrag.moved = true;
    elements.nav.classList.add("dragging");
    elements.nav.scrollLeft = navDrag.startScrollLeft - distance;
    event.preventDefault();
  }
});

function finishNavDrag(event) {
  if (!navDrag.active || event.pointerId !== navDrag.pointerId) return;
  navDrag.active = false;
  if (navDrag.moved && elements.nav.hasPointerCapture(event.pointerId)) {
    elements.nav.releasePointerCapture(event.pointerId);
  }
  elements.nav.classList.remove("dragging");
  if (navDrag.moved) {
    navDrag.suppressClick = true;
    setTimeout(() => {
      navDrag.suppressClick = false;
    }, 0);
  }
  navDrag.pointerId = null;
}

elements.nav.addEventListener("pointerup", finishNavDrag);
elements.nav.addEventListener("pointercancel", finishNavDrag);

elements.nav.addEventListener("wheel", (event) => {
  if (window.matchMedia("(max-width: 760px)").matches || elements.nav.scrollWidth <= elements.nav.clientWidth) return;
  const movement = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
  if (!movement) return;
  const current = elements.nav.scrollLeft;
  const maximum = elements.nav.scrollWidth - elements.nav.clientWidth;
  const next = Math.max(0, Math.min(maximum, current + movement));
  if (next === current) return;
  elements.nav.scrollLeft = next;
  event.preventDefault();
}, { passive: false });

elements.mobileMenu.addEventListener("click", () => {
  elements.shell.classList.add("mobile-nav-open");
});

elements.mobileScrim.addEventListener("click", () => {
  elements.shell.classList.remove("mobile-nav-open");
});

document.querySelector(".user-button").addEventListener("click", () => {
  showToast("User profile and access controls are available in Administration.");
});

function updateWorkspaceClock() {
  const clock = document.querySelector("#workspaceClock");
  if (!clock) return;
  const time = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  clock.textContent = `IST ${time}`;
}

loadNotificationState();
updateNotificationCount();
render();
startLiveEngine();
updateWorkspaceClock();
setInterval(updateWorkspaceClock, 1000);
