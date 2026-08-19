// =========================================================
// SOHAM AHIRRAO — PORTFOLIO DATA
// Verified from: GitHub + Resume PDF + provided context
// =========================================================

export const PERSONAL = {
  name: "Soham Ahirrao",
  handle: "Soham-bot",
  tagline: "I build systems. I break things. Then I build them better.",
  subtagline: "Software Developer · Cloud · DevOps · Full Stack",
  location: "Mumbai, Maharashtra",
  university: "ITM Skills University, Kharghar",
  degree: "B.Tech CSE",
  year: "3rd Year",
  graduation: "2028",
  age: 20,
  email: "sohamrao2006@gmail.com",       // verified from resume PDF
  phone: "9137877036",                   // verified from resume PDF
  eduEmail: "2024.sohama@isu.ac.in",
  github: "https://github.com/Soham-bot",
  linkedin: "https://www.linkedin.com/in/soham-ahirrao-9024a32b7",
  languages: ["English", "Hindi", "Marathi"], // verified from resume PDF
  funFact: "Planning to open a gaming café in Nahur East.",
  pronouns: "he/him",
  repoCount: 39,
  status: ["BUILDING", "LEARNING", "EXPERIMENTING"],
};

export const EDUCATION = [
  {
    institution: "ITM Skills University",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science & Engineering",
    period: "2024 – 2028",
    location: "Kharghar, Navi Mumbai",
    current: true,
  },
  {
    institution: "Radav Junior College, Bhandup",
    degree: "Higher Secondary Education (HSC)",
    branch: "Science",
    period: "2022 – 2023",
    location: "Bhandup, Mumbai",
    current: false,
  },
  {
    institution: "VPM IAM International School, Airoli",
    degree: "Secondary School (SSC)",
    branch: "General",
    period: "2006 – 2021",
    location: "Airoli, Navi Mumbai",
    current: false,
  },
];

export const STACK = {
  languages: [
    { name: "Python",      level: "strong",   icon: "🐍" },
    { name: "JavaScript",  level: "strong",   icon: "⚡" },
    { name: "TypeScript",  level: "familiar", icon: "📘" },
    { name: "HTML/CSS",    level: "strong",   icon: "🎨" },
    { name: "Dart",        level: "familiar", icon: "🎯" },
    { name: "SQL",         level: "familiar", icon: "🗃️" },
  ],
  frontend: [
    { name: "React.js",    level: "familiar" },
    { name: "Next.js",     level: "learning" },
    { name: "Tailwind CSS",level: "familiar" },
    { name: "HTML5/CSS3",  level: "strong"   },
  ],
  backend: [
    { name: "Node.js",     level: "familiar" },
    { name: "Express.js",  level: "familiar" },
    { name: "Flask",       level: "familiar" },
    { name: "REST APIs",   level: "familiar" },
  ],
  databases: [
    { name: "MongoDB",           level: "familiar" },
    { name: "Firebase/Firestore",level: "familiar" },
    { name: "MySQL",             level: "familiar" },
    { name: "PostgreSQL",        level: "learning" },
  ],
  cloud: [
    { name: "AWS EC2",       level: "familiar" },
    { name: "AWS S3",        level: "familiar" },
    { name: "AWS RDS",       level: "familiar" },
    { name: "AWS CloudFront",level: "familiar" },
    { name: "AWS IAM",       level: "familiar" },
    { name: "AWS VPC",       level: "familiar" },
    { name: "AWS CloudWatch",level: "familiar" },
    { name: "AWS SQS",       level: "learning" },
  ],
  devops: [
    { name: "Docker",          level: "strong"   },
    { name: "Kubernetes",      level: "familiar" },
    { name: "Terraform",       level: "familiar" },
    { name: "Jenkins",         level: "familiar" },
    { name: "Prometheus",      level: "familiar" },
    { name: "Grafana",         level: "familiar" },
    { name: "ELK Stack",       level: "familiar" },
    { name: "HashiCorp Vault", level: "familiar" },
  ],
  aiml: [
    { name: "Prompt Engineering",level: "familiar" },
    { name: "Gemini / ChatGPT",  level: "familiar" },
    { name: "KMeans Clustering", level: "familiar" },
    { name: "Linear Regression", level: "familiar" },
    { name: "Hugging Face",      level: "learning" },
  ],
  other: [
    { name: "Git / GitHub",  level: "strong"      },
    { name: "Postman",       level: "familiar"    },
    { name: "MongoDB Compass",level: "familiar"   },
    { name: "MVC Architecture",level: "familiar"  },
    { name: "Flutter / Dart",level: "learning"    },
    { name: "ESP8266 / IoT", level: "experimented"},
  ],
};

