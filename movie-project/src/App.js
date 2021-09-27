import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./template/HomeTemplate";
import Home from "./pages/Home";
import { UserTemplate } from "./template/UserTemplate";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import React from "react";
import { getMe } from "./API/auth";
import { connect } from "react-redux";

export const history = createBrowserHistory();
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <HomeTemplate path="/" exact Component={Home} />

          <UserTemplate path="/register" Component={Register} />
          <UserTemplate path="/signin" Component={Signin} />
          <UserTemplate />
        </Switch>
      </Router>
    );
  }
  componentDidMount() {
    this.props.dispatch(getMe);
  }
}

export default connect()(App);
