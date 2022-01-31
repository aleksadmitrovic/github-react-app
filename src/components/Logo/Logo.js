import React from "react";

import githubLogo from "../../assets/images/github-logo.png";
import "./Logo.css";

const logo = () => {
  return (
    <div className="logo">
      <img src={githubLogo} alt="github" />
    </div>
  );
};

export default logo;
