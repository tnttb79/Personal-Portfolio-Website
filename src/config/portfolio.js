// Single source of truth for portfolio content.
// Edit here to update the site — components read from this config.

export const profile = {
  name: "Thang Ta",
  user: "thang",
  host: "portfolio",
  role: "Software Developer",
  tagline: "Full-stack & data-driven software",
  stack: ["React", "TypeScript", ".NET", "Node.js", "Python", "SQL", "Cloud"],
  blurb:
    "I build full-stack web apps, internal tools, and cloud-ready software with React, .NET, Node.js, Python, and SQL.",
};

export const resumeUrl = "/Thang_Ta_Resume(WD).pdf";

export const socials = {
  email: "tanguyentruongthang@gmail.com",
  phone: "+1 623 272 2430",
  location: "Phoenix, Arizona",
  linkedin: "https://www.linkedin.com/in/thang-ta-a68660240/",
  github: "https://github.com/tnttb79",
};

// Navigation: clickable for everyone, with an equivalent terminal command.
export const navItems = [
  { label: "about", href: "#about", command: "about" },
  { label: "skills", href: "#skills", command: "skills" },
  { label: "projects", href: "#projects", command: "projects" },
  { label: "resume", href: resumeUrl, command: "resume", external: true },
  { label: "contact", href: "#contact", command: "contact" },
];

export const about = {
  command: "cat about.md",
  paragraphs: [
    "Hey there — I'm Thang Ta, a passionate Software Developer. My journey began with SQL and Python for data analysis and grew into full-stack software development through building real, shippable projects.",
    "I care about clean architecture, readable code, and products that actually help the people using them. Outside the editor I enjoy learning languages and playing soccer.",
  ],
};

export const experience = [
  {
    period: "2023 — present",
    title: "Full-stack Developer",
    focus: "self-directed / project work",
    points: [
      "Built full-stack web applications with React, TypeScript, .NET Core, Node.js, and SQL Server.",
      "Designed REST APIs, auth flows (JWT / HttpOnly cookies), and relational data models with EF Core.",
      "Containerized services with Docker and shipped demos to cloud hosting.",
    ],
  },
  {
    period: "2021 — 2023",
    title: "Data → Software transition",
    focus: "foundations",
    points: [
      "Started with SQL and Python for data analysis and automation.",
      "Moved into web development — JavaScript, the MERN stack, and component-driven UI.",
      "Self-taught full-stack engineering through hands-on builds.",
    ],
  },
];

// Grouped for a `skills --grouped` tree view.
export const skills = [
  {
    group: "Frontend",
    items: ["React / Next.js", "React Native", "TypeScript", "TailwindCSS", "UI Architecture"],
  },
  {
    group: "Backend",
    items: ["ASP.NET Core (C#)", "Node.js (Express / NestJS)", "FastAPI (Python)", "C++", "REST / GraphQL"],
  },
  {
    group: "Data",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "EF Core / SQLAlchemy / Mongoose"],
  },
  {
    group: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "AWS", "Azure / Azure DevOps (AKS)", "Kafka / RabbitMQ"],
  },
];

export const projects = [
  {
    id: 1,
    slug: "iframe-auth",
    type: "dir",
    title: "Cross-Origin Iframe Auth",
    img: "/authIframeConsumer.png",
    desc:
      "A two-origin authentication demo for an embeddable chat widget. The consumer app keeps the API key server-side, requests a short-lived embed token, passes it to the producer iframe via postMessage, and the producer exchanges it for an HttpOnly session cookie.",
    technologies: ["Next.js", "TypeScript", "Prisma", "SQLite", "JWT", "HttpOnly Cookies", "postMessage", "Render"],
    demo: "https://auth-iframe-consumer.onrender.com",
    github: "https://github.com/tnttb79/auth-related/tree/main/iframe-auth",
  },
  {
    id: 2,
    slug: "spotify-clone",
    type: "dir",
    title: "Spotify Clone",
    img: "/spotifyClone.png",
    desc:
      "A vibrant music app featuring diverse genres, top charts, and artist pages. Uses the Spotify public API via RapidAPI, with location-based songs and an intuitive search experience.",
    technologies: ["React", "TailwindCSS", "Redux", "Axios", "RapidAPI", "React Router", "Swiper"],
    demo: "https://spotify-clone-bqgr.onrender.com",
    github: "https://github.com/tnttb79/Spotify-Clone-Full-stack_07_03-08_01",
  },
  {
    id: 3,
    slug: "social-app",
    type: "dir",
    title: "Social App",
    img: "/socialApp.png",
    desc:
      "A full-stack app where users create, edit, delete, comment on, and like posts with image uploads. Includes a complete authentication system: sign-in, sign-up, and log-out.",
    technologies: ["React", "TailwindCSS", "MongoDB", "Express", "Redux", "JWT", "React Router"],
    demo: "https://my-memories-uf61.onrender.com",
    github: "https://github.com/tnttb79/WEB-REACT-MyGallery-fullstack-MERN-app",
  },
  {
    id: 4,
    slug: "admin-dashboard",
    type: "dir",
    title: "Admin Dashboard",
    img: "/adminDashboard.png",
    desc:
      "A front-end admin dashboard with diverse chart types, interactive data tables, and a flexible data grid. Sleek UI with light and dark modes for optimal viewing.",
    technologies: ["React", "Material-UI", "React Router", "Nivo Charts", "Formik", "Yup", "FullCalendar"],
    demo: "https://admin-dashboard-8hz5.onrender.com",
    github: "https://github.com/tnttb79/WEB-REACT-dashboar-frontend_5_15-6_29",
  },
  {
    id: 5,
    slug: "application-management",
    type: "dir",
    title: "Application Management",
    img: "/ApplicationManagement.png",
    desc:
      "A modern full-stack app for managing job applications and resumes. Built with React, .NET Core, and SQL Server, with a polished dark/light theme. Currently in active development — auth and deployment are upcoming.",
    technologies: ["React", "TypeScript", "Material-UI", ".NET Core 8", "SQL Server", "Docker Compose", "EF Core"],
    demo: null,
    github: "https://github.com/tnttb79/ResumeMgtWebAPIDotNet",
  },
];
