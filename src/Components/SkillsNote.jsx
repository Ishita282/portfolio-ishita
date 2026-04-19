import React from "react";

const SkillsNote = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="w-[95%] max-w-[700px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-4 md:p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✖
        </button>

        <h2 className="text-xl md:text-2xl font-bold mb-6">My Skills</h2>

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
                Nextjs
              </span>

              <span className="px-3 py-1 bg-pink-100 rounded-full text-sm">
                Tailwind
              </span>

              <span className="px-3 py-1 bg-pink-100 rounded-full text-sm">
                JavaScript
              </span>

              <span className="px-3 py-1 bg-pink-100 rounded-full text-sm">
                TypeScript
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
            </div>
          </div>

          {/* Database */}
          <div>
            <h3 className="font-semibold">Database</h3>
            <div className="flex gap-2 flex-wrap mt-2">
              <span className="px-3 py-1 bg-purple-100 rounded-full text-sm">
                PostresSQL
              </span>

              <span className="px-3 py-1 bg-purple-100 rounded-full text-sm">
                MongoDB
              </span>

              <span className="px-3 py-1 bg-purple-100 rounded-full text-sm">
                MySQL
              </span>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold">Tools & Others</h3>
            <div className="flex gap-2 flex-wrap mt-2">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                Prisma
              </span>

              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                Git
              </span>

              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                Postman
              </span>

              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                OpenAI APIs
              </span>

              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                Clerk
              </span>

              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                Firebase
              </span>
            </div>
          </div>

          {/* Deployements */}
          <div>
            <h3 className="font-semibold">Deployments</h3>
            <div className="flex gap-2 flex-wrap mt-2">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                Docker
              </span>

              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                Vercel
              </span>

              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                Render
              </span>

              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                Netlify
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsNote;
