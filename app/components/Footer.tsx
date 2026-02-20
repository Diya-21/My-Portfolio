"use client";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-slate-200">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                        DS
                    </div>
                    <div>
                        <p className="text-slate-900 font-semibold text-sm">Divyajyoti Singh</p>
                        <p className="text-slate-400 text-xs">AI & Data Science Engineer</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {[
                        { href: "https://github.com/Diya-21", icon: FiGithub },
                        { href: "https://www.linkedin.com/in/divya-singh-069b6b259/", icon: FiLinkedin },
                        { href: "mailto:Divyasingh2164@gmail.com", icon: FiMail },
                    ].map((s, i) => (
                        <a
                            key={i}
                            href={s.href}
                            target="_blank"
                            className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-300 transition-all"
                        >
                            <s.icon size={16} />
                        </a>
                    ))}
                </div>

                <p className="text-slate-400 text-xs flex items-center gap-1">
                    Made with <FiHeart className="text-red-400" size={12} /> © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
