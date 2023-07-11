import React, { Component } from "react";
import '../styles/Experience.css';
import deleteBtn from '../images/delete_g.svg';
import editBtn from '../images/edit_g.svg';
import ExperienceForm from "./ExperienceForm";

class ExperienceDisplay extends Component {

 
  render() {
    return(
      <>
        <div className = 'section'>
        {
          this.props.jobEntries.map((job) => {
            return (
              <div className="entryrow" key={job.jobID}>
              <div className="entry job">
                <p>
                  <span>{job.startYear}</span> 
                  {job.endYear !== '' &&
                  <span>&nbsp;-&nbsp;{job.endYear}</span>
                  }
                </p>
                <p>
                  {job.company} {job.location}
                </p>
                <p>
                  {job.title}
                </p>
                <p>
                  {job.duties}
                </p>
              </div>
            
            <div className = "entrybtns">
              <img src={deleteBtn} alt="delete" role="button" width="22px" onClick={this.props.handleDeleteJob} className="deleteBtn entryBtn" data-jobid={job.jobID}/>

              <img src={editBtn} alt="edit" role="button" width="22px" onClick={this.props.handleEditJobClick}
              className="editBtn entryBtn" data-jobid={job.jobID}/>
            </div>
            </div> 
            )})
            } 
      
        <ExperienceForm 
          jobEntry = {this.props.jobEntry}
          handleChange = {this.props.handleChange}
          formtype = {this.props.formtype}
          mode = {this.props.mode}
          handleAddJobFormSubmit = {this.props.handleAddJobFormSubmit}
          handleJobFormCancel = {this.props.handleJobFormCancel}
          handleEditJobFormSubmit = {this.props.handleEditJobFormSubmit}
        />
      
        </div>
      </>
    )
  }
}

export default ExperienceDisplay;

