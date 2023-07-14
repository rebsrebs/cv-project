import React, { Component } from "react";
import uniqid from 'uniqid';
import SectionHeader from "./SectionHeader";
import '../styles/Skills.css';
import AddBtn from "./AddBtn";
import EditBtn from "../images/edit_g.svg"

class Skills extends Component {

  constructor() {
    super();
    this.state = {
        skillEntry: {
          skillName: '',
          skillID: uniqid(),
        },
        skillSet: [],
        mode: 'display', 
    }
  }

  // this needs to be fixed
handleChange = (e) => {
  console.log(`handleChange and e.target.value is ${e.target.value}`)
  this.setState(previousState => {
    return {
      ...previousState, skillEntry: {
        ...this.state.skillEntry, skillName: e.target.value
      }
    };
  });
}

handleAddClick = () => {
  console.log('add skill was clicked');
  this.setState({
    ...this.state,
    mode: 'form',
  });
}

handleCancelAddSkill = () => {
  this.setState({
    skillEntry: {
      skillName: '',
      skillID: uniqid(),
    },
    skillSet: this.state.skillSet,
    mode: 'display', 
  });
};

handleSubmitAddSkill = () => {
  console.log(`handleSubmitAddSkill running and this.state.skillEntry.skillName is ${this.state.skillEntry.skillName}`)
  this.setState({
    skillSet: this.state.skillSet.concat(this.state.skillEntry),
    skillEntry: {
      skillName: '',
      skillID: uniqid(),
    },
    mode: 'display',
  })
}

handleEditSkillSetClick = () => {
  console.log('you clicked the edit skill set button')
}

  render() {

    return (
      <>
      <SectionHeader 
          section="skills"
          name="Skills"
        />
      { // DISPLAY MODE
      
        this.state.mode === 'display' ? (

          <div className='section'>

            <ul className="skillList">

              {this.state.skillSet.map((skill, idx) => {
                // if last entry, don't put comma at end
                if (idx === this.state.skillSet.length - 1) {
                  return (
                    <span
                      key={skill.skillID} 
                      className="skill">
                      {skill.skillName}.

                      {
                        this.props.mainmode === 'edit' && this.state.skillSet.length > 0 ? (
                            <img
                              src={EditBtn} 
                              alt="Edit" 
                              className="button skills--button-round"
                            />) : (null)
                      }
                    </span>
                  )
                }

                return (
                  <span 
                    key={skill.skillID} 
                    className="skill">
                    {skill.skillName},&nbsp;
                  </span>
                )
              })
            }
          </ul>


          
          <AddBtn 
            text = 'Skill'
            clickHandler={this.handleAddClick}
            mainmode={this.props.mainmode}
          />
          </div>

        ) : (
          // Add Skill
          <>
            <form action="" className="skillform">
              <h3>Add Skill</h3>
              <label htmlFor="skillName" className="left">Skill</label>
              <input type="text" name="skillName" className="right" onChange={ this.handleChange } placeholder="e.g. typing or Microsoft Word"/>
              <div className="buttons">
                <button type="button" onClick = { this.handleSubmitAddSkill }>Save</button>
                <button type="button" onClick = { this.handleCancelAddSkill }>Cancel</button>
              </div>
            </form>
          </>
        )
      }
      </>
    )
   
  } // end render
} // end component

export default Skills;