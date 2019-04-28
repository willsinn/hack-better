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
    console.log(team);
    return (
      <div className="team-container">
        <div className="team-card" onClick={this.handleClick}>
          <h3 className="team-title">{team.pitch_title}</h3>

          <h5 className="team-name"> by {team.team_name}</h5>

          <span className="team-members">5/8</span>
        </div>

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
