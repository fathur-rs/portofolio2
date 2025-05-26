import {
    Code,
    Database,
    Cloud,
    BarChart3,
    Workflow,
    Server,
} from "lucide-react";

// Resume data structure
export const resumeData = {
    name: "Fathurrahman Syarief",
    title: "Data Scientist / Auditor",
    summary:
        "An Auditor at the Ministry of Energy and Mineral Resources Indonesia (KESDM) with deep specialization in the oil and mineral sectors, distinguished by a comprehensive command of data science. I utilize machine learning, advanced statistical analytics, Python, SQL, and GCP to transform traditional audit processes and extract critical intelligence. By harmonizing the analytical precision of auditing with the predictive power of data science, I deliver enhanced operational efficiencies, robust risk management, and empower strategic advancements within the national energy landscape.",

    experiences: [
        {
            company: "Ministry of Energy and Mineral Resources Indonesia (KESDM)",
            title: "Auditor",
            date: "June 2025 – Present",
            points: [
                "Conducting internal audits related to the oil and mineral sectors",
            ],
        },
        {
            company: "Bank Rakyat Indonesia (BRI)",
            title: "Data Analyst Intern",
            date: "September 2024 – January 2025",
            points: [
                "Assigned to the Planning, Budgeting, & Performance Management (PPM) Division",
                "Automated business processes using Python, reducing a two-week manual workflow to 3 hours (90%-time savings) and ensuring 100% accuracy by eliminating input errors",
                "Analyzed BRI branch transaction, then built XGBoost models to predict transaction surges (5% error rate), and improved resource allocation efficiency by 20% for optimal staffing during peak periods",
                "Developed a real-time NLP pipeline using Python, Apache Airflow, and Machine Learning to analyze BRI Mobile Banking app (BRImo) reviews. Achieved 97.8% accuracy with a fine-tuned Distilled IndoBERT model, delivering sentiment insights, word clouds, and topic modeling for data-driven decisions",
            ],
        },
        {
            company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
            title: "Cloud Computing Cohort",
            date: "August 2023 – January 2024",
            points: [
                "Collaborated on the development of a food recommendation mobile app for vegan enthusiasts as a capstone project",
                "Achieved 92% average precision in food image detection using CSL-YOLO model",
                "Deployed the model as a FastAPI Dockerized API on GCE with NVIDIA T4",
            ],
        },
        {
            company: "Central AI",
            title: "Data Scientist Intern",
            date: "August 2022 – December 2022",
            points: [
                "Built and automated an Airflow pipeline to scrape daily Indonesia news portal data, storing text in Google Cloud Storage (GCS)",
                "Enhanced an existing sentiment system by integrating a state-of-the-art IndoBERT model, improving accuracy to 98%. Developed a Flask based inference API for centralized access, enabling seamless integration with other systems",
                "Deployed the model inference API on Google Cloud Compute Engine, enabling real-time predictions and integration with client-facing dashboard while optimizing resource usage",
                "Initiated and delivered a project to forecast cloud compute usage and costs across AWS, GCP, Alibaba Cloud, and Central AI's servers using ARIMA. Analyzed 2020-2022 data (usage logs, uptime, electricity, costs) to achieve accurate predictions with low MSE, optimizing resource allocation by 15% and delivering significant cost savings",
            ],
        },
        {
            company: "Universitas Airlangga",
            title: "Research Assistant",
            date: "January 2022 – July 2022",
            points: [
                "Assisted in teaching the Algorithmic Programming subject, helping students understand key concepts in algorithms and data structures",
                "Co-authored a research paper on the use of machine learning in healthcare industry",
            ],
        },
    ],

    skills: [
        {
            category: "Programming Languages",
            items: ["Python", "R", "SQL", "JS", "HTML", "CSS"],
            icon: Code,
        },
        {
            category: "Machine Learning",
            items: ["Tensorflow", "Scikit-Learn", "PyTorch", "Gen AI", "OpenVino", "ONNX"],
            icon: BarChart3,
        },
        {
            category: "Cloud Services",
            items: ["Cloud Run", "Vertex AI", "BigQuery", "Cloud Storage", "Cloud SQL"],
            icon: Cloud,
        },
        {
            category: "Data Tools",
            items: ["Tableau", "KNIME", "Looker Studio", "Excel"],
            icon: Database,
        },
        {
            category: "Workflow Tools",
            items: ["Apache Airflow", "Docker", "Terraform", "N8N"],
            icon: Workflow,
        },
        {
            category: "Databases",
            items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Airtable"],
            icon: Server,
        },
    ],

    education: [
        {
            year: "2020 – 2024",
            degree: "Bachelor of Data Science (S.Si.D.)",
            major: "Data Science Technology",
            institution: "Universitas Airlangga",
            note: "Cum Laude",
        },
    ],

    projects: [
        {
            name: "TRxNSLATE",
            link: "https://github.com/fathur-rs/trxnslate",
            description:
                "Developed a system to digitize handwritten Indonesian medical prescriptions using OCR. Leveraged YOLOv10 to detect key elements and TrOCR to convert handwritten text into digital format.",
            tags: ["Healthcare AI", "OCR", "LLM", "Medical Prescription", "Handwritting Recognition"],
        },
        {
            name: "Tweetoxicity",
            link: "https://github.com/fathur-rs/Tweetoxicity-2.0",
            description:
                "Web app utilizing 98%-accuracy fine-tuned Distilled IndoBERT to predict sentiment of Twitter/X users based on their recent tweets.",
            tags: ["Sentiment Classification","Machine Learning", "Web App", "Transformers"],
        },
        {
            name: "BRImoSentiment",
            link: "https://github.com/fathur-rs/BRImoSentiment",
            description:
                "Real-time sentiment analysis system for monitoring Google Play Store reviews of BRI Mobile Banking application with 97.8% accuracy.",
            tags: ["Banking", "Sentiment Analysis", "App Review Analysis"],
        },
        {
            name: "nitter-harvest",
            link: "https://github.com/fathur-rs/nitter-harvest",
            description:
                "Tools to scrape Twitter/X data via Nitter, extracting topics, hashtags, and user tweets without relying on paid APIs.",
            tags: ["Web Scraping", "Data Mining"],
        },
        {
            name: "Online Retail Store Sales Analysis",
            link: "https://github.com/fathur-rs/online-retail-shop/blob/main/online-shop-sales-analysis-data-analytic.ipynb",
            description:
                "End-to-end analysis to uncover customer behavior and optimize sales using preprocessing, visualization, market basket, and geographic insights.",
            tags: ["Sales", "Data Analysis"],
        },
        {
            name: "Klasifikasi Topik Hukum Indonesia",
            link: "https://github.com/fathur-rs/klasifikasi-topik-hukum-flask-api",
            description:
                "API for classifying Indonesian legal questions into one of 13 predefined topics (e.g., Criminal, Family Law) using a fine-tuned IndoBERT model.",
            tags: ["Legal", "Text Classification", "API", "NLP"],
        }
    ],
};

// Define types for your resume data for better type safety
export type SkillItem = {
    category: string;
    items: string[];
    icon: React.ElementType; // Assuming lucide-react icons are React components
};

export type ExperienceItem = {
    company: string;
    title: string;
    date: string;
    points: string[];
};

export type EducationItem = {
    year: string;
    degree: string;
    major: string;
    institution: string;
    note?: string;
};

export type ProjectItem = {
    name: string;
    link: string;
    description: string;
    tags: string[];
};

export type ResumeData = {
    name: string;
    title: string;
    summary: string;
    experiences: ExperienceItem[];
    skills: SkillItem[];
    education: EducationItem[];
    projects: ProjectItem[];
};
