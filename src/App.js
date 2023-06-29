import './App.css';
import React, { Component } from "react";
import BasicInfo from './components/BasicInfo';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Skills from './components/Skills';
import SectionHeader from './components/SectionHeader';
import uniqid from 'uniqid';
import { setProperty } from './helpers';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      basicInfo: {
        firstName: 'First name',
        lastName: 'Last name',
        addressLine1: 'Address line 1',
        addressLine2: 'Address line 2',
        phone: 'Phone number',
        email: 'Email address',
        mode: 'display',
      },
      education: {
        educationEntry: {
          years: 'Year',
          school: 'School name',
          location: 'Location',
          focus: 'Major',
          degree: 'Degree',
          id: uniqid(),
        },
        educationEntries: [
          {
            years: 'Year',
            school: 'School name',
            location: 'Location',
            focus: 'Major',
            degree: 'Degree',
            id: 1,
          },
          {
            years: '2000 - 2004',
            school: 'The Cooper Union',
            location: 'New York, NY',
            focus: 'Art',
            degree: 'BFA',
            id: 2,
          },
          {
            years: '2030',
            school: 'Hunter',
            location: 'New York, NY',
            focus: 'Art History',
            degree: 'MFA',
            id: 3,
          }
        ],
        mode: 'display',
      },
      workHistory: {
        workEntry: {
          startYear: '',
          endYear: '',
          company: '',
          location: '',
          title: '',
          duties: '',
          id: uniqid(),
        },
        workEntries: [
          {
            startYear: '1982',
            endYear: '1985',
            company: 'Apple',
            location: 'New York, NY',
            title: 'Mail sorter',
            duties: 'sorting mail',
            id: 1,
          },
          {
            startYear: '1986',
            endYear: '1988',
            company: 'Microsoft',
            location: 'New York, NY',
            title: 'Mail sorter',
            duties: 'sorting mail',
            id: 2,
          }
        ],
        mode: 'display',
      },
      skillSet: {
        skillEntry: '',
        skillEntries: ['typing','MS Excel', 'MS Word', 'Adobe Creative Suite', 'Proficient in French, Spanish, and Italian', 'ProTools', 'Final Cut Pro', 'Ableton'],
        mode: 'display',
      },
      mode: 'edit',
    }
  }

  handleEdit = (section) => {
    console.log(`You clicked the edit button for ${section} `)
    const newState = Object.assign({}, this.state);
    
    this.setState(setProperty(newState, `${section}.mode`, 'edit'));
  }

  handleSave = (section) => {
    console.log(`You clicked the save button for ${section} `)
    const newState = Object.assign({}, this.state);
    
    this.setState(setProperty(newState, `${section}.mode`, 'display'));
  }

  render(){
    return (
      <div id="appwrapper">

        <h1>Resume Builder</h1>

        <div id="resumewrapper">
          <BasicInfo 
            firstName = { this.state.basicInfo.firstName }
            lastName = { this.state.basicInfo.lastName }
            addressLine1 = { this.state.basicInfo.addressLine1 }
            addressLine2 = { this.state.basicInfo.addressLine2 }
            email = { this.state.basicInfo.email }
            phone = { this.state.basicInfo.phone }
            mode = { this.state.basicInfo.mode }
          />

          <SectionHeader 
            section="education"
            name="Education"
            handleEdit={this.handleEdit}
            handleSave={this.handleSave}
            mode = { this.state.education.mode }
          />
          <Education 
            educationEntries = { this.state.education.educationEntries }
            mode = { this.state.education.mode }
          />

          <SectionHeader 
            section="workHistory"
            name="Experience"
            handleEdit={this.handleEdit}
            handleSave={this.handleSave}
            mode = { this.state.workHistory.mode }
          />
          <WorkHistory 
            workEntries = { this.state.workHistory.workEntries }
            mode = { this.state.workHistory.mode }
          /> 
          
          <SectionHeader 
            section="skillSet"
            name="Skills"
            handleEdit={this.handleEdit}
            handleSave={this.handleSave}
            mode = { this.state.skillSet.mode }
          />

          <Skills 
            skillEntries = { this.state.skillSet.skillEntries }
            handleEdit={this.handleEdit}
            handleSave={this.handleSave}
            mode = { this.state.skillSet.mode }
          />

        </div>

      </div>
    );
  }
}

export default App;
