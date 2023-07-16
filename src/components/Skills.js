import React, { Component } from "react";
import uniqid from 'uniqid';
import SectionHeader from "./SectionHeader";
import '../styles/Skills.css';
import AddBtn from "./AddBtn";
import EditBtn from "../images/edit_g.svg"
import SkillsForm from "./SkillsForm";

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
        formtype: null,
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

handleAddSkillClick = () => {
  console.log('add skill was clicked');
  this.setState({
    ...this.state,
    mode: 'form',
    formtype: 'add',
  });
}

handleEditSkillSetClick = () => {
  console.log('edit skills was clicked');
  this.setState({
    ...this.state,
    mode: 'form',
    formtype: 'edit',
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

  if (this.state.skillEntry.skillName !== '') {
  this.setState({
    skillSet: this.state.skillSet.concat(this.state.skillEntry),
    skillEntry: {
      skillName: '',
      skillID: uniqid(),
    },
    mode: 'display',
  })
} else {
  this.setState({
    ...this.state,
    mode: 'display',
  });
}
}

handleDeleteSkill = (thisSkillID) => {
  console.log('you clicked delete skill for:')
  console.log(thisSkillID)
  this.setState( { 
    ...this.state,
    skillSet: this.state.skillSet.filter((el) => el.skillID !== thisSkillID),
    mode: 'edit',
    formtype: null,
  });
};

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
                              onClick={this.handleEditSkillSetClick}
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
            clickHandler={this.handleAddSkillClick}
            mainmode={this.props.mainmode}
          />
          </div>

        ) : (
          // Add Skill
          <>
            <SkillsForm 
              mode = {this.state.mode}
              formtype = {this.state.formtype}
              skillSet = {this.state.skillSet}
              handleChange = {this.handleChange}
              handleSubmitAddSkill = {this.handleSubmitAddSkill}
              handleCancelAddSkill = {this.handleCancelAddSkill}
              handleDeleteSkill = { this.handleDeleteSkill }
              
            />
          </>
        )
      }
      </>
    )
   
  } // end render
} // end component

export default Skills;