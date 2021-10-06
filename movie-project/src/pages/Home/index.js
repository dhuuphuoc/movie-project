import React, { Component } from "react";
import Carousel from "../../template/HomeTemplate/pages/Carousel";
import ListMovie from "../../template/HomeTemplate/pages/ListMovie";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <>
        <Carousel />
        <ListMovie />
      </>
    );
  }
}

export default connect()(Home);
