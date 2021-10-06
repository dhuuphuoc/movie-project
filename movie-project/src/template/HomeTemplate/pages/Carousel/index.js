import Slider from "react-slick";
import React, { Component } from "react";
import { connect } from "react-redux";
import { request } from "../../../../API/request";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieBanner: [],
    };
  }

  componentDidMount() {
    this.getMovieBanner();
  }

  getMovieBanner = () => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
      method: "GET",
    })
      .then((res) => {
        console.log("res", res.data);
        this.setState({
          movieBanner: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div className="carousel" style={{ marginBottom: "2rem" }}>
        <Slider {...settings}>
          {this.state.movieBanner.map((item) => (
            <div>
              <img className="w-100" src={item.hinhAnh}></img>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
export default connect()(Carousel);
