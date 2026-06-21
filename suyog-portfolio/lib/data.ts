export const profile = {
  name: "Suyog Nagaokar",
  title: "Data Engineering Leader",
  location: "Bangkok, Thailand",
  relocating: "Relocating to Mumbai",
  email: "suyognn@gmail.com",
  phone: "+66-0948198599",
  linkedin: "https://linkedin.com/in/suyog-nagaokar",
  linkedinDisplay: "linkedin.com/in/suyog-nagaokar",
  years: "13",
  summary:
    "Data Engineering Leader with 13 years designing and scaling enterprise data platforms across banking, payments, insurance, telecom, and retail. I lead engineering teams that ship fraud, reconciliation, and reporting systems on Snowflake, Kafka, Spark, dbt, AWS, and Azure — and I use GenAI tooling to compress design and delivery time without cutting corners on governance.",
  targetRoles: "Lead Data Engineer & Data Engineering Manager",
};

export const heroStats = [
  { value: "13", label: "Years in data engineering", suffix: "yrs" },
  { value: "₹55L", label: "Saved in 6 months — Axis Bank fraud platform", suffix: "" },
  { value: "8", label: "Engineers led on a single re-architecture", suffix: "" },
  { value: "120+", label: "Production reports & dashboards delivered", suffix: "" },
];

export const pipeline = [
  { label: "Ingest", tech: "Kafka" },
  { label: "Process", tech: "Spark" },
  { label: "Model", tech: "dbt" },
  { label: "Warehouse", tech: "Snowflake" },
  { label: "Serve", tech: "QuickSight" },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  highlight?: string;
  bullets: string[];
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
    highlight: "Migrated fraud + reconciliation ingestion to Kafka with zero data loss",
    bullets: [
      "Designed and implemented real-time Kafka consumers powering critical Fraud and Reconciliation services, integrating with a centralized Real-Time Messaging Platform (RMP) for high-throughput, low-latency processing.",
      "Led migration of ingestion pipelines from AWS Kinesis/SQS to Kafka, validating near 100% message parity through Grafana and Streamlit-based monitoring and ensuring zero data loss during transition.",
      "Modernized the data lake architecture by migrating from a traditional S3-based lake to Apache Iceberg tables with dbt-driven transformations, enabling scalable and governed Gold-layer datasets.",
      "Implemented Infrastructure-as-Code and CI/CD automation using Terraform, Atlantis, and AWS CodePipeline, improving deployment reliability and governance.",
      "Optimized Athena, QuickSight, and S3 workloads through query tuning and storage optimization, reducing cloud costs by 20% while improving platform scalability and performance.",
    ],
    stack: ["Kafka", "Apache Iceberg", "dbt", "Terraform", "AWS CodePipeline", "Athena", "QuickSight"],
  },
  {
    company: "TO THE NEW",
    role: "Technical Lead (Consultant)",
    location: "Mumbai, India",
    start: "Apr 2024",
    end: "Oct 2024",
    highlight: "Cut an 8-hour batch pipeline down to under 1 hour",
    bullets: [
      "Optimized large-scale batch pipelines for a financial client, reducing execution time from 8+ hours to under 1 hour and achieving a 20% reduction in processing costs.",
      "Led the design and migration to AWS EMR Serverless architecture, significantly improving infrastructure scalability while lowering operational overhead.",
      "Built an AWS data warehousing POC integrating MongoDB via DMS, Glue, and Airflow, enabling advanced analytics through Redshift and QuickSight.",
    ],
    stack: ["AWS EMR Serverless", "MongoDB", "DMS", "Glue", "Airflow", "Redshift"],
  },
  {
    company: "TO THE NEW",
    role: "Technical Lead",
    location: "Mumbai, India",
    start: "Oct 2022",
    end: "Feb 2024",
    highlight: "Led 8 engineers re-architecting legacy SAS to Snowflake + dbt",
    bullets: [
      "Led and mentored a high-performance team of 8 data engineers to re-architect a legacy SAS analytics platform to a modern Snowflake + dbt stack, ensuring best-in-class architectural standards.",
      "Collaborated with business stakeholders, architects, and delivery leadership to define data strategy, roadmap, and execution plans across multiple workstreams.",
      "Delivered 120+ financial, operational, and analytical reports and dashboards by designing modular, version-controlled transformations and enterprise-scale data models to ensure data consistency.",
    ],
    stack: ["Snowflake", "dbt", "SAS migration", "Data modeling"],
  },
  {
    company: "Luxoft",
    role: "Senior Data Engineer",
    location: "Warsaw, Poland",
    start: "Nov 2021",
    end: "Jul 2022",
    bullets: [
      "Engineered scalable Azure data solutions using ADF, Databricks, and Synapse to deliver a reusable analytical data layer for retail teams across Central and Southern Europe.",
      "Empowered data science workflows and Power BI insights by optimizing cross-country data delivery and mentoring engineers on Azure data engineering best practices.",
    ],
    stack: ["Azure ADF", "Databricks", "Synapse", "Power BI"],
  },
  {
    company: "Fractal Analytics",
    role: "Senior Data Engineer",
    location: "Mumbai, India",
    start: "Mar 2021",
    end: "Oct 2021",
    bullets: [
      "Developed end-to-end event-driven big data pipelines on AWS using EMR, Spark, Kudu, and Lambda to power supply-chain analytics and Tableau reporting, significantly improving operational productivity.",
    ],
    stack: ["AWS EMR", "Spark", "Kudu", "Lambda", "Tableau"],
  },
  {
    company: "Axis Bank",
    role: "Senior Data Engineer (BIU)",
    location: "Mumbai, India",
    start: "Mar 2019",
    end: "Feb 2021",
    highlight: "Saved INR 5.5Mn in 6 months on fraud & digital banking pipelines",
    bullets: [
      "Delivered batch and real-time big data solutions for Fraud, Customer Analytics and Digital Banking using Spark Streaming, Kafka, Hive and PySpark, eventually saving INR 5.5Mn in 6 months.",
      "Managed and mentored a team of 4 Data Engineers, providing technical guidance, code reviews, and delivery ownership for critical banking analytics pipelines.",
      "Collaborated with business stakeholders to translate complex requirements into scalable data solutions, ensuring 99.9% pipeline uptime.",
    ],
    stack: ["Spark Streaming", "Kafka", "Hive", "PySpark"],
  },
  {
    company: "Flytxt",
    role: "Senior Data Engineer (R&D)",
    location: "Mumbai, India",
    start: "Jul 2017",
    end: "Mar 2019",
    bullets: [
      "Delivered analytics and ML-driven big data solutions for 35+ telecom clients using Cloudera and Hortonworks platforms while collaborating with Product, R&D, and Analytics teams.",
    ],
    stack: ["Cloudera", "Hortonworks"],
  },
  {
    company: "Think Big Analytics (Teradata)",
    role: "Associate Technical Consultant",
    location: "Mumbai, India",
    start: "Feb 2017",
    end: "Jun 2017",
    bullets: [
      "Managed and optimized Hadoop ecosystems on CDH, troubleshooting complex Spark/cluster-level issues and automating data validation workflows via Hive, Shell scripting, and Tableau.",
    ],
    stack: ["CDH", "Hive", "Shell scripting", "Tableau"],
  },
  {
    company: "Aureus Analytics",
    role: "Data Engineer",
    location: "Mumbai, India",
    start: "Feb 2016",
    end: "Jan 2017",
    bullets: [
      "Developed banking data pipelines on Hortonworks using Hive, Pig, Sqoop, Oozie, Ambari, HBase, Phoenix, and Drill.",
    ],
    stack: ["Hortonworks", "Hive", "Pig", "Sqoop", "HBase"],
  },
  {
    company: "TCS",
    role: "Systems Engineer",
    location: "Mumbai, India",
    start: "Dec 2012",
    end: "Nov 2015",
    bullets: [
      "Migrated enterprise workloads from Oracle to Hadoop, handling TB-scale datasets and building transformations using Hive, Pig, Sqoop, and Java UDFs.",
      "Earlier experience as PL/SQL Developer focused on performance tuning and production support.",
    ],
    stack: ["Oracle", "Hadoop", "Hive", "Pig", "Sqoop", "Java", "PL/SQL"],
  },
];

