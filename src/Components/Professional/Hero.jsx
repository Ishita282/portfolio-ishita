// src/components/professional/Hero.jsx

import { motion as Motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-400/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-400/20 blur-3xl rounded-full" />

      <Motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl text-center"
      >
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
          Full Stack Developer
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mt-5 leading-tight">
          Building
          <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Modern Web Experiences
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-8 text-lg text-gray-600 leading-relaxed">
          Creating immersive UI systems, interactive web applications, and
          premium frontend experiences.
        </p>

        <div className="flex gap-4 justify-center mt-10">
          <button
            className="px-7 py-4 rounded-2xl bg-black text-white hover:scale-105 transition"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </button>

          <button
            className="px-7 py-4 rounded-2xl border border-black hover:bg-black hover:text-white transition"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </button>
        </div>
      </Motion.div>
    </section>
  );
};

export default Hero;
