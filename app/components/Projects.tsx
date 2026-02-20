"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  HiSparkles,
  HiShieldCheck,
  HiAcademicCap,
  HiMusicalNote,
} from "react-icons/hi2";

const projects = [
  {
    title: "Multimodal AI Teaching Assistant",
    description:
      "Architected an agentic AI framework leveraging multimodal inputs and modular multi-agent reasoning. Features include adaptive content delivery, task-specific agents for query resolution, and personalized learning assistance using LLMs.",
    tech: ["Agentic AI", "Next.js", "Python", "Multimodal LLMs"],
    icon: HiAcademicCap,
    github: "https://github.com/Diya-21/assistant",
  },
  {
    title: "ScholarAI — Research Agent",
    description:
      "Deployed a verification-aware multi-agent system with planning, retrieval, and synthesis stages. Engineered to minimize hallucinations and ensure answer reliability through iterative verification using the Gemini API.",
    tech: ["Multi-Agent AI", "Gemini API", "Verifiable AI", "Python"],
    icon: HiSparkles,
    github: "https://github.com/Diya-21/Scholarai-multi-agent-research",
  },
  {
    title: "FraudGuard — ML Detection",
    description:
      "Developed an end-to-end ML system to identify fraudulent credit card transactions in real-time. Implemented advanced handling for imbalanced datasets and flagging high-risk transactions to mitigate financial risk.",
    tech: ["Machine Learning", "Scikit-learn", "XAI", "Pandas"],
    icon: HiShieldCheck,
    github: "https://github.com/Diya-21/Fraudguard",
  },
  {
    title: "SoundScope — Music Analytics",
    description:
      "A full-stack music data platform built using the Spotify API. It processes raw listener data to visualize complex audio features like tempo, energy, and danceability, providing users with technical insights into their listening habits.",
    tech: ["Spotify API", "Next.js", "Data Visualization", "JavaScript"],
    icon: HiMusicalNote,
    github: "https://github.com/Diya-21/soundscope-music-analytics",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card p-6 flex flex-col group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
                  <p.icon size={22} />
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  className="text-slate-500 hover:text-blue-500 transition-colors"
                  aria-label="View on GitHub"
                >
                  <FiGithub size={18} />
                </a>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="status-done">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Completed
                </span>
                <a
                  href={p.github}
                  target="_blank"
                  className="text-xs text-slate-500 hover:text-blue-500 flex items-center gap-1 transition-colors font-medium"
                >
                  View Code <FiExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}