import React from "react";
import "./tech.scss";

const Tech = () => {
  return (
    <div className="techContainer">
      <h2 className="title">Skills</h2>
      <div className="skillsContainer">
        <div className="skills">
          <h3 className="skillTitle">Languages</h3>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="skills">
          <h3 className="skillTitle">Frameworks</h3>
          <ul>
            <li>React</li>
            <li>Struts2</li>
            <li>Spring Boot</li>
          </ul>
        </div>

        <div className="skills">
          <h3 className="skillTitle">Tools</h3>
          <ul>
            <li>Git</li>
            <li>Jira/Confluence</li>
            <li>Windows/Mac/Linux</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tech;
