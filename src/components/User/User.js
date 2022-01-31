import React from "react";

import "./User.css";
import Repos from "./Repos/Repos";

const user = (props) => {
  return (
    <div className="user">
      <div className="upper-container">
        <div className="img">
          <img src={props.user.avatar_url} alt="avatar_url" />
        </div>
        <div className="info">
          <h3>{props.user.login}</h3>
          <p>followers:{props.user.followers}</p>
          <p>following:{props.user.following}</p>
          <p>gists:{props.user.public_gists}</p>
          <p>repos:{props.user.public_repos}</p>
        </div>
      </div>
      <div className="lower-container">
        <Repos repos={props.repos} />
      </div>
    </div>
  );
};

export default user;
