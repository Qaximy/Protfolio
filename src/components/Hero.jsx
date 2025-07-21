import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Animation variant
const FadeRight = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration, delay } },
});

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 min-h-[650px] flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
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
              specialized in building modern, responsive websites using Reactjs, Nextjs,Shadcn ,MUI and Tailwind CSS.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={FadeRight(0.6, 0.6)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="/public/assets/nazira.docx"
              download
              className="px-6 py-3 bg-secondary text-white rounded-md shadow-md hover:bg-secondary-dark transition"
            >
              Download Resume
            </a>
           <a
  href="/contact"
  className="px-6 py-3 border border-secondary text-secondary rounded-md hover:bg-secondary hover:text-white transition"
>
  Contact Me
</a>

          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={FadeRight(0.8, 0.6)}
            initial="hidden"
            animate="visible"
            className="flex gap-4 mt-4 justify-center md:justify-start"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-secondary text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-secondary text-2xl"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* Right Side Image */}
   {/* Right Side Image */}
<motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="flex justify-center"
>
  <img
    src="/src/assets/pics.jpg"
    alt="Nazira"
    className="rounded-full shadow-lg object-cover w-[300px] h-[300px]"
  />
</motion.div>

      </div>
    </section>
  );
};

export default Hero;
