import React, { Component } from "react";

class IdeasCard extends Component {
  state = {
    isClicked: false,
    ideaVotes: this.props.idea.votes.length
  };

  handleClick = () => {
    const { idea } = this.props;
    let ideaVotes = this.state.ideaVotes;
    if (!this.state.isClicked) {
      this.props.createVote(idea.id);
      this.setState({ isClicked: true, ideaVotes: (ideaVotes += 1) });
    }
  };

  render() {
    const { idea } = this.props;

    return (
      <div>
        <strong>{idea.title}</strong>
        <i>{idea.topic}</i>
        <h5> by {idea.full_name}</h5>

        <p>Problem: {idea.problem}</p>
        <p>Solution: {idea.solution}</p>
        <i>Audience: {idea.audience}</i>

        <span onClick={this.handleClick}>❤️</span>
        <span>{this.state.ideaVotes}</span>
        <br />
      </div>
    );
  }
}

export default IdeasCard;
