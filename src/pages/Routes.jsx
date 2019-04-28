import React, { Component } from "react";
import _ from "lodash";
import { Switch, Route, Redirect } from "react-router-dom";
import UserProvider from "../components/User/UserProvider";
import Loader from "../components/Loader";
import AdminUsernameRoute from "./admin/_username/routes";
import IdeaForm from "../forms/IdeaForm";
import ProfileShowPage from "./admin/_username/ProfileShowPage";
import ProfileForm from "./admin/_username/ProfileForm";
import EventsContainer from "./EventsContainer";
import IdeasContainer from "../components/Ideas/IdeasContainer";
import EventShowPage from "./EventShowPage";

class Routes extends Component {
  state = { user: {} };
  componentDidMount() {
    const { userSession } = this.props;

    const user = userSession.loadUserData();

    this.setState({ user });
  }

  render() {
    const { events } = this.props;
    const { user } = this.state;
    const {
      userSession,
      userData,
      users,
      createUser,
      updateUser,
      currentUser
    } = this.props;

    if (_.isEmpty(user)) {
      return <Loader />;
    }
    return (
      <UserProvider userSession={userSession}>
        <div>
          <Switch>
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
            <Route path={`/events/:event`} render={() => <EventsContainer />} />

            <Route
              path="/submitidea"
              render={() => <IdeaForm createIdea={this.props.createIdea} />}
            />
            <Route
              path="/profileform"
              render={() => (
                <ProfileForm
                  updateUser={updateUser}
                  currentUser={currentUser}
                  {...this.props}
                />
              )}
            />
            <Route
              path="/eventsshow"
              render={() => (
                <EventShowPage
                  event={this.props.events[0]}
                  createVote={this.props.createVote}
                  joinTeam={this.props.joinTeam}
                  currentUser={this.props.currentUser}
                />
              )}
            />
            <Route
              path={`/events`}
              render={() => (
                <EventsContainer
                  events={events}
                  createVote={this.props.createVote}
                />
              )}
            />
            <Route
              path="/profile"
              render={() => (
                <ProfileShowPage currentUser={currentUser} {...this.props} />
              )}
            />

            <Route
              exact
              path="/"
              render={() => <Redirect to={`/admin/${user.username}`} />}
            />
          </Switch>
        </div>
      </UserProvider>
    );
  }
}

export default Routes;
