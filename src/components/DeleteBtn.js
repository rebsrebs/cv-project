import React, { Component } from "react";
import '../styles/Buttons.css';
import DeleteBtnIcon from '../images/delete_g.svg'

class DeleteBtn extends Component {

  render() {
    return (
      <>
      { 
        this.props.mainmode === 'print' ? (null):(
      <img
        src={DeleteBtnIcon}
        className="button-round"
        alt="delete"
        role="button"
        onClick={this.props.onClick}
      /> ) }
      </>
    )
  }
}

export default DeleteBtn;