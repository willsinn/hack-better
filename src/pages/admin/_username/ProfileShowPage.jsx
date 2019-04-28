import React, { Component } from "react";

class ProfilePage extends Component {
  
  render() {
    const { full_name, photo, role, email } = this.props;

    return (
      <div className="profile-container">
        <div className="profile-photo">
          <img src={photo} alt="profile photo" />
        </div>
        <div className="profile-info">
          <h3>{full_name}</h3>
          <p>Role: {role}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
