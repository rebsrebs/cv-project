import React, { Component } from "react";
import uniqid from 'uniqid';
import SectionHeader from "./SectionHeader";
import '../styles/Experience.css';

class Experience extends Component {

  constructor() {
    super();
    this.state = {
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
      }
    }

  render() {
    return (
      <div className = 'section'>
        <SectionHeader 
          section="experience"
          name="Experience"
        />

        {this.state.workEntries.map((job, idx) => {
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

export default Experience;