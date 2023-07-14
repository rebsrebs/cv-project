import React, { Component } from "react";
import '../styles/Buttons.css';
import EditBtnIcon from '../images/edit_g.svg'

class EditBtn extends Component {

  render() {

    return (
      <>
      { 
        this.props.mainmode === 'print' ? (
          null):(

      <img
        src={EditBtnIcon}
        className="button-round"
        alt="edit"
        role="button"
        onClick={this.props.onClick}
      />

    )
    
    } 
    </>)

  }
}

export default EditBtn;