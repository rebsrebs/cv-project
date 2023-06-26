import React, { Component } from "react";
import '../styles/WorkHistory.css';

class WorkHistory extends Component {

  render() {
    return (
      <div className = 'section'>
        <h2>Work History</h2>

        {this.props.workEntries.map((job, idx) => {
            return <div key={job.id} className="job">
              <p>
                {job.years}
              </p>
              <p>
                {job.company}
              </p>
              <p>
                {job.title}
              </p>
              <p>
                {job.duties}
              </p>
            </div>
          })}
      </div>
    )
  }

}

export default WorkHistory;