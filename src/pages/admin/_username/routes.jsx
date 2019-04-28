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
      </Switch>
    );
  }
}

export default AdminUsernameRoute;
