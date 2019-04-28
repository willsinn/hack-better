import React, { Component } from "react";
import IdeasContainer from "../components/Ideas/IdeasContainer";

class EventShowPage extends Component {
  state = {
    phase: 1
  };

  changePhase = () => {
    this.setState({ phase: 2 });
  };

  render() {
    return (
      <div>
        <h1> Pitch Ideas Voting </h1>
        <h2> {this.props.event.title} </h2>
        {this.state.phase === 1 ? (
          <IdeasContainer
            createVote={this.props.createVote}
            changePhase={this.changePhase}
          />
        ) : (
          <TeamsContainer
            joinTeam={this.props.joinTeam}
            currentUser={this.props.currentUser}
          />
        )}
      </div>
    );
  }
}

export default EventShowPage;
