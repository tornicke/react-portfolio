import React from "react";
import Navigation from "../components/NavTabs";

export default function Header({ handlePageChange, currentPage }) {
  return (
    <header className="header">
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      <div className="container"></div>
      <div>
        <h2>Tornike</h2>
      </div>
      <div>
        <h4>Web Developer & UX Designer</h4>
      </div>
      <img
        src="assets/images/header-image.jpg"
        alt="web development, code, globe, internet"
      />
    </header>
  );
}
