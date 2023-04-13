import React, { Component } from "react";

class Skills extends Component {

  constructor() {
    super();

    this.state = {
      skill: {
        title: '',
      },
      skills: [],
    };

  }

  render() {
    return (
      <div>
        <h2>Skills</h2>
        <p>skill</p>
      </div>
    )
  }

}

export default Skills;