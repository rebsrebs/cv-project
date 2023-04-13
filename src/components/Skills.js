import React, { Component } from "react";
import '../styles/Skills.css';

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
      <div className = 'section'>
        <h2>Skills</h2>
        <p className = 'skill'>skill</p>
      </div>
    )
  }

}

export default Skills;