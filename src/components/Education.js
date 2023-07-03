import React, { Component } from "react";
import '../styles/Education.css';
import uniqid from 'uniqid';
import SectionHeader from "./SectionHeader";
import EducationDisplay from "./EducationDisplay";
import AddBtn from "./AddBtn";
import EducationForm from "./EducationForm";

class Education extends Component {

  constructor() {
    super();
    // this.handleDelete = this.handleDelete.bind(this)
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
      mode: 'display',
    }
  }

// MODES
// form - show form
// display - show all entries with buttons
// presentation - show all entries without buttons

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

  // this just toggles back to display mode for section header only
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

  handleCancelAddSchool = () => {
    this.setState({
      educationEntries: this.state.educationEntries,
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
  };

  // need to get some identifier of the one clicked
  handleDelete = (e) => {
    const schoolID = e.target.dataset.schoolid;
    this.setState( { 
      ...this.state,
      educationEntries: this.state.educationEntries.filter((el) => el.id !== schoolID),
    });
  };

  handleEditSchool = (e) => {
    const schoolID = e.target.dataset.schoolid;
    console.log(schoolID);
    
  }

  handleAddClick = () => {
    console.log('add school was clicked');
    this.setState({
      ...this.state,
      mode: 'form'
    });
  }





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


        {
          this.state.mode === 'form' ? (
            <>
            <EducationDisplay 
              educationEntries = { this.state.educationEntries }
            />
            <EducationForm
              handleChange={this.handleChange}
              handleSubmitEducationEntry={this.handleSubmitEducationEntry}
              handleCancelAddSchool={this.handleCancelAddSchool}
            />
            
            </>
          ) : 
          (

            // if section is NOT in edit mode and there are entries, show them

            <div className = 'section'>
            <EducationDisplay 
              educationEntries = { this.state.educationEntries }
              handleDelete = { this.handleDelete }
            />
            <AddBtn 
                text='School'
                clickHandler={this.handleAddClick}
              />
        </div>
          ) 
        }  
      </>
    )
  }
}

export default Education;