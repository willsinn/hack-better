import React, { Component } from "react";

class TeamCard extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    const { team } = this.props;
    // let ideaVotes = this.state.ideaVotes;
    if (!this.state.isClicked) {
      this.props.joinTeam(team.id);
      this.setState({ isClicked: true });
    }
  };

  render() {
    const { team } = this.props;

    return (
      <div>
        <strong>{team.pitch_title}</strong>
        <i>{team.pitch_topic}</i>
        <h5> by {team.full_name}</h5>

        <p>Problem: {team.pitch_problem}</p>
        <p>Solution: {team.pitch_solution}</p>
        <i>Audience: {team.pitch_audience}</i>

        {this.props.currentUser.team_id === team.id ? (
          <p>This is your team</p>
        ) : team.users.length < 8 ? (
          <button onClick={this.handleClick}>Join Team</button>
        ) : (
          <p>Team is full</p>
        )}

        {team.users.length < 8 ? <p>{team.users.length} / 8</p> : 8 / 8}
        <br />
      </div>
    );
  }
}

export default TeamCard;
