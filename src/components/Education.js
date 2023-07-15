import React, { Component } from "react";
import '../styles/Education.css';
import uniqid from 'uniqid';
import SectionHeader from "./SectionHeader";
import EducationDisplay from "./EducationDisplay";
import AddBtn from "./AddBtn";

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
        schoolID: uniqid(),
      },
      educationEntries: [],
      mode: 'display',
      formtype: null,
      schooltoedit: null,
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

  handleAddSchoolFormSubmit = () => {
    this.setState({
      educationEntries: this.state.educationEntries.concat(this.state.educationEntry),
      educationEntry: {
        years: '',
        school: '',
        location: '',
        focus: '',
        degree: '',
        schoolID: uniqid(),
      },
      mode: 'display',
      formtype: null,
      schooltoedit: null,
    });
  };

  handleSchoolFormCancel = () => {
    this.setState({
      educationEntries: this.state.educationEntries,
      educationEntry: {
        years: '',
        school: '',
        location: '',
        focus: '',
        degree: '',
        schoolID: uniqid(),
      },
      mode: 'display',
      formtype: null,
      schooltoedit: null,
    });
  };

  handleDeleteSchool = (thisSchoolID) => {
    // const thisSchoolID = e.target.dataset.schoolid;
    console.log(thisSchoolID);
    this.setState( { 
      ...this.state,
      educationEntries: this.state.educationEntries.filter((el) => el.schoolID !== thisSchoolID),
    });
  };

  handleEditSchoolClick = (thisSchoolID) => {
    // const thisSchoolID = e.target.dataset.schoolid;
    console.log(`you clicked edit button next to school ${thisSchoolID}`)
    const theschool = this.state.educationEntries.find((el) => el.schoolID === thisSchoolID)
    this.setState({
      ...this.state,
      educationEntry: {
        years: theschool.years,
        school: theschool.school,
        location: theschool.location,
        focus: theschool.focus,
        degree: theschool.degree,
        schoolID: theschool.schoolID,
      },
      mode: 'form',
      formtype: 'edit',
      schooltoedit: thisSchoolID,
    });
  }

  handleEditSchoolFormSubmit = (e) => {
    const thisSchoolID = e.target.dataset.schoolid;

    this.setState({ 
      ...this.state,
      educationEntries: this.state.educationEntries.filter((el) => el.schoolID !== thisSchoolID).concat(this.state.educationEntry),
      educationEntry: {
        years: '',
        school: '',
        location: '',
        focus: '',
        degree: '',
        schoolID: uniqid(),
      },
      mode: 'display',
      formtype: null,
      schooltoedit: null,
    });
  }

  handleAddSchoolClick = () => {
    console.log('add school was clicked');
    this.setState({
      ...this.state,
      mode: 'form',
      formtype: 'add',
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
                educationEntry = { this.state.educationEntry }
                educationEntries = { this.state.educationEntries }
                handleChange={this.handleChange}
                handleAddSchoolFormSubmit={this.handleAddSchoolFormSubmit}
                handleEditSchoolFormSubmit={this.handleEditSchoolFormSubmit}
                handleSchoolFormCancel={this.handleSchoolFormCancel}
                formtype={this.state.formtype}
                schooltoedit={this.state.schooltoedit}
                // dont show below once you figure out how to not render those buttons
                handleDeleteSchool = { this.handleDeleteSchool }
                handleEditSchoolClick = {this.handleEditSchoolClick}
              />
            </>
          ) : 
          (
            // if section is NOT in edit mode and there are entries, show them
            <div className = 'section'>
            <EducationDisplay 
              educationEntries = { this.state.educationEntries }
              educationEntry = { this.state.educationEntry }
              handleDeleteSchool = { this.handleDeleteSchool }
              schooltoedit = { this.state.schooltoedit}
              handleChange = {this.handleChange}
              handleEditSchoolClick = {this.handleEditSchoolClick}
              mainmode = {this.props.mainmode}
            />
            <AddBtn 
                text='School'
                clickHandler={this.handleAddSchoolClick}
                mainmode={this.props.mainmode}
              />
        </div>
          ) 
        }  
      </>
    )
  }
}

export default Education;