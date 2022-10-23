import React, { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Project from "./components/Project";

function App() {
  let pageComponent;
  const [page, setPage] = useState("about");
  console.log("page", page);
  if (page === "about") {
    pageComponent = <About />;
  } else if (page === "work") {
    pageComponent = <Project />;
  }

  return (
    <>
      <Header setPage={setPage} />
      {pageComponent}
      <Footer />
    </>
  );
}

export default App;
