import React, { Component } from "react";
import '../styles/SectionHeader.css';

class SectionHeader extends Component {

  render() {
    return (
      <>

        <div className = 'sectionheader'>
        <h2>{ this.props.name }</h2>
        </div>
        <hr className="undersectionheader"/>  

      </>
    )
  }
}

export default SectionHeader;