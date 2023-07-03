
import React, { Component } from "react";
import '../styles/Education.css';

class EducationForm extends Component {
  render() {
    return (
      <>
        <form action="" className="educationform">
            <h3>Add School</h3>
              <label htmlFor="years" className="left">Years</label>
              <input onChange={this.props.handleChange} className="right" type="text" name="years" placeholder="e.g. 2010 - 2014"/>
              
              <label htmlFor="School" className="left">School</label>
              <input onChange={this.props.handleChange} className="right" type="text" name="school" placeholder="School name"/>

              <label htmlFor="Location" className="left">Location</label>
              <input onChange={this.props.handleChange} className="right" type="text" name="location" placeholder="Location"/>
            
              <label htmlFor="focus" className="left">Major</label>
              <input onChange={this.props.handleChange} className="right" type="text" name="focus" placeholder="Major"/>
              
              <label htmlFor="degree" className="left">Degree</label>
              <input onChange={this.props.handleChange} className="right" type="text" name="degree" placeholder="Degree"/>

              <div className="buttons">
              <button 
              type="button"
              onClick={this.props.handleSubmitEducationEntry}
              >Save</button>
              <button
              type="button"
              onClick={this.props.handleCancelAddSchool}
              >Cancel</button>
              </div>
              
            </form>




      </>
    )
  }
}

export default EducationForm;