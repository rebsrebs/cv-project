import React, { Component } from "react";
import '../styles/Education.css';

class Education extends Component {

  render() {
    return (
      <div className = 'section'>
        <h2>Education</h2>
        {this.props.educationEntries.map((school, idx) => {
            return <div key={school.id} className="school">
              <span>
                {school.years}&nbsp;
              </span>
              <span>
                {school.school}&nbsp;
              </span>
              <span>
                {school.focus}&nbsp;
              </span>
              <span>
                {school.degree}
              </span>
            </div>
          })}
      </div>
    )
  }
}

export default Education;