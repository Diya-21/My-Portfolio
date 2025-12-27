export default function Projects() {
    const projects = [
      {
        title: "Project One",
        description:
          "Short description of what problem this project solves and what you built.",
        tech: ["Python", "Machine Learning", "Pandas"],
        link: "#",
        status: "Completed",
      },
      {
        title: "Project Two",
        description:
          "Another project description explaining your approach and outcome.",
        tech: ["Deep Learning", "TensorFlow", "Data Analysis"],
        link: "#",
        status: "In Progress",
      },
    ];
  
    return (
      <section
        id="projects"
        className="min-h-screen bg-black text-white px-6 py-20"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Projects
          </h2>
  
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-6 hover:border-gray-400 transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
  
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
  
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 border border-gray-600 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
  
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {project.status}
                  </span>
  
                  <a
                    href={project.link}
                    className="text-sm underline hover:text-gray-300"
                    target="_blank"
                  >
                    View →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  