import React, { Component } from "react";
import '../styles/Education.css';
import deleteBtn from '../images/delete_g.svg';
import editBtn from '../images/edit_g.svg';
import EducationSample from "./EducationSample";

class EducationDisplay extends Component {

  render() {
    return (
      <>
        <div className = 'section'>

        {this.props.educationEntries.length > 0 ? 

        this.props.educationEntries.map((school) => {
              return <div key={school.id} className="entryrow">
                <div className="entry school">
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
                </div>
                  <div className = "entrybtns">

                    <img src={deleteBtn} alt="delete" role="button" width="22px" onClick={this.props.handleDelete} className="deleteBtn entryBtn" data-schoolid={school.id}/>

                    <img src={editBtn} alt="edit" role="button" width="22px" onClick={this.props.editEntry}
                    className="editBtn entryBtn" data-schoolid={school.id}/>
                </div>
              </div>
            }) : <EducationSample />


        }
        </div>
      </>
    )
  }
}

export default EducationDisplay;