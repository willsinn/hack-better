import React, { Component } from "react";
import ProfileForm from "./ProfileForm";
// import HomePage from "../../../containers/HomePage";
import ProfileShowPage from './ProfileShowPage'

class ProfilePage extends Component {
  _isMounted = false;

  state = {
    newUser: false
  };

  componentDidMount() {
    this._isMounted = true;
  }

  render() {
    const { username, createUser, users, currentUser } = this.props;

    if (this._isMounted && !users.find(user => user.username === username)) {
      createUser(username);
      this.setState({ newUser: true });
    }

    return (
      <div>
        {this.state.newUser ? (
          <ProfileForm updateUser={this.props.updateUser} currentUser={currentUser} />
        ) : (
          <ProfileShowPage currentUser={currentUser} />
        )}
      </div>
    );
  }
}

export default ProfilePage;
