// src/components/professional/ProjectsGrid.jsx

import { motion as Motion } from "framer-motion";

const projects = [
  {
    title: "BugTrace",
    desc: "Bug tracking platform with authentication and issue management.",
  },
  {
    title: "CodeExplainer",
    desc: "AI-powered code explanation tool with modern UI.",
  },
  {
    title: "BgRemoval",
    desc: "Image background remover with API integration.",
  },
];

const ProjectsGrid = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200" />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {project.desc}
                </p>

                <button className="mt-6 px-5 py-2 rounded-xl bg-black text-white">
                  View Project
                </button>
              </div>
            </Motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;