import React from "react";
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';


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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.submitHandler}>
            <label>Full Name</label>
            <TextField
              id="outlined-name"
              label="Name"
              className={classes.textField}
              value={this.state.full_name}
              onChange={this.handleChange('full_name')}
              margin="normal"
              variant="outlined"
            />

          <li>
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.value}
              onChange={this.changeHandler}
            />
          </li>

          <li>
            <label>Photo of yourself</label>
            <input
              type="text"
              placeholder="Your photo"
              name="photo"
              value={this.state.value}
              onChange={this.changeHandler}
            />
          </li>

          <li>
            <label>Your job/role</label>
            <input
              type="text"
              placeholder="role"
              name="role"
              value={this.state.value}
              onChange={this.changeHandler}
            />
          </li>
          <li>
          <input type="submit" value="Submit" />
          </li>
        </form>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    backgroundColor:'gray',
    display: 'flex',
    justifyContent: 'center',
  },

  container: {
    display: 'flex'
  }

});
export default withStyles(styles, {})(ProfileForm);
