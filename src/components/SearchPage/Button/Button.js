import React from "react";

import "./Button.css";

const button = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.click} className="btn">
        {props.name}
      </button>
    </React.Fragment>
  );
};

export default button;
