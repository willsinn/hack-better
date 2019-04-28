import React, { Component } from "react";
import IdeasContainer from "../components/Ideas/IdeasContainer";

class EventShowPage extends Component {
    render(){
        return(
            <div>
                <h1> Idea Voting </h1>
                <br />
                <h2> {"Hackfest 2019"} </h2>
                <IdeasContainer />
            </div>
        );
    }
}

export default EventShowPage;