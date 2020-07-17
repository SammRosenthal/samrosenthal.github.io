import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className="titleContainer">
      <div className="titleSection">
        <h1 className="jobTitle">
          <b>AAA, Costa Mesa CA</b> - Software Engineer
        </h1>
        <h3 className="jobDate">
          <i>April 2020 - Present</i>
        </h3>
      </div>
      <div className="jobContent">
        <ul className="">
          <li>
            Updated the local build environment to allow all Java developers to
            be able to work from home for Covd-19 by update our local WebSphere
            environment.
            <ul>
              <li>
                Provided all developers a PowerShell script to update DNS with
                remote IP
              </li>
              <li>
                Wrote and provided all developers with documentation on how to
                set workspace up at home and gave 1 on 1 assistance when needed
              </li>
            </ul>
          </li>
          <li>
            Identified and corrected issues with how our application called
            services that was causing long load times for end-users.
            <ul>
              <li>
                Updated logging service (Log4j) to be able to look at production
                logs and identify issues easier.
              </li>
              <li>
                Re-wrote how our application called services to increase load
                times and removed over 18,000 service calls per day.
              </li>
              <li>Reduced average end-user load times by over .5 seconds.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
