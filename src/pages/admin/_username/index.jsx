import React, { Component } from "react";

class ProfilePage extends Component {
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
  }

  render() {
    const { username, createUser, users } = this.props;

    if (this._isMounted && !users.find(user => user.username === username)) {
      createUser(username);
    }

    return <div>Hello {username}</div>;
  }
}

export default ProfilePage;
