import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        {/* Hero Section */}
        <section className="text-center space-y-4 px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I’m Divyajyoti 👋
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300">
            AI & Data Science Engineer | Programmer
          </h2>

          <p className="max-w-xl mx-auto text-gray-400">
            Final-year engineering student focused on building practical
            machine learning and data-driven applications.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-2 bg-white text-black rounded-md font-medium hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-2 border border-gray-500 rounded-md hover:bg-gray-800"
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>

      {/* Projects Section */}
      <Projects />

      <Skills />

      <Education />

      <Contact />
    </>
  );
}

