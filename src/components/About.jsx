import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/IMG.png"; // Replace with your image path

const About = () => {
  return (
    <section className="bg-gray-100 py-16" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={ProfileImage}
              alt="Profile"
              className="shaddow-md w-full md:w-4/5 mx-auto"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6"
          >
            <h2 className="text-4xl font-bold text-primary">
              About Me
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hello! I'm <span className="font-semibold text-secondary">Nazira</span>, a passionate <span className="font-semibold">Frontend Developer</span> 
              with experience in creating stunning and user-friendly websites using modern technologies like 
              <span className="font-semibold text-primary"> React.js</span> and <span className="font-semibold text-primary">Tailwind CSS</span>.
            </p>
            <p className="text-gray-600">
              My journey in web development has been exciting and rewarding, and I strive to learn and grow every day. 
              I focus on building responsive, accessible, and efficient web applications that deliver great user experiences.
            </p>
            <button className="primary-btn px-6 py-3 flex items-center gap-2 text-white bg-secondary hover:bg-secondary-dark rounded-md shadow-md">
              <a href="/src/assets/nazira.docx" download="Nazira_Resume.pdf">
                Download Resume
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
