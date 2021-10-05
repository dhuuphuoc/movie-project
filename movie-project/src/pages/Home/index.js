import React, { Component } from "react";
import Carousel from "../../template/HomeTemplate/pages/Carousel";
import { getMovieBanner } from "../../redux/actions/movie";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(getMovieBanner);
  }
}

export default connect()(Home);
