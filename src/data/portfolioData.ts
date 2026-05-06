import { Project, Service, TechItem } from './types';

export const portfolioData = {
  hero: {
    headline: "Building Digital Experiences That Matter.",
    subheadline: "I'm Emmytech, a Senior Frontend Engineer & UI/UX Designer specializing in building exceptional, high-performance web applications and SaaS products.",
  },
  about: {
    story: "With over half a decade of experience, I blend design thinking with robust engineering. I don't just write code; I solve business problems and create scalable digital solutions that convert visitors into loyal clients. Let's build the future of the web together.",
    skillsHighlight: ["React/Next.js", "TypeScript", "UI/UX Design", "Performance Optimization"]
  },
  services: [
    {
      id: "s1",
      title: "Web Development",
      description: "High-performance, accessible, and SEO-friendly websites built with modern frameworks like React and Next.js.",
      icon: "FiCode"
    },
    {
      id: "s2",
      title: "Backend Systems",
      description: "Scalable APIs and robust server-side architecture using Node.js, Express, and modern databases.",
      icon: "FiServer"
    },
    {
      id: "s3",
      title: "UI/UX Design",
      description: "Pixel-perfect, user-centric designs that prioritize conversion and deliver a premium experience.",
      icon: "FiLayout"
    },
    {
      id: "s4",
      title: "Custom Tech Solutions",
      description: "Tailored software solutions, integrations, and automation to streamline your business operations.",
      icon: "FiCpu"
    }
  ] as Service[],
  projects: [
    {
      id: "p1",
      title: "E-Commerce SaaS Dashboard",
      description: "A comprehensive analytics and management dashboard for modern e-commerce businesses.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "p2",
      title: "Fintech Mobile App Landing",
      description: "High-conversion landing page for a revolutionary fintech application.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
      techStack: ["Next.js", "Tailwind", "GSAP"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "p3",
      title: "AI Writing Assistant",
      description: "Web application integrating OpenAI's API for generating high-quality marketing copy.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      techStack: ["React", "Node.js", "OpenAI", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ] as Project[],
  techStack: [
    { name: "React", category: "Frontend", iconName: "SiReact" },
    { name: "TypeScript", category: "Frontend", iconName: "SiTypescript" },
    { name: "Tailwind CSS", category: "Frontend", iconName: "SiTailwindcss" },
    { name: "Next.js", category: "Frontend", iconName: "SiNextdotjs" },
    { name: "Node.js", category: "Backend", iconName: "SiNodedotjs" },
    { name: "Express", category: "Backend", iconName: "SiExpress" },
    { name: "PostgreSQL", category: "Backend", iconName: "SiPostgresql" },
    { name: "MongoDB", category: "Backend", iconName: "SiMongodb" },
    { name: "Git", category: "Tools", iconName: "SiGit" },
    { name: "Figma", category: "Tools", iconName: "SiFigma" },
    { name: "Docker", category: "Tools", iconName: "SiDocker" },
    { name: "Vite", category: "Tools", iconName: "SiVite" },
  ] as TechItem[],
  contact: {
    email: "emmytechdigitalsolutions@gmail.com",
    whatsapp: "+2347067797360",
    socials: {
      github: "https://github.com/Emmytechltd",
      linkedin: "https://www.linkedin.com/in/onu-emmanuel-73a83613b",
      twitter: "https://x.com/emmxdon"
    }
  }
};
