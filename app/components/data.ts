export const profile = {
  name: "Muddasir Amjad",
  title: "Senior Software Engineer",
  email: "muddasiramjad6@gmail.com",
  phones: ["+923042525475", "+923154043456"],
  summary:
    "Senior Software Engineer with 6+ years of experience building web and mobile applications with React.js, Vue.js, React Native and Node.js. Delivered enterprise analytics dashboards, AI-powered platforms, SaaS products and social applications for teams and clients in the USA and Saudi Arabia. Leads a team of 3–5 developers while staying hands-on in architecture, code and delivery.",
  roles: [
    "React & Next.js Architect",
    "React Native Developer",
    "Node.js Backend Engineer",
    "Team Lead · 3–5 Developers",
    "AI-Assisted Builder",
  ],
};

export const stats = [
  { value: 6, suffix: "+", label: "Years building" },
  { value: 4, suffix: "", label: "Companies shipped for" },
  { value: 5, suffix: "", label: "Max team size led (3–5)" },
  { value: 2, suffix: "", label: "Continents served" },
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
      "Lead a team of 3–5 developers, guiding technical decisions and code quality while contributing hands-on to delivery.",
      "Design and build web and mobile features with React.js, Vue.js and React Native for enterprise applications, SaaS platforms, CRM systems, analytics dashboards and admin tools.",
      "Develop backend services and REST APIs with Node.js, Express.js and MongoDB, integrated across frontend and mobile clients.",
      "Shape application architecture and solve cross-stack technical problems from design through release.",
      "Work directly with international clients and distributed teams in the USA and Saudi Arabia.",
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
