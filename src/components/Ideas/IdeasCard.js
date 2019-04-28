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
      < div className = "idea-card-info" >
        <strong>{idea.title}</strong>
        <h5> by {idea.full_name}</h5>

        <p>Audience</p>
        <p>{idea.audience}</p>

        <p>Problem</p>
        <p>{idea.problem}</p>

        <p>Solution</p>
        <p>{idea.solution}</p>
        
        <div className="category-tag">
            <div className="category-icon"></div>
            <h3>{idea.topic}</h3>
        </div>

        <span onClick={this.handleClick}>❤️</span>
        <span>{this.state.ideaVotes}</span>
       
      </div>
    );
  }
}

export default IdeasCard;
