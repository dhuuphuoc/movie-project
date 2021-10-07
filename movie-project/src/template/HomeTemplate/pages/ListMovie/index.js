import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  CardContent,
  Container,
} from "@material-ui/core";
import { Tabs } from "antd";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { request } from "../../../../API/request";

const { TabPane } = Tabs;
class ListMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      phimDangChieu: [],
      phimSapChieu: [],
      value: 1,
    };
  }

  componentDidMount() {
    this.getMovieList();
  }

  getMovieList = () => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      params: {
        maNhom: "GP01",
      },
    })
      .then((res) => {
        console.log("res", res.data);
        this.setState({
          movieList: res.data.content,
        });
        this.splitMovie(this.state.movieList);
        console.log("movie list", this.state.movieList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  splitMovie = (arr) => {
    this.setState({
      phimDangChieu: arr.filter((item) => item.sapChieu === false),
      phimSapChieu: arr.filter((item) => item.sapChieu === true),
    });
  };

  render() {
    return (
      <div className="list-movie mt-5 mb-5">
        <h1 className="text-center">Danh sách phim</h1>
        <Container maxWidth="lg">
          <Tabs centered defaultActiveKey="1">
            <TabPane tab="Phim đang chiếu" key="1">
              <Grid container spacing={2}>
                {this.state.phimDangChieu.map((item, index) => (
                  <Grid key={index} item xs={6} md={4} lg={2}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.hinhAnh}
                        alt="movie"
                      />
                      <CardContent style={{ height: "100px" }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          style={{ fontSize: "15px" }}
                          component="div"
                        >
                          {item.tenPhim}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <NavLink
                          to={`/detail/${item.maPhim}`}
                          component={Button}
                          variant="contained"
                          size="small"
                        >
                          Chi tiết
                        </NavLink>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPane>
            <TabPane tab="Phim sắp chiếu" key="2">
              <Grid container spacing={2}>
                {this.state.phimSapChieu.map((item, index) => (
                  <Grid key={index} item xs={6} md={4} lg={2}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.hinhAnh}
                        alt="movie"
                      />
                      <CardContent style={{ height: "100px" }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          style={{ fontSize: "15px" }}
                          component="div"
                        >
                          {item.tenPhim}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <NavLink
                          to={`/detail/${item.maPhim}`}
                          component={Button}
                          variant="contained"
                          size="small"
                        >
                          Chi tiết
                        </NavLink>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPane>
          </Tabs>
        </Container>
      </div>
    );
  }
}

export default ListMovie;
