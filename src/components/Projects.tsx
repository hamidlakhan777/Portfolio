"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    title: "EcoVision AI",
    subtitle: "Final Year Project",
    description: "Hybrid CNN-ViT (MobileNetV2 + Multi-Head Attention) architecture achieving 94.0% accuracy on UC Merced and 82.55% on EuroSAT; deployed as a Flask + Leaflet.js dashboard with LIME/Grad-CAM explainability.",
    tags: ["Python", "TensorFlow/Keras", "ViT", "Flask", "Leaflet.js", "Grad-CAM"],
    links: {
      github: "https://github.com/azizullahnaik",
    },
    accent: "from-green-500 to-emerald-500",
  },
  {
    title: "ResuMatch AI",
    subtitle: "Resume-to-Job Matching Platform",
    description: "Resume-to-Job Matching Platform built with Python, Streamlit, OpenAI API, LangChain, spaCy, and Scikit-learn, achieving 90%+ semantic matching accuracy.",
    tags: ["Python", "Streamlit", "OpenAI API", "LangChain", "spaCy", "Scikit-learn"],
    links: {
      live: "https://resu-match-sandy.vercel.app/",
      github: "#", // Add GitHub link when available
    },
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "MeetBrief AI",
    subtitle: "Automated Meeting Summarization",
    description: "Automated Meeting Summarization Platform built with Next.js/React, Whisper API, LLMs (OpenAI/Claude), and Tailwind CSS (shipped as web app + iOS app).",
    tags: ["Next.js", "Whisper API", "LLMs", "Tailwind CSS", "React"],
    links: {
      live: "https://meet-brief-ai-psi.vercel.app/",
      github: "#",
    },
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "Nexa Trace",
    subtitle: "Real-Time Object Tracking",
    description: "Real-time object tracking system using computer vision (YOLO + OpenCV live tracking with bounding-box visualization).",
    tags: ["YOLO", "OpenCV", "Python", "Computer Vision"],
    links: {
      live: "https://codealphatask04-umu7hh4jxmr9hxw5seawmg.streamlit.app/",
      github: "#",
    },
    accent: "from-orange-500 to-red-500",
  },
  {
    title: "SonifyAI",
    subtitle: "Neural Music Generator",
    description: "Cyberpunk-themed neural music generator app built with deep learning and Streamlit (text-to-audio generative model using PyTorch/MusicGen).",
    tags: ["PyTorch", "MusicGen", "Streamlit", "Deep Learning", "Python"],
    links: {
      live: "https://sonifyai.streamlit.app/",
      github: "#",
    },
    accent: "from-cyan-500 to-purple-500",
  },
  {
    title: "Lingo Agent",
    subtitle: "AI-Powered Translation",
    description: "Futuristic AI-powered language translation tool providing real-time, context-aware translation using Hugging Face Transformers.",
    tags: ["Hugging Face", "Transformers", "NLP", "Python", "AI"],
    links: {
      live: "https://lnkd.in/d27m72cQ",
      github: "#",
    },
    accent: "from-yellow-500 to-orange-500",
  },
];

export default function Projects() {
  return (
    <section className="py-24 relative" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Project Visual Banner */}
              <div className="h-48 relative overflow-hidden bg-zinc-900">
                <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${project.accent}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                   <h3 className="text-2xl font-bold text-white/50 tracking-widest uppercase">{project.title}</h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-sm font-medium text-cyan-500">{project.subtitle}</p>
                </div>
                
                <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <GithubIcon size={18} />
                      Code
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 text-sm font-medium ml-auto"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
