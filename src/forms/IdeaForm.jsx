import React, { Component } from "react";

class IdeaForm extends Component {
  state = {
    title: "",
    topic: "",
    problem: "",
    solution: "",
    audience: "",
  }
changeHandler = (e) => {
  this.setState({ 
    [e.target.name]: e.target.value
  })
}
submitHandler = (e) => {
  e.preventDefault()
  this.props.createIdea(this.state)
}
/*


  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }
*/
  render() {
    return (
      <div className="modalWindow"> 
      <h2 className="What-Is-Your-Idea"> What is you're Idea?</h2>
       <div className="inputs">
        <form onSubmit={this.submitHandler}>
        <textarea className="Rectangle_input" type="text" placeholder="Idea Name" name='title' value={this.state.value} onChange={this.changeHandler}/>
          <textarea className="Rectangle_input" placeholder="Problem" name='problem' value={this.state.value} onChange={this.changeHandler}/>
          <textarea className="Rectangle_input" placeholder="Solution" name='solution' value={this.state.value} onChange={this.changeHandler}/>
          <textarea className="Rectangle_input" type="text" placeholder="Target Audience" name='audience' value={this.state.value} onChange={this.changeHandler}/>
<br />

{/*<label>
            Category
</label>*/}
          <select className="category" name="topic" value={this.state.value} onChange={this.changeHandler} >
            <option value>
              Select Category
            </option>
            <option value="e-commerce">
              E-commerce
            </option>
            <option value="jobs">
              Jobs
            </option>
            <option value="healthcare">
              HealthCare
            </option>
            <option value="data_and_privacy">
              Data and Privacy
            </option>
          </select>
          <br />
        <input className="submitButton" type="submit" value="Submit" />
        </form>
</div>
      </div>
      // <div className="app">
      //   <button className="modal_opener" onClick={this.toggleModal}>
      //     Click Me! I Do Not Bite... <span role="img" aria-label="emoji">😛</span>
      //   </button>


      //   <Modal
      //     show={this.state.showModal}
      //     closeCallback={this.toggleModal}
      //     customClass="custom_modal_class"
      //   >
      //     <React.Fragment>
      //       <h2>Told Ya!</h2>
      //       <iframe title="giphy" src="https://giphy.com/embed/l52CGyJ4LZPa0" width="480" height="273" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sandler-sentences-sounding-l52CGyJ4LZPa0">via GIPHY</a></p>
      //     </React.Fragment>
      //   </Modal>
      // </div>
    );
  }
}



export default IdeaForm;
