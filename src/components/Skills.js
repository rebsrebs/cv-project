import React, { Component } from "react";
import '../styles/Skills.css';

class Skills extends Component {

  render() {
    return (
      <div className = 'section'>
        <h2>Skills</h2>
        <hr class="undersectionheader"/>
        <ul className="skillList">

          {this.props.skillEntries.map((skill, idx) => {

            // if last entry, don't put comma at end
            if (idx === this.props.skillEntries.length - 1) {
              return <span key={skill.id} className="skill">
                {skill}
            </span>
            }

            return <span key={skill.id} className="skill">
                {skill},&nbsp;
            </span>
          })}
          
        </ul>
      </div>
    )
  }
}

export default Skills;