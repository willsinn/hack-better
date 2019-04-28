import React, { Component } from 'react';

class EventsCard extends Component {
  render() {
    console.log(this.props);
    
    return (
      <div>
        <img src={this.props.image} alt=""/>
        <h2>{this.props.title}</h2>
        <i>{this.props.date}</i>
      </div>
    );
  }
}

export default EventsCard;