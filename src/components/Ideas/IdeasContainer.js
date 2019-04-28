import React, { Component } from "react";
import IdeasCard from "./IdeasCard";

class IdeasContainer extends Component {
  state = {
    ideas: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/ideas")
      .then(response => response.json())
      .then(ideas => this.setState({ ideas }));
  }

  createTeams = () => {
    this.state.ideas
      .sort((a, b) => b.votes.length - a.votes.length)
      .slice(0, 10)
      .map(idea => {
        fetch("http://localhost:3000/api/v1/teams", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            team_name: idea.title,
            pitch_title: idea.title,
            pitch_topic: idea.topic,
            pitch_problem: idea.problem,
            pitch_solution: idea.solution,
            open: true
          })
        });
      });

    this.props.changePhase();
  };

  render() {
    const ideas = this.state.ideas
      .sort((a, b) => b.votes.length - a.votes.length)
      .map(idea => {
        return (
          <IdeasCard
            key={idea.id}
            idea={idea}
            createVote={this.props.createVote}
          />
        );
      });
    return (
      <div>
        <p onClick={this.createTeams}>End Voting</p>
        {ideas}
      </div>
    );
  }
}

export default IdeasContainer;
