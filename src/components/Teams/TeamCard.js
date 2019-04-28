import React, { Component } from "react";

class TeamCard extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    const { team } = this.props;
    let ideaVotes = this.state.ideaVotes;
    if (!this.state.isClicked) {
      // this.props.createVote(idea.id);
      this.setState({ isClicked: true, ideaVotes: (ideaVotes += 1) });
    }
  };

  render() {
    return <p>Hi</p>;
  }
}

export default TeamCard;
// const { idea } = this.props;
//
// console.log(this.props.createVote);
// return (
//   <div>
//     <strong>{idea.title}</strong>
//     <i>{idea.topic}</i>
//     <h5> by {idea.full_name}</h5>
//
//     <p>Problem: {idea.problem}</p>
//     <p>Solution: {idea.solution}</p>
//     <i>Audience: {idea.audience}</i>
//
//     <span onClick={this.handleClick}>❤️</span>
//     <span>{this.state.ideaVotes}</span>
//     <br />
//   </div>
