import { Experience, Project, SkillCategory, Certification } from './types';

export const HERO_DATA = {
  name: "Benaiah Muganzi",
  title: "Software Developer · Cloud Architect · AI Builder",
  tagline: "I turn complex ideas into clean, scalable software that actually ships."
};

export const ABOUT_DATA = {
  p1: "I'm a software developer who thrives on turning ambitious ideas into real, working products. I don't just write code — I architect solutions that are clean, testable, and built to last.",
  p2: "My toolkit spans Python, Java, Django, Flask, and modern JavaScript, backed by deep experience with cloud infrastructure on Google Cloud, serverless systems with Firebase, and containerized deployments on GKE.",
  p3: "What sets me apart? I pick up complex concepts fast and break them down simply. Whether it's transforming raw, messy data into actionable insights or building AI-powered tools that actually solve problems — I'm driven by impact, not just implementation.",
  highlight: "Right now, I'm particularly passionate about AI engineering, cloud-native development, and building products that feel like the future."
};

export const EXPERIENCES: Experience[] = [
  {
    category: "Web Scraping & Data Automation",
    iconName: "Database",
    items: [
      "Architected Django-based scraping pipelines using Selenium and Beautiful Soup to extract large-scale datasets, cutting processing time by 40%.",
      "Built data cleaning workflows with Pandas and AI tools to transform messy, unstructured data into analysis-ready formats.",
      "Designed robust storage pipelines with PostgreSQL and CSV exports for downstream analytics."
    ]
  },
  {
    category: "Cloud Architecture (Google Cloud)",
    iconName: "Cloud",
    items: [
      "Engineered production environments on Google Cloud using Cloud Storage, IAM, Cloud Functions, and Pub/Sub.",
      "Deployed and scaled high-performance applications on Cloud Run and Compute Engine.",
      "Led microservices migration projects using GKE and Cloud Build for continuous delivery."
    ]
  },
  {
    category: "Serverless Development (Firebase)",
    iconName: "Zap",
    items: [
      "Built responsive serverless web applications with Firebase, reducing infrastructure overhead significantly.",
      "Designed optimized Firestore schemas with efficient query patterns.",
      "Implemented CI/CD pipelines and integrated voice interfaces via Google Assistant."
    ]
  },
  {
    category: "Containerization & Kubernetes",
    iconName: "Container",
    items: [
      "Created production Docker images and managed GKE clusters maintaining 100% uptime.",
      "Streamlined deployments with kubectl and built continuous delivery pipelines."
    ]
  },
  {
    category: "AI & Intelligent Systems",
    iconName: "Brain",
    items: [
      "Developed AI chatbots integrated into client websites, boosting user engagement by 30%.",
      "Built intelligent assistants using Llama 3, Google Gemini, RAG architectures, LlamaIndex, and LangChain.",
      "Engineered customer support agents with retrieval-augmented generation, improving response quality by 30%."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    skills: ["Python", "Java", "VB.NET", "JavaScript", "HTML/CSS", "Django", "Flask", "React", "Next.js"]
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["Google Cloud Platform", "Firebase", "GKE", "Cloud Run", "Compute Engine", "Cloud Functions", "Pub/Sub", "AWS"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "DynamoDB", "Firestore"]
  },
  {
    category: "Data & Automation",
    skills: ["Pandas", "Selenium", "Beautiful Soup", "REST APIs", "JSON", "Big Data"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["Prompt Engineering", "LLMs", "RAG", "LangChain", "LlamaIndex", "Google Gemini", "Responsible AI"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "Kubernetes", "Linux", "CI/CD"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Ouds & Woods Aromas",
    tagline: "Luxury Perfume Web Experience",
    description: "A high-end digital storefront designed to evoke the elegance of luxury fragrance. Features responsive product layouts, seamless transitions, and a refined UX that mirrors the brand's premium identity.",
    stack: ["Next.js", "AWS DynamoDB", "AWS S3", "Clerk Auth", "Vercel"],
    liveUrl: "https://oudsandwoods.vercel.app/",
    imageUrl: "https://picsum.photos/800/600?random=1"
  },
  {
    title: "MyGoodResume",
    tagline: "AI-Powered Résumé Builder & Scoring Platform",
    description: "A full-featured AI platform for uploading, scoring, improving, and generating professional résumés. Leverages multiple LLM providers for intelligent fallback and faster responses.",
    stack: ["React", "Next.js", "Groq", "Cerebras", "Google Gemini", "OpenRouter"],
    liveUrl: "https://mygoodresume.vercel.app/",
    imageUrl: "https://picsum.photos/800/600?random=2"
  },
  {
    title: "Chaste Technologies",
    tagline: "Web Development & AI Integration Agency",
    description: "My personal venture offering high-quality web development, intelligent automation, and AI-powered solutions for businesses. Showcasing branding and early design direction.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://chastetechnologies.vercel.app/",
    imageUrl: "https://picsum.photos/800/600?random=3"
  },
  {
    title: "Solace",
    tagline: "Privacy-First Decentralized AI Companion",
    description: "A unique AI companion built on principles of privacy and user ownership. Features on-device processing, decentralized encrypted storage, and Web3 wallet authentication.",
    stack: ["React", "Google Gemini", "MetaMask", "Web3", "Polygon", "Decentralized Storage"],
    liveUrl: "https://solacehealth.vercel.app/",
    imageUrl: "https://picsum.photos/800/600?random=4"
  },
  {
    title: "Aether Learn",
    tagline: "AI-Driven Personalized Learning Copilot",
    description: "Transforms uploaded documents into adaptive learning experiences. Generates timed quizzes, summaries, and difficulty-adjusted questions based on user preferences.",
    stack: ["React", "Vite", "Google Gemini AI/ML"],
    liveUrl: "https://aether-learn-pi.vercel.app/",
    imageUrl: "https://picsum.photos/800/600?random=5"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Python Programming", issuer: "Cisco Academy", iconType: 'code' },
  { name: "Java Programming", issuer: "Oracle", iconType: 'code' },
  { name: "Database Foundations", issuer: "Oracle", iconType: 'db' },
  { name: "Google Cloud Storage Skills Badge", issuer: "Google", iconType: 'cloud' },
  { name: "Build Websites on Google Cloud", issuer: "Google", iconType: 'cloud' },
  { name: "Deploy Kubernetes Applications", issuer: "Google", iconType: 'cloud' },
  { name: "Use APIs to Work with Cloud Storage", issuer: "Google", iconType: 'cloud' },
  { name: "Responsible AI Use and Design", issuer: "Alison", iconType: 'ai' },
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/benaiah-muganzi-8878b9265",
  email: "benmukomya@gmail.com",
  phone: "+256753852718",
  github: "https://github.com/benaiahmuganzi" // Assumed GitHub based on prompt context asking for link
};