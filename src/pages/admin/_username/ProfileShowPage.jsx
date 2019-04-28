import React, { Component } from "react";
import { Link } from 'react-router-dom'

class ProfileShowPage extends Component {
  render() {
    const { currentUser } = this.props;
    console.log(this.props.currentUser)
    return (
      <div className="profile-container">
        <div className="profile-photo">
          <img src={currentUser.photo_url} alt="profile photo" />
        </div>
        <div className="profile-info">
          <h3>{currentUser.full_name}</h3>
          <p>Role: {currentUser.role}</p>
          <p>Email: {currentUser.email}</p>
        </div>
        <Link to='/profileform'><button>Edit</button></Link>
      </div>
    );
  }
}

export default ProfileShowPage;
