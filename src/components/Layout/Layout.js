import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";

class Layout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="content">{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
