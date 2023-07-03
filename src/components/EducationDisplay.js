import React, { Component } from "react";
import '../styles/Education.css';
import deleteBtn from '../images/delete_g.svg';

class EducationDisplay extends Component {

  

  render() {
    return (
      <>
        <div className = 'section'>
        {this.props.educationEntries.map((school) => {
              return <div key={school.id} className="entry school">
                <span>
                  {school.years}&nbsp;
                </span>
                <span>
                  {school.school}&nbsp;
                </span>
                <span>
                  {school.location}&nbsp;
                </span>
                <span>
                  {school.focus}&nbsp;
                </span>
                <span>
                  {school.degree}
                </span>
                  <img src={deleteBtn} alt="delete" role="button" width="22px" onClick={this.props.handleDelete}/>
              </div>
            })}
        </div>
      </>
    )
  }
}

export default EducationDisplay;