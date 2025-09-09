// Import motion from framer-motion
import { motion } from "framer-motion";

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const HomePage = () => {
  const socialLinks = [
    { icon: <FaGithub />, name: "Github", url: "https://github.com/abhinavbansal226" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/in/abhinavbansal226" },
  ];

  // Animation variants for cleaner code
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <main className="bg-[#0d0d0d] text-white h-screen flex flex-col justify-center items-center px-10 overflow-hidden">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-baseline text-center sm:text-left">
          <motion.h1
            className="text-7xl sm:text-9xl font-extrabold tracking-tight"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Software
          </motion.h1>

          <motion.a
            href="projects"
            className="mt-8 sm:mt-0 flex items-center justify-between bg-white text-black font-semibold rounded-full px-10 py-4 hover:bg-gray-300 transition duration-300 shadow-lg min-w-[200px] text-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="mr-4">Projects</span>
            <div className="bg-black text-white rounded-full p-3">
              <FaArrowRight size={20} />
            </div>
          </motion.a>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-8 text-center sm:text-left ">
          {/* ✅ Animate the description */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-400 max-w-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I aim to leverage my expertise in full-stack development and machine learning to build{" "}
            <span className="italic text-gray-300">innovative, data-driven applications</span>{" "}
            that solve real-world problems. My goal is to create impactful solutions that combine{" "}
            <span className="italic text-gray-300">intelligent algorithms with user-friendly interfaces</span>.
          </motion.p>


          <motion.h1
            className="text-7xl sm:text-9xl font-extrabold tracking-tight mt-8 sm:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Developer
          </motion.h1>
        </div>


        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-6 transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-gray-300 font-medium py-3 px-6 rounded-full transition-colors duration-300 text-lg"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default HomePage;