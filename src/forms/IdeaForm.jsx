import React, { Component } from "react";
import ReactModal from 'react-modal';
import Modal from '../modal/modal';

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
  console.log(this.state)
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
      <div> 
        <form onSubmit={this.submitHandler}>
          <label>
            Title of Idea
          </label>
          <input type="text" placeholder="Title" name='title' value={this.state.value} onChange={this.changeHandler}/>
          <label>
            Category
          </label>
          <select name="topic" value={this.state.value} onChange={this.changeHandler} >
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

          <label>
            Problem
          </label>
          <textarea placeholder="Problem" name='problem' value={this.state.value} onChange={this.changeHandler}/>

          <label>
            Solution
          </label>
          <textarea placeholder="Solution" name='solution' value={this.state.value} onChange={this.changeHandler}/>

          <label>
          Who do you plan to target?
          </label>
          <input type="text" placeholder="Target Audience" name='audience' value={this.state.value} onChange={this.changeHandler}/>

        <input type="submit" value="Submit" />
        </form>

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
