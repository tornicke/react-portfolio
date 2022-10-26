import React from "react";
import IconImages from "../components/IconImages";
import { FaGithubSquare, FaLinkedin, FaStackOverflow } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      {" "}
      <div>
        <p>&#128187;</p>
      </div>
      <div>
        Designed by <a href="https://github.com/tornicke">Tornike</a>
      </div>
      <div>for ESMT Coding Bootcamp</div>
      <div>© 2022</div>
      <br></br>
      <div className="icon-images mx-auto">
        <div className="icon-border">
          <IconImages
            logo={<FaGithubSquare size="2rem" className="contact-logo" />}
            link="https://github.com/tornicke/"
          />
        </div>
        <div className="icon-border">
          <IconImages
            logo={<FaLinkedin size="2rem" className="contact-logo" />}
            link="https://www.linkedin.com/in/tornikej/"
          />
        </div>
        <div className="icon-border">
          <IconImages
            logo={<FaStackOverflow size="2rem" className="contact-logo" />}
            link="https://stackoverflow.com/users/19035653/tor/"
          />
        </div>{" "}
        <br></br>
      </div>
    </div>
  );
}