// =====================
// VERIFIED PROJECTS
// =====================

export const PROJECTS = [
  {
    id: "omnigrid",
    tier: "S",
    title: "Project OmniGrid",
    subtitle: "Interconnected Critical Infrastructure Coordination Platform",
    category: "DevOps · Cloud · Infrastructure",
    year: "2026",
    status: "Built",
    description:
      "A production-grade DevOps engineering project implementing a full microservices infrastructure with Kubernetes orchestration, Jenkins CI/CD, Terraform IaC, Prometheus/Grafana monitoring, ELK Stack logging, and HashiCorp Vault secrets management.",
    tech: ["Python","Docker","Kubernetes","Minikube","Terraform","Jenkins","Prometheus","Grafana","ELK Stack","HashiCorp Vault","HCL"],
    architecture: [
      { name: "Jenkins",         role: "CI/CD Pipeline",         desc: "Automates build, test, and deployment on every commit. Triggers Docker builds and Kubernetes rolling updates.", color: "#d4381e" },
      { name: "Docker",          role: "Containerization",        desc: "Packages the Telemetry API and services into portable containers with defined Dockerfiles.", color: "#2496ed" },
      { name: "Kubernetes",      role: "Orchestration",           desc: "Maintains 3 active replicas of the Telemetry API. Self-heals crashed pods automatically. Rolling updates with zero downtime.", color: "#326ce5" },
      { name: "Terraform",       role: "Infrastructure as Code",  desc: "All infrastructure provisioned via HCL. Can reconstruct entire environment from scratch using version-controlled state.", color: "#7b42bc" },
      { name: "Prometheus",      role: "Metrics Collection",      desc: "Scrapes system and application metrics at defined intervals. Feeds into Grafana dashboards.", color: "#e6522c" },
      { name: "Grafana",         role: "Visualization",           desc: "Real-time dashboards displaying infrastructure health, service performance, and alerting.", color: "#f46800" },
      { name: "ELK Stack",       role: "Centralized Logging",     desc: "Elasticsearch, Logstash, Kibana — aggregates and indexes logs across all services.", color: "#00bfb3" },
      { name: "HashiCorp Vault", role: "Secrets Management",      desc: "Enterprise-grade secrets storage. No plaintext credentials in code or environment files.", color: "#6c4fbb" },
    ],
    highlights: [
      "3 active Kubernetes replicas with automatic self-healing",
      "Full IaC — entire environment reconstructable from version control",
      "HashiCorp Vault for enterprise secrets management",
      "Centralized observability: metrics + logs + dashboards",
      "Jenkins CI/CD with Kubernetes rolling update deployment",
    ],
    github: "https://github.com/Soham-bot/project-omnigrid",
    live: null,
    languages: { Python: 68.3, Dockerfile: 16.3, HCL: 15.4 },
    verification: "verified",
    featured: true,
  },
  {
    id: "musicnation",
    tier: "S",
    title: "MusicNation",
    subtitle: "Cloud-Native Music Streaming Platform",
    category: "Cloud · AWS · Full Stack",
    year: "2025",
    status: "Built",
    description:
      "A cloud-native music streaming web application built on AWS infrastructure. Uses Flask for the application layer, Amazon RDS + MySQL for the database, Amazon S3 for media storage, and CloudFront for global content delivery.",
    tech: ["Flask","Python","AWS EC2","Amazon RDS","MySQL","Amazon S3","Amazon CloudFront","AWS IAM"],
    architecture: [
      { name: "CloudFront",        role: "CDN / Edge Delivery",  desc: "Delivers static assets and media files globally with low latency. Sits in front of S3 and EC2.", color: "#FF9900" },
      { name: "EC2",               role: "Application Server",   desc: "Runs the Flask application. Handles HTTP requests, authentication, and API logic.", color: "#FF9900" },
      { name: "Amazon RDS (MySQL)",role: "Relational Database",  desc: "Stores user data, track metadata, playlists. Managed MySQL instance on RDS.", color: "#FF9900" },
      { name: "Amazon S3",         role: "Media Storage",        desc: "Stores all audio files and media assets. Accessed via pre-signed URLs or through CloudFront.", color: "#FF9900" },
    ],
    highlights: [
      "Full AWS stack: EC2 + RDS + S3 + CloudFront",
      "Flask backend with proper relational data model",
      "CloudFront CDN for fast media delivery",
      "IAM-based access control for AWS resources",
    ],
    github: "https://github.com/Soham-bot",
    live: null,
    verification: "partially-verified",
    featured: true,
  },
  {
    id: "health-lab",
    tier: "A",
    title: "HealthLab",
    subtitle: "Diagnostic Test Booking System",
    category: "Full Stack · MERN · Healthcare",
    year: "2025",
    status: "Built",
    // verified from resume PDF — actual project with real detail
    description:
      "A full-stack healthcare platform enabling users to search, book, and manage diagnostic tests. Built with REST APIs, MongoDB, and React — featuring patient registration, appointment booking, and report management workflows.",
    tech: ["React.js","Node.js","Express.js","MongoDB","REST APIs","JavaScript","HTML/CSS"],
    highlights: [
      "Full-stack MERN architecture end-to-end",
      "Patient registration, appointment booking, report management",
      "REST API backend with MongoDB data storage",
      "Responsive UI with user-focused booking workflows",
    ],
    github: "https://github.com/Soham-bot",
    live: null,
    verification: "verified-from-resume",
    featured: false,
  },
  {
    id: "sneaker-resale",
    tier: "B",
    title: "Sneaker Resale Website",
    subtitle: "E-Commerce Frontend Interface",
    category: "Frontend · JavaScript · E-Commerce",
    year: "2024",
    status: "Built",
    // verified from resume PDF
    description:
      "A responsive e-commerce interface for showcasing and managing sneaker listings. Dynamic UI components using JavaScript with 2000+ lines of clean, organized code.",
    tech: ["JavaScript","HTML","CSS"],
    highlights: [
      "Responsive e-commerce layout",
      "Dynamic UI components with JavaScript",
      "2000+ lines of clean, organized code",
      "User-friendly navigation and browsing UX",
    ],
    github: "https://github.com/Soham-bot",
    live: null,
    verification: "verified-from-resume",
    featured: false,
  },
  {
    id: "distributed-fs",
    tier: "A",
    title: "Distributed File System",
    subtitle: "Python-Based Distributed Systems Implementation",
    category: "Systems Engineering · Distributed Computing",
    year: "2025",
    status: "Built",
    description:
      "A Python implementation exploring distributed systems concepts including node communication, data distribution, and fault handling.",
    tech: ["Python"],
    highlights: [
      "Distributed node architecture",
      "Python networking and inter-process communication",
      "Systems engineering fundamentals",
    ],
    github: "https://github.com/Soham-bot",
    live: null,
    verification: "needs-review",
    featured: true,
  },
  {
    id: "metrics-collection",
    tier: "A",
    title: "Metrics Collection System",
    subtitle: "Custom Monitoring & Observability Pipeline",
    category: "DevOps · Monitoring · Observability",
    year: "2025",
    status: "Built",
    description:
      "A Python-built metrics collection system demonstrating observability engineering concepts. Complements the OmniGrid monitoring stack.",
    tech: ["Python"],
    highlights: [
      "Custom metrics pipeline implementation",
      "Observability engineering fundamentals",
      "Complements OmniGrid Prometheus/Grafana stack",
    ],
    github: "https://github.com/Soham-bot",
    live: null,
    verification: "needs-review",
    featured: true,
  },
  {
    id: "social-wellbeing",
    tier: "A",
    title: "Social Media Well-being Analysis",
    subtitle: "ML Study: Student Social Media Usage vs Well-being",
    category: "AI/ML · Data Analysis · Research",
    year: "2025",
    status: "Built",
    description:
      "Data analysis and machine learning project studying the relationship between social media usage patterns and student well-being. Uses KMeans clustering and linear regression.",
    tech: ["Python","Jupyter","KMeans","Linear Regression","Pandas","Matplotlib"],
    highlights: [
      "KMeans clustering for behavioral segmentation",
      "Linear regression for predictive modeling",
      "End-to-end pipeline: data → preprocessing → analysis → insight",
    ],
    github: "https://github.com/Soham-bot",
    live: null,
    verification: "partially-verified",
    featured: false,
  },
  {
    id: "vr-recommender",
    tier: "A",
    title: "VR Experience Recommender",
    subtitle: "AI-Powered VR Experience Recommendation System",
    category: "AI · Web · Firebase",
    year: "2024",
    status: "Deployed",
    description:
      "A full-stack web application recommending VR experiences based on user preferences. BST-based recommendation engine, Firebase auth, Firestore DB. Semester 3 project.",
    tech: ["JavaScript","HTML/CSS","Firebase","Firestore","Firebase Auth","BST Algorithm","Tailwind CSS"],
    highlights: [
      "Binary Search Tree for O(log n) recommendation matching",
      "Firebase Auth with Google Sign-In",
      "Real VR store integration (Steam, Oculus, PlayStation)",
      "Live deployment on Firebase Hosting",
    ],
    github: "https://github.com/Soham-bot/VR_recommender",
    live: "https://vr-recommender-36a16.web.app",
    verification: "verified",
    featured: false,
  },
  {
    id: "prompt-coach",
    tier: "A",
    title: "Prompt Coach",
    subtitle: "AI Prompt Engineering Assistant",
    category: "AI · Prompt Engineering",
    year: "2025",
    status: "Built",
    description:
      "A tool focused on improving AI prompt quality. Analyzes prompts and provides engineering guidance to make them more effective.",
    tech: ["AI","Prompt Engineering"],
    github: "https://github.com/Soham-bot",
    live: null,
    verification: "needs-review",
    featured: false,
  },
  {
    id: "cloud-ops",
    tier: "A",
    title: "Cloud Ops Zero CostX",
    subtitle: "Cloud Operations & Cost Optimization",
    category: "Cloud · DevOps · Infrastructure",
    year: "2025",
    status: "Built",
    description:
      "Cloud operations project focused on infrastructure management and cost optimization strategies.",
    tech: ["Cloud","DevOps","Infrastructure"],
    github: "https://github.com/Soham-bot",
    live: null,
    verification: "needs-review",
    featured: false,
  },
  {
    id: "yt-downloader",
    tier: "B",
    title: "YouTube Downloader",
    subtitle: "Multi-Resolution Video & Audio Downloader",
    category: "Python · CLI Tool",
    year: "2024",
    status: "Built",
    description:
      "Python CLI tool for downloading YouTube videos and audio in multiple resolutions with animated progress UI.",
    tech: ["Python"],
    github: "https://github.com/Soham-bot/YT-downloader",
    live: null,
    languages: { Python: 100 },
    verification: "verified",
    featured: false,
  },
];

