"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Users } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-24 bg-white/[0.02]" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="relative pl-6 border-l border-white/10 space-y-8">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[1.65rem] top-1.5 ring-4 ring-[#0a0a0a]" />
                <h4 className="text-lg font-semibold text-white">Virtual Intern</h4>
                <p className="text-cyan-400 text-sm font-medium mb-2">CodeAlpha</p>
                <p className="text-zinc-400 text-sm">Completed practical virtual internship tasks, including full-stack application development and cloud deployments.</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors">
                <h4 className="text-white font-medium mb-1">Basics of Artificial Intelligence & Machine Learning Algorithms</h4>
                <p className="text-emerald-400 text-sm">UniAthena</p>
              </div>
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Leadership</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-white font-medium mb-1">Core Team Member & Lead Photographer</h4>
                <p className="text-purple-400 text-sm">Microsoft Learning Student Club (MLSC)</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-white font-medium mb-1">Media Team Member</h4>
                <p className="text-purple-400 text-sm">TEDxLyari</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
