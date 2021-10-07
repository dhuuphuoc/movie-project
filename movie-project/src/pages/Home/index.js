import React, { Component } from "react";
import Carousel from "../../template/HomeTemplate/pages/Carousel";
import ListMovie from "../../template/HomeTemplate/pages/ListMovie";
import { connect } from "react-redux";
import InformationCalendar from "../../Component/InformationCalendar";
import { Container } from "@material-ui/core";
import News from "../News";

class Home extends Component {
  render() {
    return (
      <>
        <Carousel />
        <ListMovie />
        <Container>
          <InformationCalendar />
          <News/>
        </Container>
      </>
    );
  }
}

export default connect()(Home);
