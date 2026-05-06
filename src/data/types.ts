export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools';
  iconName: string; // Used to dynamically map to react-icons
}
