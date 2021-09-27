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
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { me } = this.props;
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink
                  activeStyle={{ color: "#f00000" }}
                  to="/"
                  exact
                  style={{ marginRight: 20, color: "#ffffff" }}
                >
                  Movie
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

export default connect(mapStateToProps)(Header);
