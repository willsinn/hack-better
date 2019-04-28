import React from "react";
import {withRouter} from 'react-router-dom'

class ProfileForm extends React.Component {
  //username and team_id should be pre-filled
  state = {
    username:"",
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
      username: "",
      full_name: "",
      photo: "",
      role: "",
      email: ""
    });

    setTimeout(() => this.props.history.push('/profile'), 1000)

  };

  render() {
    return (
      <div className="modalWindow">

        <h2 className="What-Is-Your-Idea"> Create Your Profile </h2>
        
        <div className="inputs">
        <form onSubmit={this.submitHandler}>

          <input
            className="Rectangle_input"
            type="text"
            placeholder="User name"
            name="username"
            value={this.state.value}
            onChange={this.changeHandler}
          />
  
          <input
            className="Rectangle_input"
            type="text"
            placeholder="Full Name"
            name="full_name"
            value={this.state.value}
            onChange={this.changeHandler}
          />
  
          <input
            className="Rectangle_input"
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.value}
            onChange={this.changeHandler}
          />
       
          <input
            className="Rectangle_input"
            type="text"
            placeholder="Your photo"
            name="photo"
            value={this.state.value}
            onChange={this.changeHandler}
          />

          <input
            className="Rectangle_input"
            type="text"
            placeholder="Role"
            name="role"
            value={this.state.value}
            onChange={this.changeHandler}
          />
          <br />
            <input className="submitButton" type="submit" value="Submit" />
    
        </form>
        </div>
      </div>
    );
  }
}
export default withRouter(ProfileForm);
