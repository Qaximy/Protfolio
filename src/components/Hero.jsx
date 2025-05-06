import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
// import img from '../assets/pic.jpg'
// Define reusable animation variants
const FadeRight = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration, delay } },
});

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 min-h-[650px] flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Introduction */}
        <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
          <motion.h1
            variants={FadeRight(0, 0.6)}
            initial="hidden"
            animate="visible"
            className="text-4xl lg:text-5xl font-extrabold text-gray-800"
          >
            Hi, I'm <span className="text-secondary">Nazira</span>
          </motion.h1>
          <motion.h2
            variants={FadeRight(0.2, 0.6)}
            initial="hidden"
            animate="visible"
            className="text-2xl lg:text-3xl font-medium text-gray-600"
          >
            A Passionate Frontend Developer
          </motion.h2>
          <motion.p
            variants={FadeRight(0.4, 0.6)}
            initial="hidden"
            animate="visible"
            className="text-lg text-gray-600 leading-relaxed"
          >
            Crafting innovative, responsive, and user-friendly web experiences
            with expertise in HTML, CSS, JavaScript, React.js, and Tailwind CSS.
          </motion.p>
          {/* Button Section */}
          <motion.div
            variants={FadeRight(0.6, 0.6)}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start"
          >
           <button className="primary-btn px-6 py-3 flex items-center gap-2 text-white bg-secondary hover:bg-secondary-dark rounded-md shadow-md">
  <a
    href="/src/assets/nazira.docx" // Path to your resume file
    download="/src/assets/nazira.docx" // Optional: Specify the file name for download
    className="flex items-center gap-2"
  >
    Download Resume
  </a>
</button>

          </motion.div> 
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          {/* <img
            src={img}
            alt="Profile"
            className="rounded-full shadow-lg w-[300px] h-[300] md:w-[300px]"
          /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
