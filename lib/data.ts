export const profile = {
  name: "Suyog Nagaokar",
  title: "Data Engineering Leader",
  location: "Bangkok, Thailand",
  relocating: "Relocating to Mumbai",
  email: "suyognn@gmail.com",
  phone: "+66-0948198599",
  linkedin: "https://linkedin.com/in/suyog-nagaokar",
  linkedinDisplay: "linkedin.com/in/suyog-nagaokar",
  years: "13+",
  headline: "13+ years making sure the data is right before the money moves.",
  summary:
    "I lead data engineering teams that build the systems banks, payment platforms, and telecom companies run their fraud detection, reconciliation, and reporting on. The stack changes by client and by decade — what doesn't change is the job: make the data trustworthy enough to act on. I use GenAI tooling to move faster without skipping the governance enterprise platforms demand.",
  targetRoles: "Lead Data Engineer & Data Engineering Manager",
};

export const heroStats = [
  { value: "13+", label: "Years in data engineering", suffix: "yrs" },
  { value: "$65K+", label: "Saved in 6 months on a banking fraud platform", suffix: "" },
  { value: "8", label: "Engineers led through a platform re-architecture", suffix: "" },
  { value: "8x", label: "Faster batch pipeline — 8 hours down to under 1", suffix: "" },
];

// 4 powerful stacks pulled from across the resume, not tied to one project
export const expertiseStacks = [
  {
    name: "Real-Time & Fraud",
    description:
      "Streaming pipelines that catch fraud and reconcile transactions as they happen — built at a payments company and one of India's largest private banks.",
    tools: ["Kafka", "Spark Streaming", "Hive", "PySpark", "Grafana", "Streamlit"],
  },
  {
    name: "AWS at Scale",
    description:
      "Serverless batch processing, real-time ingestion, and cost-optimized analytics — production AWS across three companies handling TB-scale workloads.",
    tools: ["EMR Serverless", "Glue", "Athena", "Redshift", "Lambda", "S3", "Step Functions", "CodePipeline"],
  },
  {
    name: "Modern Lakehouse",
    description:
      "Governed, version-controlled analytics platforms — re-architecting legacy systems into Snowflake and dbt at enterprise scale.",
    tools: ["Snowflake", "dbt", "Apache Iceberg", "Databricks", "Azure Synapse", "Terraform"],
  },
  {
    name: "Big Data Foundations",
    description:
      "A decade of the ecosystem modern tools were built on top of — migrating Oracle workloads to Hadoop and running production clusters since 2012.",
    tools: ["Hadoop", "Hive", "Pig", "Sqoop", "HBase", "Cloudera", "Hortonworks"],
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  impact: string;
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Coda Payments",
    role: "Staff Data Engineer",
    location: "Bangkok, Thailand",
    start: "May 2025",
    end: "Present",
    current: true,
    impact:
      "Migrated fraud and reconciliation ingestion from Kinesis/SQS to Kafka with zero data loss, then cut cloud costs 20% optimizing the lake on Apache Iceberg.",
    stack: ["Kafka", "Apache Iceberg", "dbt", "Terraform", "QuickSight"],
  },
  {
    company: "TO THE NEW",
    role: "Technical Lead (Consultant)",
    location: "Mumbai, India",
    start: "Apr 2024",
    end: "Oct 2024",
    impact:
      "Cut a financial client's batch pipeline from 8+ hours to under 1 by migrating to AWS EMR Serverless — a 20% cost reduction alongside the speed-up.",
    stack: ["AWS EMR Serverless", "MongoDB", "Glue", "Airflow", "Redshift"],
  },
  {
    company: "TO THE NEW",
    role: "Technical Lead",
    location: "Mumbai, India",
    start: "Oct 2022",
    end: "Feb 2024",
    impact:
      "Led 8 engineers re-architecting a legacy SAS platform onto Snowflake + dbt, delivering 120+ production reports on a modern, version-controlled data model.",
    stack: ["Snowflake", "dbt", "Data Modeling"],
  },
  {
    company: "Luxoft",
    role: "Senior Data Engineer",
    location: "Warsaw, Poland",
    start: "Nov 2021",
    end: "Jul 2022",
    impact:
      "Built a reusable Azure analytical data layer for retail teams across Central and Southern Europe, mentoring engineers on data engineering best practices.",
    stack: ["Azure ADF", "Databricks", "Synapse", "Power BI"],
  },
  {
    company: "Fractal Analytics",
    role: "Senior Data Engineer",
    location: "Mumbai, India",
    start: "Mar 2021",
    end: "Oct 2021",
    impact:
      "Built event-driven big data pipelines on AWS EMR and Spark powering supply-chain analytics and Tableau reporting.",
    stack: ["AWS EMR", "Spark", "Kudu", "Lambda"],
  },
  {
    company: "Axis Bank",
    role: "Senior Data Engineer (BIU)",
    location: "Mumbai, India",
    start: "Mar 2019",
    end: "Feb 2021",
    impact:
      "Built real-time fraud and digital banking pipelines saving $65K+ in 6 months, while leading a team of 4 and holding 99.9% pipeline uptime.",
    stack: ["Spark Streaming", "Kafka", "Hive", "PySpark"],
  },
  {
    company: "Flytxt",
    role: "Senior Data Engineer (R&D)",
    location: "Mumbai, India",
    start: "Jul 2017",
    end: "Mar 2019",
    impact:
      "Delivered ML-driven big data solutions for 35+ telecom clients on Cloudera and Hortonworks.",
    stack: ["Cloudera", "Hortonworks"],
  },
  {
    company: "Think Big Analytics (Teradata)",
    role: "Associate Technical Consultant",
    location: "Mumbai, India",
    start: "Feb 2017",
    end: "Jun 2017",
    impact:
      "Optimized Hadoop clusters on CDH and automated data validation workflows across client environments.",
    stack: ["CDH", "Hive", "Shell scripting"],
  },
  {
    company: "Aureus Analytics",
    role: "Data Engineer",
    location: "Mumbai, India",
    start: "Feb 2016",
    end: "Jan 2017",
    impact: "Built banking data pipelines on Hortonworks across Hive, Pig, Sqoop, and HBase.",
    stack: ["Hortonworks", "Hive", "Pig", "Sqoop", "HBase"],
  },
  {
    company: "TCS",
    role: "Systems Engineer",
    location: "Mumbai, India",
    start: "Dec 2012",
    end: "Nov 2015",
    impact:
      "Migrated enterprise Oracle workloads to Hadoop at TB-scale — the start of a 13-year run in data engineering.",
    stack: ["Oracle", "Hadoop", "Hive", "Pig", "Sqoop", "Java", "PL/SQL"],
  },
];

