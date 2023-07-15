import React, { Component } from "react";
import '../styles/Education.css';
// import deleteBtn from "../images/delete_g.svg"
// import editBtn from "../images/edit_g.svg"
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import EducationSample from "./EducationSample";
import EducationAddForm from "./EducationAddForm";
import EducationEditForm from "./EducationEditForm";

class EducationDisplay extends Component {

  render() {
    return (
      
      <>

        <div className = 'section'>

          {this.props.educationEntries.length > 0 ? 

            this.props.educationEntries.map((school) => {
              return this.props.schooltoedit !== school.schoolID ?

                <div key={school.schoolID} className="entryrow">
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

                  
                    


                    
                  {this.props.mainmode === 'edit' ? (

                    

                    <div className = "entrybtns">

                    <DeleteBtn 
                      onClick={ () => this.props.handleDeleteSchool(school.schoolID)}
                      mainmode={this.props.mainmode}
                    />
                    <EditBtn 
                      onClick = { () => this.props.handleEditSchoolClick(school.schoolID)}
                      mainmode={this.props.mainmode}
                    />


                  {/* 
                    <img 
                      src={deleteBtn} 
                      alt="delete" 
                      role="button" 
                      width="22px" 
                      onClick={this.props.handleDeleteSchool} 
                      className="deleteBtn entryBtn" 
                      data-schoolid={school.schoolID}
                    />
                    <img 
                      src={editBtn} 
                      alt="edit" 
                      role="button" 
                      width="22px" 
                      onClick={this.props.handleEditSchoolClick}
                      className="editBtn entryBtn" 
                      data-schoolid={school.schoolID} 
                    /> */}



                    </div>
                    ):(null)}
                  

                </div> //end entry row
                : 
                <EducationEditForm 
                  handleChange={this.props.handleChange}
                  educationEntry = { this.props.educationEntry }
                  formtype = {this.props.formtype}
                  handleEditSchoolFormSubmit = {this.props.handleEditSchoolFormSubmit}
                  handleSchoolFormCancel = {this.props.handleSchoolFormCancel}
                  key={school.schoolID}
                />
            }) : <EducationSample />
          }
        </div>

        {this.props.formtype === 'add' ? (
          <EducationAddForm 
            handleChange={this.props.handleChange}
            handleAddSchoolFormSubmit = {this.props.handleAddSchoolFormSubmit}
            formtype={this.props.formtype}
            handleSchoolFormCancel = {this.props.handleSchoolFormCancel}
          />
        ) : (null)}
      </>
    )
  }
}

export default EducationDisplay;
