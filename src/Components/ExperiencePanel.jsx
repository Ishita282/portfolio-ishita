import React from "react";
import { motion as Motion } from "framer-motion";

const ExperiencePanel = ({ onClose }) => {
  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "Pratham Vision Pvt Ltd",
      points: [
        "Built backend services using Node.js",
        "Designed RESTful APIs for web applications",
        "Worked with frontend teams for integration",
        "Participated in sprint meetings and demos",
      ],
    },
    {
      title: "Python & Database Tutor",
      company: "Harcourt Butler Sr. Sec. School",
      points: [
        "Taught Python programming to senior students",
        "Explained database concepts (SQL, DBMS)",
        "Conducted interactive coding sessions",
        "Helped students with projects and assignments",
      ],
    },
    {
      title: "Frontend Developer (Personal Projects)",
      company: "Self Projects",
      points: [
        "Built interactive React-based UI projects",
        "Designed portfolio with animation and UX focus",
        "Implemented responsive layouts using Tailwind",
        "Integrated API-based features in projects",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Independent",
      points: [
        "Developed small business landing pages",
        "Improved UI/UX for existing websites",
        "Worked on responsive design improvements",
        "Delivered client-ready production builds",
      ],
    },
    {
      title: "AI & Prompt Engineering Explorer",
      company: "Learning Phase",
      points: [
        "Experimented with AI tools and workflows",
        "Built prompt-based automation ideas",
        "Exploring LLM-based applications",
        "Integrating AI into web apps",
      ],
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <Motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 30 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative w-[850px] max-w-[92%] h-[540px] bg-white/90 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center px-5 py-3 border-b bg-white/60">
          <h2 className="text-lg font-semibold text-gray-800">
            Experience
          </h2>

          <button
            onClick={onClose}
            className="text-sm px-3 py-1 rounded-md hover:bg-black/20 transition"
          >
            ✖
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 h-full overflow-y-auto space-y-5 pb-16 pr-2">

          {experiences.map((exp, index) => (
            <Motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/70 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {exp.title}
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                {exp.company}
              </p>

              <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Motion.div>
          ))}

        </div>
      </Motion.div>
    </div>
  );
};

export default ExperiencePanel;