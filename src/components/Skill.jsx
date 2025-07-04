import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiNextdotjs } from "react-icons/si";

const skills = [
  { id: 1, name: "HTML5", icon: <FaHtml5 className="text-red-500 text-4xl" /> },
  { id: 2, name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { id: 3, name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
  { id: 4, name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { id: 5, name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-4xl" /> },
  { id: 6, name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
  { id: 7, name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 text-4xl" /> },
  { id: 8, name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
  { id: 9, name: "Python", icon: <FaPython className="text-blue-400 text-4xl" /> },
];


const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Here are some of the technologies and tools I work with:
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Skill Icon */}
              <div className="mb-4">{skill.icon}</div>
              {/* Skill Name */}
              <h4 className="text-lg font-medium text-gray-700">{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
