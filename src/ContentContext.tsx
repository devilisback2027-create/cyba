import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig, BlogPost, Service, Project, Testimonial } from './types';
import { INITIAL_SITE_CONFIG, INITIAL_BLOG_POSTS, INITIAL_SERVICES, INITIAL_PROJECTS, INITIAL_TESTIMONIALS } from './constants';

interface ContentContextType {
  siteConfig: SiteConfig;
  blogPosts: BlogPost[];
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
  updateSiteConfig: (config: Partial<SiteConfig>) => void;
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('cyba_site_config');
    return saved ? JSON.parse(saved) : INITIAL_SITE_CONFIG;
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('cyba_blog_posts');
    return saved ? JSON.parse(saved) : INITIAL_BLOG_POSTS;
  });

  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('cyba_services');
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('cyba_projects');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  const [testimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);

  useEffect(() => {
    localStorage.setItem('cyba_site_config', JSON.stringify(siteConfig));
  }, [siteConfig]);

  useEffect(() => {
    localStorage.setItem('cyba_blog_posts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('cyba_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('cyba_projects', JSON.stringify(projects));
  }, [projects]);

  const updateSiteConfig = (config: Partial<SiteConfig>) => {
    setSiteConfig(prev => ({ ...prev, ...config }));
  };

  const addBlogPost = (post: BlogPost) => {
    setBlogPosts(prev => [post, ...prev]);
  };

  const updateBlogPost = (id: string, post: Partial<BlogPost>) => {
    setBlogPosts(prev => prev.map(p => p.id === id ? { ...p, ...post } : p));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
  };

  const updateService = (id: string, service: Partial<Service>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...service } : s));
  };

  const updateProject = (id: string, project: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...project } : p));
  };

  return (
    <ContentContext.Provider value={{
      siteConfig,
      blogPosts,
      services,
      projects,
      testimonials,
      updateSiteConfig,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost,
      updateService,
      updateProject
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};
