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
import Detail from "./pages/Detail";
import Checkout from "./pages/Checkout";

export const history = createBrowserHistory();
class App extends React.Component {
  render() {
    return (
      <Router history={history}>z
        <ThemeProvider theme={theme}>
          <Switch>
            <HomeTemplate
              path="/"
              exact
              Component={Home}
              redirectPath="/signin"
            />
            <UserTemplate
              path="/register"
              Component={Register}
              redirectPath="/"
            />
            <UserTemplate path="/signin" Component={Signin} redirectPath="/" />
            <HomeTemplate
              path="/detail/:id"
              Component={Detail}
              redirectPath="/signin"
            />
            <HomeTemplate
              path="/checkout/:id"
              Component={Checkout}
              redirectPath="/signin"
            />
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
