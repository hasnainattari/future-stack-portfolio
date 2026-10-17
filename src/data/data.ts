/**
 * Single source of truth for the whole portfolio.
 * Edit this file (and add your own images) to personalise every section,
 * the navigation, footer, SEO tags and the 404 page.
 * Empty strings / empty arrays hide the related content automatically.
 */
import portraitAsset from "@/assets/portrait.png.asset.json";
import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Hasnain",
    title: "Full Stack MERN Developer",
    location: "Liyari, Karachi, Pakistan",
    email: "hasnainattari096@gmail.com",
    availability: "Available for freelance projects",
    available: true,
    avatar: portraitAsset.url,
    avatarAlt: "Portrait of Hasnain, full stack developer",
    resumeUrl: "",
    shortBio:
      "I design and build fast, accessible web applications with React, Node.js and MongoDB — from first sketch to production.",
    bio: [
      "I'm a full stack developer based in Karachi, working across the MERN stack to turn ideas into reliable, well-crafted products.",
      "I care about the details people feel but rarely notice: clear interfaces, quick load times, and code that the next developer can read.",
    ],
  },

  branding: {
    initials: "H",
    logoText: "Hasnain.dev",
    siteUrl: "https://hasnain-js.lovable.app",
  },

  socialLinks: [
    { platform: "GitHub", url: "https://github.com/hasnainattari", enabled: true },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/hasnain-the-dev/", enabled: true },
    { platform: "Email", url: "mailto:hasnainattari096@gmail.com", enabled: true },
    { platform: "X", url: "", enabled: false },
    { platform: "Instagram", url: "", enabled: false },
  ],

  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: { label: "Let's talk", href: "#contact" },

  hero: {
    eyebrow: "Full Stack MERN Developer",
    headingLead: "Building thoughtful web products,",
    headingAccent: "end to end.",
    description:
      "I help founders and teams ship fast, accessible applications — clean interfaces on the front, dependable APIs behind them.",
    primaryCta: { label: "View my work", href: "#projects" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
    focus: ["React", "TypeScript", "Node.js", "MongoDB"],
  },

  about: {
    heading: "Engineering with a designer's eye.",
    expertise: ["Frontend architecture", "REST API design", "Responsive UI", "Performance tuning"],
  },

  skills: [
    {
      category: "Frontend",
      description: "Accessible, responsive interfaces.",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux Toolkit"],
    },
    {
      category: "Backend",
      description: "APIs, data and authentication.",
      items: ["Node.js", "Express", "REST APIs", "MongoDB", "Mongoose", "JWT Auth"],
    },
    {
      category: "Tools",
      description: "The everyday workflow.",
      items: ["Git", "GitHub", "Figma", "VS Code", "Postman", "Vite"],
    },
  ],

  // Concept projects — replace with your real work, images and links.
  projects: [
    {
      slug: "lumen-commerce",
      title: "Lumen Commerce",
      kind: "Concept · E-commerce",
      year: "2026",
      summary: "A headless storefront with product search, cart and a streamlined checkout flow.",
      problem: "Explores how far page load time can drop with server rendering and edge caching.",
      tags: ["Next.js", "TypeScript", "MongoDB"],
      featured: true,
    },
    {
      slug: "nebula-crm",
      title: "Nebula CRM",
      kind: "Concept · SaaS",
      year: "2025",
      summary: "A pipeline dashboard for tracking leads, deals and follow-ups in one place.",
      tags: ["React", "Node.js", "Express"],
      featured: false,
    },
    {
      slug: "habit-loop",
      title: "Habit Loop",
      kind: "Concept · Web app",
      year: "2025",
      summary: "A habit tracker built around streaks and weekly progress summaries.",
      tags: ["React", "Tailwind CSS"],
      featured: false,
    },
    {
      slug: "signal-analytics",
      title: "Signal Analytics",
      kind: "Concept · Dashboard",
      year: "2024",
      summary: "An analytics view with filterable charts and exportable reports.",
      tags: ["React", "MongoDB", "REST APIs"],
      featured: false,
    },
  ],

  experience: [],
  education: [],
  certifications: [],

  services: [
    { title: "Web applications", description: "Full stack products with React on the front and Node.js + MongoDB behind it." },
    { title: "Landing pages", description: "Focused, fast marketing pages that explain your product clearly." },
    { title: "Frontend builds", description: "Turning Figma designs into responsive, accessible React components." },
    { title: "API & integrations", description: "REST APIs, authentication and third-party services wired up cleanly." },
  ],

  testimonials: [],

  sections: {
    about: { id: "about", eyebrow: "01 — About", title: "About", enabled: true },
    skills: { id: "skills", eyebrow: "02 — Stack", title: "Tools I work with", description: "Grouped by where they fit, not by invented percentages.", enabled: true },
    projects: { id: "projects", eyebrow: "03 — Work", title: "Selected work", description: "Concept projects that show how I approach product, interface and code.", enabled: true },
    experience: { id: "experience", eyebrow: "04 — Experience", title: "Experience & education", enabled: true },
    services: { id: "services", eyebrow: "05 — Services", title: "How I can help", enabled: true },
    testimonials: { id: "testimonials", eyebrow: "Kind words", title: "What clients say", enabled: true },
    contact: { id: "contact", eyebrow: "06 — Contact", title: "Let's build something", enabled: true },
  },

  contact: {
    heading: "Have a project in mind?",
    description: "Tell me a little about it. I usually reply within a day or two.",
    formNote: "Sending opens your email app with the message ready to go.",
  },

  footer: {
    tagline: "Full stack developer building calm, capable web products.",
    note: "Designed & built in Karachi.",
  },

  seo: {
    title: "Hasnain — Full Stack MERN Developer",
    description:
      "Portfolio of Hasnain, a Karachi-based full stack developer building fast, accessible web applications with React, Node.js and MongoDB.",
    keywords: ["Hasnain", "MERN developer", "React developer", "Full stack developer Karachi"],
    canonicalUrl: "https://hasnain-js.lovable.app",
  },

  notFound: {
    heading: "This page wandered off.",
    message: "The link may be broken or the page may have moved.",
    cta: "Back to home",
  },

  settings: {
    defaultTheme: "light",
    enableDarkMode: true,
    enableCustomCursor: true,
    enableShader: true,
    enableScrollAnimations: true,
    enableScrollProgress: true,
  },
};

export const activeSocials = portfolioData.socialLinks.filter((s) => s.enabled && s.url);
