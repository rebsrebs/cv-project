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
        
      {this.props.workEntries.length > 0 ? 

        this.props.workEntries.map((job) => {
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
            <img src={deleteBtn} alt="delete" role="button" width="22px" onClick={this.props.handleDelete} className="deleteBtn entryBtn" data-jobid={job.jobID}/>

            <img src={editBtn} alt="edit" role="button" width="22px" onClick={this.props.handleEditJobClick}
            className="editBtn entryBtn" data-jobid={job.jobID}/>
          </div>
          </div> 
          )})
        :
      <ExperienceForm 
        workEntry = {this.props.workEntry}
        handleChange = {this.props.handleChange}
        formview = {this.props.formview}
        handleAddJobSubmit = {this.props.handleAddJobSubmit}
      />
      }
        </div>
      </>
    )
  }
}

export default ExperienceDisplay;

