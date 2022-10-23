import React from "react";

export default function Navigation({ setPage }) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Tornike's Portfolio</div>
        <ul className="nav">
          <li>
            <button onClick={() => setPage("about")}>
              <u>About</u>
            </button>
          </li>
          <li>
            <button onClick={() => setPage("work")}>
              <u>Work</u>
            </button>
          </li>
          <li>
            <a href="#contact-section">
              <u>Contact</u>
            </a>
          </li>
          <li>
            <a href="https://tornicke.github.io/professional-portfolio/">
              <u>Resume</u>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
