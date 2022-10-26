import React from "react";

function IconImages({ link, logo }) {
  return (
    <div>
      <a className="contact-icons" href={link}>
        {logo}
      </a>
    </div>
  );
}

export default IconImages;
