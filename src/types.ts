export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    image: string;
  };
  about: {
    mission: string;
    history: string;
    team: {
      name: string;
      role: string;
      bio: string;
      image: string;
    }[];
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    mapUrl: string;
  };
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    youtube: string;
  };
  theme: {
    primaryColor: string;
    fontFamily: string;
  };
}
