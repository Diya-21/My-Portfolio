export default function Skills() {
    const skills = [
      {
        category: "Programming",
        items: ["Python", "JavaScript", "SQL"],
      },
      {
        category: "Machine Learning & AI",
        items: [
          "Machine Learning",
          "Deep Learning",
          "Scikit-learn",
          "TensorFlow",
          "Generative AI"
        ],
      },
      {
        category: "Data Science",
        items: [
          "Pandas",
          "NumPy",
          "Data Analysis",
          "Data Visualization",
        ],
      },
      {
        category: "Tools & Technologies",
        items: [
          "Git & GitHub",
          "Jupyter Notebook",
          "VS Code",
          "Next.js",
        ],
      },
    ];
  
    return (
      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Skills
          </h2>
  
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {skill.category}
                </h3>
  
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 border border-gray-600 rounded-full text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  