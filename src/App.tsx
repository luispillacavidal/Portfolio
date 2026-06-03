import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Mainc from "./Sections/Hero/Mainc";
import Projects from "./Sections/Projects/Projects";
import Technologies from "./Sections/Technologies/Technologies";
import Education from "./Sections/Education/Education";
import "./App.css";

function App() {
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
    const increments = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increments;
        if (next >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">

      {loading && (
        <div className="loading-screen">
          <div
            className="loading-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <video
        className={`app-bg-video ${!loading ? "show" : ""}`}
        src="../public/Video/Navbar-font.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      <div className={`app-content ${!loading ? "show" : ""}`}>
        <Navbar />
        <Mainc />
        <Projects />
        <Technologies />
        <Education />
      </div>

    </div>
  );
}

export default App;
