import './App.css';
import React, { Component } from "react";
import BasicInfo from './components/BasicInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      mainmode: 'edit',
    }
  }

  handleEditBtnClick = () => {
    console.log('you clicked edit button');
    this.setState({
      mainmode: 'edit',
    });
  }

  handlePrintBtnClick = () => {
    console.log('you clicked print button');
    this.setState({
      mainmode: 'print',
    });
  }

  render(){
    return (
      <div id="appwrapper">

        <h1>Resume Builder</h1>
        <div className="outerbuttons">
          <button
            type="button"
            onClick={this.handleEditBtnClick}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={this.handlePrintBtnClick}
          >
            Print
          </button>
        </div>

        <div id="resumewrapper">

          <BasicInfo 
            mainmode = {this.state.mainmode}
          />

          <Education 
            mainmode = {this.state.mainmode}
          />
          <div className="spacer"></div>

          <Experience
            mainmode = {this.state.mainmode}
          /> 
          <div className="spacer"></div>

          <Skills 
            mainmode = {this.state.mainmode}
          />
          <div className="spacer"></div>

        </div>
      </div>
      
    );
  }
}

export default App;
