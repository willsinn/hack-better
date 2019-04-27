import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import ProfilePage from "./";

class AdminUsernameRoute extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    const { username } = this.props.match.params;
    const { createUser, users } = this.props;

    return (
      <Switch>
        <Route
          path={`/admin/${username}`}
          render={() => (
            <ProfilePage
              username={username}
              createUser={createUser}
              users={users}
            />
          )}
        />
      </Switch>
    );
  }
}

export default AdminUsernameRoute;
