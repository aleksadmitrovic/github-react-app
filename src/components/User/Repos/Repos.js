import React from "react";

import Repo from "./Repo/Repo";

const repos = (props) => {
  return (
    <div className="repos">
      <h4>Repositories</h4>
      {props.repos.map((repo) => (
        <Repo
          key={repo.id}
          name={repo.name}
          language={repo.language}
          visibility={repo.visibility}
        />
      ))}
    </div>
  );
};

export default repos;
