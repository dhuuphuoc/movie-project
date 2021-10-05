import React, { Component } from "react";
import { connect } from "react-redux";

class Carousel extends Component {
  render() {
    const { movieBanner } = this.props;
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  movieBanner: state.movieBanner,
});

export default connect(mapStateToProps)(Carousel);
