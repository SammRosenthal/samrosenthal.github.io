import React from "react";
import "./tech.css";

const Tech = () => {
  return (
    <div className="techContainer">
      <h2 className="title">Skills</h2>
      <div className="skillsContainer">
        <div className="skills">
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="skills">
          <h3>Frameworks</h3>
          <ul>
            <li>React</li>
            <li>Struts2</li>
            <li>Spring Boot</li>
          </ul>
        </div>

        <div className="skills">
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>Jira/Confluence</li>
            <li>Windows/Mac/Debian OS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tech;
