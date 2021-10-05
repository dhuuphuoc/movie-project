import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./template/HomeTemplate";
import Home from "./pages/Home";
import { UserTemplate } from "./template/UserTemplate";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import React from "react";
import { getMe } from "./redux/actions/authentication";
import { connect } from "react-redux";
import theme from "./themes";
import { ThemeProvider } from "@material-ui/core";

export const history = createBrowserHistory();
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Switch>
            <HomeTemplate path="/" exact Component={Home} />
            <UserTemplate path="/register" Component={Register} />
            <UserTemplate path="/signin" Component={Signin} />
            <UserTemplate />
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
  componentDidMount() {
    this.props.dispatch(getMe);
  }
}

export default connect()(App);
