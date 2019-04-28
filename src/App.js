import React, { Component } from "react";
import "./stylesheets/main.scss";
import { Container } from "react-bulma-components";
import { appConfig } from "./utils/constants";
import { isUserSignedIn, UserSession, loadUserData } from "blockstack";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Routes from "./pages/Routes";

class App extends Component {
  state = {
    userSession: new UserSession({ appConfig }),
    userData: {},
    users: [],
    ideas: [],
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

    this.getUsers();
    this.getIdeas();
  };

  getUsers = () => {
    fetch("http://localhost:3000/api/v1/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  };

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
        this.setState({ users: newArr });
      });
  };

    getIdeas = () => {
      fetch("http://localhost:3000/api/v1/ideas")
      .then(res => res.json())
      .then(ideas => {
        this.setState(ideas)
      })
    }

  createIdea = (idea) => {
      fetch("http://localhost:3000/api/v1/ideas", {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Accept: "application/json"
        },
        body:JSON.stringify({
          title: idea.title,
          topic: idea.topic,
          problem: idea.problem,
          solution: idea.solution,
          audience: idea.audience,
        })
      })
      .then(res => res.json())
      .then(idea => {
        let newArr = [...this.state.ideas, idea]
        this.setState({ideas: newArr})
      })
  }




  render() {
    const { userSession, userData, users } = this.state;

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
            />
          ) : (
            <Login userSession={userSession} />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
