import React, { Component } from "react";
import axios from "axios";

import User from "../User/User";
import Spiner from "../Spinner/Spinner";

class HomePage extends Component {
  state = {
    user: null,
    repos: [],
  };

  async componentDidMount() {
    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
    const github = axios.create({
      baseURL: "https://api.github.com",
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    const userResponse = await github.get("/user");

    const reposResponse = await github.get("/user/repos");

    this.setState({ user: userResponse.data, repos: reposResponse.data });
  }
  render() {
    if (this.state.user !== null) {
      return (
        <div>
          <User user={this.state.user} repos={this.state.repos} />
        </div>
      );
    } else {
      return <Spiner />;
    }
  }
}

export default HomePage;
