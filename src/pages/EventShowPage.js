import React, { Component } from "react";
import IdeasContainer from "../components/Ideas/IdeasContainer";
import TeamsContainer from "../components/Teams/TeamsContainer";

class EventShowPage extends Component {
  state = {
    phase: 1
  };

  changePhase = () => {
    this.setState({ phase: 2 });
  };

  render() {
    return (
      <div className="event-container">
        {this.state.phase === 1 ? (
          <IdeasContainer
            createVote={this.props.createVote}
            changePhase={this.changePhase}
          />
        ) : (
          <TeamsContainer joinTeam={this.props.joinTeam} />
        )}
      </div>
    );
  }
}

export default EventShowPage;
