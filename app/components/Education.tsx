"use client";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";
import { FiAward } from "react-icons/fi";

const education = [
  {
    degree: "Bachelor of Engineering in Artificial Intelligence and Data Science",
    school: "VIVEKANAND EDUCATION SOCIETY INSTITUTE OF TECHNOLOGY",
    period: "Nov 2022 – May 2026",
    description:
      "Deeply involved in core engineering foundations and advanced AI specializations.",
    score: { label: "CGPA", value: "7.33" },
    courses: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Science",
      "Database Systems",
      "Operating Systems",
      "Cloud Computing",
      "SQL",
    ],
  },
  {
    degree: "Senior Secondary (12th Standard)",
    school: "Kamladevi College Science, Commerce and Arts",
    period: "2020 – 2022",
    description:
      "Completed higher secondary with 64%.",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    degree: "Secondary Education (10th Standard)",
    school: "St. Thomas High School",
    period: "2018 – 2020",
    description:
      "Completed High school education with 88.4%",
    courses: ["Science", "Mathematics", "Social Studies", "Languages", "Computer Science"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Background</span>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-8 group hover:border-blue-500/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                    <HiAcademicCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mt-1 uppercase tracking-tight">{edu.school}</p>
                  </div>
                </div>
                <span className="text-xs text-slate-600 font-bold bg-slate-100 px-3 py-1 rounded-md whitespace-nowrap self-start">
                  {edu.period}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-5 font-medium">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {edu.courses.map((c) => (
                  <span key={c} className="tag text-[10px]">{c}</span>
                ))}
              </div>

              {edu.score && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <FiAward className="text-blue-500" size={18} />
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{edu.score.label}</p>
                    <p className="text-xl font-extrabold text-slate-900">{edu.score.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}