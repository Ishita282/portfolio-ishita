import React, { useState } from "react";
import laptop from "../assets/laptop.png";
import StickyNotes from "../assets/sticky-notes.png";
import ImgTerminal from "../assets/terminal.png";
import Phone from "../assets/phone.png";
import Boxes from "../assets/boxes.png";
import Lamp from "../assets/lamp.png";
import Background from "../assets/background.jpg";
import Trophy from "../assets/experience.png";

import ProjectsModal from "./ProjectsModal";
import Guide from "./GuidePanel";
import About from "./AboutPanel";
import SkillsNote from "./SkillsNote";
import Terminal from "./Terminal";
import ContactPanel from "./ContactPanel";
import Experience from "./ExperiencePanel";

import { motion as Motion, AnimatePresence } from "framer-motion";

const Workspace = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className="w-full h-screen relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Soft overlay */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isDark ? "bg-gray-900/60" : "bg-[#f5f1eb]/60"
        }`}
      />

      {/* ===== Workspace Scene ===== */}

      {/* Portfolio Guide */}
      <Motion.div
        onClick={() => setActivePanel("guide")}
        whileHover={{ scale: 1.05 }}
        className="absolute top-[3%] right-[5%] z-10"
      >
        <div className="p-3 md:p-4 w-[140px] md:w-[180px] text-center rounded-xl bg-yellow-100 shadow-lg border border-gray-200 cursor-pointer">
          <h4 className="text-xs md:text-sm font-semibold text-gray-800">
            Workspace Guide
          </h4>
        </div>
      </Motion.div>

      {/* Laptop */}
      <Motion.div
        className="absolute top-[58%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer w-[95%] md:w-auto"
        whileHover={{ scale: 1.04 }}
        onClick={() => setActivePanel("about")}
      >
        <div className="relative w-full md:w-[850px]">
          <img
            src={laptop}
            alt="laptop"
            className={`w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)] transition-all duration-500 ${
              isDark ? "brightness-75" : ""
            }`}
          />

          {/* Screen Content */}
          <div className="absolute top-[15%] left-[10%] w-[80%] h-[55%] flex flex-col items-center justify-center text-center px-2 md:px-4">
            <p className="text-[10px] md:text-sm tracking-widest text-gray-400 uppercase">
              Hello, I'm
            </p>

            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mt-2">
              Ishita Sharma
            </h1>

            <p className="text-sm md:text-xl text-gray-600 mt-2">
              Full Stack Developer • React • Node.js • AI Enthusiast
            </p>

            <p className="text-xs md:text-sm text-gray-500 mt-3 max-w-md">
              I build modern, responsive and interactive web applications that
              turn ideas into real-world products.
            </p>
          </div>
        </div>
      </Motion.div>

      {/* Boxes */}
      <Motion.div
        className="absolute bottom-[10%] left-[15%] cursor-pointer w-[120px] md:w-[300px]"
        whileHover={{ scale: 1.04 }}
        onClick={() => setActivePanel("projects")}
      >
        <img
          src={Boxes}
          alt="boxes"
          className="w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)]"
        />
      </Motion.div>

      {/* Trophy */}
      <Motion.div
        className="absolute bottom-[15%] right-[5%] cursor-pointer w-[100px] md:w-[220px]"
        whileHover={{ scale: 1.04 }}
        onClick={() => setActivePanel("experience")}
      >
        <img
          src={Trophy}
          alt="trophy"
          className="w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)]"
        />
      </Motion.div>

      {/* Sticky Notes */}
      <Motion.div
        className="absolute top-[12%] right-[20%] rotate-[-6deg] cursor-pointer w-[120px] md:w-[200px]"
        whileHover={{ scale: 1.05 }}
        onClick={() => setActivePanel("skills")}
      >
        <img
          src={StickyNotes}
          alt="notes"
          className="w-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)]"
        />
      </Motion.div>

      {/* Terminal */}
      <Motion.div
        className="absolute bottom-[40%] left-[10%] cursor-pointer w-[60px] md:w-[100px]"
        whileHover={{ scale: 1.05 }}
        onClick={() => setActivePanel("terminal")}
      >
        <img src={ImgTerminal} alt="terminal" className="w-full" />
      </Motion.div>

      {/* Phone */}
      <Motion.div
        className="absolute bottom-[5%] right-[10%] rotate-[10deg] cursor-pointer w-[120px] md:w-[250px]"
        whileHover={{ scale: 1.05 }}
        onClick={() => setActivePanel("contact")}
      >
        <img src={Phone} alt="phone" className="w-full" />
      </Motion.div>

      {/* ===== Modals ===== */}
      <AnimatePresence>
        {activePanel === "about" && (
          <Motion.div
            key="about"
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <About onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}

        {activePanel === "guide" && (
          <Motion.div
            key="guide"
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <Guide onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}

        {activePanel === "projects" && (
          <Motion.div
            key="projects"
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <ProjectsModal onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}

        {!activePanel && (
          <Motion.div
            className="absolute top-[4%] left-[5%] cursor-pointer z-10 w-[120px] md:w-[250px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDark(!isDark)}
          >
            <img src={Lamp} alt="lamp" className="w-full drop-shadow-xl" />
          </Motion.div>
        )}

        {activePanel === "skills" && (
          <Motion.div
            key="skills"
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <SkillsNote onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}

        {activePanel === "experience" && (
          <Motion.div
            key="experience"
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <Experience onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}

        {activePanel === "terminal" && (
          <Motion.div
            key="terminal"
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <Terminal onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}

        {activePanel === "contact" && (
          <Motion.div
            key="contact"
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <ContactPanel onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Glow effect */}
      {!isDark && (
        <div className="pointer-events-none absolute top-[6%] left-[6%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-yellow-200/30 rounded-full blur-3xl" />
      )}
    </div>
  );
};

export default Workspace;