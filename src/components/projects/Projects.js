import React from "react";
import Project from "./project/Project";
import "./projects.css";

const Projects = () => {
  return (
    <div className="parentProjectContainer">
      <div>
        <h2 className="title">Projects</h2>
      </div>
      <div className="projectsContainer">
        <Project
          title="RuneLite"
          link="https://github.com/runelite/runelite"
          desc="Contributor to this open source software to help maintane the most popular OldSchool Runescape client."
          tech={["Java", "Maven", "Google Lombok"]}
        />
        <Project
          title="Game of Life"
          link="https://github.com/SammRosenthal/mini-react-projects/tree/master/game-of-life"
          desc="Rewrite of the popular FreeCodeCamp tutorial of the Game of Life. The rewrite took this project from the standard 2017 style of react with class components and life cycle methods to using TypeScript and React hooks and custom hooks."
          tech={["TypeScript", "React", "React-Bootstrap"]}
        />
        <Project
          title="Personal Website"
          link="https://github.com/SammRosenthal/samrosenthal.github.io"
          desc="Personal website built using React. Heavy emphasis on reusable components to make any updates easy and quick."
          tech={["React", "Sass", "GitHub Pages"]}
        />
      </div>
    </div>
  );
};

export default Projects;
