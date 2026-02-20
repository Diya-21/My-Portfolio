"use client";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const contactLinks = [
  {
    label: "Email",
    value: "Divyasingh2164@gmail.com",
    href: "mailto:Divyasingh2164@gmail.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    value: "github.com/Diya-21",
    href: "https://github.com/Diya-21",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: "Divyajyoti Singh",
    href: "https://www.linkedin.com/in/divya-singh-069b6b259/",
    icon: FiLinkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 section-alt">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4 text-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all">
                <link.icon size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{link.label}</h3>
              <p className="text-sm text-slate-600 break-words">{link.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to Work
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Interested in working together?
          </h3>
          <p className="text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
            I&apos;m looking for opportunities in AI, Machine Learning, and
            Data Science. Feel free to reach out!
          </p>
          <a
            href="mailto:Divyasingh2164@gmail.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiSend size={16} />
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  );
}