"use client";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const experienceData = [
    {
        role: "AI and Automation Backend Development Intern",
        company: "Zentrixel",
        location: "Remote",
        period: "June 2025 – Sep 2025",
        description: "Architecting backend platforms leveraging FastAPI, Retrieval-Augmented Generation (RAG), and Large Language Models (LLMs). Contributed to designing scalable APIs and implementing advanced AI workflows to optimize platform performance and efficiency.",
        tech: ["FastAPI", "RAG", "LLMs", "AI Automation", "API Design"],
    },
    {
        role: "Web Developer Intern",
        company: "Techasia Mechatronics",
        location: "Mumbai, India",
        period: "April 2024 – June 2024",
        description: "Collaborated with a cross-functional team to redesign the company's digital presence using the MERN stack. Focused on delivering a high-performance, responsive UI and improving overall user engagement metrics.",
        tech: ["MERN Stack", "React.js", "Node.js", "UI/UX Optimization"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 section-alt">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="section-label">Professional Experience</span>
                    <h2 className="section-title">
                        Internship <span className="gradient-text">History</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experienceData.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="card p-8 group hover:border-blue-500/50"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                            <FiBriefcase size={18} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 leading-tight">
                                                {exp.role}
                                            </h3>
                                            <p className="text-blue-600 font-semibold">{exp.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-4 mb-6 text-sm text-slate-600 font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <FiCalendar className="text-blue-500" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <FiMapPin className="text-blue-500" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                            <span key={t} className="tag text-[10px]">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
