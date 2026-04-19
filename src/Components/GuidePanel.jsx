import React from "react";
import { motion as Motion } from "framer-motion";

const GuidePanel = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4">
      
      <Motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 20 }}
        
        className="w-[95%] max-w-[520px] bg-white/90 rounded-2xl shadow-2xl overflow-hidden"
      >
        
        {/* Header */}
        <div className="flex justify-between items-center px-4 md:px-5 py-4 border-b bg-white/60">
          <h2 className="font-semibold text-gray-800 text-sm md:text-base">
            Workspace Guide
          </h2>

          <button
            onClick={onClose}
            className="text-sm px-2 py-1 rounded-md hover:bg-black/10 transition"
          >
            ✖
          </button>
        </div>

        {/* Intro */}
        <div className="px-4 md:px-5 pt-4 text-sm text-gray-600">
          Click on elements in the workspace to explore different sections.
        </div>

        {/* Divider */}
        <div className="mx-4 md:mx-5 my-4 h-[1px] bg-black/10" />

        {/* Items */}
        <div className="px-4 md:px-5 pb-6 space-y-3 text-sm text-gray-700">

          <div className="flex items-center gap-2">
            <span>💻</span> <p>Laptop → About Me</p>
          </div>

          <div className="flex items-center gap-2">
            <span>📦</span> <p>Boxes → Projects</p>
          </div>

          <div className="flex items-center gap-2">
            <span>📝</span> <p>Sticky Notes → Skills</p>
          </div>

          <div className="flex items-center gap-2">
            <span>📟</span> <p>Terminal Icon → Developer Mode</p>
          </div>

          <div className="flex items-center gap-2">
            <span>📱</span> <p>Mobile Phone → Contact</p>
          </div>

          <div className="flex items-center gap-2">
            <span>💡</span> <p>Lamp → Dark Mode</p>
          </div>

          <div className="flex items-center gap-2">
            <span>⭐</span> <p>Trophy → Experiences</p>
          </div>

        </div>
      </Motion.div>
    </div>
  );
};

export default GuidePanel;