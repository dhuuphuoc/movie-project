import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../HomeTemplate/pages/Footer";
import Header from "../HomeTemplate/pages/Header";

export const UserTemplate = (props) => {
  // props là path, exact, Component
  const { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        //trả về props.location, props.history, props.match
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
