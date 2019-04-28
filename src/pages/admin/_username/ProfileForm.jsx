import React from "react";
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { FormControl ,TextField } from '@material-ui/core';
import {withRouter, connect} from 'react-router-dom';

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
<<<<<<< HEAD
    const { classes } = this.props;
=======
>>>>>>> e855d851d022fe857ecc65feca6eb0a0bee2b768
    return (
      <div className={classes.root}>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={(e)=>this.submitHandler(e)}>

            <label>Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
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

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',

  },
  input: {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: '2px solid',
    borderRadius: '8px',
  }
 });
export default withStyles(styles)((withRouter(ProfileForm)));
