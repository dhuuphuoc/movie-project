import React, { Component } from "react";
import { Button, Container, TextField, withStyles } from "@material-ui/core";
import styles from "./style";
import { request } from "../../API/request";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        maNhom: "GP01",
      },
      open: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.registerUser();
  };

  registerUser = () => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      body: this.state.user,
    })
      .then((res) => {
        this.handleSuccess(res.data.message);
      })
      .catch((err) => {
        alert(err);
      });
  };

  handleSuccess = (message) => {
    alert(message);
    this.props.history.push("/signIn");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="row" style={{ margin: "0" }}>
        <div className="col-6" style={{ padding: "0" }}>
          <img src="./assets/signinBg.jpg" alt="" style={{ width: "100%" }} />
        </div>
        <div className="col-6" style={{ padding: "0" }}>
          <div className={classes.padding}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
              ĐĂNG KÍ
            </h1>
            <Container maxWidth="sm">
              <form onSubmit={this.handleSubmit}>
                <div className={classes.marginBottom}>
                  <TextField
                    name="taiKhoan"
                    onChange={this.handleChange}
                    fullWidth
                    label="Tài khoản"
                    variant="filled"
                    required
                  />
                </div>
                <div className={classes.marginBottom}>
                  <TextField
                    type="password"
                    name="matKhau"
                    onChange={this.handleChange}
                    fullWidth
                    label="Mật khẩu"
                    variant="filled"
                    required
                  />
                </div>
                <div className={classes.marginBottom}>
                  <TextField
                    name="hoTen"
                    onChange={this.handleChange}
                    fullWidth
                    label="Họ Tên"
                    variant="filled"
                    required
                  />
                </div>
                <div className={classes.marginBottom}>
                  <TextField
                    name="email"
                    onChange={this.handleChange}
                    fullWidth
                    label="Email"
                    variant="filled"
                    required
                  />
                </div>
                <div className={classes.marginBottom}>
                  <TextField
                    name="soDT"
                    onChange={this.handleChange}
                    fullWidth
                    label="Số ĐT"
                    variant="filled"
                    required
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <Button type="submit" variant="contained" color="primary">
                    Đăng Ký
                  </Button>
                </div>
              </form>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Register);
