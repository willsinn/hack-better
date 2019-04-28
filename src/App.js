import React, { Component } from "react";
import "./stylesheets/main.scss";
import { Container } from "react-bulma-components";
import { appConfig } from "./utils/constants";

import { isUserSignedIn, UserSession, loadUserData } from "blockstack";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Routes from "./pages/Routes";
import { withRouter } from "react-router-dom";
import events from "./hacky";

class App extends Component {
  state = {
    userSession: new UserSession({ appConfig }),
    userData: {},
    users: [],
    ideas: [],
    currentUser: {},
    events
  };

  componentDidMount = async () => {
    const { userSession } = this.state;

    if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
      const userData = await userSession.handlePendingSignIn();

      if (!userData.username) {
        throw new Error("This app requires a username");
      }

      window.location = "/";
    }

    if (userSession.isUserSignedIn()) {
      const userData = userSession.loadUserData();

      this.setState({
        userData
      });
    }
    setInterval = () => (
      function() {
        this.getUsers();
        this.getIdeas();
      },
      3000
    );
  };

  getUsers() {
    fetch("http://localhost:3000/api/v1/users")
      .then(res => res.json())
      .then(users => {
        const userData = this.state.userSession.loadUserData();
        let currentUser = users.find(
          user => user.username === userData.username
        );
        this.setState({ users, currentUser });
      });
  }

  createUser = username => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username
      })
    })
      .then(res => res.json())
      .then(user => {
        let newArr = [...this.state.users, user];
        this.setState({ users: newArr, currentUser: user });
      });
  };

  getIdeas() {
    fetch("http://localhost:3000/api/v1/ideas")
      .then(res => res.json())
      .then(ideas => {
        this.setState({ ideas });
      });
  }

  createIdea = idea => {
    fetch("http://localhost:3000/api/v1/ideas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: idea.title,
        topic: idea.topic,
        problem: idea.problem,
        solution: idea.solution,
        audience: idea.audience
      })
    })
      .then(res => res.json())
      .then(idea => {
        let newArr = [...this.state.ideas, idea];
        this.setState({ ideas: newArr });
      });
  };

  updateUser = user => {
    let id = this.state.currentUser.id;
    let username = this.state.currentUser.username;
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: username,
        full_name: user.full_name,
        photo_url: user.photo,
        role_title: user.role,
        email: user.email,
        team_id: null
      })
    })
      .then(res => res.json())
      .then(user =>
        this.setState({
          currentUser: user
        })
      );
  };

  createVote = idea_id => {
    fetch("http://localhost:3000/api/v1/votes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.currentUser.id,
        idea_id
      })
    });
    // .then(res => res.json())
    // .then(vote => {

    //   let newArr = this.state.ideas.map(idea => idea.id === vote.idea_id)

    //   this.setState({ ideas: newArr });
    // });
  };

  joinTeam = team_id => {
    let id = this.state.currentUser.id;
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        team_id
      })
    })
      .then(res => res.json())
      .then(user => this.setState({ currentUser: user }));
  };

  render() {
    const { userSession, userData, users, currentUser, events } = this.state;
    return (
      <div className="App">
        <NavBar userSession={userSession} />
        <Container>
          {userSession.isUserSignedIn() ? (
            <Routes
              userSession={userSession}
              userData={userData}
              users={users}
              createUser={this.createUser}
              createIdea={this.createIdea}
              updateUser={this.updateUser}
              currentUser={currentUser}
              events={events}
              createVote={this.createVote}
              joinTeam={this.joinTeam}
            />
          ) : (
            <Login userSession={userSession} />
          )}
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
