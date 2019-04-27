import React, { Component } from "react";

class ProfilePage extends Component {
  state = {};
  render() {
    const { username, createUser } = this.props;

    if (!this.props.users.find(user => user.username === username)) {
      createUser(username);
      console.log("hi");
    }
    return <div>Hello {username}</div>;
  }
}

export default ProfilePage;
