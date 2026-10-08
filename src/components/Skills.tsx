"use client";

import { motion } from "framer-motion";
import { Code2, Network, Server, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Tools",
    icon: <Code2 size={24} />,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    skills: ["Python", "SQL", "Git", "GitHub", "Excel", "Jupyter", "Colab", "VS Code"],
  },
  {
    title: "ML, AI & Deep Learning",
    icon: <Network size={24} />,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face", "LangChain", "OpenAI API", "YOLO", "LIME", "Grad-CAM"],
  },
  {
    title: "Data & Deployment",
    icon: <Server size={24} />,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    skills: ["Pandas", "NumPy", "Matplotlib", "Streamlit", "Flask", "Next.js", "React", "Vercel", "REST APIs"],
  },
  {
    title: "Databases & BI",
    icon: <Database size={24} />,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    skills: ["MySQL", "Power BI", "Tableau"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-white/[0.02]" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${category.bgColor} ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
