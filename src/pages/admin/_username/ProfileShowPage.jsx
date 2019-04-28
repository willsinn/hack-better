import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'

class ProfileShowPage extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="profileWindow">
        <div className="profile-photo">
          <img className="img-size" src="http://foodbank.bradfrostweb.com/patternlab/v7/images/fpo_avatar.png" alt="profile" />
        </div>

        <div className="profile-info">
          <h3>{currentUser.full_name}</h3>
          <p> {currentUser.email}</p>
          <p> {currentUser.role_title}</p>
          
        </div>
        <Link to='/profileform'><button className="profile">Create Your Profile</button></Link>
      </div>
    );
  }
}

export default withRouter(ProfileShowPage)
