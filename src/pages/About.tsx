import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../ContentContext';
import { CheckCircle2, Users, Rocket, Target } from 'lucide-react';

export const About = () => {
  const { siteConfig } = useContent();

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            About Cyba Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/60 max-w-3xl mx-auto"
          >
            We are a team of passionate developers, designers, and strategists dedicated to building world-class mobile experiences.
          </motion.p>
        </div>
      </section>

      {/* Mission & History */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 text-primary mb-4">
                  <Target size={24} />
                  <span className="font-bold uppercase tracking-wider text-sm">Our Mission</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Driving Innovation Through Code</h2>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {siteConfig.about.mission}
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-3 text-secondary mb-4">
                  <Rocket size={24} />
                  <span className="font-bold uppercase tracking-wider text-sm">Our History</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">A Journey of Growth</h2>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {siteConfig.about.history}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Team Collaboration"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">100+</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-wide">Apps Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Meet the Visionaries</h2>
            <p className="text-foreground/60 leading-relaxed">The talented people behind the magic at Cyba.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {siteConfig.about.team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-md">
                    <Users size={20} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-foreground/60 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl p-12 text-white shadow-2xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Quality First", desc: "We never compromise on the quality of our code or design." },
                { title: "User Centric", desc: "Every decision is made with the end-user in mind." },
                { title: "Transparency", desc: "Open communication with our clients at every stage." },
                { title: "Innovation", desc: "Constantly exploring new technologies to stay ahead." }
              ].map((value) => (
                <div key={value.title} className="space-y-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-xl font-bold">{value.title}</h4>
                  <p className="text-sm opacity-70 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
