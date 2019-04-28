import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    open: false
  };

  static propTypes = {
    userSession: PropTypes.object.isRequired
  };

  handleSignOut = () => {
    const { userSession } = this.props;
    userSession.signUserOut();
    window.location = "/";
  };

  toggleNavBar = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { userSession } = this.props;
    const { open } = this.state;
    const isUserSignedIn = userSession.isUserSignedIn();

    return (
      <Navbar color="info" fixed="top" active={open}>
        <Navbar.Brand>
          <Navbar.Item>
            <p>HaCkSpAce</p>
          </Navbar.Item>

          <Navbar.Burger onClick={this.toggleNavBar} />
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Container position="end">
            {isUserSignedIn && (
              <React.Fragment>
                <Link to="/profile">
                  <Navbar.Item>My Profile</Navbar.Item>
                </Link>

                <Link to="/events">
                  <Navbar.Item>Events</Navbar.Item>
                </Link>

                <Link to="/eventshow">
                  <Navbar.Item>Pitches</Navbar.Item>
                </Link>

                <Navbar.Item onClick={this.handleSignOut}>Sign Out</Navbar.Item>
              </React.Fragment>
            )}
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default NavBar;
