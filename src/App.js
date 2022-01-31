import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SearchPage from "./components/SearchPage/SearchPage";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
console.warn = () => {};
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/search" component={SearchPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Layout>
        <div></div>
      </div>
    );
  }
}

export default App;
