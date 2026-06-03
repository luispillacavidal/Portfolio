import type { JSX } from "react";
import { useInView } from "../../hooks/useInView";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
    FaMicrosoft
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiCplusplus,
  SiVite,
  SiNpm,
  SiDocker,
  SiPostman,
  SiUbuntu,
  SiVercel,
  SiRender
} from "react-icons/si";

import "./Technologies.css";

function Technologies(): JSX.Element {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <main
      id="technologies"
      ref={ref}
      className={`technologies-section ${isVisible ? "enter" : ""}`}
    >
      <section className="Technologies-layout">

        <div className="Technologies-top">
          <h2>Technologies</h2>
        </div>

        <div className="tech-row">
          <div className="tech-block">
            <h3>Frontend</h3>
            <div className="tech-icons">
              <FaReact data-icon="react" />
              <SiTypescript data-icon="typescript" />
              <SiJavascript data-icon="javascript" />
              <FaHtml5 data-icon="html" />
              <FaCss3Alt data-icon="css" />
              <SiTailwindcss data-icon="tailwind" />
            </div>
          </div>

          <div className="tech-block">
            <h3>Backend</h3>
            <div className="tech-icons">
              <FaNodeJs data-icon="node" />
              <SiExpress data-icon="express" />
            </div>
          </div>
        </div>

        <div className="tech-row">
          <div className="tech-block">
            <h3>Databases</h3>
            <div className="tech-icons">
              <SiPostgresql data-icon="postgresql" />
              <SiMysql data-icon="mysql" />
              <SiMongodb data-icon="mongodb" />
              <SiFirebase data-icon="firebase" />
            </div>
          </div>

          <div className="tech-block">
            <h3>Programming Languages</h3>
            <div className="tech-icons">
              <SiTypescript data-icon="typescript" />
              <SiJavascript data-icon="javascript" />
              <SiCplusplus data-icon="cplusplus" />
              <FaPython data-icon="python" />
            </div>
          </div>
        </div>

        <div className="tech-row">
          <div className="tech-block">
            <h3>Cloud & DevOps</h3>
            <div className="tech-icons">
              <FaMicrosoft data-icon="azure" />
              <SiDocker data-icon="docker" />
              <SiUbuntu data-icon="ubuntu" />
            </div>
          </div>

          <div className="tech-block">
            <h3>Tools & Deployment</h3>
            <div className="tech-icons">
              <FaGitAlt data-icon="git" />
              <FaGithub data-icon="github" />
              <SiVite data-icon="vite" />
              <SiNpm data-icon="npm" />
              <SiPostman data-icon="postman" />
              <SiVercel data-icon="vercel" />
              <SiRender data-icon="render" />
            </div>
          </div>
        </div>

        <div className="scroll-projects">
          <a href="#education-contact">
            <span>Education & Contact</span>
            <span className="arrow-down">↓</span>
          </a>
        </div>

      </section>
    </main>
  );
}

export default Technologies;