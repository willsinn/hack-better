import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'

class ProfileShowPage extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="profile-container">
        <div className="profile-photo">
          <img src="https://www.gooverseas.com/sites/default/files/styles/1014x/public/images/2018-03-11/Volunteer%20with%20Sea%20Turtles%20Hero.jpg?itok=6i_geFUq" alt="profile" />
        </div>
        <div className="profile-info">
          <h3>{currentUser.full_name}</h3>
          <p>Role: {currentUser.role_title}</p>
          <p>Email: {currentUser.email}</p>
        </div>
        <Link to='/profileform'><button>Edit</button></Link>
      </div>
    );
  }
}

export default withRouter(ProfileShowPage)
