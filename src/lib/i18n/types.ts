export type Locale = "zh" | "en";

export interface Dictionary {
  nav: {
    about: string;
    skills: string;
    projects: string;
    honors: string;
    contact: string;
    downloadResume: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    viewProjects: string;
    downloadResume: string;
    scrollHint: string;
    metrics: {
      value: number;
      suffix: string;
      label: string;
    }[];
  };
  about: {
    title: string;
    intro: string;
  };
  education: {
    period: string;
    school: string;
    degree: string;
    lab?: string;
  }[];
  skills: {
    title: string;
    categories: {
      llm: { name: string; items: string[] };
      backend: { name: string; items: string[] };
      storage: { name: string; items: string[] };
      tools: { name: string; items: string[] };
    };
  };
  projects: {
    title: string;
    items: {
      name: string;
      period: string;
      intro: string;
      techStack: string[];
      highlights: {
        title: string;
        description: string;
      }[];
    }[];
  };
  honors: {
    title: string;
    items: {
      icon: string;
      name: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    github: string;
  };
  footer: {
    builtWith: string;
    lastUpdated: string;
    backToTop: string;
    rights: string;
  };
}
