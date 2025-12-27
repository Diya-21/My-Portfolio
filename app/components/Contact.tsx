export default function Contact() {
    return (
      <section
        id="contact"
        className="bg-black text-white px-6 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact
          </h2>
  
          <p className="text-gray-400 mb-10">
            I’m open to internships, full-time roles, and meaningful
            collaborations. Feel free to reach out.
          </p>
  
          <div className="flex flex-col items-center gap-4">
            <a
              href="Divyasingh2164@gmail.com"
              className="text-lg underline hover:text-gray-300"
            >
              Divyasingh2164@gmail.com
            </a>
  
            <div className="flex gap-6 text-gray-400">
              <a
                href="https://github.com/Diya-21"
                target="_blank"
                className="hover:text-white"
              >
                GitHub
              </a>
  
              <a
                href="https://www.linkedin.com/in/divya-singh-069b6b259/"
                target="_blank"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  