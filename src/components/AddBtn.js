import React, { Component } from "react";
import '../styles/AddBtn.css';

class AddBtn extends Component {

  render() {
    return (
      <button
        className="addBtn"
        type="button"
        onClick={this.props.clickHandler}
      >
        + Add {this.props.text}
      </button>
    )
  }



}


export default AddBtn;