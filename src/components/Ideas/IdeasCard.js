import React, { Component } from 'react';

class IdeasCard extends Component {
  render() {
    const {idea} = this.props
    console.log(idea);

    return (
      <div className="idea-card-info">
          <strong>{idea.title}</strong>
          <h5>{idea.full_name}</h5>

          <p>Audience:</p>
          <p>{idea.audience}</p>

          <p>Problem:</p>
          <p>{idea.problem}</p>

          <p>Solution:</p>
          <p>{idea.solution}</p>

          <div className="category-tag">
            <div className="category-icon"></div>
            <h3>{idea.topic}</h3>
          </div>

      </div>

    );
  }
}

export default IdeasCard;
