import React, { Component } from "react";

class WorkHistory extends Component {

  constructor() {
    super();

    this.state = {
      job: {
        year: '',
        company: '',
        title: '',
        duties: '',
      },
      jobs: [],
    };

  }

  render() {
    return (
      <div>
        <h2>Work History</h2>
        <p>Year</p>
        <p>Company</p>
        <p>Title</p>
        <p>Duties</p>
      </div>
    )
  }

}

export default WorkHistory;