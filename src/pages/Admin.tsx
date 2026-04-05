import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useContent } from '../ContentContext';
import { Settings, FileText, Layout, Palette, Save, Trash2, Plus, Edit3, Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

export const Admin = () => {
  const { siteConfig, updateSiteConfig, blogPosts, addBlogPost, deleteBlogPost, services, updateService } = useContent();
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General Settings', icon: Settings },
    { id: 'hero', label: 'Hero Section', icon: Layout },
    { id: 'blog', label: 'Blog Posts', icon: FileText },
    { id: 'services', label: 'Services', icon: Palette },
  ];

  const handleConfigChange = (section: string, field: string, value: string) => {
    if (section === 'root') {
      updateSiteConfig({ [field]: value });
    } else {
      updateSiteConfig({
        [section]: {
          ...(siteConfig as any)[section],
          [field]: value
        }
      });
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                <h2 className="font-bold text-lg">Admin Dashboard</h2>
                <p className="text-xs text-foreground/40">Manage your studio content</p>
              </div>
              <nav className="p-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all mb-1",
                      activeTab === tab.id
                        ? "bg-primary text-white shadow-md"
                        : "text-foreground/60 hover:bg-slate-50 dark:hover:bg-slate-800"
                    )}
                  >
                    <tab.icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
              {activeTab === 'general' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold">General Settings</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground/60">Studio Name</label>
                      <input
                        type="text"
                        value={siteConfig.name}
                        onChange={(e) => handleConfigChange('root', 'name', e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground/60">Description</label>
                      <input
                        type="text"
                        value={siteConfig.description}
                        onChange={(e) => handleConfigChange('root', 'description', e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-4">
                    <h4 className="font-bold text-lg">Contact Info</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60">Email</label>
                        <input
                          type="email"
                          value={siteConfig.contact.email}
                          onChange={(e) => handleConfigChange('contact', 'email', e.target.value)}
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60">Phone</label>
                        <input
                          type="text"
                          value={siteConfig.contact.phone}
                          onChange={(e) => handleConfigChange('contact', 'phone', e.target.value)}
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'hero' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold">Hero Section</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground/60">Hero Title</label>
                      <input
                        type="text"
                        value={siteConfig.hero.title}
                        onChange={(e) => handleConfigChange('hero', 'title', e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground/60">Hero Subtitle</label>
                      <textarea
                        rows={3}
                        value={siteConfig.hero.subtitle}
                        onChange={(e) => handleConfigChange('hero', 'subtitle', e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:border-primary"
                      ></textarea>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60">CTA Button Text</label>
                        <input
                          type="text"
                          value={siteConfig.hero.cta}
                          onChange={(e) => handleConfigChange('hero', 'cta', e.target.value)}
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60">Hero Image URL</label>
                        <input
                          type="text"
                          value={siteConfig.hero.image}
                          onChange={(e) => handleConfigChange('hero', 'image', e.target.value)}
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'blog' && (
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Manage Blog Posts</h3>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold">
                      <Plus size={18} />
                      <span>New Post</span>
                    </button>
                  </div>
                  <div className="space-y-4">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center space-x-4">
                          <img src={post.image} className="w-12 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                          <div>
                            <h4 className="font-bold text-sm">{post.title}</h4>
                            <p className="text-xs text-foreground/40">{post.date} • {post.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-foreground/40 hover:text-primary transition-colors"><Edit3 size={18} /></button>
                          <button
                            onClick={() => deleteBlogPost(post.id)}
                            className="p-2 text-foreground/40 hover:text-accent transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold">Manage Services</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service) => (
                      <div key={service.id} className="space-y-4 p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Title</label>
                          <input
                            type="text"
                            value={service.title}
                            onChange={(e) => updateService(service.id, { title: e.target.value })}
                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Description</label>
                          <textarea
                            rows={2}
                            value={service.description}
                            onChange={(e) => updateService(service.id, { description: e.target.value })}
                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-primary"
                          ></textarea>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button className="flex items-center space-x-2 px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-primary-dark transition-all">
                  <Save size={20} />
                  <span>Save All Changes</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
