import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, withStyles } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "react-router-dom";
import styles from "./style";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLogout() {
    localStorage.removeItem("token");
  }

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
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          color="inherit"
                          {...bindTrigger(popupState)}
                        >
                          <AccountCircle />
                          {me.hoTen}
                        </IconButton>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={popupState.close}>
                            My account
                          </MenuItem>
                          <MenuItem onClick={this.handleLogout}>
                            Logout
                          </MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
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
