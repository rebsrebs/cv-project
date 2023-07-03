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
          />

          
          <Education 
          />
          <div className="spacer"></div>

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
          <div className="spacer"></div>
          
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
          <div className="spacer"></div>

        </div>
      </div>
      
    );
  }
}

export default App;
