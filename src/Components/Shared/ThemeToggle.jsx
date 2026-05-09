// src/components/shared/ThemeToggle.jsx

const ThemeToggle = ({ mode, setMode }) => {
  return (
    <div className="fixed bottom-10 left-10 z-50">
      
      <div className="flex gap-2 bg-white/70 backdrop-blur-xl p-2 rounded-2xl border border-white/40 shadow-lg">
        
        <button
          onClick={() => setMode("creative")}
          className={`px-4 py-2 rounded-xl transition ${
            mode === "creative"
              ? "bg-black text-white"
              : "bg-transparent"
          }`}
        >
          🎮
        </button>

        <button
          onClick={() => setMode("professional")}
          className={`px-4 py-2 rounded-xl transition ${
            mode === "professional"
              ? "bg-black text-white"
              : "bg-transparent"
          }`}
        >
          💼
        </button>

      </div>
    </div>
  );
};

export default ThemeToggle;