import './App.css';
import React, { Component } from "react";
import BasicInfo from './components/BasicInfo';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Skills from './components/Skills';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      basicInfo: {
        firstName: 'George',
        lastName: 'Piquart',
        address: '123 Pine Street',
        phone: '363-345-5677',
        email: 'georgepiquart@gmail.com',
      },
      education: {
        educationEntry: {
          years: '',
          school: '',
          focus: '',
          degree: '',
        },
        educationEntries: [
          {
            years: '2000 - 2004',
            school: 'The Cooper Union',
            focus: 'Art',
            degree: 'BFA',
          },
          {
            years: '2030',
            school: 'Hunter',
            focus: 'Art History',
            degree: 'MFA',
          }
        ],
      },
      workHistory: {
        workEntry: {
          years: '',
          company: '',
          title: '',
          duties: '',
        },
        workEntries: [
          {
            years: '1982 - 1985',
            company: 'Apple',
            title: 'Mail sorter',
            duties: 'sorting mail',
          },
          {
            years: '1986 - 1988',
            company: 'Microsoft',
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
            address = { this.state.basicInfo.address }
            email = { this.state.basicInfo.email }
            phone = { this.state.basicInfo.phone }
            />
          {/* <hr /> */}
          <Education 
            educationEntries = { this.state.education.educationEntries }
          />
          <WorkHistory 
            workEntries = { this.state.workHistory.workEntries }
          /> 
          <Skills 
            skillEntries = { this.state.skillSet.skillEntries }
          />
        </div>
      </div>
    );
  }
}

export default App;
