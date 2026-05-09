// src/components/shared/Navbar.jsx

const Navbar = () => {

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">

      <div className="px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg flex gap-8">

        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-blue-500 transition"
        >
          About
        </button>

        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-blue-500 transition"
        >
          Projects
        </button>

        <button
          onClick={() => scrollToSection("services")}
          className="hover:text-blue-500 transition"
        >
          Services
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-blue-500 transition"
        >
          Contact
        </button>

      </div>
    </nav>
  );
};

export default Navbar;