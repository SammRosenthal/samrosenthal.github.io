import React from "react";
import "./title.css";

const Title = () => {
  return (
    <div className="flexContainer">
      <div className="flexColumn">
        <h1>Sam Rosenthal</h1>
        <h2>Full-Stack Developer</h2>
      </div>
      <div className="flexColumn">
        <h3>samrrosenthal@gmail.com</h3>
        <h3>(714) 496-1591</h3>
      </div>
    </div>
  );
};

export default Title;
