import React, { Component } from "react";
import "./stylesheets/main.scss";
import { Container } from "react-bulma-components";
import { appConfig } from "./utils/constants";
import { UserSession } from "blockstack";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Routes from "./pages/Routes";

class App extends Component {
  state = {
    userSession: new UserSession({ appConfig })
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
  };

  render() {
    const { userSession } = this.state;

    return (
      <div className="App">
        <NavBar userSession={userSession} />
        <Container>
          {userSession.isUserSignedIn() ? (
            <Routes userSession={userSession} />
          ) : (
            <Login userSession={userSession} />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
