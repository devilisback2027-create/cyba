import { SiteConfig, BlogPost, Service, Project, Testimonial } from './types';

export const INITIAL_SITE_CONFIG: SiteConfig = {
  name: "Cyba",
  description: "Next-Gen App Development Studio",
  hero: {
    title: "We Build the Future of Mobile Experiences",
    subtitle: "Cyba is a premier app development studio specializing in high-performance Google app solutions and custom mobile ecosystems.",
    cta: "Start Your Project",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974"
  },
  about: {
    mission: "Our mission is to empower businesses through innovative technology and exceptional design, creating apps that people love to use.",
    history: "Founded in 2020, Cyba has grown from a small team of three developers to a global studio serving Fortune 500 companies.",
    team: [
      {
        name: "Alex Rivers",
        role: "Founder & CEO",
        bio: "Visionary leader with 15+ years in mobile tech.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Sarah Chen",
        role: "Head of Design",
        bio: "Award-winning UX designer focused on human-centric apps.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Marcus Thorne",
        role: "CTO",
        bio: "Expert in scalable cloud architectures and Google Cloud Platform.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
      }
    ]
  },
  contact: {
    email: "hello@cyba.studio",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Plaza, Silicon Valley, CA 94025",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290622367!2d-122.08374688469212!3d37.42199987982517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb92210338dfd%3A0x310a299459f53f64!2sGoogleplex!5e0!3m2!1sen!2sus!4v1647451234567!5m2!1sen!2sus"
  },
  social: {
    facebook: "https://facebook.com/cyba",
    twitter: "https://twitter.com/cyba",
    linkedin: "https://linkedin.com/company/cyba",
    instagram: "https://instagram.com/cyba",
    youtube: "https://youtube.com/cyba"
  },
  theme: {
    primaryColor: "#0ea5e9",
    fontFamily: "Inter"
  }
};

export const INITIAL_SERVICES: Service[] = [
  {
    id: "1",
    title: "Custom App Creation",
    description: "End-to-end mobile app development for iOS and Android.",
    icon: "Smartphone",
    details: "We handle everything from initial wireframing to final deployment on the App Store and Play Store."
  },
  {
    id: "2",
    title: "Google App Solutions",
    description: "Specialized development using Flutter, Firebase, and GCP.",
    icon: "Cloud",
    details: "Leverage the power of Google's ecosystem with our certified experts in Flutter and Google Cloud."
  },
  {
    id: "3",
    title: "UI/UX Consulting",
    description: "Expert design audits and user experience optimization.",
    icon: "Palette",
    details: "Improve your app's retention and conversion rates with our data-driven design approach."
  },
  {
    id: "4",
    title: "Enterprise Solutions",
    description: "Scalable software for large-scale business operations.",
    icon: "ShieldCheck",
    details: "Secure, robust, and integrated solutions designed to streamline your enterprise workflows."
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "1",
    title: "EcoTrack",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1542601906-938b7d7914b7?auto=format&fit=crop&q=80&w=800",
    description: "A comprehensive carbon footprint tracking app for conscious consumers.",
    location: "Global"
  },
  {
    id: "2",
    title: "FinFlow",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    description: "Real-time expense management and investment tracking for small businesses.",
    location: "London, UK"
  },
  {
    id: "3",
    title: "HealthSync",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    description: "Telemedicine platform connecting patients with specialists worldwide.",
    location: "New York, USA"
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Flutter in 2024",
    excerpt: "Why Flutter remains the top choice for cross-platform development.",
    content: "Flutter has revolutionized how we think about cross-platform development. With the latest updates, performance is closer to native than ever before...",
    author: "Marcus Thorne",
    date: "2024-03-15",
    category: "Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "Designing for Accessibility",
    excerpt: "How to make your mobile apps inclusive for everyone.",
    content: "Accessibility is not an afterthought; it's a fundamental requirement. In this post, we explore the key principles of accessible mobile design...",
    author: "Sarah Chen",
    date: "2024-03-10",
    category: "Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=800"
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "John Smith",
    role: "CEO, EcoLife",
    content: "Cyba transformed our vision into a reality. Their expertise in Google Cloud was instrumental in our success.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "2",
    name: "Emily Davis",
    role: "Product Manager, FinTech Inc",
    content: "The most professional studio we've worked with. Their attention to detail in UI/UX is unmatched.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  }
];
