// src/components/professional/About.jsx

import { motion as Motion } from "framer-motion";
import myImage from "../../assets/profile-pic.jpeg";

const About = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 md:p-12 shadow-[0_10px_60px_rgba(0,0,0,0.08)]"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            
            <img
              src={myImage}
              alt="profile"
              className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-xl"
            />

            <div>
              <h2 className="text-4xl font-bold">
                About Me
              </h2>

              <p className="mt-6 text-gray-600 leading-8 text-lg">
                I'm Ishita Sharma, a Full Stack Developer focused on building immersive UI systems, modern frontend experiences, and scalable web applications using React, Node.js, and modern technologies.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-4 py-2 rounded-full bg-gray-100">
                  React
                </span>

                <span className="px-4 py-2 rounded-full bg-gray-100">
                  Node.js
                </span>

                <span className="px-4 py-2 rounded-full bg-gray-100">
                  Tailwind
                </span>

                <span className="px-4 py-2 rounded-full bg-gray-100">
                  UI/UX
                </span>
              </div>
            </div>
          </div>
        </Motion.div>

      </div>
    </section>
  );
};

export default About;