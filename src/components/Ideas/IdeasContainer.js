import React, { Component } from "react";
import IdeasCard from "./IdeasCard";

class IdeasContainer extends Component {
    state={
        ideas: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/ideas')
        .then(response => response.json())
        .then(ideas => this.setState({ideas}))
    }

    render() {
        const ideas = this.state.ideas.map(idea => {return <IdeasCard key={idea.id} idea={idea}/>})
        
        
        return (
            <div> 
                {ideas}
            </div>
        );
    }
}

export default IdeasContainer;