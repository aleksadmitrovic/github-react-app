import React from "react";

import "./Repo.css";

const repo = (props) => {
  return (
    <section className="container">
      <div className="card">
        <h5>{props.name}</h5>
        <p>{props.language}</p>
        <p>{props.visibility}</p>
      </div>
    </section>
  );
};

export default repo;
