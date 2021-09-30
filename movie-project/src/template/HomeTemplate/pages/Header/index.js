import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./style";

class Header extends Component {
  render() {
    const { me, classes } = this.props;

    return (
      <div>
        <Box>
          <AppBar position="static" className={classes.bgGrey}>
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                style={{ flexGrow: 1, alignSelf: "center" }}
              >
                <NavLink
                  activeStyle={{ color: "yellow" }}
                  to="/"
                  exact
                  style={{
                    marginRight: 20,
                    color: "#ffffff",
                    textDecoration: "none",
                  }}
                >
                  <img src="./assets/logo.png" alt style={{ width: "200px" }} />
                </NavLink>
              </Typography>
              {me ? (
                <>
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    ></Menu>
                  </div>
                </>
              ) : (
                <>
                  <Button color="inherit" component={Link} to="/signin">
                    Login
                  </Button>
                  <Button color="inherit" component={Link} to="/register">
                    Register
                  </Button>
                </>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  me: state.me,
});

export default connect(mapStateToProps)(withStyles(styles)(Header));
