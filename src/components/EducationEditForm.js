
import React, { Component } from "react";
import '../styles/Education.css';

class EducationEditForm extends Component {

  render() {

    const { years, school, location, focus, degree, schoolID } = this.props.educationEntry;

    return (
        <>
          <form action="" className="educationform">
            <h3>Edit School</h3>
            <label htmlFor="years" className="left">Years</label>
            <input onChange={this.props.handleChange} className="right" type="text" name="years" value={years}/>
            
            <label htmlFor="School" className="left">School</label>
            <input onChange={this.props.handleChange} className="right" type="text" name="school" value={school}/>

            <label htmlFor="Location" className="left">Location</label>
            <input onChange={this.props.handleChange} className="right" type="text" name="location" value={location}/>
          
            <label htmlFor="focus" className="left">Major</label>
            <input onChange={this.props.handleChange} className="right" type="text" name="focus" value={focus}/>
            
            <label htmlFor="degree" className="left">Degree</label>
            <input onChange={this.props.handleChange} className="right" type="text" name="degree" value={degree}/>

            <div className="buttons">
              <button 
                type="button"
                onClick={this.props.handleEditSchoolFormSubmit}
                data-schoolid={schoolID}
              >
                Save Edits
              </button>

              <button
                type="button"
                onClick={this.props.handleSchoolFormCancel}
              >
                Cancel
              </button>
            </div> 

          </form>
        </>
      )
  }
}

export default EducationEditForm;