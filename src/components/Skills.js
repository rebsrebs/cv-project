import React, { Component } from "react";
import '../styles/Skills.css';

class Skills extends Component {

  render() {
    return (
      <div className = 'section'>
        <h2>Skills</h2>
        <ul>

          {this.props.skillEntries.map((skill, idx) => {
            return <span key={skill.id} className="skill">
              <span className="skill">
                {skill},&nbsp;
              </span>
            </span>
          })}
          
        </ul>
      </div>
    )
  }

}

export default Skills;