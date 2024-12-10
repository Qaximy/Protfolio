import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Social icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Left: Logo or Text */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-lg font-semibold">© 2024 Nazira's Portfolio</p>
          </div>

          {/* Footer Middle: Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
            <a href="/" className="text-white hover:text-primary transition duration-300">
              Home
            </a>
            <a href="/about" className="text-white hover:text-primary transition duration-300">
              About
            </a>
            <a href="/work" className="text-white hover:text-primary transition duration-300">
              Work
            </a>
            <a href="/contact" className="text-white hover:text-primary transition duration-300">
              Contact
            </a>
          </div>

          {/* Footer Right: Social Icons */}
          <div className="flex gap-4">
            <a href="https://facebook.com" className="text-white hover:text-blue-600">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-pink-600">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/nazira-batool-5811ab275/" className="text-white hover:text-blue-700">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://github.com/Qaximy" className="text-white hover:text-gray-400">
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
