import React, { Component } from "react";
import '../styles/Education.css';
import deleteBtn from '../images/delete_g.svg';
import editBtn from '../images/edit_g.svg';
import EducationSample from "./EducationSample";
import EducationAddForm from "./EducationAddForm";
import EducationEditForm from "./EducationEditForm";

class EducationDisplay extends Component {

  render() {
    console.log(this.props.schooltoedit);
    return (
      
      <>

        <div className = 'section'>

          {this.props.educationEntries.length > 0 ? 

            this.props.educationEntries.map((school) => {
              return this.props.schooltoedit !== school.schoolID ?

                <div key={school.schoolID} className="entryrow">
                  <div className="entry school">

                    <span>{school.schoolID}</span>
                    <span>{this.props.schooltoedit}</span>

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
                    <img src={deleteBtn} alt="delete" role="button" width="22px" onClick={this.props.handleDelete} className="deleteBtn entryBtn" data-schoolid={school.schoolID}/>
                    <img src={editBtn} alt="edit" role="button" width="22px" onClick={this.props.handleEditSchoolBtn}
                    className="editBtn entryBtn" data-schoolid={school.schoolID}/>
                  </div>
                </div> //end entry row
                : 
                <EducationEditForm 
                  handleChange={this.props.handleChange}
                  educationEntry = { this.props.educationEntry }
                  formview = {this.props.formview}
                  handleEditSchoolBtn = {this.props.handleEditSchoolBtn}
                />
            }) : <EducationSample />
          }
        </div>

        {this.props.formview === 'add' ? (
          <EducationAddForm 
            handleChange={this.props.handleChange}
            handleAddSchoolSubmit = {this.props.handleAddSchoolSubmit}
          />
        ) : (null)}



      </>
    )
  }
}

export default EducationDisplay;