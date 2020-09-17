import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./title.css";

const Title = () => {
  return (
    <div className="flexContainer">
      <div className="flexColumn">
        <h1>Sam Rosenthal</h1>
        <h2>Full-Stack Developer</h2>
      </div>
      <div className="flexColumn">
        <h3>samrrosenthal@gmail.com</h3>
        <h3>(714) 496-1591</h3>
        <span className="icons">
          <a
            href="https://twitter.com/samisdecent"
            rel="noopener noreferrer"
            className="icon"
          >
            <FontAwesomeIcon icon={["fab", "twitter-square"]} />
          </a>
          <a
            href="https://github.com/sammrosenthal"
            rel="noopener noreferrer"
            className="icon"
          >
            <FontAwesomeIcon icon={["fab", "github-square"]} />
          </a>
          <a
            href="https://linkedin.com/in/samrrosenthal"
            rel="noopener noreferrer"
            className="icon"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </span>
        <h4>
          <a href="./SamRosenthalResume.pdf" download>
            <FontAwesomeIcon icon={["fas", "file"]} /> Resume
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Title;
