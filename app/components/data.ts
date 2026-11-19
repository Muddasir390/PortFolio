export const profile = {
  name: "Muddasir Amjad",
  title: "Senior Software Engineer",
  email: "muddasiramjad6@gmail.com",
  phones: ["+923042525475", "+923154043456"],
  summary:
    "Senior Software Engineer with 6+ years of experience building web and mobile applications with React.js, Vue.js, React Native and Node.js. Delivered enterprise analytics dashboards, AI-powered platforms, SaaS products and social applications for international teams and clients. Leads engineering teams while staying hands-on in architecture, code and delivery.",
  roles: [
    "React & Next.js Architect",
    "React Native Developer",
    "Node.js Backend Engineer",
    "Team Lead",
    "AI-Assisted Builder",
  ],
};

export const stats = [
  { value: 6, suffix: "+", label: "Years building" },
  { value: 4, suffix: "", label: "Companies worked with" },
  { value: 4, suffix: "", label: "Featured products shipped" },
  { value: 3, suffix: "", label: "Platforms: web, mobile, backend" },
];

export const skillGroups = [
  { group: "Frontend", items: ["JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Vuetify"] },
  { group: "Mobile", items: ["React Native"] },
  { group: "Backend", items: ["Node.js", "Express.js", "NestJS", "REST APIs"] },
  { group: "Databases", items: ["MongoDB", "SQL"] },
  { group: "State", items: ["Redux", "Vuex", "Pinia"] },
  { group: "Cloud & Tools", items: ["AWS", "Docker", "Git", "GitHub"] },
  { group: "AI-Assisted Dev", items: ["Claude", "GitHub Copilot", "Cursor"] },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  note?: string;
  points: string[];
  tech?: string[];
  accent: string;
};

export const jobs: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "Enigmatix",
    period: "Mar 2020 – Present",
    accent: "#7c5cff",
    points: [
      "Lead a team of developers, guiding technical decisions and code quality while contributing hands-on to delivery.",
      "Design and build web and mobile features with React.js, Vue.js and React Native for enterprise applications, SaaS platforms, CRM systems, analytics dashboards and admin tools.",
      "Develop backend services and REST APIs with Node.js, Express.js and MongoDB, integrated across frontend and mobile clients.",
      "Shape application architecture and solve cross-stack technical problems from design through release.",
      "Work directly with international clients and distributed teams across time zones.",
      "Use AI-assisted tools (Claude, GitHub Copilot, Cursor) to speed up development, debugging and code reviews — every change reviewed before it ships.",
    ],
    tech: ["React.js", "Vue.js", "React Native", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    role: "Senior Software Engineer",
    company: "Aviso AI",
    period: "Jun 2024 – Jul 2026",
    accent: "#00e5ff",
    points: [
      "Built enterprise analytics applications and interactive dashboards, including KPI visualizations and executive insights.",
      "Developed the Command Center, with priority notifications and deep-dive analytics.",
      "Created configuration-driven UI functionality to support tenant-specific features and customization.",
      "Integrated backend APIs for analytics, calendar events, meeting briefs and application data.",
      "Delivered Demo Intelligence modules: Demo Rooms, Accounts, Content Library and Seller Analytics.",
      "Improved frontend architecture and performance through reusable components and optimization of complex UI workflows.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "SearchAtlas",
    period: "Jul 2025 – May 2026",
    note: "Remote",
    accent: "#ff4fd8",
    points: [
      "Worked as an individual contributor on an international remote engineering team, building frontend features for the product.",
      "Implemented new application features and maintained existing functionality in collaboration with cross-functional teammates.",
    ],
  },
  {
    role: "Senior Mobile App Developer",
    company: "Ilsa Interactive",
    period: "Aug 2023 – Apr 2024",
    accent: "#ffb547",
    points: [
      "Developed cross-platform mobile application features with React Native.",
      "Integrated REST APIs and implemented application functionality for iOS and Android.",
    ],
    tech: ["React Native", "REST APIs"],
  },
];