export const LAB_PROJECTS = [
  { name: "DART_REPO",    desc: "Dart language experiments and projects",  lang: "Dart",     year: "2026" },
  { name: "NoSQL",        desc: "NoSQL database exploration",               lang: "Various",  year: "2025" },
  { name: "HTMLFINALPRJ", desc: "HTML final project submission",            lang: "HTML/CSS", year: "2024" },
  { name: "MenuGIT",      desc: "Git/GitHub learning repository",           lang: "Various",  year: "2024" },
  { name: "GITWORKSHOP",  desc: "Git workshop exercises",                   lang: "Various",  year: "2024" },
  { name: "gitintro",     desc: "Understanding basics of git and github",   lang: "Various",  year: "2024" },
  { name: "Skillbox",     desc: "Skills and experiments",                   lang: "Various",  year: "2024" },
  { name: "github123",    desc: "GitHub practice",                          lang: "Various",  year: "2024" },
];

export interface JourneyItem {
  id: string;
  year: string;
  phase: string;
  title: string;
  category: "Foundation" | "Full Stack" | "Cloud" | "AI/ML" | "DevOps" | "Current";
  event: string;
  details: string;
  breakthrough: string;
  tech: string[];
  status: "Completed" | "Mastered" | "Deployed" | "Active";
  projectId?: string;
}

