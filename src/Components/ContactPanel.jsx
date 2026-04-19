import React from "react";

const ContactPanel = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="w-[400px] bg-white rounded-2xl shadow-2xl p-6 relative text-center">

        {/* Close */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">Let&apos;s Connect</h2>

        <p className="text-gray-600 mb-6">
          Open to opportunities, collaborations & freelance work.
        </p>

        <div className="flex flex-col gap-3">

          <a 
            href="https://github.com/Ishita282"
            target="_blank"
            className="bg-black text-white py-2 rounded-lg hover:scale-105 transition"
          >
            GitHub
          </a>

          <a 
            href="https://linkedin.com/in/ishita-s-89b2b43b4/"
            target="_blank"
            className="border py-2 rounded-lg hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>

          <a 
            href="mailto:ishitasharma2428@gmail.com"
            className="border py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Email Me
          </a>

        </div>

      </div>
    </div>
  );
};

export default ContactPanel;