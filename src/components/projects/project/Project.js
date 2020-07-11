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
      <div id="tech">
        <p>Tech:</p>
        <ul>
          {props.tech.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

Project.defaultProps = {
  tech: [],
};

export default Project;
