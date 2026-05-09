import { useEffect, useState } from "react";

import CreativeLayout from "./Components/Creative/Workspace";
import ProfessionalLayout from "./Components/Professional/Layout";

import ThemeToggle from "./Components/Shared/ThemeToggle";

import "./App.css";

function App() {

  const [mode, setMode] = useState("creative");
  const [loading, setLoading] = useState(true);

  /* Detect Screen Size */
  useEffect(() => {

    const checkScreen = () => {

      if (window.innerWidth < 1024) {
        setMode("professional");
      } else {
        setMode("creative");
      }

    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };

  }, []);

  /* Loader */
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  /* Loading Screen */
  if (loading) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center overflow-hidden">

        <div className="relative w-20 h-20 animate-loaderRotate">

          <span className="dot top-0 left-1/2 -translate-x-1/2" />
          <span className="dot top-3 right-3" />
          <span className="dot top-1/2 right-0 -translate-y-1/2" />
          <span className="dot bottom-3 right-3" />
          <span className="dot bottom-0 left-1/2 -translate-x-1/2" />
          <span className="dot bottom-3 left-3" />
          <span className="dot top-1/2 left-0 -translate-y-1/2" />
          <span className="dot top-3 left-3" />

        </div>

      </div>
    );
  }

  return (
    <div>

      <ThemeToggle
        mode={mode}
        setMode={setMode}
      />

      {mode === "professional" ? (
        <ProfessionalLayout />
      ) : (
        <CreativeLayout />
      )}

    </div>
  );
}

export default App;