export type SocialPlatform = "GitHub" | "LinkedIn" | "X" | "Instagram" | "Email" | "Website";

export interface Link {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  enabled: boolean;
}

export interface Personal {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  availability: string;
  available: boolean;
  avatar: string;
  avatarAlt: string;
  resumeUrl?: string;
  shortBio: string;
  bio: string[];
}

export interface Branding {
  initials: string;
  logoText: string;
  siteUrl: string;
}

export interface Hero {
  eyebrow: string;
  headingLead: string;
  headingAccent: string;
  description: string;
  primaryCta: Link;
  secondaryCta: Link;
  focus: string[];
}

export interface About {
  heading: string;
  expertise: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  kind: string;
  year: string;
  summary: string;
  problem?: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
}

export interface TimelineItem {
  organization: string;
  role: string;
  start: string;
  end: string;
  description: string;
  achievements?: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface SectionCopy {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  enabled: boolean;
}

export interface PortfolioData {
  personal: Personal;
  branding: Branding;
  socialLinks: SocialLink[];
  navigation: Link[];
  navCta: Link;
  hero: Hero;
  about: About;
  skills: SkillGroup[];
  projects: Project[];
  experience: TimelineItem[];
  education: TimelineItem[];
  certifications: string[];
  services: Service[];
  testimonials: Testimonial[];
  sections: Record<
    "about" | "skills" | "projects" | "experience" | "services" | "testimonials" | "contact",
    SectionCopy
  >;
  contact: { heading: string; description: string; formNote: string };
  footer: { tagline: string; note: string };
  seo: { title: string; description: string; keywords: string[]; canonicalUrl: string; ogImage?: string };
  notFound: { heading: string; message: string; cta: string };
  settings: {
    defaultTheme: "light" | "dark";
    enableDarkMode: boolean;
    enableCustomCursor: boolean;
    enableShader: boolean;
    enableScrollAnimations: boolean;
    enableScrollProgress: boolean;
  };
}
