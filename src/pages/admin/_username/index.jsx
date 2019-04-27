import React, { Component } from "react";

class ProfilePage extends Component {
  state = { foundUser: null };

  componentWillMount() {
    const { username, users } = this.props;

    if (users.find(user => user.username === username)) {
      this.setState({ foundUser: true });
    } else {
      this.setState({ foundUser: false });
    }
  }

  render() {
    const { username, createUser } = this.props;
    const { foundUser } = this.state;

    if (foundUser === false) {
      createUser(username);
      this.setState({foundUser: true})
    }

    return <div>Hello {username}</div>;
  }
}

export default ProfilePage;
