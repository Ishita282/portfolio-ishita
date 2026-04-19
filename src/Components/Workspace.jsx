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
        className="absolute top-[5%] left-[85%] z-10"
      >
        <div className="p-4 w-[180px] text-center rounded-xl bg-yellow-100 shadow-lg border border-gray-200 cursor-pointer">
          <h4 className="text-sm font-semibold text-gray-800">
            Workspace Guide
          </h4>
        </div>
      </Motion.div>

      {/* Laptop */}
      <Motion.div
        className="absolute top-[58%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        whileHover={{ scale: 1.04 }}
        onClick={() => setActivePanel("about")}
      >
        <div className="relative w-[850px]">
          <img
            src={laptop}
            alt="laptop"
            className={`w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)] transition-all duration-500 ${
              isDark ? "brightness-75" : ""
            }`}
          />

          {/* Screen Content */}
          <div className="absolute top-[15%] left-[12%] w-[76%] h-[50%] flex flex-col items-center justify-center text-center px-4">
            {/* Intro line */}
            <p className="text-sm tracking-widest text-gray-400 uppercase">
              Hello, I'm
            </p>

            {/* Name (main focus) */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Ishita Sharma
            </h1>

            {/* Role */}
            <p className="text-lg md:text-xl text-gray-600 mt-2">
              Full Stack Developer • React • Node.js • AI Enthusiast
            </p>

            {/* Tagline */}
            <p className="text-sm text-gray-500 mt-3 max-w-md">
              I build modern, responsive and interactive web applications that
              turn ideas into real-world products.
            </p>
          </div>
        </div>
      </Motion.div>

      {/* Boxes (Contains projects) */}
      <Motion.div
        className="absolute top-[75%] left-[15%] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        whileHover={{ scale: 1.04 }}
        onClick={() => setActivePanel("projects")}
      >
        <div className="relative w-[300px]">
          <img
            src={Boxes}
            alt="boxes"
            className={`w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)] transition-all duration-500 ${
              isDark ? "brightness-75" : ""
            }`}
          />
        </div>
      </Motion.div>

      {/* Trophy (Contains experience) */}
      <Motion.div
        className="absolute top-[68%] left-[90%] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        whileHover={{ scale: 1.04 }}
        onClick={() => setActivePanel("experience")}
      >
        <div className="relative w-[220px]">
          <img
            src={Trophy}
            alt="trophy"
            className={`w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)] transition-all duration-500`}
          />
        </div>
      </Motion.div>

      {/* Sticky Notes */}
      <Motion.div
        className="absolute top-[18%] left-[61%] rotate-[-6deg] cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => setActivePanel("skills")}
      >
        <div className="relative w-[200px]">
          <img
            src={StickyNotes}
            alt="notes"
            className="w-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)]"
          />

          {/* Skills Text */}
          <div className="absolute inset-0 p-10 rotate-[-5deg] text-[17px] text-gray-800/60 leading-tight text-center flex flex-col items-center justify-center">
            <p className="font-semibold text-gray-800/80">
              Sticky Notes for{" "}
              <span className="text-orange-600/70 font-bold ml-1">Skills</span>
            </p>
          </div>
        </div>
      </Motion.div>

      {/* Terminal */}
      <Motion.div
        className="absolute bottom-[58%] left-[34%] cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => setActivePanel("terminal")}
      >
        <img
          src={ImgTerminal}
          alt="terminal"
          className="w-[100px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]"
        />
      </Motion.div>

      {/* Phone */}
      <Motion.div
        className="absolute bottom-[4%] left-[70%] rotate-[10deg] cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => setActivePanel("contact")}
      >
        <img
          src={Phone}
          alt="phone"
          className="w-[250px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]"
        />
      </Motion.div>
      {/* ===== Modals ===== */}
      <AnimatePresence>
        {activePanel === "about" && (
          <Motion.div
            key="about"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed inset-0 flex items-center justify-center"
          >
            <About onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}
        {activePanel === "guide" && (
          <Motion.div
            key="guide"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed inset-0 flex items-center justify-center"
          >
            <Guide onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}
        {activePanel === "projects" && (
          <Motion.div
            key="projects"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed inset-0 flex items-center justify-center"
          >
            <ProjectsModal onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}
        {!activePanel && (
          <Motion.div
            className="absolute top-[4%] left-[5%] cursor-pointer z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDark(!isDark)}
          >
            <img src={Lamp} alt="lamp" className="w-[250px] drop-shadow-xl" />
          </Motion.div>
        )}
        {activePanel === "skills" && (
          <Motion.div
            key="skills"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed inset-0 flex items-center justify-center"
          >
            <SkillsNote onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}
        {activePanel === "experience" && (
          <Motion.div
            key="experience"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed inset-0 flex items-center justify-center"
          >
            <Experience onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}
        {activePanel === "terminal" && (
          <Motion.div
            key="terminal"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed inset-0 flex items-center justify-center"
          >
            <Terminal onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}

        {activePanel === "contact" && (
          <Motion.div
            key="contact"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed inset-0 flex items-center justify-center"
          >
            <ContactPanel onClose={() => setActivePanel(null)} />
          </Motion.div>
        )}
      </AnimatePresence>
      {!isDark && (
        <div className="pointer-events-none absolute top-[6%] left-[6%] w-[300px] h-[300px] bg-yellow-200/30 rounded-full blur-3xl" />
      )}
    </div>
  );
};

export default Workspace;
