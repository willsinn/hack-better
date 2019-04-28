import React from "react";
import {withRouter} from 'react-router-dom'

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
    this.props.updateUser(this.state);

    this.setState({
      full_name: "",
      photo: "",
      role: "",
      email: ""
    });

    setTimeout(() => this.props.history.push('/profile'), 1000)

  };

  render() {
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default withRouter(ProfileForm);
