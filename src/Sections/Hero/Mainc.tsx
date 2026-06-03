import type { JSX } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Mainc.css";
import { useInView } from "../../hooks/useInView";

function Mainc(): JSX.Element {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <main
      ref={ref}
      className={`main-content ${isVisible ? "enter" : "exit"}`}
    >
      <section className="hero">

        <div className="hero-name-container">
          <video
            className="hero-name-video"
            src="/Video/Otoño.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <h1 className="hero-name solar-glow">
            Luis Angel Pillaca Vidal
          </h1>

          <p className="hero-subtitle">
            Software Engineer | Frontend Developer & Full-Stack Developer
          </p>
        </div>

        <div className="hero-top">

          <div className="hero-left">
            <h1 className="About-me">
              Looking for a professional, distinctive digital presence aligned with your goals?
            </h1>

            <p className="main-presentation">
              I specialize in building modern, high-performance web experiences that balance
              functionality and aesthetics to deliver measurable impact. I am a proactive and
              resilient Software Engineer with a strong autodidactic mindset, quick adaptability
              to new technologies, and a focus on solving complex problems. I bring strong attention
              to detail, a continuous improvement mentality, and a commitment to creating efficient,
              scalable, and user-centered solutions in dynamic, collaborative environments.
            </p>
          </div>

          <div className="social-buttons">
            <div className="social-item1">
              <a
                href="https://github.com/luispillacavidal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <span className="ISocial">GitHub</span>
            </div>

            <div className="social-item2">
              <a
                href="https://www.linkedin.com/in/luis-angel-pillaca-vidal-038702332/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <span className="ISocial">LinkedIn</span>
            </div>

            <div className="social-item3">
              <a
                href="mailto:pillacavidalluisangel@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <span className="ISocial"  >pillacavidalluisangel@gmail.com</span>
            </div>
          </div>

          <div className="hero-right">
            <img src="/Images/profile.jpg" alt="Profile Picture" />
          </div>
        </div>

        <div className="Curriculum">
          <a
            href="/CV LuisAngelPillacaVidal.pdf"
            download="CV LuisAngelPillacaVidal.pdf"
            rel="noopener noreferrer"
            aria-label="Curriculum"
          >
            View Curriculum
          </a>
        </div>

        <div className="scroll-projects">
          <a href="#projects">
            <span>Projects</span>
            <span className="arrow-down">↓</span>
          </a>
        </div>

      </section>
    </main>
  );
}

export default Mainc;
