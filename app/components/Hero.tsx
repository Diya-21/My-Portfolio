"use client";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
            {/* Subtle bg glow */}
            <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-purple-100/40 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto w-full py-28">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Available for opportunities
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
                            Hi, I&apos;m{" "}
                            <span className="gradient-text">Divyajyoti Singh</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-slate-700 font-semibold mb-4">
                            AI &amp; Data Science Engineer
                        </p>

                        <p className="text-base text-slate-600 max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0 font-medium">
                            Software Engineer specialized in <span className="text-slate-900 font-bold">Agentic AI Frameworks</span> and
                            <span className="text-slate-900 font-bold">Generative AI systems</span>.
                            Currently architecting multi-agent research tools and RAG-integrated backend platforms to bridge the gap between AI research and production.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                            <a href="#projects" className="btn-primary">View My Work</a>
                            <a href="/resume.pdf" target="_blank" className="btn-secondary">
                                <span className="flex items-center gap-2">Download CV</span>
                            </a>
                        </div>

                        <div className="flex justify-center lg:justify-start gap-3">
                            {[
                                { icon: FiGithub, href: "https://github.com/Diya-21", label: "GitHub" },
                                { icon: FiLinkedin, href: "https://www.linkedin.com/in/divya-singh-069b6b259/", label: "LinkedIn" },
                                { icon: FiMail, href: "mailto:Divyasingh2164@gmail.com", label: "Email" },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-500 hover:border-blue-300 transition-all"
                                    aria-label={s.label}
                                >
                                    <s.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-shrink-0"
                    >
                        <div className="photo-wrap shadow-2xl shadow-blue-200/50">
                            <img
                                src="/photo.jpg"
                                alt="Divyajyoti Singh"
                                className="w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-[20px] object-cover border-3 border-white bg-slate-50"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.a
                href="#about"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-blue-500 transition-colors flex flex-col items-center gap-1"
            >
                <span className="text-xs font-medium">Scroll</span>
                <FiArrowDown size={16} />
            </motion.a>
        </section>
    );
}
