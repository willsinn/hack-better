import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import ProfilePage from "./";
import EventsContainer from "../../EventsContainer";
import Routes from "../../Routes";

class AdminUsernameRoute extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    const { username } = this.props.match.params;
    const { createUser, users, updateUser, currentUser } = this.props;
console.log(users)
    return (
      <Switch>
        <Route
          path={`/admin/${username}`}
          render={() => (
            <ProfilePage
              username={username}
              createUser={createUser}
              users={users}
              updateUser={updateUser}
              currentUser={currentUser}
            />
          )}
        />

        {/* <Route
          path= "/pitchideas"
          component={EventsContainer}
        /> */}
      </Switch>
    );
  }
}

export default AdminUsernameRoute;
