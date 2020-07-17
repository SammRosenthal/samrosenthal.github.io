import React from "react";
import "./experiences.css";
import Experience from "./experience/Experience";

const Experiences = () => {
  return (
    <div className="parentExperienceContainer ">
      <div>
        <h2 class="title">Experiences</h2>
      </div>
      <div className="experienceContainer">
        <Experience />
      </div>
    </div>
  );
};

export default Experiences;
