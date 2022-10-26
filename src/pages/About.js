import React from "react";

export default function About() {
  return (
    <div>
      <div className="container">
        <img src="assets/images/avatar.png" alt="young man with glasses" />
      </div>

      <div className="container">
        <section id="about-section">
          <h2>About me</h2>
        </section>
      </div>
      <div className="container">
        <div className="boxa">
          <div>
            My name is Tornike and I am a full-stack web development bootcamp
            student. I am a web developer and a UX designer aiming to improve my
            programming skills to deliver user-centric, interactive and
            intuitive web projects.
          </div>
          <br></br>
          <div>
            {" "}
            To have a look at my previous projects, please check out my{" "}
            <a href="https://github.com/tornicke">GitHub page</a>.
          </div>
          <br></br>
          <div>
            Please do not hesitate to{" "}
            <a href="mailto:torniqe@gmail.com">send me an email</a> should you
            have a question or want to collaborate.
          </div>
        </div>
      </div>
    </div>
  );
}
