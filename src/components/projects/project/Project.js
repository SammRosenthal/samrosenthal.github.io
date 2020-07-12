import React from "react";
import Button from "react-bootstrap/Button";
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
      &nbsp;{" "}
      <Button className="customButton">
        <a href={props.link}>More info</a>
      </Button>
      <p id="description">{props.desc}</p>
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
