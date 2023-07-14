import React, { Component } from "react";
import uniqid from 'uniqid';
import SectionHeader from "./SectionHeader";
import AddBtn from "./AddBtn";
import ExperienceDisplay from "./ExperienceDisplay";
import '../styles/Experience.css';

class Experience extends Component {

  constructor() {
    super();
    this.state = {
        jobEntry: {
          startYear: '',
          endYear: '',
          company: '',
          location: '',
          title: '',
          duties: '',
          jobID: uniqid(),
        },
        jobEntries: [],
        mode: 'display',
        formtype: null,
        jobtoedit: null,
      }
    }

  handleAddExperienceClick = () => {
    console.log('you clicked add experience button')
    this.setState({
      ...this.state,
      mode: 'form',
      formtype: 'add',
    });
  }

  handleDeleteJob = (e) => {
    this.setState({
      ...this.state,
      jobEntries: this.state.jobEntries.filter((job) => job.jobID !== e.target.dataset.jobid ),
    });
  }

  handleJobFormCancel = () => {
    console.log('you clicked cancel add job')
    this.setState({
      ...this.state,
      mode: 'display',
      formtype: null,
      jobtoedit: null,
    });
  }

  handleEditJobClick = (e) => {
    const thisJobID = e.target.dataset.jobid;
    console.log(`you clicked edit button next to job ${thisJobID}`)
    const thejob = this.state.jobEntries.find((el) => el.jobID === thisJobID)
    this.setState({
      ...this.state,
      jobEntry: {
        startYear: thejob.startYear,
        endYear: thejob.endYear,
        company: thejob.company,
        location: thejob.location,
        title: thejob.title,
        duties: thejob.duties,
        jobID: thejob.jobID,
      },
      mode: 'form',
      formtype: 'edit',
      jobtoedit: thisJobID,
    });
  }

  handleAddJobFormSubmit = () => {
    console.log(`you clicked submit added job`);
    this.setState({
      jobEntries: this.state.jobEntries.concat(this.state.jobEntry),
      jobEntry: {
        startYear: '',
        endYear: '',
        company: '',
        location: '',
        title: '',
        duties: '',
        jobID: uniqid(),
      },
      mode: 'display',
      formtype: null,
      jobtoedit: null,
    });
  }

  handleEditJobFormSubmit = (e) => {
    const thisJobID = e.target.dataset.jobid;

    this.setState({ 
      ...this.state,
      jobEntries: this.state.jobEntries.filter((el) => el.jobID !== thisJobID).concat(this.state.jobEntry),
      jobEntry: {
        startYear: '',
        editYear: '',
        company: '',
        location: '',
        title: '',
        duties: '',
        jobID: uniqid(),
      },
      mode: 'display',
      formtype: null,
      jobtoedit: null,
    });
  }

  handleChange = (e) => {
    this.setState(previousState => {
      return {
        ...previousState, jobEntry: {
          ...this.state.jobEntry, [e.target.name]: e.target.value
        }
      };
    });
  }



  render() {
    return (
      <div className = 'section'>
        <SectionHeader 
          section="experience"
          name="Experience"
        />

        <ExperienceDisplay 
          jobEntries = { this.state.jobEntries }
          jobEntry = { this.state.jobEntry }
          mode = { this.state.mode }
          formtype = {this.state.formtype}
          jobtoedit = {this.state.jobtoedit}
          handleChange = {this.handleChange }
          handleJobFormCancel = {this.handleJobFormCancel}
          handleDeleteJob = { this.handleDeleteJob }
          handleEditJobClick = { this.handleEditJobClick }
          handleAddJobFormSubmit = {this.handleAddJobFormSubmit}
          handleEditJobFormSubmit = {this.handleEditJobFormSubmit}
          mainmode = { this.props.mainmode }
        />

        <AddBtn 
          text="Experience"
          clickHandler={this.handleAddExperienceClick}
          mainmode={this.props.mainmode}
        />

      </div>
    )
  }

}

export default Experience;