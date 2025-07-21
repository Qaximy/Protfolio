"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

// Animation variant
const FadeRight = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration, delay } },
});

const Section = ({ title, children, delay = 0 }) => (
  <motion.div
    variants={FadeRight(delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="space-y-6"
  >
    {title && (
      <h2 className="text-3xl font-bold text-primary border-b-2 border-secondary inline-block mb-2">
        {title}
      </h2>
    )}
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 lg:px-32">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Intro */}
    <Section delay={0}>
  <div className="text-center space-y-4">
    <motion.h1
      className="text-4xl md:text-5xl font-extrabold text-primary"
      variants={FadeRight(0)}
      initial="hidden"
      animate="visible"
    >
      Nazira Batool
    </motion.h1>

    <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
      Hi! I'm <span className="text-secondary font-semibold">Nazira Batool</span>, a passionate{" "}
      <strong>Frontend Web Developer</strong> specialized in building modern, responsive websites using{" "}
      <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Shadcn</strong>, <strong>MUI</strong>, and{" "}
      <strong>Tailwind CSS</strong>.
    </p>

    
  </div>
</Section>


        {/* Experience */}
        <Section title="Experience" delay={0.2}>
          <div className="space-y-4">
            {[
              {
                role: "Frontend Developer Intern",
                company: "InTouch Solution, Skardu (2023)",
                desc: "Worked on real-world frontend projects, improving UI consistency and responsiveness.",
              },
              {
                role: "React Developer Intern",
                company: "Digital Pine (2024)",
                desc: "Contributed to live web apps using React.js, Next.js, and Tailwind CSS.",
              },
              {
                role: "Frontend Developer",
                company: "Digital Pine (Present)",
                desc: "Building scalable and user-friendly interfaces for production apps.",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                className="p-5 bg-white shadow rounded-lg border-l-4 border-secondary"
                variants={FadeRight(i * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-gray-800">{exp.role}</h4>
                <p className="text-sm text-gray-600 italic">{exp.company}</p>
                <p className="text-gray-700 mt-1">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Skills" delay={0.3}>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: "HTML / CSS", level: 95, color: "from-pink-500 to-pink-700" },
              { name: "JavaScript", level: 60, color: "from-orange-400 to-orange-600" },
              { name: "React.js", level: 88, color: "from-pink-400 to-pink-600" },
              { name: "Next.js", level: 85, color: "from-gray-500 to-gray-700" },
              { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-teal-600" },
              { name: "Python (AI/Web)", level: 70, color: "from-green-400 to-green-600" },
              { name: "ML & DL Basics", level: 65, color: "from-indigo-400 to-indigo-600" },
            ].map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-gray-800">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section title="Certifications & Roles" delay={0.4}>
          <ul className="space-y-2 text-gray-700 text-sm">
            {[
              "AI Diploma – UOBS",
              "Web Development – Code Girl",
              "4-Month Internship – React Developer at Digital Pine",
              "Current Frontend Developer – Digital Pine",
            ].map((cert, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="text-secondary" /> {cert}
              </li>
            ))}
          </ul>
        </Section>

        {/* Activities */}
        <Section title="Activities" delay={0.5}>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-secondary mt-1" />
              Led frontend team during internship at Digital Pine.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-secondary mt-1" />
              Taught web development and guided students through real-world tasks.
            </li>
          </ul>
        </Section>

        {/* Contact Info */}
        <Section title="Contact Info" delay={0.6}>
          <div className="text-center space-y-4">
            <div className="flex justify-center flex-wrap gap-6 text-gray-700">
              <span className="flex items-center gap-1">
                <FaPhone className="text-secondary" /> 0344-2309271
              </span>
              <span className="flex items-center gap-1">
                <FaEnvelope className="text-secondary" /> Qaximy1214@gmail.com
              </span>
            </div>
            <div className="flex justify-center gap-6 pt-2">
              <a
                href="https://linkedin.com/in/nazira-batool-5811ab275/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-lg hover:underline flex items-center gap-1"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/Qaximy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 text-lg hover:underline flex items-center gap-1"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="/assets/nazira.docx"
                download
                className="px-5 py-2 bg-secondary text-white rounded-md shadow-md hover:bg-secondary-dark transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
};

export default About;
