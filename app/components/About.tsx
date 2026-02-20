"use client";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiCpu, FiBookOpen } from "react-icons/fi";

const stats = [
    { label: "Projects", value: "4+", icon: FiCode },
    { label: "Skills", value: "15+", icon: FiDatabase },
    { label: "AI Models", value: "10+", icon: FiCpu },
    { label: "CGPA", value: "7.33", icon: FiBookOpen },
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6 section-alt">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">
                        Who I <span className="gradient-text">Am</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 space-y-5"
                    >
                        <p className="text-lg text-slate-700 leading-relaxed font-medium">
                            I am <span className="text-slate-900 font-bold">Divyajyoti Singh</span>,
                            a final-year AI & Data Science student at VESIT with a passion for building software that actually thinks.
                        </p>
                        <p className="text-base text-slate-600 leading-relaxed">
                            On the technical side, I specialize in <span className="text-blue-600 font-semibold">Multi-Agent AI Systems</span>.
                            Instead of just using a single AI model, I build "teams" of AI agents that work together—one to plan, one to research, and one to verify.
                            This makes AI tools much more reliable for complex tasks like academic research or automated coding.
                        </p>
                        <p className="text-base text-slate-600 leading-relaxed">
                            My background also includes strong Backend Engineering. I enjoy building the "brains" of applications using FastAPI and SQL,
                            focusing on how data flows from a database to an AI model and finally to the user. I have hands-on experience in the MERN stack,
                            AWS Cloud, and Explainable ML, which helps me build projects that are not only smart but also fast and easy to understand.
                        </p>
                        <p className="text-base text-slate-600 leading-relaxed">
                            Whether I&apos;m developing a real-time fraud detection system or a multimodal teaching assistant,
                            my goal is always the same: to turn complex technical research into a simple, working product that solves a real problem.
                        </p>

                        <div className="grid grid-cols-2 gap-3 pt-4">
                            {[
                                { label: "Location", value: "India 🇮🇳" },
                                { label: "Degree", value: "B.Tech AI & DS" },
                                { label: "Focus", value: "ML & Generative AI" },
                                { label: "Status", value: "Open to Work", highlight: true },
                            ].map((item) => (
                                <div key={item.label} className="card p-4">
                                    <p className="text-xs text-slate-500 font-medium mb-1">{item.label}</p>
                                    <p className={`text-sm font-semibold ${item.highlight ? "text-emerald-600" : "text-slate-800"}`}>
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 grid grid-cols-2 gap-4"
                    >
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="card p-6 text-center"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-3">
                                    <s.icon className="text-blue-500" size={20} />
                                </div>
                                <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                                <p className="text-xs text-slate-500 font-medium mt-1">{s.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
