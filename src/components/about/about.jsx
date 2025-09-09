import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import profileImage from './resume_image.png'; 

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5 & CSS3'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express',  'Flask', 'REST APIs'],
  },
  {
    title: 'Databases & DevOps',
    skills: ['MongoDB', 'SQL', 'Docker', 'Git & GitHub', 'Vercel', 'AWS'],
  },
  {
    title: 'Machine Learning',
    skills: ['PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
  },
];

const AboutPage = () => {
  return (
    <main className="bg-[#0d0d0d] text-white py-20 sm:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* About Me Section */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              About Me
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl">
              I am Abhinav Bansal, currently pursuing my B.Tech in{" "}
              <span className="italic text-gray-300">Computer Science Engineering from VIT Chennai</span> and{" "}
              with a specialization in AI and Machine Learning. I am passionate about{" "}
              <span className="italic text-gray-300">solving real-world problems</span> and{" "}
              <span className="italic text-gray-300">building innovative applications</span>. 
              My goal is to continuously improve my skills and contribute to impactful projects.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
              <img
                src={profileImage} 
                alt="Profile Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center md:justify-start"
        >
          <a
            href="https://drive.google.com/file/d/1DiqUWMUpBU3WhwzIIWpsz69LNt_rewSp/view?usp=drivesdk" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-black font-semibold rounded-full px-8 py-4 hover:bg-gray-200 transition duration-300 shadow-lg text-lg"
            >
            <span className="mr-3">View Resume</span>
            <FaArrowRight size={18} />
          </a>

        </motion.div>

        {/* Tech Stack Section */}
        <motion.section
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center">My Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="text-center space-y-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
          <div>
            <a
              href="/contact" 
              className="inline-flex items-center bg-white text-black font-semibold rounded-full px-8 py-4 hover:bg-gray-200 transition duration-300 shadow-lg text-lg"
            >
              <span className="mr-3">Get in Touch</span>
              <FaArrowRight size={18} />
            </a>
          </div>
        </motion.section>
        
      </div>
    </main>
  );
};

export default AboutPage;
