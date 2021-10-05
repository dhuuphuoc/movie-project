import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import Footer from "../HomeTemplate/pages/Footer";
import Header from "../HomeTemplate/pages/Header";

export const UserTemplate = (props) => {
  const { Component, redirectPath, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        // if (localStorage.getItem("token")) {
        //   return (
        //     <Fragment>
        //       <Header />
        //       <Component {...propsRoute} />
        //       <Footer />
        //     </Fragment>
        //   );
        // }
        // return <Redirect to={redirectPath} />;
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
