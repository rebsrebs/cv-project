import React, { Component } from "react";
import '../styles/WorkHistory.css';

class WorkHistory extends Component {

  render() {
    return (
      <div className = 'section'>

        {this.props.workEntries.map((job, idx) => {
            return <div key={job.id} className="entry job">
              <p>
                {job.startYear} - {job.endYear}
              </p>
              <p>
                {job.company} {job.location}
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