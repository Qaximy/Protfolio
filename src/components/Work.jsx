"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Project data
const projects = [
  {
    id: 1,
    title: "Travel Agency Website",
    description: "A responsive travel agency website featuring booking options and destination details.",
    image: "/assets/travel.png",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Qaximy/travel-tour",
    liveDemo: "http://127.0.0.1:5500/Travel/index.html",
  },
  {
    id: 2,
    title: "Coffee Shop Website",
    description: "A modern coffee shop website with an interactive menu and online ordering feature.",
    image: "/assets/coffee.png",
    liveDemo: "http://localhost:5174/",
    technologies: ["React.js", "CSS"],
    github: "https://github.com/Qaximy/coffee-shop",
  },
  {
    id: 3,
    title: "Smart-Watch Website",
    description: "A showcase website for smartwatches, highlighting features and specifications.",
    image: "/assets/smart.png",
    liveDemo: "http://localhost:5175/",
    technologies: ["React.js", "CSS"],
    github: "https://github.com/Qaximy/Smart-Watch",
  },
  {
    id: 4,
    title: "Digital Website",
    description: "A sleek digital agency website showcasing services and portfolio.",
    image: "/assets/digital.png",
    liveDemo: "http://localhost:5176/",
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Qaximy/Digital",
  },
  {
    id: 5,
    title: "Hotel Booking Website",
    description: "A hotel booking website with room details, pricing, and reservation features.",
    image: "/assets/hotel.png",
    liveDemo: "http://127.0.0.1:5500/Hotel/index.html",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Qaximy/Hotel",
  },
  {
    id: 6,
    title: "Fruit-Selling Website",
    description: "An e-commerce website for selling fresh fruits online.",
    image: "/assets/fruit.png",
    liveDemo: "http://localhost:5175/",
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Qaximy/Fruit-Selling",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills.",
    image: "/assets/about.png",
    liveDemo: "http://localhost:5173/",
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Qaximy/Protfolio",
  },
  {
    id: 8,
    title: "E-Commerce Website",
    description: "A comprehensive e-commerce platform for online shopping.",
    image: "/assets/ecomerce.png",
    liveDemo: "http://localhost:5173/",
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Qaximy/ecomerce",
  },
  {
    id: 9,
    title: "Traveling Website",
    description: "A dynamic traveling website with trip planning and booking features.",
    image: "/assets/rebel.png",
    liveDemo: "http://localhost:5173/",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Qaximy/Ecomerce",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-20 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primary"> My Work</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Some of the projects I've built with modern frameworks and responsive design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white shadow-lg text-secondary text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:underline text-sm"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black text-sm"
                  >
                    <FaGithub className="mr-1" /> GitHub
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
