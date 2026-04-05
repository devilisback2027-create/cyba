import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../ContentContext';
import { Smartphone, Cloud, Palette, ShieldCheck, Code, Zap, BarChart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Smartphone,
  Cloud,
  Palette,
  ShieldCheck
};

export const Services = () => {
  const { services } = useContent();

  const additionalFeatures = [
    { title: "Rapid Prototyping", icon: Zap, desc: "Get your MVP to market faster with our agile development process." },
    { title: "Scalable Architecture", icon: Code, desc: "Built to handle millions of users without breaking a sweat." },
    { title: "Data Analytics", icon: BarChart, desc: "Integrated tracking to understand user behavior and growth." },
    { title: "Global Deployment", icon: Globe, desc: "Multi-region hosting and localization for a worldwide audience." }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions tailored to your business needs. From concept to launch, we've got you covered.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Smartphone;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                    <p className="text-xl text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-foreground/60 leading-relaxed">
                      {service.details}
                    </p>
                    <ul className="space-y-3">
                      {["Certified Experts", "Custom Integration", "24/7 Support"].map((item) => (
                        <li key={item} className="flex items-center space-x-2 text-sm font-semibold">
                          <Zap size={16} className="text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-block px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all"
                    >
                      Inquire Now
                    </Link>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-100">
                      <img
                        src={`https://images.unsplash.com/photo-${index === 0 ? '1551650975-87deedd944c3' : index === 1 ? '1460925895917-afdab827c52f' : index === 2 ? '1581291518633-83b4ebd1d83e' : '1550751827-4bd374c3f58b'}?auto=format&fit=crop&q=80&w=800`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">The Cyba Advantage</h2>
            <p className="text-foreground/60 leading-relaxed">Why leading companies trust us with their digital transformation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={feature.title} className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800/50">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
