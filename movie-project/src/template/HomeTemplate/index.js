import { Redirect, Route } from "react-router";
import { Fragment } from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

export const HomeTemplate = (props) => {
  const { Component, redirectPath, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        if (localStorage.getItem("t")) {
          return (
            <Fragment>
              <Header />
              <Component {...propsRoute} />
              <Footer />
            </Fragment>
          );
        }
        return <Redirect to={redirectPath} />;
      }}
    />
  );
};