export const skills = {
  "Data Engineering": ["Kafka", "Spark", "Spark Streaming", "Snowflake", "dbt", "Apache Airflow", "Apache Iceberg", "Hadoop", "Hive", "Impala", "MongoDB"],
  "Cloud & Platforms": ["AWS EMR", "Glue", "Athena", "Redshift", "S3", "Lambda", "QuickSight", "Azure ADF", "Databricks", "Synapse", "Delta Lake", "Terraform"],
  "Architecture & Governance": ["Data Warehousing", "Data Lakes", "Lakehouse Architecture", "Data Modeling", "ETL/ELT", "Data Governance"],
  "Languages": ["Python", "PySpark", "SQL", "Java", "PL/SQL"],
  "Leadership & Practices": ["Team Leadership", "Mentoring", "Git", "Bitbucket", "Jira", "Agile (Scrum/Kanban)", "CI/CD", "Code Reviews", "SDLC"],
  "AI & Productivity": ["Cursor", "ChatGPT", "Claude", "Gemini", "AI-assisted Development", "Automated Documentation"],
};

export const certifications = [
  "SnowPro Core Certified — Snowflake",
  "Positive ACS Skills Assessment — Data Engineer / Software Engineer (Australia)",
  "Big Data Engineering with Hadoop and Spark — IIT Roorkee",
  "Instructor, Data Engineering with Hadoop and Spark",
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
