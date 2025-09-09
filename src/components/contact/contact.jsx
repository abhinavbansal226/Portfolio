// src/pages/ContactPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaPhone,
  FaGraduationCap
} from 'react-icons/fa';

const ContactPage = () => {
  const socialLinks = [
    { icon: <FaGithub />, name: "Github", url: "https://github.com/abhinavbansal226" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/in/abhinavbansal226" },
  ];

  return (
    <main className="bg-[#0d0d0d] text-white py-20 sm:py-28 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
      
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">Contact Me</h1>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
       
          <div className="text-center">
            <FaMapMarkerAlt className="text-4xl text-white mx-auto mb-3" />
            <h3 className="text-2xl font-bold">Address</h3>
            <p className="text-lg text-gray-400">B-80, L.S. Nagar, Vidhyadhar Nagar, <br/>Jaipur, Rajasthan, India</p>
          </div>
          
         
          <div className="text-center">
            <FaPhone className="text-4xl text-white mx-auto mb-3" />
            <h3 className="text-2xl font-bold">Contact Number</h3>
            <a href="tel:+911234567890" className="text-lg text-gray-400 hover:text-white transition-colors">
              +91 63779 77347
            </a>
          </div>

          {/* Email */}
          <div className="text-center">
            <FaEnvelope className="text-4xl text-white mx-auto mb-3" />
            <h3 className="text-2xl font-bold">Email</h3>
            <a href="mailto:your.email@example.com" className="text-lg text-gray-400 hover:text-white transition-colors">
              abhiinavbansal8619@gmail.com
            </a>
          </div>

          {/* University */}
          <div className="text-center">
            <FaGraduationCap className="text-4xl text-white mx-auto mb-3" />
            <h3 className="text-2xl font-bold">University</h3>
            <p className="text-lg text-gray-400">VIT Chennai</p>
          </div>
        </motion.div>

       
        <motion.div 
          className="my-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <hr className="border-t-2 border-gray-800 w-1/4 mx-auto" />
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
           <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  {React.cloneElement(link.icon, { size: 30 })}
                </a>
              ))}
            </div>
        </motion.div>

      </div>
    </main>
  );
};

export default ContactPage;