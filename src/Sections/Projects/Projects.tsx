import { useState, type JSX } from "react";
import "./Projects.css";
import "../../Components/ScrollIndicator/ScrollIndicator.css";
import { useInView } from "../../hooks/useInView";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
  subtitle: string;
}

const projects: Project[] = [
  {
    title: "Khipu Predict",
    subtitle: "Personal Project",
    description:
      "Full Stack web application that enables users to locate Peruvian khipus in museums and explore their structural characteristics through interactive visualization and analysis.",
    image: "/Images/KhipuP.png",
    technologies: [
      "React + Vite",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Python",
      "REST API",
    ],
    url: "https://frontend-khipu-predict.vercel.app/",
  },
  {
    title: "SafeHome",
    subtitle: "Academic Project",
    description:
      "Smart home security platform designed to present IoT-based security features through a modern, responsive interface.",
    image: "/Images/SafeHomeImg.png",
    technologies: ["Angular", "TypeScript", "Firebase", "IoT"],
    url: "https://upc-pre-2610-1asi0729-11834-softtech.github.io/SafeHome-LandingPage/#",
  },
  {
    title: "FlowQueue",
    subtitle: "Academic Project",
    description:
      "Virtual queue management platform designed to organize customer service, track ticket positions in real time, and provide administrative dashboards.",
    image: "/Images/QueueImg.png",
    technologies: ["Web Development", "Real-time", "Dashboard"],
    url: "https://flowqueue.github.io/landingFlowQueue/",
  },
];

function Projects(): JSX.Element {
  const { ref, isVisible } = useInView<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState(0);

  const rotate = (direction: number) => {
    setActiveIndex(
      (current) =>
        (current + direction + projects.length) % projects.length
    );
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      if (event.deltaX > 10) rotate(1);
      if (event.deltaX < -10) rotate(-1);
    }
  };

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

          <div className="projects-carousel" onWheel={handleWheel}>
            <button
              className="carousel-arrow carousel-prev"
              onClick={() => rotate(-1)}
              aria-label="Previous project"
              type="button"
            >
              &#10094;
            </button>

            <div className="projects-container">
              {[-1, 0, 1].map((offset) => {
                const index =
                  (activeIndex + offset + projects.length) %
                  projects.length;

                const project = projects[index];

                return (
                  <article
                    key={project.title}
                    className={`project-card ${
                      offset === 0 ? "active" : "side"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        setActiveIndex(index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${project.title}`}
                    aria-current={offset === 0 ? "true" : undefined}
                  >
                    <a
                      className="project-link"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => {
                        if (offset !== 0 || project.url === "#") {
                          event.preventDefault();
                          setActiveIndex(index);
                        }
                      }}
                    >
                      <img
                        src={project.image}
                        className="project-image"
                        alt={project.title}
                        loading="lazy"
                      />

                      <div className="project-content">
                        <h3 className="project-title">
                          {project.title}
                        </h3>
                        <h4 className ="project-subtitle">
                          {project.subtitle}
                        </h4>

                        <p className="project-description">
                          {project.description}
                        </p>

                        <div className="project-tags">
                          {project.technologies.map((technology) => (
                            <span key={technology}>{technology}</span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </article>
                );
              })}
            </div>

            <button
              className="carousel-arrow carousel-next"
              onClick={() => rotate(1)}
              aria-label="Next project"
              type="button"
            >
              &#10095;
            </button>
          </div>

          <div className="carousel-navigation">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                className={`carousel-dot ${
                  activeIndex === index ? "selected" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to ${project.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
              />
            ))}

            <span className="carousel-counter">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
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