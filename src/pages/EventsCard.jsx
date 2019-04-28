import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EventsCard extends Component {

  render() {
    
    return (
      <div>
        <Link to="/eventsshow">
          <img src={this.props.image} alt=""/>
        </Link>
        
        <h2>{this.props.title}</h2>
        <i>{this.props.date}</i>
      </div>
    );
  }
}

export default EventsCard;