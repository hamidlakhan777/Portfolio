"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[128px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for AI / ML & Software Engineering Roles
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Hamid Ahmed Lakhan</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-zinc-300">
            AI / Machine Learning Engineer | Computer Vision & NLP Specialist
          </h2>

          <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed">
            AI/ML graduate with hands-on experience building and deploying end-to-end ML, generative AI, and computer vision applications. Focused on shipping working products, not just notebooks.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-zinc-50 text-zinc-950 font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-colors"
            >
              Explore Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Animated Floating Professional Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -12, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative mx-auto lg:ml-auto lg:mr-0 w-72 sm:w-80 md:w-[380px]"
        >
          {/* Glowing Cyberpunk Aura */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-emerald-500 rounded-3xl blur-3xl opacity-40 -z-10 animate-pulse" />
          
          {/* Glassmorphism Card Frame */}
          <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl">
            <div className="rounded-2xl overflow-hidden bg-zinc-900/80 aspect-[4/5] relative group">
              <img 
                src="/hamid-pic.jpg" 
                alt="Hamid Ahmed Lakhan" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg">
                  AI Engineer 🚀
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}