import React, { Component } from "react";
import '../styles/Buttons.css';

class AddBtn extends Component {

  render() {
    return (

      <>
      { this.props.mainmode === 'print' ? (null):(

      <button
        className="addBtn"
        type="button"
        onClick={this.props.clickHandler}
      >
        + Add {this.props.text}
      </button>
      )}
      </>
    )
  }



}


export default AddBtn;