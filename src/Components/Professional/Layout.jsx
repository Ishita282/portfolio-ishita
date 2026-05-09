// src/components/professional/Layout.jsx

import Hero from "./Hero";
import About from "./About";
import Projects from "./ProjectsGrid";
import Services from "./Service";
import Contact from "./Contact";

import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Layout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f7fb] text-black">
      
      {/* Background Gradients */}
      <div className="fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-400/10 blur-3xl rounded-full pointer-events-none" />

      {/* Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;