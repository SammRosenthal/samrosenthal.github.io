import React, { FunctionComponent } from "react";
import "./project.css";

/*
 * title: string
 * link: string
 * linkName: string
 * desc: string
 * tech: Array<string>
 */

const Project = (props) => {
  return (
    <div className="projectContainer">
      <h1>{props.title}</h1>
      <a>{props.link}</a>
      <p id="description">{props.desc}</p>
      <br />
      <p id="tech">todo</p>
    </div>
  );
};

export default Project;
