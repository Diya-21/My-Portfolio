"use client";
import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiTensorflow, SiScikitlearn,
  SiPandas, SiNumpy, SiReact, SiGit, SiJupyter, SiDjango, SiAmazonwebservices
} from "react-icons/si";
import { HiCircleStack, HiCodeBracket, HiBriefcase } from "react-icons/hi2";

const categories = [
  {
    title: "Programming & Backend",
    icon: HiCodeBracket,
    skills: [
      { name: "Python", level: 92, icon: SiPython },
      { name: "SQL", level: 85 },
      { name: "Java", level: 80 },
      { name: "Django", level: 78, icon: SiDjango },
      { name: "C", level: 70 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: HiBriefcase,
    skills: [
      { name: "TensorFlow", level: 88, icon: SiTensorflow },
      { name: "Scikit-learn", level: 85, icon: SiScikitlearn },
      { name: "Machine Learning (OOPS)", level: 82 },
      { name: "Generative AI / LLMs", level: 80 },
    ],
  },
  {
    title: "Data Analysis",
    icon: HiCircleStack,
    skills: [
      { name: "Pandas", level: 90, icon: SiPandas },
      { name: "NumPy", level: 88, icon: SiNumpy },
      { name: "Matplotlib", level: 85 },
      { name: "Feature Engineering", level: 78 },
    ],
  },
  {
    title: "Tools & Infrastructure",
    icon: SiAmazonwebservices,
    skills: [
      { name: "AWS Cloud Foundations", level: 85, icon: SiAmazonwebservices },
      { name: "Jupyter / VS Code", level: 90, icon: SiJupyter },
      { name: "Git & GitHub", level: 85, icon: SiGit },
      { name: "Image Processing", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="card p-8 group hover:border-blue-500/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                  <cat.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
              </div>

              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && (
                          <skill.icon className="text-slate-400 group-hover:text-blue-500 transition-colors" size={14} />
                        )}
                        <span className="text-sm font-semibold text-slate-700">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-blue-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-track">
                      <motion.div
                        className="skill-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}