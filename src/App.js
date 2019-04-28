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
    currentUser: {}
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
  };

  getUsers = () => {
    fetch("http://localhost:3000/api/v1/users")
      .then(res => res.json())
      .then(users => {
        const userData = this.state.userSession.loadUserData();
        let currentUser = users.find(
          user => user.username === userData.username
        );
        this.setState({ users, currentUser });
      });
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
        this.setState({ users: newArr, currentUser: user });
      });
  };

  updateUser = user => {
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        full_name: user.full_name,
        photo_url: user.photo,
        role_title: user.role,
        email: user.email
      })
    }).then(console.log)
    
  };

  render() {
    const { userSession, userData, users, currentUser } = this.state;
    console.log(currentUser)
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
              updateUser={this.updateUser}
              currentUser={currentUser}
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
