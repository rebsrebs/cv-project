import React, { Component } from "react";
import '../styles/Education.css';
import uniqid from 'uniqid';
import SectionHeader from "./SectionHeader";
import EducationDisplay from "./EducationDisplay";
import EducationSample from "./EducationSample";

class Education extends Component {

  constructor() {
    super();
    this.state = {
      educationEntry: {
        years: '',
        school: '',
        location: '',
        focus: '',
        degree: '',
        id: uniqid(),
      },
      educationEntries: [],
      mode: 'edit',
    }
  }

  handleChange = (e) => {
    this.setState(previousState => {
      return {
        ...previousState, educationEntry: {
          ...this.state.educationEntry, [e.target.name]: e.target.value
        }
      };
    });
  }
  
  handleEdit = (section) => {
    console.log(`You clicked the edit button for ${section} `)
    this.setState({
      ...this.state,
      mode: 'edit'
    });
  };

  // this just toggles back to display mode
  handleSave = (section) => {
    console.log(`You clicked the save button for ${section} `)
    this.setState({
      ...this.state,
      mode: 'display'
    });
  }

  handleSubmitEducationEntry = () => {
    console.log('Education entries array length is');
    console.log(this.state.educationEntries.length);
    console.log(this.state.educationEntry);
    this.setState({
      educationEntries: this.state.educationEntries.concat(this.state.educationEntry),
      educationEntry: {
        years: '',
        school: '',
        location: '',
        focus: '',
        degree: '',
        id: uniqid(),
      },
      mode: 'display',
    });
    console.log('Education entries array length is');
    console.log(this.state.educationEntries.length);
  };

  handleDelete = (index) => {
    this.setState( { 
      educationEntries: this.state.educationEntries.filter((el, idx) => idx !== index),
    });
  };

  render() {
    return (
      <>
        <SectionHeader 
          section="education"
          name="Education"
          mode={this.state.mode}
          handleEdit={this.handleEdit}
          handleSave={this.handleSave}
        />

        {/* If section is in edit mode, show form. */}

        {
          this.state.mode === 'edit' ? (
            <div className = 'section'>
            <form action="" className="educationform">
            <h3>Add School</h3>
              <label htmlFor="years" className="left">Years</label>
              <input onChange={this.handleChange} className="right" type="text" name="years" placeholder="e.g. 2010 - 2014"/>
              
              <label htmlFor="School" className="left">School</label>
              <input onChange={this.handleChange} className="right" type="text" name="school" placeholder="School name"/>

              <label htmlFor="Location" className="left">Location</label>
              <input onChange={this.handleChange} className="right" type="text" name="location" placeholder="Location"/>
            
              <label htmlFor="focus" className="left">Major</label>
              <input onChange={this.handleChange} className="right" type="text" name="focus" placeholder="Major"/>
              
              <label htmlFor="degree" className="left">Degree</label>
              <input onChange={this.handleChange} className="right" type="text" name="degree" placeholder="Degree"/>

              <div className="buttons">
              <button 
              type="button"
              onClick={this.handleSubmitEducationEntry}
              >Save</button>
              <button>Cancel</button>
              </div>
              
            </form>
            </div>
          ) : this.state.educationEntries.length > 0 ? 
          (

            // if section is NOT in edit mode and there are entries, show them

            <div className = 'section'>
            <EducationDisplay 
              educationEntries = { this.state.educationEntries }
            />
        </div>
          ) : (

            // if section is NOT in edit mode and there are no entries, show sample entry

            <EducationSample />
          )
        }  
      </>
    )
  }
}

export default Education;