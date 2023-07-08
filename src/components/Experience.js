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
        workEntry: {
          startYear: '',
          endYear: '',
          company: '',
          location: '',
          title: '',
          duties: '',
          jobID: uniqid(),
        },
        workEntries: [],
        mode: 'display',
        formview: null,
        jobtoedit: null,
      }
    }

  handleAddExperienceClick = () => {
    console.log('you clicked add experience button')
    this.setState({
      ...this.state,
      mode: 'form',
      formview: 'add',
    });
  }

  handleDelete = (e) => {
    this.setState({
      ...this.state,
      workEntries: this.state.workEntries.filter((job) => job.jobID !== e.target.dataset.jobid ),
    });
  }

  handleEditJobClick = (e) => {
    console.log(`you clicked edit job ${e.target.value}`);
  }

  handleAddJobSubmit = () => {
    console.log(`you clicked submit added job`);
    this.setState({
      workEntries: this.state.workEntries.concat(this.state.workEntry),
      workEntry: {
        startYear: '',
        endYear: '',
        company: '',
        location: '',
        title: '',
        duties: '',
        jobID: uniqid(),
      },
      mode: 'display',
      formview: null,
      jobtoedit: null,
    });
  }

  handleChange = (e) => {
    this.setState(previousState => {
      return {
        ...previousState, workEntry: {
          ...this.state.workEntry, [e.target.name]: e.target.value
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
          workEntries = { this.state.workEntries }
          workEntry = { this.state.workEntry }
          mode = { this.state.mode }
          formview = {this.state.formview}
          jobtoedit = {this.state.jobtoedit}
          handleChange = {this.handleChange }
          handleDelete = { this.handleDelete }
          handleEditJobClick = { this.handleEditJobClick }
          handleAddJobSubmit = {this.handleAddJobSubmit}
        />

        <AddBtn 
          text="Experience"
          clickHandler={this.handleAddExperienceClick}
        />

      </div>
    )
  }

}

export default Experience;