
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaSearchPlus } from 'react-icons/fa';

// Import all your images (card image + detail images)
import chatAppImage from './chatapp-1.png';
import chatAppImage2 from './chatapp-2.png'; 
import chatAppImage3 from './chatapp-3.png'; 

import blogAppImage from './blogapp-1.png';
import blogAppImage2 from './blogapp-2.png'; 
import blogAppImage3 from './blogapp-3.png'; 

import cycloneImage from './cyclone-1.gif';
import cycloneImage2 from './cyclone-2.gif'; 
import cycloneImage3 from './cyclone-3.gif'; 


const projectsData = [
  {
    title: 'Real-Time Chatting WebApp',
    description: 'A real-time chat app using MERN stack and Socket.IO, supporting 50+ concurrent users with live messaging.',
    longDescription: "This project is a full-stack, real-time chat application built with the MERN stack and Socket.IO. It's designed to support over 50 concurrent users with instant, live messaging. The mobile-responsive UI, created with React and Tailwind CSS, improved usability across devices by 40%. Deployed on Vercel, the application architecture achieved a 50% reduction in latency and is scaled to handle over 1,000 daily messages.",
    features: ['Supports 50+ concurrent users', 'Mobile-responsive UI', 'Full-stack Vercel deployment', 'Scales for 1,000+ daily messages'],
    image: chatAppImage,
    images: [chatAppImage, chatAppImage2, chatAppImage3],
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'Vercel'],
    liveLink: 'https://abhinav-chatting-app.vercel.app/login',
    codeLink: 'https://github.com/abhinavbansal226/ChatApp',
  },
  {
    title: 'AI-Powered Blog WebApp',
    description: 'A MERN-based blog platform featuring AI-generated content via the Google Gemini API.',
    longDescription: "This project is a modern blogging platform built on the MERN stack. It integrates ImageKit for optimized image delivery, reducing load times by 60%. A key feature is the integration of the Google Gemini API, which assists in generating content and has cut down manual writing time by 40%. The secure admin dashboard includes JWT authentication, comment moderation, and a rich-text editor, enhancing the content management experience by 50%.",
    features: ['AI content generation with Gemini API', 'Optimized image loading with ImageKit', 'Secure admin dashboard with JWT', 'Rich-text editing & comment moderation'],
    image: blogAppImage, 
    images: [blogAppImage, blogAppImage2, blogAppImage3],
    tags: ['MERN', 'React', 'Gemini API', 'ImageKit', 'JWT', 'Admin Dashboard'],
    liveLink: 'https://abhinav-ai-bloggind-app.vercel.app/',
    codeLink: 'https://github.com/abhinavbansal226/BlogApp',
  },
  {
    title: 'Cyclone Eye Detection',
    description: 'A research project with IMD Chennai to detect cyclone eyes in radar images using CNN models, achieving 98% accuracy.',
    longDescription: "In collaboration with the Indian Meteorological Department (IMD) Chennai, this research project focused on automating cyclone eye detection from radar imagery. Over 10 different Convolutional Neural Network (CNN) models were built and tested, achieving a peak accuracy of 98%. Techniques like transfer learning and advanced image preprocessing were applied to enhance feature extraction, improving model generalization by 25%. The models were successfully validated against four real-world cyclone datasets provided by IMD, preparing them for potential deployment in operational forecasting scenarios.",
    features: ['Achieved 98% detection accuracy', 'Utilized 10+ CNN architectures', 'Applied transfer learning for 25% better generalization', 'Validated with real-world IMD cyclone data'],
    image: cycloneImage, 
    images: [cycloneImage, cycloneImage2, cycloneImage3], 
    tags: ['Python', 'PyTorch', 'CNN', 'Transfer Learning', 'Data Preprocessing'],
    liveLink: 'https://github.com/abhinavbansal226/Cyclone-eye-detection-on-radar-images',
    codeLink: 'https://github.com/abhinavbansal226/Cyclone-eye-detection-on-radar-images',
  },
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (selectedProject) {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedProject]);

  return (
    <main className="bg-[#0d0d0d] text-white py-20 sm:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">My Projects</h1>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are a few selected projects that showcase my skills and passion.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {projectsData.map((project) => (
            <motion.div
              key={project.title}
              className={`relative bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg cursor-pointer group ${
                selectedProject && selectedProject.title === project.title ? 'ring-2 ring-white scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <motion.img 
                src={project.image}
                alt={project.title} 
                className="w-full h-48 object-cover" 
                layoutId={`image-${project.title}`}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
              
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaSearchPlus className="text-white text-4xl mb-2" />
                <p className="text-white text-lg font-semibold">View Details</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Details Section */}
        <AnimatePresence>
          {selectedProject && (
            <motion.section
              className="mt-20 p-8 bg-[#1a1a1a] rounded-xl shadow-lg"
              ref={detailsRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-4xl font-extrabold">{selectedProject.title}</h2>
                <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white transition-colors">
                  <FaTimes size={24} />
                </button>
              </div>

              {/* ✅ NEW: Display multiple images side-by-side */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {selectedProject.images.map((imgSrc, index) => (
                  <motion.img 
                    key={index}
                    src={imgSrc} 
                    alt={`${selectedProject.title} screenshot ${index + 1}`} 
                    className="w-full h-auto object-cover rounded-lg"
                   
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>

              <p className="text-lg text-gray-400 mb-6">{selectedProject.longDescription}</p>
              
              <div className="mb-6">
                <h4 className="text-2xl font-bold mb-3">Key Features</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {selectedProject.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-end space-x-4">
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <FaGithub /> View Code
                </a>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default ProjectsPage;
