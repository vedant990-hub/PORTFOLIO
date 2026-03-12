// Mock data for Vedant Pawar's Developer Portfolio

export const personalInfo = {
  name: "Vedant Pawar",
  title: "Full-Stack Web Developer",
  tagline: "Crafting production-ready websites that drive real business results.",
  email: "contact.vedant.pawar@gmail.com",
  phone: "+91 8169686681",
  whatsapp: "https://wa.me/918169686681",
  social: {
    github: "https://github.com/vedant990-hub",
    linkedin: "https://www.linkedin.com/in/vedant-p-63b351328/"
  }
};

export const aboutText = `I build websites that work. Not just visually appealing interfaces, but complete, functional web solutions that businesses actually use to grow.

Every project I take on goes from concept to live deployment — including hosting setup, SSL configuration, domain management, and performance optimization. My clients don't get templates; they get custom-built, production-grade websites designed for their specific needs.

I focus on what matters: clean code, fast load times, intuitive user experiences, and websites that convert visitors into customers.`;

export const education = {
  institution: "MIT ADT University",
  degree: "B.Tech in Computer Science",
  duration: "4-Year Program",
  status: "Currently in 2nd Year",
  platform: "Kalvium",
  description: "Pursuing a Bachelor's degree in Computer Science with a focus on practical, industry-oriented learning. The program emphasizes real-world project development, modern technologies, and professional software engineering practices."
};

export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Responsive Design",
    "UI/UX Principles"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Authentication"
  ],
  cms: [
    "WordPress",
    "Shopify",
    "Custom CMS"
  ],
  hosting: [
    "Domain Setup",
    "DNS Configuration",
    "SSL Certificates",
    "Netlify",
    "GitHub Pages",
    "GoDaddy"
  ],
  tools: [
    "Git & GitHub",
    "VS Code",
    "Performance Optimization",
    "SEO Best Practices",
    "Chrome DevTools"
  ]
};

export const projects = [
  {
    id: 0,
    name: "Smart Library Management App",
    url: "#",
    githubUrl: "https://github.com/vedant990-hub/library-management-app",
    summary: "A Flutter + Firebase powered digital library system with wallet-based borrowing.",
    clientType: "MOBILE APP PROJECT",
    type: "mobile",
    overview: "This project is a digital library management mobile application built using Flutter and Firebase. It modernizes traditional library systems by allowing users to discover books, reserve them, borrow using a wallet deposit system, and track their reading activity.",
    whatIDid: "Built the entire mobile application from scratch using Flutter. Implemented Firebase for authentication and database management, developed the wallet system logic, and integrated QR scanning capabilities.",
    features: [
      "Book discovery and search by title or genre",
      "Book reservation system",
      "Wallet-based borrowing with deposit locking",
      "QR code digital library ID",
      "Admin dashboard with analytics graphs",
      "Reading streaks and badges",
      "Book ratings and reviews",
      "Dark mode support"
    ],
    techStack: ["Flutter", "Firebase", "Provider", "QR Scanner", "FL Chart"],
    screenshots: [
      { title: "User Dashboard", url: "/screenshots/UserDashboard.jpeg" },
      { title: "Book Discovery", url: "/screenshots/Discover.jpeg" },
      { title: "Book Details", url: "/screenshots/BookId.jpeg" },
      { title: "QR Book Scanner", url: "/screenshots/BookScanner.jpeg" },
      { title: "User Profile", url: "/screenshots/UserProfile.jpeg" },
      { title: "Digital Library ID", url: "/screenshots/UserId.jpeg" },
      { title: "QR Access Key", url: "/screenshots/UserQr.jpeg" },
      { title: "Admin Overview", url: "/screenshots/AdminDash.jpeg" },
      { title: "Real-time Stats", url: "/screenshots/Stat!.jpeg" }
    ]
  },
  {
    id: 1,
    name: "SPR Naturals",
    url: "https://sprnaturals.in/",
    githubUrl: "https://github.com/vedant990-hub/spr-naturals-product-showcase",
    summary: "E-commerce website for a natural products business",
    clientType: "Live Client Project",
    type: "web",
    overview: "A modern, SEO-optimized product showcase website designed to present natural products with a clean UI and production-ready deployment. Features integrated analytics and multilingual support.",
    whatIDid: "Designed and developed the complete website from scratch using Next.js and TypeScript. Implemented a fully responsive interface, structured content for maximum engagement, and optimized for SEO.",
    features: [
      "Next.js App Router architecture",
      "Multilingual support (i18n)",
      "SEO & Performance optimized",
      "Integrated analytics",
      "Contact handling system"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    name: "Ayurudnik",
    url: "https://ayurudnik.com/",
    githubUrl: "https://github.com/vedant990-hub/Ayurudnik-Remedies",
    summary: "B2B website for veterinary health manufacturing",
    clientType: "Live Client Project",
    type: "web",
    overview: "A professional B2B corporate website for an animal nutrition and veterinary supplements manufacturer specializing in private-label solutions. Designed to build industry trust and generate partner leads.",
    whatIDid: "Built a clean, responsive UI with consistent branding. Developed dedicated sections for manufacturing capabilities, certifications, species-specific products, and private-label inquiry pathways.",
    features: [
      "B2B partner inquiry flows",
      "Species-based product categorization",
      "Trust-building certification showcase",
      "Responsive professional design",
      "Manufacturing process visualization"
    ],
    techStack: ["React", "Vite", "JavaScript", "Tailwind CSS"]
  },
  {
    id: 3,
    name: "Vedanta Healthcare",
    url: "https://vedantahealthcare.org/",
    githubUrl: "https://github.com/vedant990-hub/vedanta-healthcare-connect",
    summary: "Informational website for a healthcare organization",
    clientType: "Live Client Project",
    type: "web",
    overview: "A modern healthcare services website designed to present medical offerings with a clear, accessible layout and patient-oriented information delivery.",
    whatIDid: "Developed the front-end using React and TypeScript, focusing on performance and accessibility. Implemented a clean information hierarchy to help patients easily navigate healthcare services.",
    features: [
      "Accessible medical service menu",
      "Patient-oriented information architecture",
      "Modern healthcare UI",
      "Performance optimized",
      "SEO friendly structure"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"]
  },
  {
    id: 4,
    name: "Vibha Global Exim",
    url: "https://vibhaglobaleximservices.com/",
    githubUrl: "https://github.com/vedant990-hub/vibha-farm-to-global",
    summary: "Corporate website for an international export company",
    clientType: "Live Client Project",
    type: "web",
    overview: "A modern corporate website designed to establish international B2B credibility and showcase global trade export-import services with a professional structure.",
    whatIDid: "Built a multi-page responsive website focusing on lead generation and international B2B standards. Used TypeScript to ensure code reliability and a robust architecture.",
    features: [
      "Export-import service showcase",
      "Global B2B positioning",
      "Lead generation pathways",
      "International trade focus",
      "Responsive corporate layout"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"]
  }
];
