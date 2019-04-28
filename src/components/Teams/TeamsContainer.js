import React, { Component } from "react";
import TeamCard from "./TeamCard";

class TeamsContainer extends Component {
  state = {
    teams: []
  };

  componentDidMount = async () => {
    // setInterval = () => (
    //   function() {
    console.log("hi");
    fetch("http://localhost:3000/api/v1/teams")
      .then(response => response.json())
      .then(teams => this.setState({ teams }));
    // }
    //   ,3000
    // );
  };

  render() {
    const teams = this.state.teams.map(team => {
      return (
        <TeamCard
          key={team.id}
          team={team}
          joinTeam={this.props.joinTeam}
          currentUser={this.props.currentUser}
        />
      );
    });
    return <div>{teams}</div>;
  }
}

export default TeamsContainer;
