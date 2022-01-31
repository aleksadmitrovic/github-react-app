import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import Logo from "../Logo/Logo";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <div>
          <Logo />
        </div>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/search">SEARCH</Link>
        </nav>
      </header>
    );
  }
}

export default NavBar;
