import type { JSX } from "react";
import "./Education.css";
import { useInView } from "../../hooks/useInView";

function Education(): JSX.Element {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <main
      className={`education-section ${isVisible ? "enter" : ""}`}
      id="education-contact"
      ref={ref}
    >
      <section className="Education-layout">

        <div className="Education-top">
          <h2>Education & Contact</h2>
        </div>

        <div className="education-content">

          <div className="education-block">
            <h3>Education</h3>

            <div className="education-item">
              <h4>Software Engineering</h4>
              <p className="education-place">
                Universidad Peruana de Ciencias Aplicadas (UPC)
              </p>
              <p className="education-description">
                Solid academic background in Software Engineering at the Universidad Peruana de Ciencias Aplicadas (UPC),
                currently in the 6th academic cycle, with a strong focus on problem-solving, data structures, algorithms,
                object-oriented programming, and full-stack web development. Experience working on real-world projects 
                using modern technologies and agile methodologies.
              </p>
            </div>

            <div className="education-skills">
              <span>Problem Solving</span>
              <span>Analytical Thinking</span>
              <span>Self-Learning</span>
              <span>Team Collaboration</span>
              <span>Adaptability</span>
              <span>Time Management</span>
            </div>
          </div>

          <div className="education-block">
            <h3>Contact</h3>

            <p className="contact-text">
              Interested in collaborating, building impactful projects, or discussing
              new opportunities? I am always open to meaningful conversations and
              continuous learning.
            </p>

            <div className="contact-info">
              <p><strong>Email:</strong> luisangelpillaca@gmail.com</p>
              <p><strong>LinkedIn:</strong> linkedin.com/in/luis-angel-pillaca</p>
              <p><strong>GitHub:</strong> github.com/LuisAngelPillaca</p>
              <p><strong>Location:</strong> Lima, Peru</p>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}

export default Education;
