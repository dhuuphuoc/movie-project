import { Route } from "react-router";
import { Fragment } from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

export const HomeTemplate = (props) => {
  const { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header />
            <Component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
