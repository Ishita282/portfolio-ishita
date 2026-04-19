import React, { useState } from "react";

const Terminal = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "Welcome to Ishita OS",
    "Type 'help' to see commands"
  ]);

  const handleCommand = (cmd) => {
    let response = "";

    switch (cmd.toLowerCase()) {
      case "help":
        response = "Commands: about, projects, skills, contact";
        break;
      case "about":
        response = "I'm Ishita, a Full Stack Developer building real-world apps. Click on the laptop to know more.";
        break;
      case "projects":
        response = "Check out my projects by clicking the box.";
        break;
      case "skills":
        response = "React, Node.js, MongoDB, AI tools & more. Click on the sticky-notes to know more.";
        break;
      case "contact":
        response = "Email: ishitasharma2428@gmail.com. Click on the phone to know more.";
        break;
      default:
        response = "Command not found!";
    }

    setHistory([...history, `> ${cmd}`, response]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <div className="fixed inset-0 bg-black text-green-400 p-4 md:p-6 z-50 font-mono flex flex-col">

      {/* Close */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white"
      >
        ✖
      </button>

      {/* Terminal Output */}
      <div className="mb-4 flex-1 overflow-y-auto pr-2 text-sm md:text-base">
        {history.map((line, index) => (
          <p key={index} className="break-words">
            {line}
          </p>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center">
        <span className="text-sm md:text-base">&gt;</span>

        <input
          className="bg-transparent outline-none ml-2 flex-1 text-sm md:text-base"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>

    </div>
  );
};

export default Terminal;