import React, { Component } from "react";

class Education extends Component {

  constructor() {
    super();

    this.state = {
      entry: {
        year: '',
        school: '',
        degree: '',
      },
      entries: [],
    };

  }

  render() {
    return (
      <div>
        <h2>Education</h2>
        <p>Year</p>
        <p>School</p>
        <p>Degree</p>
      </div>
    )
  }

}

export default Education;