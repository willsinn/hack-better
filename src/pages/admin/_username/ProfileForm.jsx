import React from "react";
import { Link } from 'react-router-dom'

class ProfileForm extends React.Component {
  //username and team_id should be pre-filled
  state = {
    full_name: "",
    photo: "",
    role: "",
    email: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    let user = this.state;
    this.props.updateUser(this.state);

    this.setState({
      id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      full_name: "",
      photo: "",
      role: "",
      email: ""
    });
  };

  render() {
    console.log(this.props.currentUser)
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Full name"
            name="full_name"
            value={this.state.value}
            onChange={this.changeHandler}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.value}
            onChange={this.changeHandler}
          />
          <label>Photo of yourself</label>
          <input
            type="text"
            placeholder="Your photo"
            name="photo"
            value={this.state.value}
            onChange={this.changeHandler}
          />
          <label>Your job/role</label>
          <input
            type="text"
            placeholder="role"
            name="role"
            value={this.state.value}
            onChange={this.changeHandler}
          />
          <Link to='/profile'><input type="submit" value="Submit" /></Link>
        </form>
      </div>
    );
  }
}
export default ProfileForm;
