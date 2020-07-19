import React from "react";
import "./experience.css";

const Experience = (props) => {
  return (
    <div className="titleContainer">
      <div className="titleSection">
        <h1 className="jobTitle">
          <b>{props.jobInfo.title[0]}</b> - {props.jobInfo.title[1]}
        </h1>
        <h3 className="jobDate">
          <i>{props.jobInfo.tenure}</i>
        </h3>
      </div>
      <div className="jobContent">
        <ul>
          <li>
            {props.jobInfo.description[0].map((e) => {
              let temp = [e.summary];
              temp.push(
                <ul>
                  {e.details.map((v) => {
                    console.log(v);
                    return <li>{v}</li>;
                  })}
                </ul>
              );
              return temp;
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
