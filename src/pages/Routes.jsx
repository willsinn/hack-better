import React, { Component } from "react";
import _ from "lodash";
import { Switch, Route, Redirect } from "react-router-dom";
import UserProvider from "../components/User/UserProvider";
import Loader from "../components/Loader";
import AdminUsernameRoute from "./admin/_username/routes";
import ProfileShowPage from './admin/_username/ProfileShowPage'
import ProfileForm from './admin/_username/ProfileForm'

class Routes extends Component {
  state = { user: {} };
  componentDidMount() {
    const { userSession } = this.props;

    const user = userSession.loadUserData();

    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    const { userSession, userData, users, createUser, updateUser, currentUser } = this.props;

    if (_.isEmpty(user)) {
      return <Loader />;
    }
    return (
      <UserProvider userSession={userSession}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to={`/admin/${user.username}`} />}
          />
          <Route
            path="/admin/:username"
            render={({ match }) => (
              <AdminUsernameRoute
                match={match}
                userData={userData}
                users={users}
                createUser={createUser}
                updateUser={updateUser}
                currentUser={currentUser}
              />
            )}
          />
          <Route
            path="/profile"
            render={()=><ProfileShowPage currentUser={currentUser}/>}
            />
          <Route
            path="/profileform"
            render={()=><ProfileForm updateUser={updateUser} currentUser={currentUser}/>}
            />
        </Switch>
      </UserProvider>
    );
  }
}

export default Routes;
