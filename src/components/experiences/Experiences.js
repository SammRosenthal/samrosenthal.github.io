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
  {
    title: ["AAA, St. Louis MO", "Associate Software Engineer"],
    tenure: "June 2019 - April 2020",
    description: [
      [
        {
          summary: `Learned Java with no background and started providing production code within 2 months.`,
          details: [],
        },
        {
          summary: `Assisted new developers with setting up their local development environment and taught the artchitecture of our application.`,
          details: [],
        },
        {
          summary: `Co-lead a brand new feature to our application intrudcuing new technologies into it like Bootstrap and React.`,
          details: [
            `Provided the business with a presentaiton on the value of adding new technologies to our application and provided a proof
                  of concept to help them understand the value.`,
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
        <Experience jobInfo={jobInfo[1]} />
      </div>
    </div>
  );
};

export default Experiences;
