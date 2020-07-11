import React from "react";
import Project from "./project/Project";
import "./projects.css";

const Projects = () => {
  return (
    <div className="parentProjectContainer">
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default Projects;
