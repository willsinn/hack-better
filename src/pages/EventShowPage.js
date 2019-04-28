import React, { Component } from "react";
import IdeasContainer from "../components/Ideas/IdeasContainer";

class EventShowPage extends Component {
    render(){
        return(
            <div>
                <h1> Pitch Ideas Voting </h1>
                <h2> {this.props.event.title} </h2>
                <IdeasContainer />
            </div>
        );
    }
}

export default EventShowPage;
