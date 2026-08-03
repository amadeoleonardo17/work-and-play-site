export const profile = {
  name: "Alex Mercado",
  initials: "AM",
  role: "Full-Stack Developer",
  headline: ["I Build Systems", "Inside The Machine"],
  intro:
    "I design and ship resilient web platforms — clean architecture, fast interfaces, and code that holds up under load.",
  email: "hello@alexmercado.dev",
  phone: "+63 912 345 6789",
  location: "Manila, Philippines",
  availability: "Open for new contracts",
  stats: [
    { value: "6+", label: "Years in production" },
    { value: "40+", label: "Systems shipped" },
    { value: "22", label: "Clients served" },
  ],
  stack: ["TypeScript", "React", "Node", "Postgres", "Go", "AWS"],
};

export const services = [
  {
    code: "01",
    title: "Web Application Engineering",
    body: "End-to-end product builds: architecture, data modeling, interface, deployment pipeline.",
    tags: ["React", "TanStack", "Tailwind"],
  },
  {
    code: "02",
    title: "API & Backend Systems",
    body: "Typed APIs, event pipelines, and database design built to survive real traffic.",
    tags: ["Node", "Postgres", "Redis"],
  },
  {
    code: "03",
    title: "Performance Forensics",
    body: "Profiling, query tuning, and render-path surgery for applications that got slow.",
    tags: ["Profiling", "Core Web Vitals"],
  },
  {
    code: "04",
    title: "Cloud & Automation",
    body: "Infrastructure as code, CI/CD, observability, and cost-aware scaling strategy.",
    tags: ["AWS", "Terraform", "CI/CD"],
  },
];

export const experience = [
  {
    period: "2023 — Present",
    role: "Lead Software Engineer",
    org: "Sentinel Labs",
    body: "Leads a four-engineer team building a real-time monitoring platform serving 90k daily sessions.",
  },
  {
    period: "2021 — 2023",
    role: "Senior Full-Stack Developer",
    org: "Northgate Digital",
    body: "Rebuilt the client dashboard suite, cutting median load time from 4.1s to 900ms.",
  },
  {
    period: "2019 — 2021",
    role: "Software Developer",
    org: "Bitforge Studio",
    body: "Delivered commerce and booking platforms for retail and hospitality clients.",
  },
  {
    period: "2015 — 2019",
    role: "BS Computer Science",
    org: "University of the Philippines",
    body: "Focus on distributed systems, compilers, and applied algorithms.",
  },
];

export const testimonials = [
  {
    quote:
      "Alex rewrote the core of our platform without a single day of downtime. Precise, calm, and relentlessly thorough.",
    name: "Marisa Cruz",
    title: "CTO, Sentinel Labs",
  },
  {
    quote:
      "He found the bottleneck our team chased for months, then shipped the fix in a week. Our checkout is twice as fast.",
    name: "Daniel Okafor",
    title: "Head of Product, Northgate",
  },
  {
    quote:
      "Rare mix of deep engineering and design sense. Everything he hands over is documented and ready to extend.",
    name: "Sofia Lin",
    title: "Founder, Loop Retail",
  },
];
