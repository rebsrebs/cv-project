import './App.css';
import React, { Component } from "react";

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
      <div>Hello.</div>
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