export const projects = [
  {
    title: "Enterprise Analytics & Command Center",
    tag: "Aviso AI · Analytics",
    color: ["#4338ca", "#0e7490"],
    points: [
      "Interactive dashboards with KPI visualizations and executive insights.",
      "Command Center with priority notifications and deep-dive analytics.",
      "Configuration-driven UI so each tenant gets its own features and customization.",
      "Demo Intelligence modules: Demo Rooms, Accounts, Content Library and Seller Analytics.",
    ],
    stack: ["Dashboards", "Multi-tenant UI", "Analytics APIs"],
  },
  {
    title: "AI-Powered RFP Management Platform",
    tag: "AI · SaaS",
    color: ["#7c5cff", "#00e5ff"],
    points: [
      "Questionnaire and document upload flows with AI-powered question processing and automated answer generation.",
      "Generated responses shown in multiple formats with completion percentages and progress tracking.",
      "Role-based access control and multi-level approval workflows for different users and stakeholders.",
    ],
    stack: ["AI", "RBAC", "Workflows"],
  },
  {
    title: "Social Networking & Sports Court Booking",
    tag: "Web · Mobile",
    color: ["#ff4fd8", "#ffb547"],
    points: [
      "Instagram-style social features: reels, posts, friends and interactions.",
      "Court registration and booking, including individual time slots and full-court reservations.",
      "MyFatoorah payments, ad-based monetization through reels, live streaming and chat.",
      "Contributed to both the web application and the React Native mobile app.",
    ],
    stack: ["React Native", "Payments", "Live Streaming"],
  },
  {
    title: "AI-Powered Fitness & Nutrition App",
    tag: "AI · Health",
    color: ["#00ffa3", "#00b8ff"],
    points: [
      "User profiling from height, weight and fitness goals.",
      "AI-based personalized recommendations for weight gain, weight loss, meal plans and nutrition.",
      "Workout and exercise recommendations tailored to individual goals.",
    ],
    stack: ["AI", "Personalization"],
  },
];

export const education = {
  degree: "Master of Computer Science (MCS)",
  school: "The Islamia University of Bahawalpur, Pakistan",
  period: "Jan 2017 – Jan 2019",
};

export const companies = ["Aviso AI", "SearchAtlas", "Enigmatix", "Ilsa Interactive"];

export const capabilities = [
  {
    icon: "web",
    title: "Web applications",
    text: "Enterprise apps, SaaS platforms, CRM systems and admin tools built to scale.",
    tags: ["React.js", "Next.js", "Vue.js", "TypeScript"],
  },
  {
    icon: "mobile",
    title: "Mobile apps",
    text: "Cross-platform iOS and Android apps with REST API integration.",
    tags: ["React Native", "REST APIs"],
  },
  {
    icon: "server",
    title: "Backend & APIs",
    text: "Services and APIs that connect frontend and mobile clients end to end.",
    tags: ["Node.js", "Express.js", "NestJS", "MongoDB", "SQL"],
  },
  {
    icon: "chart",
    title: "Analytics dashboards",
    text: "KPI visualizations and executive insights for enterprise teams.",
    tags: ["Dashboards", "Config-driven UI"],
  },
  {
    icon: "spark",
    title: "AI-powered products",
    text: "Questionnaire automation, personalized recommendations and AI-assisted workflows.",
    tags: ["AI features", "RBAC", "Approval flows"],
  },
  {
    icon: "users",
    title: "Technical leadership",
    text: "Lead engineering teams: technical decisions, code quality and delivery.",
    tags: ["Architecture", "Code review", "Mentoring"],
  },
];

export const principles = [
  { title: "Architecture first", text: "Shaping application architecture and solving cross-stack problems, from design through release." },
  { title: "AI-assisted, human-reviewed", text: "Claude, GitHub Copilot and Cursor speed up delivery — every change is reviewed before it ships." },
  { title: "Close collaboration", text: "Working directly with international clients and distributed teams across time zones." },
  { title: "Reusable and fast", text: "Reusable components and optimized complex UI workflows keep frontends maintainable and performant." },
];
