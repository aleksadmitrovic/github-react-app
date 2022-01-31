import React from "react";

import "./Input.css";

const input = (props) => {
  return (
    <React.Fragment>
      <input onChange={props.changed} type="text" placeholder="search user" />
    </React.Fragment>
  );
};

export default input;
