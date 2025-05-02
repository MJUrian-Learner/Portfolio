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
    primary: "from-emerald-400 to-teal-500", // from-primary to-primary/70
    secondary: "from-teal-500 to-emerald-600", // from-primary to-primary/70
    accent: "text-emerald-400", // text-primary
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", // bg-primary/20 text-primary border-primary/30
    hover: "hover:bg-emerald-500/10",
    border: "border-emerald-500/30", // border-primary/30
    cursor: "bg-emerald-400",
    highlight: "bg-emerald-500", // bg-primary
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

export const CaTEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "data", label: "Data Visualization" },
  { id: "ai", label: "AI & ML" },
  { id: "interactive", label: "3D & Interactive" },
];

export const PROJECTS = [
  {
    title: "Immersive Portfolio",
    description:
      "A 3D interactive portfolio experience built with Three.js and React.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Three.js", "GSAP", "WebGL"],
    categories: ["web", "interactive"],
    role: "Lead Developer",
    challenge:
      "Creating an immersive 3D experience that's both performant and accessible across devices.",
    solution:
      "Implemented progressive enhancement to ensure core content is accessible on all devices while providing enhanced 3D features for capable browsers.",
    features: [
      "Interactive 3D environment",
      "Optimized performance",
      "Responsive design",
      "Accessibility features",
      "Custom animations",
    ],
    architecture: {
      description:
        "The application uses a component-based architecture with React for UI and Three.js for 3D rendering. Data flows from the state management layer to the rendering components, with optimizations for performance.",
      diagram: `
        graph TD;
          A["User Interface<br/>(React Components)"] --> B["State Management<br/>(Context API)"];
          B --> C["3D Scene Controller"];
          C --> D["Three.js Renderer"];
          C --> E["Asset Loader"];
          E --> F["3D Models & Textures"];
          B --> G["Animation System<br/>(GSAP)"];
          G --> D;
          H["User Interactions"] --> A;
          I["Responsive Layout System"] --> A;
      `,
      components: [
        {
          name: "UI Layer",
          description: "React components for user interface elements",
        },
        {
          name: "State Management",
          description: "Context API for managing application state",
        },
        {
          name: "3D Controller",
          description: "Manages the Three.js scene and camera",
        },
        {
          name: "Asset Management",
          description: "Handles loading and optimization of 3D assets",
        },
        {
          name: "Animation System",
          description: "GSAP integration for smooth animations",
        },
      ],
    },
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates custom content for various purposes.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
    categories: ["ai", "web"],
    role: "Full Stack Developer",
    challenge:
      "Optimizing API usage to balance cost and performance while providing a responsive user experience.",
    solution:
      "Developed a caching system and implemented request throttling to optimize API usage while maintaining a responsive interface.",
    features: [
      "AI-powered generation",
      "Content templates",
      "User accounts",
      "Content history",
      "Export options",
    ],
    architecture: {
      description:
        "This application uses a React frontend with a Node.js backend that interfaces with the OpenAI API. It implements caching and request optimization to manage API costs and improve performance.",
      diagram: `
        graph TD;
          A["Frontend<br/>(React)"] --> B["Backend API<br/>(Node.js/Express)"];
          B --> C["AI Service<br/>(OpenAI API)"];
          B --> D["Cache Layer<br/>(Redis)"];
          B --> E["Database<br/>(MongoDB)"];
          F["Authentication<br/>(JWT)"] --> B;
          G["Rate Limiter"] --> B;
          H["Content Templates"] --> B;
          I["Export Service"] --> B;
      `,
      components: [
        {
          name: "Frontend",
          description: "React application with modern UI components",
        },
        {
          name: "Backend API",
          description: "Node.js/Express server handling requests",
        },
        {
          name: "AI Integration",
          description: "OpenAI API with prompt engineering",
        },
        {
          name: "Caching System",
          description: "Redis for caching frequent requests",
        },
        {
          name: "Database",
          description: "MongoDB for user data and content storage",
        },
      ],
    },
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and payment integration.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    categories: ["web", "ecommerce"],
    role: "Frontend Developer",
    challenge:
      "Building a seamless checkout experience with complex state management.",
    solution:
      "Implemented a robust state management system with React Context and custom hooks to handle the shopping cart and checkout flow.",
    features: [
      "Product catalog",
      "Shopping cart",
      "Secure checkout",
      "Payment processing",
      "Order management",
    ],
    architecture: {
      description:
        "The e-commerce platform uses a Next.js application with server-side rendering for SEO and performance. It integrates with a headless CMS for product management and Stripe for payment processing.",
      diagram: `
        graph TD;
          A["Client Side<br/>(Next.js App)"] --> B["Server Side<br/>(Next.js API Routes)"];
          B --> C["Database<br/>(PostgreSQL)"];
          B --> D["Payment Gateway<br/>(Stripe API)"];
          E["CMS<br/>(Headless)"] --> B;
          B --> F["Authentication<br/>(NextAuth.js)"];
          G["Product Catalog"] --> A;
          H["Shopping Cart<br/>(Local Storage)"] --> A;
          I["Checkout Flow"] --> A;
          I --> D;
      `,
      components: [
        {
          name: "Frontend",
          description: "Next.js with TypeScript and Tailwind CSS",
        },
        {
          name: "API Layer",
          description: "Next.js API routes for server-side operations",
        },
        {
          name: "Database",
          description: "PostgreSQL for storing product and order data",
        },
        {
          name: "Payment Processing",
          description: "Stripe integration for secure payments",
        },
        {
          name: "CMS Integration",
          description: "Headless CMS for content management",
        },
      ],
    },
  },
  {
    title: "Immersive Portfolio",
    description:
      "A 3D interactive portfolio experience built with Three.js and React.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Three.js", "GSAP", "WebGL"],
    categories: ["web", "interactive"],
    role: "Lead Developer",
    challenge:
      "Creating an immersive 3D experience that's both performant and accessible across devices.",
    solution:
      "Implemented progressive enhancement to ensure core content is accessible on all devices while providing enhanced 3D features for capable browsers.",
    features: [
      "Interactive 3D environment",
      "Optimized performance",
      "Responsive design",
      "Accessibility features",
      "Custom animations",
    ],
    architecture: {
      description:
        "The application uses a component-based architecture with React for UI and Three.js for 3D rendering. Data flows from the state management layer to the rendering components, with optimizations for performance.",
      diagram: `
        graph TD;
          A["User Interface<br/>(React Components)"] --> B["State Management<br/>(Context API)"];
          B --> C["3D Scene Controller"];
          C --> D["Three.js Renderer"];
          C --> E["Asset Loader"];
          E --> F["3D Models & Textures"];
          B --> G["Animation System<br/>(GSAP)"];
          G --> D;
          H["User Interactions"] --> A;
          I["Responsive Layout System"] --> A;
      `,
      components: [
        {
          name: "UI Layer",
          description: "React components for user interface elements",
        },
        {
          name: "State Management",
          description: "Context API for managing application state",
        },
        {
          name: "3D Controller",
          description: "Manages the Three.js scene and camera",
        },
        {
          name: "Asset Management",
          description: "Handles loading and optimization of 3D assets",
        },
        {
          name: "Animation System",
          description: "GSAP integration for smooth animations",
        },
      ],
    },
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates custom content for various purposes.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
    categories: ["ai", "web"],
    role: "Full Stack Developer",
    challenge:
      "Optimizing API usage to balance cost and performance while providing a responsive user experience.",
    solution:
      "Developed a caching system and implemented request throttling to optimize API usage while maintaining a responsive interface.",
    features: [
      "AI-powered generation",
      "Content templates",
      "User accounts",
      "Content history",
      "Export options",
    ],
    architecture: {
      description:
        "This application uses a React frontend with a Node.js backend that interfaces with the OpenAI API. It implements caching and request optimization to manage API costs and improve performance.",
      diagram: `
        graph TD;
          A["Frontend<br/>(React)"] --> B["Backend API<br/>(Node.js/Express)"];
          B --> C["AI Service<br/>(OpenAI API)"];
          B --> D["Cache Layer<br/>(Redis)"];
          B --> E["Database<br/>(MongoDB)"];
          F["Authentication<br/>(JWT)"] --> B;
          G["Rate Limiter"] --> B;
          H["Content Templates"] --> B;
          I["Export Service"] --> B;
      `,
      components: [
        {
          name: "Frontend",
          description: "React application with modern UI components",
        },
        {
          name: "Backend API",
          description: "Node.js/Express server handling requests",
        },
        {
          name: "AI Integration",
          description: "OpenAI API with prompt engineering",
        },
        {
          name: "Caching System",
          description: "Redis for caching frequent requests",
        },
        {
          name: "Database",
          description: "MongoDB for user data and content storage",
        },
      ],
    },
  },
  {
    title: "Interactive Data Visualization",
    description:
      "A dashboard for visualizing complex datasets with interactive charts and filters.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["D3.js", "React", "TypeScript", "Firebase"],
    categories: ["data", "interactive"],
    role: "Data Visualization Specialist",
    challenge:
      "Rendering complex visualizations with large datasets without impacting performance.",
    solution:
      "Implemented data sampling and progressive loading techniques to handle large datasets efficiently.",
    features: [
      "Interactive charts",
      "Real-time updates",
      "Data filtering",
      "Export capabilities",
      "Responsive design",
    ],
    architecture: {
      description:
        "The dashboard uses React with D3.js for visualization and Firebase for real-time data. It implements data sampling and virtualization techniques to handle large datasets efficiently.",
      diagram: `
        graph TD;
          A["UI Components<br/>(React)"] --> B["Visualization Layer<br/>(D3.js)"];
          C["Data Processing<br/>(Web Workers)"] --> B;
          D["Data Source<br/>(Firebase)"] --> C;
          E["Filter Engine"] --> C;
          F["Export Module"] --> A;
          G["Real-time Updates"] --> D;
          H["Data Sampling"] --> C;
          I["Virtualization"] --> A;
      `,
      components: [
        {
          name: "UI Framework",
          description: "React with TypeScript for type safety",
        },
        {
          name: "Visualization Engine",
          description: "D3.js for custom interactive charts",
        },
        {
          name: "Data Processing",
          description: "Web Workers for background processing",
        },
        {
          name: "Real-time Database",
          description: "Firebase for live data updates",
        },
        {
          name: "Optimization Layer",
          description: "Data sampling and virtualization",
        },
      ],
    },
  },
];

export const BLOG_POSTS = [
  {
    title: "Building Immersive 3D Experiences with Three.js and React",
    description:
      "Learn how to create engaging 3D web experiences by combining the power of Three.js with React's component-based architecture.",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Development",
    comments: 12,
    likes: 48,
    views: 1250,
  },
  {
    title: "The Future of Web Animation: Beyond CSS Transitions",
    description:
      "Explore advanced animation techniques using Framer Motion, GSAP, and other modern libraries to create stunning web animations.",
    date: "April 22, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Design",
    comments: 8,
    likes: 36,
    views: 980,
  },
  {
    title: "Optimizing React Performance: Advanced Techniques",
    description:
      "Dive deep into React optimization strategies including memoization, virtualization, and code splitting to build lightning-fast applications.",
    date: "March 10, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Performance",
    comments: 15,
    likes: 62,
    views: 1820,
  },
  {
    title: "Creating Accessible UI Components from Scratch",
    description:
      "Learn how to build fully accessible UI components that comply with WCAG guidelines while maintaining visual appeal.",
    date: "February 28, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Accessibility",
    comments: 6,
    likes: 29,
    views: 750,
  },
];
