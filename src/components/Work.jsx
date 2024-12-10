import React from "react";
import { motion } from "framer-motion";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Travel Agency Website",
    description: "A responsive travel agency website featuring booking options and destination details.",
    image: "/src/assets/travel.png",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Qaximy/travel-tour",
    LiveDemo: "http://127.0.0.1:5500/Travel/index.html",
  },
  {
    id: 2,
    title: "Coffee Shop Website",
    description: "A modern coffee shop website with an interactive menu and online ordering feature.",
    image: "/src/assets/coffee.png",
    LiveDemo: "http://localhost:5174/",
    technologies: ["React.js", "CSS"],
    github: "https://github.com/Qaximy/coffee-shop",
  },
  {
    id: 3,
    title: "Smart-Watch Website",
    description: "A showcase website for smartwatches, highlighting features and specifications.",
    image: "/src/assets/smart.png",
    LiveDemo: "http://localhost:5175/",
    technologies: ["React.js", "CSS"],
    github: "https://github.com/Qaximy/Smart-Watch",
  },
  {
    id: 4,
    title: "Digital Website",
    description: "A sleek digital agency website showcasing services and portfolio.",
    image: "/src/assets/digital.png",
    LiveDemo: "http://localhost:5176/",
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Qaximy/Digital",
  },
  {
    id: 5,
    title: "Hotel Booking Website",
    description: "A hotel booking website with room details, pricing, and reservation features.",
    image: "/src/assets/hotel.png",
    LiveDemo: "http://127.0.0.1:5500/Hotel/index.html",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Qaximy/Hotel",
  },
  {
    id: 6,
    title: "Fruit-Selling Website",
    description: "An e-commerce website for selling fresh fruits online.",
    image: "/src/assets/fruit.png",
    LiveDemo: "http://localhost:5175/",
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Qaximy/Fruit-Selling",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills.",
    image: "/src/assets/about.png",
    LiveDemo: "http://localhost:5173/",
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Qaximy/Protfolio",
  },
  {
    id: 8,
    title: "E-Commerce Website",
    description: "A comprehensive e-commerce platform for online shopping.",
    image: "/src/assets/ecomerce.png",
    LiveDemo: "http://localhost:5173/",
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Qaximy/ecomerce",
  },
  {
    id: 9,
    title: "Traveling Website",
    description: "A dynamic traveling website with trip planning and booking features.",
    image: "/src/assets/rebel.png",
    LiveDemo: "http://localhost:5173/",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Qaximy/Ecomerce",
  },
  // More projects...
];


const Work = () => {
  return (
    <section id="work" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">My Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I’ve worked on, showcasing my skills
            in frontend development using modern frameworks and tools.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                {/* Technologies */}
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Links */}
                <div className="flex gap-4 mt-4">
                  {project.LiveDemo && (
                    <a
                      href={project.LiveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
