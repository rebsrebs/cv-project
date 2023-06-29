import React, { Component } from "react";
import '../styles/Skills.css';

class Skills extends Component {

  render() {

    return (
      <>

      { // DISPLAY MODE
        this.props.mode === 'display' ? (
          <div className='section'>
            <ul className="skillList">
            {this.props.skillEntries.map((skill, idx) => {
              // if last entry, don't put comma at end
              if (idx === this.props.skillEntries.length - 1) {
                return <span key={skill.idx} className="skill">
                  {skill}
              </span>
              }
              return <span key={skill.idx} className="skill">
                  {skill},&nbsp;
              </span>
            })}
          </ul>
          </div>
        ) : (
          // EDIT MODE
          <p>Edit</p>
        )
      }

    

      </>
    )
   
  } // end render
} // end component

export default Skills;