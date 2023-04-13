import React, { Component } from "react";
import '../styles/Education.css';

class Education extends Component {

  constructor() {
    super();

    this.state = {
      entry: {
        year: '',
        school: '',
        focus: '',
        degree: '',
      },
      entries: [],
    };

  }

  render() {
    return (
      <div className = 'section'>
        <h2>Education</h2>
        <div className = 'entry'>
          <p>2022</p>
          <p>Yale</p>
          <p>Psychology</p>
          <p>BA</p>
        </div>
      </div>
    )
  }

}

export default Education;