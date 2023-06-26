import React, { Component } from "react";
import '../styles/WorkHistory.css';

class WorkHistory extends Component {

  render() {
    return (
      <div className = 'section'>
        <h2>Work History</h2>
        <div className='job'>
          <p>Year</p>
          <p>Company</p>
          <p>Title</p>
          <p>Duties</p>
        </div>
      </div>
    )
  }

}

export default WorkHistory;