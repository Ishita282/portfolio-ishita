import React from "react";
import { motion as Motion } from "framer-motion";
import myImage from "../assets/profile-pic.jpeg";

const AboutPanel = ({ onClose }) => {
  return (
    <div className="w-full h-full fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      
      <Motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 30 }}
        transition={{ type: "spring", stiffness: 120 }}
        
        className="relative w-[95%] md:w-[800px] max-w-[95%] md:max-w-[90%] h-[85vh] md:h-[500px] bg-white/90 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center px-5 py-3 border-b bg-white/60">
          <h2 className="text-lg font-semibold text-gray-800">About Me</h2>

          <button
            onClick={onClose}
            className="text-sm px-3 py-1 rounded-md bg-transparent hover:bg-black/20 transition"
          >
            ✖
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col md:flex-row gap-6 h-full">
          
          {/* Left - Image */}
          <div className="flex-shrink-0 flex flex-col items-center justify-start">
            <img
              src={myImage}
              alt="profile"
              className="w-28 h-28 md:w-40 md:h-40 object-cover object-top rounded-full border-4 border-white shadow-[0_0_25px_rgba(0,0,0,0.2)]"
            />

            <h3 className="mt-4 text-xl font-semibold text-center">
              Ishita Sharma
            </h3>

            <p className="text-sm text-gray-500 text-center">
              Full Stack Developer
            </p>
          </div>

          {/* Right - Text */}
          <div className="flex-1 overflow-y-auto pr-2">
            <p className="text-gray-700 leading-relaxed">
              Hi! I&apos;m a Full Stack Developer who loves building interactive,
              user-focused web applications. I specialize in React, Node.js, and
              modern UI systems.
            </p>

            <br />

            <p className="text-gray-700 leading-relaxed">
              I enjoy creating immersive interfaces, experimental UI designs,
              and AI-powered tools. Right now, I&apos;m focused on building
              portfolio-grade projects and improving system design skills.
            </p>

            <br />

            <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600">
              <p>📍 India</p>
              <p>💻 10+ Projects</p>
              <p>🚀 Full Stack Dev</p>
            </div>

          </div>
        </div>
      </Motion.div>
    </div>
  );
};

export default AboutPanel;