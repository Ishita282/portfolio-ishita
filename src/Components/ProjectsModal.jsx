import React from "react";

const projects = [
  {
    title: "BugTrace - Bug Tracking System",
    description:
      "Developed a full-stack bug tracking system with authentication, issue management, and status tracking features. Built a dashboard for creating, updating, and monitoring bugs efficiently.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    emoji: "🐞",
    demo: "https://bug-trace-beta.vercel.app",
    code: "https://github.com/Ishita282/BugTrace",
  },
  {
    title: "CodeExplainer",
    description:
      "Built an AI-powered web application that explains code snippets in simple language using API integration. Designed an interactive interface for real-time code input and response display.",
    tech: ["Next.js", "React", "API Integration"],
    emoji: "🧠",
    demo: "https://code-explainer-xi.vercel.app/",
    code: "https://github.com/Ishita282/codeExplainer",
  },
  {
    title: "BgRemoval Tool",
    description:
      "Created a web application that removes image backgrounds using API integration. Implemented a simple UI for uploading images and downloading processed results.",
    tech: ["React", "Tailwind CSS", "API"],
    emoji: "🖼️",
    demo: "https://bg-removal-topaz.vercel.app/",
    code: "https://github.com/Ishita282/BgRemoval",
  },
];

const ProjectsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-[800px] bg-white rounded-2xl shadow-2xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">My Projects</h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Image / Emoji */}
              <div className="h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center text-3xl">
                {project.emoji}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg">{project.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-black text-white px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-black text-white text-sm py-1 rounded hover:scale-105 transition text-center"
                >
                  Live Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border text-sm py-1 rounded hover:bg-gray-100 hover:scale-105 transition text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;