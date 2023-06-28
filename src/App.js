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
        firstName: 'George',
        lastName: 'Piquart',
        addressLine1: '123 Pine Street',
        addressLine2: 'New York, NY 12345',
        phone: '363-345-5677',
        email: 'georgepiquart@gmail.com',
      },
      education: {
        educationEntry: {
          years: '',
          school: '',
          location: '',
          focus: '',
          degree: '',
        },
        educationEntries: [
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
      },
      skillSet: {
        skillEntry: '',
        skillEntries: ['typing','MS Excel', 'MS Word', 'Adobe Creative Suite', 'Proficient in French, Spanish, and Italian', 'ProTools', 'Final Cut Pro', 'Ableton'],
      },
      mode: 'edit',
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