export const JOURNEY: JourneyItem[] = [
  {
    id: "origin",
    year: "2021–2023",
    phase: "Genesis",
    title: "Origins & Computing Logic",
    category: "Foundation",
    event: "Schooling & HSC completed. First exposure to programming logic, algorithms, and computing fundamentals.",
    details: "Dissected how computers work under the hood. Started building small scripts, understanding memory, logic gates, and the principles of algorithmic thinking.",
    breakthrough: "Discovered passion for breaking systems down to first principles.",
    tech: ["Computer Fundamentals", "C / C++ Basics", "Algorithmic Logic", "Linux Shell"],
    status: "Completed",
  },
  {
    id: "foundation",
    year: "2024",
    phase: "Foundation",
    title: "CSE Induction & Git Workflows",
    category: "Foundation",
    event: "Joined B.Tech CSE at ITM Skills University. Built foundational web systems and professional version control workflows.",
    details: "Mastered modern semantic HTML, CSS styling architectures, vanilla JavaScript ES6+, and collaborative Git/GitHub branching strategies.",
    breakthrough: "Standardized clean code conventions and established daily GitHub commit habits.",
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "Git", "GitHub", "Responsive Design"],
    status: "Mastered",
  },
  {
    id: "first-apps",
    year: "Mid 2024",
    phase: "First Systems",
    title: "Interactive Applications & Algorithms",
    category: "Foundation",
    event: "Built VR Recommender with BST data structures and YouTube Downloader CLI. Competed in ITM Buildathon 1.",
    details: "Engineered a custom recommendation engine using Binary Search Trees for O(log n) efficiency, integrated Firebase Authentication and Firestore database.",
    breakthrough: "Shipped first production-hosted web app with live user authentication.",
    tech: ["JavaScript", "Firebase", "Firestore", "BST Algorithms", "Python CLI"],
    status: "Deployed",
    projectId: "vr-recommender",
  },
  {
    id: "full-stack",
    year: "Late 2024",
    phase: "Full Stack",
    title: "MERN Stack & Scalable API Architectures",
    category: "Full Stack",
    event: "Deep dive into MERN stack. Engineered HealthLab pathology management and Sneaker Resale platform.",
    details: "Architected RESTful APIs with Express and Node.js, modeled complex MongoDB NoSQL schemas, implemented JWT authentication and role-based access control.",
    breakthrough: "Built multi-user platforms with end-to-end CRUD operations and real database pipelines.",
    tech: ["Node.js", "Express.js", "MongoDB", "React", "REST APIs", "JWT Auth"],
    status: "Mastered",
    projectId: "health-lab",
  },
  {
    id: "cloud-aws",
    year: "Early 2025",
    phase: "Cloud & AWS",
    title: "AWS Cloud Infrastructure & Distributed Storage",
    category: "Cloud",
    event: "Entered the AWS ecosystem. Architected MusicNation with multi-service AWS infrastructure.",
    details: "Provisioned and connected EC2 compute instances, S3 object storage for media assets, RDS MySQL relational databases, and CloudFront CDN for global distribution.",
    breakthrough: "Designed multi-tier cloud architectures with decoupled storage, compute, and CDN edge caching.",
    tech: ["AWS EC2", "AWS S3", "AWS RDS", "CloudFront", "Flask", "IAM & VPC"],
    status: "Deployed",
    projectId: "musicnation",
  },
  {
    id: "aiml",
    year: "Mid 2025",
    phase: "AI & Machine Learning",
    title: "Applied ML Pipelines & Hackathon Selection",
    category: "AI/ML",
    event: "Built Social Media Well-being ML models. Selected in Smart India Hackathon (SIH), participated in Mumbai Hacks.",
    details: "Implemented KMeans clustering for behavioral segmentation, linear regression for trend prediction, and integrated LLM APIs (Gemini) with prompt engineering.",
    breakthrough: "Selected in Smart India Hackathon among thousands of national applicants.",
    tech: ["KMeans", "Linear Regression", "Jupyter", "Gemini API", "Prompt Engineering"],
    status: "Mastered",
  },
  {
    id: "devops",
    year: "Late 2025",
    phase: "DevOps",
    title: "Containerization, Orchestration & CI/CD",
    category: "DevOps",
    event: "Deep dive into DevOps toolchains. Volunteered at Google DevFest, Cloud Community Days, and GEN AI Hackathon.",
    details: "Containerized microservices using Docker, orchestrated multi-pod deployments in Kubernetes, set up automated Jenkins pipelines, and built real-time Prometheus/Grafana monitoring.",
    breakthrough: "Mastered self-healing Kubernetes pod deployments and automated CI/CD pipeline triggers.",
    tech: ["Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana"],
    status: "Mastered",
  },
  {
    id: "infrastructure",
    year: "Early 2026",
    phase: "Production Infra",
    title: "Project OmniGrid & Enterprise DevOps",
    category: "DevOps",
    event: "Engineered Project OmniGrid. Volunteered 7 days on-site at IIT Bombay during Mumbai Tech Week with Babblebots.",
    details: "Engineered enterprise-grade infrastructure: full Terraform Infrastructure as Code, HashiCorp Vault secrets management, ELK centralized logging, and multi-replica K8s clusters.",
    breakthrough: "Entire infrastructure environment reconstructable from scratch via version-controlled IaC.",
    tech: ["Terraform", "HashiCorp Vault", "ELK Stack", "Minikube", "IaC", "Jenkins"],
    status: "Deployed",
    projectId: "omnigrid",
  },
  {
    id: "current",
    year: "Present",
    phase: "Systems Builder",
    title: "Production Systems & Distributed Architectures",
    category: "Current",
    event: "Building production-grade cloud, DevOps, and full-stack systems. Open to impactful software engineering roles.",
    details: "Focusing on high-availability cloud architecture, automated infrastructure pipelines, Kubernetes ecosystem depth, and scalable backend platforms.",
    breakthrough: "Synthesizing Full Stack + Cloud + DevOps into unified, resilient systems engineering.",
    tech: ["Kubernetes", "Terraform", "AWS", "Distributed Systems", "Full Stack", "System Design"],
    status: "Active",
  },
];

