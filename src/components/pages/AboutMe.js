import React from "react";

const AboutMe = () => (
  <div>
    <div className = "about">
    <h2>About Me</h2>
    </div>
    <div className = "about">
    <img
            src={require(`../../assets/small/Pic.png`).default}
            alt="profile"
            className="profimg"
            key="profile"
    />
    </div>
    <div className = "about">
    <p>
   I will write something about myself here. 
    </p>
    </div>
  </div>
);

export default AboutMe;