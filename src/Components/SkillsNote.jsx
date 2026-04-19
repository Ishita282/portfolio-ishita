import React from "react";

const SkillsNote = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-[700px] bg-white rounded-2xl shadow-2xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-6">My Skills</h2>

        {/* Skill Sections */}
        <div className="space-y-4">
          {/* Frontend */}
          <div>
            <h3 className="font-semibold">Frontend</h3>
            <div className="flex gap-2 flex-wrap mt-2">
              <span className="px-3 py-1 bg-pink-100 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-pink-100 rounded-full text-sm">
                Tailwind
              </span>
              <span className="px-3 py-1 bg-pink-100 rounded-full text-sm">
                JavaScript
              </span>
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-semibold">Backend</h3>
            <div className="flex gap-2 flex-wrap mt-2">
              <span className="px-3 py-1 bg-purple-100 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-purple-100 rounded-full text-sm">
                Express
              </span>
              <span className="px-3 py-1 bg-purple-100 rounded-full text-sm">
                MongoDB
              </span>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold">Tools & Others</h3>
            <div className="flex gap-2 flex-wrap mt-2">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                Git
              </span>
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                Postman
              </span>
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                OpenAI APIs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsNote;