// Corrected & enriched from resume PDF
export const HACKATHONS = [
  { name: "ITM Skills University Buildathon 1", year: "2024", role: "Participant",        type: "hackathon",   note: "Project development and ideation" },
  { name: "Mumbai Hacks",                       year: "2025", role: "Participant",        type: "hackathon",   note: "Collaborative problem-solving and coding challenges" },
  { name: "Mindsprint",                         year: "2025", role: "Participant",        type: "hackathon",   note: "Competitive hackathon, innovative solutions" },
  { name: "Smart India Hackathon (SIH)",        year: "2025", role: "Selected",           type: "hackathon",   note: "Selected participant, recognized for innovative solution" },
  { name: "GEN AI Hackathon Mumbai",            year: "2025", role: "Volunteer",          type: "volunteer",   note: "Logistics and event execution" },
  { name: "Google DevFest Mumbai",              year: "2025", role: "Volunteer",          type: "volunteer",   note: "Event organization and participant support" },
  { name: "Cloud Community Days Mumbai",        year: "2025", role: "Volunteer",          type: "volunteer",   note: "Coordinated sessions, managed technical setups" },
  { name: "Mumbai Tech Week (MTW)",             year: "2026", role: "Volunteer @ IIT Bombay", type: "volunteer", note: "7 days at IIT Bombay office. Babblebots (AI Recruitment Partner) — managed candidate data, recruitment pipelines, applicant records, AI-powered hiring workflows." },
];

