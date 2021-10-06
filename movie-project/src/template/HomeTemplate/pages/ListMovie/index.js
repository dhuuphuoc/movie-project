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
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { request } from "../../../../API/request";

class ListMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      phimDangChieu: [],
      phimSapChieu: [],
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Danh sách phim</h1>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {this.state.movieList.map((item) => (
              <Grid item xs={2}>
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
                    {/* <Typography
                      className="movie-description"
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.moTa}
                    </Typography> */}
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
        </Container>
      </div>
    );
  }
}

export default ListMovie;
