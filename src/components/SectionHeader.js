import React, { Component } from "react";
import editBtn from '../images/edit_g.svg';
import '../styles/SectionHeader.css';

class SectionHeader extends Component {

  render() {
    return (
      <>
        <div className = 'sectionheader'>
        <h2>{ this.props.name }</h2>
        <img src={editBtn} 
          role="button"
          alt="edit" 
          width="22px" 
          className = "editBtn"
          onClick = {() => this.props.handleEdit(this.props.section)}
        />
        </div>
        <hr className="undersectionheader"/>  
      </>
    )
  }
}

export default SectionHeader;