export const skills = {
  "Data Engineering": ["Kafka", "Spark", "Spark Streaming", "Snowflake", "dbt", "Apache Airflow", "Apache Iceberg", "AWS Step Functions", "MongoDB"],
  "Cloud & Platforms": ["AWS EMR", "Glue", "Athena", "Redshift", "S3", "Lambda", "Azure ADF", "Databricks", "Synapse", "Delta Lake", "Terraform"],
  "AI & Productivity": ["Cursor", "ChatGPT", "Claude", "Gemini", "AI-assisted Development", "Automated Documentation"],
  "Leadership & Practices": ["Team Leadership", "Mentoring", "Git", "Bitbucket", "Jira", "Agile (Scrum/Kanban)", "CI/CD", "Code Reviews", "SDLC"],
  "Architecture & Governance": ["Data Warehousing", "Data Lakes", "Lakehouse Architecture", "Data Modeling", "ETL/ELT", "Data Governance"],
  "Hadoop Ecosystem": ["Hadoop", "Hive", "Pig", "Sqoop", "HBase", "Impala", "Cloudera", "Hortonworks"],
  "Languages & Scripting": ["Python", "PySpark", "SQL", "Java", "PL/SQL", "Shell scripting"],
  "BI & Visualization": ["QuickSight", "Tableau", "Power BI", "Streamlit"],
};

export const certifications = [
  "SnowPro Core Certified — Snowflake",
  "Positive ACS Skills Assessment — Data Engineer / Software Engineer (Australia)",
  "Big Data Engineering with Hadoop and Spark — IIT Roorkee",
];

export const contentCreation = {
  role: "Instructor, Data Engineering with Hadoop and Spark",
  link: "https://learndataengineering.com/p/data-engineering-with-hadoop",
  linkDisplay: "learndataengineering.com",
};

export const volunteering = [
  {
    title: "Ukrainian Refugee Relief — Poland",
    duration: "5 months",
    bullets: [
      "Coordinated food logistics and supply distribution for refugees.",
      "Provided multilingual information support and administrative assistance to help refugees navigate local services.",
    ],
  },
];

export const awards = [
  "Impact Award",
  "BIU Star Award",
  "Star Performer",
  "Star of the Month/Quarter",
  "On-the-Spot Award",
];

export const education = {
  degree: "Bachelor of Engineering (Electronics)",
  school: "University of Mumbai",
  year: "May 2012",
};

export const aiPrompts = [
  { label: "Biggest cost-saving project", prompt: "What's the biggest cost-saving project Suyog has delivered?" },
  { label: "Team leadership experience", prompt: "Tell me about Suyog's experience leading and mentoring engineering teams." },
  { label: "Why Lead Data Engineer / Manager?", prompt: "Why is Suyog a strong fit for a Lead Data Engineer or Data Engineering Manager role?" },
  { label: "Migration & modernization expertise", prompt: "Walk me through Suyog's experience migrating legacy platforms to modern data stacks." },
  { label: "Fraud & banking domain depth", prompt: "What's Suyog's experience in fraud detection and banking data platforms?" },
  { label: "How was this site built?", prompt: "How was this portfolio site built?" },
];