export const VOLUNTEERING = [
  {
    org: "Babblebots (Official AI Recruitment Partner)",
    event: "Mumbai Tech Week 2026",
    location: "IIT Bombay Office",
    duration: "7 days",
    year: "2026",
    highlights: [
      "Managed candidate data and recruitment pipelines",
      "Coordinated applicant records across teams",
      "Supported AI-powered hiring workflows",
      "Worked on-site at Indian Institute of Technology Bombay",
    ],
  },
  {
    org: "Google DevFest Mumbai",
    event: "DevFest Mumbai 2025",
    location: "Mumbai",
    duration: "Event",
    year: "2025",
    highlights: ["Event organization", "Participant support"],
  },
  {
    org: "GDG Cloud",
    event: "Cloud Community Days Mumbai 2025",
    location: "Mumbai",
    duration: "Event",
    year: "2025",
    highlights: ["Coordinated sessions", "Managed technical setups"],
  },
  {
    org: "GEN AI Hackathon",
    event: "GEN AI Hackathon Mumbai 2025",
    location: "Mumbai",
    duration: "Event",
    year: "2025",
    highlights: ["Logistics and event execution"],
  },
];

export const LEADERSHIP = [
  {
    title: "Social Media Club Co-Lead",
    org: "ITM Skills University",
    period: "2024 – Present",
    responsibilities: [
      "Event operations and coordination",
      "Content planning and social media strategy",
      "PR and event coverage",
      "Volunteer coordination and management",
      "Faculty coordination",
      "Creative direction for campaigns",
    ],
  },
];

