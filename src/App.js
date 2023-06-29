import './App.css';
import React, { Component } from "react";
import BasicInfo from './components/BasicInfo';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Skills from './components/Skills';
import SectionHeader from './components/SectionHeader';

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
        },
        educationEntries: [
          {
            years: 'Year',
            school: 'School name',
            location: 'Location',
            focus: 'Major',
            degree: 'Degree',
          },
          {
            years: '2000 - 2004',
            school: 'The Cooper Union',
            location: 'New York, NY',
            focus: 'Art',
            degree: 'BFA',
          },
          {
            years: '2030',
            school: 'Hunter',
            location: 'New York, NY',
            focus: 'Art History',
            degree: 'MFA',
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
        },
        workEntries: [
          {
            startYear: '1982',
            endYear: '1985',
            company: 'Apple',
            location: 'New York, NY',
            title: 'Mail sorter',
            duties: 'sorting mail',
          },
          {
            startYear: '1986',
            endYear: '1988',
            company: 'Microsoft',
            location: 'New York, NY',
            title: 'Mail sorter',
            duties: 'sorting mail',
          }
        ],
        mode: 'display',
      },
      skillSet: {
        skillEntry: '',
        skillEntries: ['typing','MS Excel', 'MS Word', 'Adobe Creative Suite', 'Proficient in French, Spanish, and Italian', 'ProTools', 'Final Cut Pro', 'Ableton'],
        mode: 'display',
      },
    }
  }

  render(){
    return (
      <div id="appwrapper">

        <h1>Resume Builder</h1>
        <div id="buttons">
          <button id="editbtn">Edit</button>
          <button id="savebtn">Save</button>
          <button id="clearbtn">Clear</button>
        </div>

        <div id="resumewrapper">
          <BasicInfo 
            firstName = { this.state.basicInfo.firstName }
            lastName = { this.state.basicInfo.lastName }
            addressLine1 = { this.state.basicInfo.addressLine1 }
            addressLine2 = { this.state.basicInfo.addressLine2 }
            email = { this.state.basicInfo.email }
            phone = { this.state.basicInfo.phone }
          />

          <SectionHeader name="Education"/>
          <Education 
            educationEntries = { this.state.education.educationEntries }
          />

          <SectionHeader name="Experience"/>
          <WorkHistory 
            workEntries = { this.state.workHistory.workEntries }
          /> 
          
          <SectionHeader name="Skills"/>
          <Skills 
            skillEntries = { this.state.skillSet.skillEntries }
          />
        </div>

      </div>
    );
  }
}

export default App;
