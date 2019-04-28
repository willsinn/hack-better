import React, { Component } from 'react';

class IdeasCard extends Component {
  render() {
    const {idea} = this.props
    
    console.log(this.props.createVote)
    return (
      <div>
          <strong>{idea.title}</strong> 
          <i>{idea.topic}</i>
          <h5> by {idea.full_name}</h5>

          
          <p>Problem: {idea.problem}</p>
          <p>Solution: {idea.solution}</p>
          <i>Audience: {idea.audience}</i>

          <br/>
      </div>
    );
  }
}

export default IdeasCard;