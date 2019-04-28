import React, { Component } from "react";
import IdeasContainer from "../components/Ideas/IdeasContainer";

class EventShowPage extends Component {
    render(){
        return(
            <div>
                <h1 className="voting-title"> Idea Voting Phase </h1>
                <h2 className="hack-event"> {this.props.event.title} </h2>
                <div className="ideas-container" >
                  <IdeasContainer />
                </div>
            </div>
        );
    }
}

export default EventShowPage;
