import React, { Component } from "react";
import TeamCard from "./TeamCard";

class TeamsContainer extends Component {
  state = {
    teams: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/teams")
      .then(response => response.json())
      .then(teams => this.setState({ teams }));
  }

  render() {
    const teams = this.state.teams.map(team => {
      return <TeamCard key={team.id} team={team} />;
    });
    return <div>{teams}</div>;
  }
}

export default TeamsContainer;
