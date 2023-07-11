
import React, { Component } from "react";
import '../styles/Experience.css';

class ExperienceForm extends Component {

  render() {

    const { startYear, endYear, company, location, title, duties, jobID } = this.props.workEntry;

    return (
      this.props.mode === 'display' ? (
        null ) :
      <>
      {this.props.formtype === 'add' ? (
        <form action="" className="experienceform">
          <h3>Add Experience</h3>
            <label htmlFor="startYear" className="left">Start Year</label>
            <input onChange={this.props.handleChange} className="right" type="text" name="startYear" id="startYear"/>

            <label htmlFor="endYear" className="left">End Year</label>
            <input onChange={this.props.handleChange} className="right" type="text" name="endYear" id="endYear"/>
            
            <label htmlFor="company" className="left">Company</label>
            <input onChange={this.props.handleChange} className="right" type="text" name="company" placeholder="company name"/>

            <label htmlFor="location" className="left">Location</label>
            <input onChange={this.props.handleChange} className="right" type="text" name="location" placeholder="Location"/>

            <label htmlFor="title" className="left">Title</label>
            <input onChange={this.props.handleChange} className="right" type="text" name="title" placeholder="title"/>
          
            <label htmlFor="duties" className="left">Duties</label>
            <input onChange={this.props.handleChange} className="right" type="text" name="duties"/>

            <div className="buttons">
            <button 
            type="button"
            onClick={this.props.handleAddJobSubmit}
            >Save</button>
            <button
            type="button"
            onClick={this.props.handleCancelAddJob}
            >Cancel</button>
            </div>
              
          </form>
          
      ) : (
          <form action="" className="experienceform">
            <h3>Edit Job</h3>
              <label htmlFor="startYear" className="left">Start Year</label>
              <input onChange={this.props.handleChange} className="right" type="text" name="startYear" value={startYear}/>
              
              <label htmlFor="endYear" className="left">End Year</label>
              <input onChange={this.props.handleChange} className="right" type="text" name="endYear" value={endYear}/>

              <label htmlFor="company" className="left">Company</label>
              <input onChange={this.props.handleChange} className="right" type="text" name="company" value={company}/>

              <label htmlFor="Location" className="left">Location</label>
              <input onChange={this.props.handleChange} className="right" type="text" name="location" value={location}/>

              <label htmlFor="title" className="left">Title</label>
              <input onChange={this.props.handleChange} className="right" type="text" name="title" value={title}/>
            
              <label htmlFor="duties" className="left">Duties</label>
              <input onChange={this.props.handleChange} className="right" type="text" name="duties" value={duties}/>

              <div className="buttons">
              <button 
              type="button"
              onClick={this.props.handleEditJobSubmit}
              data-jobid={jobID}
              >Save Edits</button>
              <button
              type="button"
              onClick={this.props.handleCancelAddJob}
              >Cancel</button>
            </div> 
          </form>
      )}
        </>
    )
  }
}

export default ExperienceForm;