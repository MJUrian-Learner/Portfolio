import { Code, Database, Paintbrush, Wrench } from "lucide-react";

export const NAVIGATION_MENU = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "credentials", label: "Credentials" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export const COLOR_THEMES = {
  emerald: {
    name: "Emerald",
    primary: "from-emerald-400 to-teal-500",
    secondary: "from-teal-500 to-emerald-600",
    accent: "text-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    hover: "hover:bg-emerald-500/10",
    border: "border-emerald-500/30",
    cursor: "bg-emerald-400",
    highlight: "bg-emerald-500",
    muted: "text-emerald-300/70",
  },
  crimson: {
    name: "Crimson",
    primary: "from-rose-400 to-pink-600",
    secondary: "from-pink-500 to-rose-600",
    accent: "text-rose-400",
    badge: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    hover: "hover:bg-rose-500/10",
    border: "border-rose-500/30",
    cursor: "bg-rose-400",
    highlight: "bg-rose-500",
    muted: "text-rose-300/70",
  },
  sapphire: {
    name: "Sapphire",
    primary: "from-blue-400 to-indigo-600",
    secondary: "from-indigo-500 to-blue-600",
    accent: "text-blue-400",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    hover: "hover:bg-blue-500/10",
    border: "border-blue-500/30",
    cursor: "bg-blue-400",
    highlight: "bg-blue-500",
    muted: "text-blue-300/70",
  },
  amber: {
    name: "Amber",
    primary: "from-amber-400 to-orange-600",
    secondary: "from-orange-500 to-amber-600",
    accent: "text-amber-400",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    hover: "hover:bg-amber-500/10",
    border: "border-amber-500/30",
    cursor: "bg-amber-400",
    highlight: "bg-amber-500",
    muted: "text-amber-300/70",
  },
  mint: {
    name: "Mint",
    primary: "from-green-400 to-emerald-600",
    secondary: "from-emerald-500 to-green-600",
    accent: "text-green-400",
    badge: "bg-green-500/20 text-green-300 border-green-500/30",
    hover: "hover:bg-green-500/10",
    border: "border-green-500/30",
    cursor: "bg-green-400",
    highlight: "bg-green-500",
    muted: "text-green-300/70",
  },
};

export const SKILL_CATEGORIES = {
  frontend: {
    icon: Code,
    title: "Frontend Development",
    description:
      "Creating responsive, interactive user interfaces with modern frameworks and libraries.",
    skills: [
      {
        name: "React",
        icon: "⚛️",
        level: 90,
        description:
          "Building complex component-based UIs with React hooks and context API.",
        projects: ["Portfolio Website", "E-commerce Platform", "Dashboard UI"],
      },
      {
        name: "Next.js",
        icon: "▲",
        level: 85,
        description:
          "Developing server-rendered React applications with optimized performance.",
        projects: ["Corporate Website", "Blog Platform", "Marketing Site"],
      },
      {
        name: "TypeScript",
        icon: "TS",
        level: 80,
        description:
          "Writing type-safe code to reduce bugs and improve developer experience.",
        projects: ["Financial Dashboard", "API Integration", "Form Library"],
      },
      {
        name: "Tailwind CSS",
        icon: "🌊",
        level: 95,
        description: "Creating custom designs with utility-first CSS approach.",
        projects: ["Design System", "Marketing Pages", "Admin Dashboard"],
      },
      {
        name: "JavaScript",
        icon: "JS",
        level: 90,
        description:
          "Implementing complex logic and interactive features with modern JavaScript.",
        projects: [
          "Interactive Maps",
          "Data Visualization",
          "Animation Library",
        ],
      },
      {
        name: "Framer Motion",
        icon: "🔄",
        level: 75,
        description:
          "Creating fluid animations and transitions for enhanced user experience.",
        projects: ["Product Showcase", "Interactive Tutorial", "Mobile App UI"],
      },
    ],
  },
  backend: {
    icon: Database,
    title: "Backend Development",
    description:
      "Building robust server-side applications and APIs to power web experiences.",
    skills: [
      {
        name: "Node.js",
        icon: "🟢",
        level: 85,
        description:
          "Creating scalable server-side applications with JavaScript.",
        projects: ["REST API", "Authentication Service", "Payment Gateway"],
      },
      {
        name: "Express",
        icon: "🚂",
        level: 80,
        description:
          "Building flexible web applications and APIs with minimal overhead.",
        projects: ["E-commerce Backend", "Content API", "User Management"],
      },
      {
        name: "MongoDB",
        icon: "🍃",
        level: 75,
        description: "Designing and implementing NoSQL database solutions.",
        projects: ["Content Management", "User Profiles", "Analytics Platform"],
      },
      {
        name: "PostgreSQL",
        icon: "🐘",
        level: 70,
        description:
          "Working with relational databases for data-intensive applications.",
        projects: [
          "Financial System",
          "Inventory Management",
          "Reporting Tool",
        ],
      },
      {
        name: "GraphQL",
        icon: "◢",
        level: 65,
        description:
          "Creating flexible APIs with precise data fetching capabilities.",
        projects: [
          "Content Platform",
          "Social Network API",
          "Dashboard Backend",
        ],
      },
    ],
  },
  design: {
    icon: Paintbrush,
    title: "Design & Creative",
    description:
      "Crafting visually appealing and user-friendly interfaces with attention to detail.",
    skills: [
      {
        name: "UI/UX Design",
        icon: "🎨",
        level: 85,
        description:
          "Creating intuitive and aesthetically pleasing user interfaces.",
        projects: [
          "Mobile App Redesign",
          "Web Application UI",
          "Design System",
        ],
      },
      {
        name: "Figma",
        icon: "F",
        level: 90,
        description: "Designing and prototyping interfaces collaboratively.",
        projects: [
          "E-commerce Prototype",
          "Design System",
          "Mobile App Wireframes",
        ],
      },
      {
        name: "Adobe XD",
        icon: "Xd",
        level: 75,
        description:
          "Creating interactive prototypes and design specifications.",
        projects: ["Marketing Website", "Dashboard UI", "Mobile App Design"],
      },
      {
        name: "Motion Design",
        icon: "🎬",
        level: 70,
        description:
          "Designing animations and transitions for enhanced user experience.",
        projects: [
          "Product Animations",
          "Onboarding Flow",
          "Interactive Elements",
        ],
      },
    ],
  },
  tools: {
    icon: Wrench,
    title: "Tools & Workflow",
    description:
      "Utilizing modern development tools and practices for efficient collaboration and delivery.",
    skills: [
      {
        name: "Git & GitHub",
        icon: "🔄",
        level: 90,
        description:
          "Managing code versions and collaborating with development teams.",
        projects: [
          "Open Source Contribution",
          "Team Collaboration",
          "CI/CD Setup",
        ],
      },
      {
        name: "VS Code",
        icon: "📝",
        level: 95,
        description:
          "Leveraging editor extensions and customizations for productivity.",
        projects: [
          "Custom Snippets",
          "Workspace Setup",
          "Extension Development",
        ],
      },
      {
        name: "Docker",
        icon: "🐳",
        level: 75,
        description:
          "Containerizing applications for consistent development and deployment.",
        projects: [
          "Microservices Architecture",
          "Development Environment",
          "Deployment Pipeline",
        ],
      },
      {
        name: "CI/CD",
        icon: "🔄",
        level: 80,
        description:
          "Automating testing and deployment processes for reliable delivery.",
        projects: [
          "GitHub Actions Workflow",
          "Automated Testing",
          "Deployment Automation",
        ],
      },
    ],
  },
};
