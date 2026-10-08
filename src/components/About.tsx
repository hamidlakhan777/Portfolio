"use client";

import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, Rocket } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-zinc-300 text-lg leading-relaxed"
          >
            <p>
              I am an Artificial Intelligence Graduate from Sindh Madarsatul Islam University, Karachi (Class of April 2026), deeply passionate about solving complex real-world problems through data and machine learning.
            </p>
            <p>
              My core engineering philosophy centers on <strong className="text-white font-medium">bridging the gap between cutting-edge machine learning research and robust full-stack deployment</strong>. I believe that an ML model is only as good as the system it empowers, which is why I focus on end-to-end solutions—from data pipeline creation and model training to building scalable APIs and intuitive user interfaces.
            </p>
            <p>
              Whether it's fine-tuning LLMs, architecting hybrid vision models, or crafting sleek web applications, I bring a unique blend of analytical rigor and engineering pragmatism.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <p className="text-zinc-400">BS in Artificial Intelligence</p>
                <p className="text-sm text-zinc-500">Sindh Madarsatul Islam University, Karachi (2022 - 2026)</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <BrainCircuit size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Specialization</h3>
                <p className="text-zinc-400">Computer Vision, NLP & Generative AI</p>
                <p className="text-sm text-zinc-500">Deep Learning, LLMs, Object Tracking, Transformers</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Deployment</h3>
                <p className="text-zinc-400">Full-Stack AI Integration</p>
                <p className="text-sm text-zinc-500">Next.js, Flask, Streamlit, Vercel, REST APIs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
