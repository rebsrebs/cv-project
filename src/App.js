import './App.css';
import React, { Component } from "react";
import BasicInfo from './components/BasicInfo';
import Education from './components/Education';
import WorkHistory from './components/WorkHistory';
import Skills from './components/Skills';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      cv: {
        firstName: '',
      }
    }
  }

  render(){
    return (
      <div>
        <BasicInfo />
        <Education />
        <WorkHistory />
        <Skills />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
