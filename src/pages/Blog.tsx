import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useContent } from '../ContentContext';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const { blogPosts } = useContent();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Cyba Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl opacity-70"
            >
              Latest news, tutorials, and insights from our app development experts.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search & Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3 space-y-12">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col md:flex-row gap-8 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700"
                >
                  <div className="md:w-1/3 h-48 md:h-auto overflow-hidden rounded-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="flex items-center space-x-4 text-xs font-bold text-primary uppercase tracking-widest">
                      <span className="px-3 py-1 bg-primary/10 rounded-full">{post.category}</span>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-foreground/60 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-2 text-sm font-medium">
                        <User size={16} className="text-foreground/40" />
                        <span>{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="text-primary font-bold flex items-center hover:underline">
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-xl text-foreground/40 font-medium">No posts found matching your search.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-8">
              {/* Search */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold mb-6">Search Posts</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:border-primary transition-colors"
                  />
                  <Search size={20} className="absolute right-3 top-3 text-foreground/30" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold mb-6">Categories</h3>
                <div className="space-y-3">
                  {['Development', 'Design', 'Strategy', 'Google Cloud'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSearchTerm(cat)}
                      className="flex items-center justify-between w-full text-sm font-medium text-foreground/60 hover:text-primary transition-colors group"
                    >
                      <span className="flex items-center">
                        <Tag size={16} className="mr-2 opacity-40 group-hover:opacity-100" />
                        {cat}
                      </span>
                      <span className="bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded text-xs">12</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-primary rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="text-sm opacity-80 mb-6">Get the latest insights delivered straight to your inbox.</p>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-sm mb-4 focus:outline-none focus:bg-white/20 transition-all placeholder:text-white/50"
                />
                <button className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-slate-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
