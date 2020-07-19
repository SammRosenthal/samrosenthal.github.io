import React from "react";
import "./experiences.css";
import Experience from "./experience/Experience";

const jobInfo = [
  {
    title: ["AAA, Costa Mesa CA", "Software Engineer"],
    tenure: "April 2020 - Present",
    description: [
      [
        {
          summary: `Updated the local build environment to allow all Java developers
        to be able to work from home for Covid-19 by updating our local WebSphere environment.`,
          details: [
            `Provided all developers a PowerShell script to update DNS with remote IP.`,
            `Wrote and provided all developers with documentation on how to set workspace up at
                home and gave 1 on 1 assistance when needed.`,
          ],
        },
        {
          summary: `Identified and corrected issues with how our application called services 
              that were causing long load times for end-users`,
          details: [
            `Updated logging services (Log4j) to be able to look at production logs and identify
                  issues easier`,
            `Re-wrote how our application called services to increase load times and removed over 18,000
                  service calls per day.`,
            `Reduced average end-user load times by over half a second.`,
          ],
        },
      ],
    ],
  },
];

const Experiences = () => {
  return (
    <div className="parentExperienceContainer ">
      <div>
        <h2 class="title">Experiences</h2>
      </div>
      <div className="experienceContainer">
        <Experience jobInfo={jobInfo[0]} />
      </div>
    </div>
  );
};

export default Experiences;
