import React, { Component } from "react";
import { Button, Container, TextField, withStyles } from "@material-ui/core";
import styles from "./style";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/authentication";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {
        taiKhoan: "",
        matKhau: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(signIn(this.state.loginInfo, this.goToHome));
  };

  goToHome = () => {
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="row" style={{ margin: "0" }}>
        <div className="col-6" style={{ padding: "0" }}>
          <img src="./assets/signinBg.jpg" alt style={{ width: "100%" }} />
        </div>
        <div className="col-6" style={{ padding: "0" }}>
          <div className={classes.padding}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
              ĐĂNG KÝ
            </h1>
            <Container maxWidth="sm">
              <form>
                <div style={{ marginBottom: 30 }}>
                  <TextField
                    name="taiKhoan"
                    onChange={this.handleChange}
                    fullWidth
                    label="Tài khoản"
                    variant="filled"
                  />
                </div>
                <div style={{ marginBottom: 30 }}>
                  <TextField
                    type="password"
                    name="matKhau"
                    onChange={this.handleChange}
                    fullWidth
                    label="Mật khẩu"
                    variant="filled"
                  />
                </div>

                <div style={{ textAlign: "center" }}>
                  <Button type="submit" variant="contained" color="primary">
                    Đăng Nhập
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

export default connect()(withStyles(styles)(SignIn));