export const CREATIVE_EVENTS = [
  {
    name: "BTech Induction 2026 — Photo Hunt & Storytelling",
    type: "Event Design & Operations",
    desc: "End-to-end design and operation of a BTech induction activity. Handled concept, event flow, challenge design, team structure, judging system, budget planning, trophy and certificate allocation, posters, social media content, and live event operations.",
  },
  {
    name: "Event Coverage & Content Creation",
    type: "Photography / Videography / Social Media",
    desc: "Covered multiple technical events including hackathons, GDG events, and college activities. Handled reels, editing, content calendars, PR, and promotional content.",
  },
];

export const SKILLS_NARRATIVE = {
  identity: "I'm a 20-year-old CS student at ITM Skills University who started with web dev and ended up in Kubernetes. Not by accident — by following what felt most interesting at each step.",
  devops: "OmniGrid is the clearest version of what I've been building toward: a real infrastructure platform with IaC, containers, orchestration, CI/CD, observability, and secrets management. Not just tutorials — actually implemented.",
  cloud: "MusicNation proved I can use AWS services together as a real architecture — not just spin up an EC2 and call it cloud experience.",
  fullstack: "I've built end-to-end from DB schema to deployment. MERN stack, Flask, MongoDB, MySQL, Firebase — I pick what fits the problem.",
  aiml: "I can build ML workflows. Not claiming I'm a data scientist — but I understand the pipeline, have implemented clustering and regression, and can work with AI APIs.",
  creative: "The non-technical side isn't a distraction. Running events, creating content, coordinating teams — that's system design for humans.",
};
