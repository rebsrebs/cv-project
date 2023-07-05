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
      formview: null,
      schooltoedit: null,
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

  handleSubmitEducationEntry = () => {
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
      formview: null,
      schooltoedit: null,
    });
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
      formview: null,
      schooltoedit: null,
    });
  };

  // need to get some identifier of the one clicked
  handleDelete = (e) => {
    const schoolID = e.target.dataset.schoolid;
    console.log(schoolID);
    this.setState( { 
      ...this.state,
      educationEntries: this.state.educationEntries.filter((el) => el.id !== schoolID),
    });
  };

  handleEditSchoolBtn = (e) => {
    // get the schoolid from the button that was clicked
    // THIS IS WHERE I SHOULD SET THE ENTRY TO THE SCHOOL ID STUFF
    const schoolID = e.target.dataset.schoolid;
    console.log(`you clicked edit button next to school ${schoolID}`)
    const theschool = this.state.educationEntries.find((el) => el.id === schoolID)
    this.setState({
      ...this.state,
      educationEntry: {
        years: theschool.years,
        school: theschool.school,
        location: theschool.location,
        focus: theschool.focus,
        degree: theschool.degree,
        id: theschool.id,
      },
      mode: 'form',
      formview: 'edit',
      schooltoedit: schoolID,
    });
    // change the mode of that particular school from display to edit    
  }

  handleEditSchoolSubmit = (e) => {
    const schoolID = e.target.dataset.schoolid;

    this.setState({ 
      ...this.state,
      educationEntries: this.state.educationEntries.filter((el) => el.id !== schoolID).concat(this.state.educationEntry),
      educationEntry: {
        years: '',
        school: '',
        location: '',
        focus: '',
        degree: '',
        id: uniqid(),
      },
      mode: 'display',
      formview: null,
      schooltoedit: null,
    });
  }

  handleAddClick = () => {
    console.log('add school was clicked');
    this.setState({
      ...this.state,
      mode: 'form',
      formview: 'add',
    });
  }

  render() {
    return (
      <>
        <SectionHeader 
          section="education"
          name="Education"
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
                handleEditSchoolSubmit={this.handleEditSchoolSubmit}
                handleCancelAddSchool={this.handleCancelAddSchool}
                formview={this.state.formview}
                schooltoedit={this.state.schooltoedit}
                educationEntries = {this.state.educationEntries}
                educationEntry = { this.state.educationEntry }
              />
            </>
          ) : 
          (
            // if section is NOT in edit mode and there are entries, show them
            <div className = 'section'>
            <EducationDisplay 
              educationEntries = { this.state.educationEntries }
              educationEntry = { this.state.educationEntry }
              handleDelete = { this.handleDelete }
              schooltoedit = { this.state.schooltoedit}
              handleChange = {this.handleChange}
              handleEditSchoolBtn = {this.handleEditSchoolBtn}
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