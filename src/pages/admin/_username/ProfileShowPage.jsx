import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'

class ProfileShowPage extends Component {
  render() {
    console.log(this.props.location)
    const { currentUser } = this.props;
    return (
      <div className="profile-container">
        <div className="profile-photo">
          <img src={currentUser.photo_url} alt="profile" />
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
