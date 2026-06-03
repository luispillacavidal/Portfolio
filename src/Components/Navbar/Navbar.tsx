import type { JSX } from "react";
import { useState } from "react";
import "./Navbar.css";

function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <button
        className="navbar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`navbar-left ${open ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>

      <div className="navbar-logo">
        <video src="../public/Video/Log.mp4" autoPlay loop muted playsInline />
      </div>

      <ul className={`navbar-links ${open ? "open" : ""}`}>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#education-contact">Education & Contact</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;
