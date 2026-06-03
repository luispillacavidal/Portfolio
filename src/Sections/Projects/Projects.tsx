import type { JSX } from "react";
import "./Projects.css";
import "../../Components/ScrollIndicator/ScrollIndicator.css";
import { useInView } from "../../hooks/useInView";

function Projects(): JSX.Element {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <main id="projects">
      <section
        ref={ref}
        className={`projects-section Projects-layout ${
          isVisible ? "enter" : ""
        }`}
      >
        <div className="Projects-top">
          <h2>Projects</h2>

          <div className="projects-container">
            <a
              href="https://frontend-khipu-predict.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img
                src="../public/Images/KhipuP.png"
                className="project-image"
                alt="Khipu Predict"
                loading="lazy"
              />

              <h3 className="project-title">Khipu Predict</h3>

              <p className="project-description">
                Full Stack web application that enables users to locate Peruvian khipus in museums and explore their structural characteristics through interactive visualization and analysis.
              </p>

              <div className="project-tags">
                <span>React+Vite</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>PostgreSQL</span>
                <span>Python</span>
                <span>Api-rest</span>
              </div>
            </a>
          </div>
        </div>

        <div className="scroll-projects1">
          <a href="#technologies">
            <span>TECHNOLOGIES</span>
            <span className="arrow-down">↓</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Projects;
