import './App.css';
import React, { Component } from "react";
import BasicInfo from './components/BasicInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import { setProperty } from './helpers';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      mode: 'display',
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
        <div className="outerbuttons">
          <button>Edit</button>
          <button>Print</button>
        </div>

        <div id="resumewrapper">

          <BasicInfo />

          <Education 
          />
          <div className="spacer"></div>

          <Experience
          /> 
          <div className="spacer"></div>

          <Skills 
          />
          <div className="spacer"></div>

        </div>
      </div>
      
    );
  }
}

export default App;
