import React, { Component } from "react";
import axios from "axios";

import "./SearchPage.css";
import User from "../User/User";
import Button from "./Button/Button";
import Input from "./Input/Input";

class SearchPage extends Component {
  state = {
    searchInput: "",
    user: null,
    repos: [],
    searchBtnName: "Search",
    clearBtnName: "Clear",
  };

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleShowUser = async () => {
    const userResult = await axios(
      `https://api.github.com/users/${this.state.searchInput}`
    );

    const repoResult = await axios(
      `https://api.github.com/users/${this.state.searchInput}/repos`
    );

    this.setState({
      user: userResult.data,
      repos: repoResult.data,
    });
  };

  handleClearUser = () => {
    this.setState({ user: null });
  };

  render() {
    return (
      <div>
        <div className="search-field">
          <Input changed={this.handleChange} />
          <Button click={this.handleShowUser} name={this.state.searchBtnName} />
          <Button click={this.handleClearUser} name={this.state.clearBtnName} />
          {this.state.validInput ? <p>Input field cannot be empty</p> : null}
        </div>
        {this.state.user ? (
          <User user={this.state.user} repos={this.state.repos} />
        ) : null}
      </div>
    );
  }
}

export default SearchPage;
