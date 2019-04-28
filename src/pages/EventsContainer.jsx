import React, { Component } from "react";
import EventsCard from "./EventsCard";

class EventsContainer extends Component {
  render() {
    const hackEvents = this.props.events.map(event => {
      return (
        <EventsCard
          key={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          createVote={this.props.createVote}
        />
      );
    });

    return <div>{hackEvents}</div>;
  }
}

export default EventsContainer;
