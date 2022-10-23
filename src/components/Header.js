import React from "react";
import Navigation from "./Navigation";

export default function Header({ setPage }) {
  return (
    <header className="header">
      <Navigation setPage={setPage} />

      <div className="container"></div>
      <h3>Web Developer & UX Designer</h3>
      <img src="assets/images/avatar.png" alt="young man with glasses" />
      <a href="https://tornicke.github.io/professional-portfolio/">
        <img
          src="assets/images/header-image.jpg"
          alt="header image with a laptop, notepad and a cup of coffee"
        />
      </a>
    </header>
  );
}
