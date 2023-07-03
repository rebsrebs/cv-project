import React, { Component } from "react";
import editBtn from '../images/edit_g.svg';
// import saveBtn from '../images/save_g.svg';
import viewBtn from '../images/view_g.svg';
import '../styles/SectionHeader.css';

class SectionHeader extends Component {

  render() {
    return (
      <>

        <div className = 'sectionheader'>
        <h2>{ this.props.name }</h2>

        {
          this.props.mode === 'display' ? (
            <img src={editBtn} 
              role="button"
              alt="edit" 
              width="22px" 
              className = "Btn"
              onClick = {() => this.props.handleEdit(this.props.section)}
            />
          ) : (
            <img 
              src={viewBtn} 
              role="button"
              alt="view" 
              width="22px" 
              className = "Btn"
              onClick = {() => this.props.handleSave(this.props.section)}
              // onClick = {() => this.props.onSubmitEducationEntry()}
            />
          )
        }
        

        </div>
        <hr className="undersectionheader"/>  

      </>
    )
  }
}

export default SectionHeader;