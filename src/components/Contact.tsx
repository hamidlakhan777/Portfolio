"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mx-auto" />
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            I'm currently open to new opportunities in AI, ML, and Full-Stack development. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <a
                href="mailto:hamidlakhan777@gmail.com"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="p-4 bg-white/5 rounded-full group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 mb-1">Email</p>
                  <p className="text-lg">hamidlakhan777@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+923282186152"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="p-4 bg-white/5 rounded-full group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 mb-1">Phone</p>
                  <p className="text-lg">+92 328 2186152</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/hamid-lakhan-a06074381/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="p-4 bg-white/5 rounded-full group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                  <LinkedinIcon size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 mb-1">LinkedIn</p>
                  <p className="text-lg">Hamid Ahmed Lakhan</p>
                </div>
              </a>

              <a
                href="https://github.com/hamidlakhan777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="p-4 bg-white/5 rounded-full group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                  <GithubIcon size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 mb-1">GitHub</p>
                  <p className="text-lg">hamidlakhan777</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
                  placeholder="Hello Hamid..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold flex items-center justify-center gap-2 hover:from-cyan-500 hover:to-emerald-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
