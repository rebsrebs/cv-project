
import React, { Component } from "react";
import '../styles/Skills.css';
import DeleteBtn from "./DeleteBtn";

class SkillsForm extends Component {

  

  render() {

    console.log('skillsToDelete')
    console.log(this.props.skillsToDelete)
    console.log('skillSet')
    console.log(this.props.skillSet)

    return (
      this.props.mode === 'display' ? (
        null ) : (
      <>
      {this.props.formtype === 'add' ? (
        <form action="" className="skillform">
              <h3>Add Skill</h3>
              <label htmlFor="skillName" className="left">Skill</label>

              <input type="text" name="skillName" className="right" onChange={ this.props.handleChange } placeholder="e.g. typing or Microsoft Word"/>

              <div className="buttons">
                <button type="button" onClick = { this.props.handleSubmitAddSkill }>Save</button>
                <button type="button" onClick = { this.props.handleCancelAddSkill }>Cancel</button>
              </div>
            </form>
          
      ) : (
          <form action="" className="skillform">

            <h3>Edit Skills</h3>

            {/* { this.props.skillSet.map((skill, idx) => {
              return (<>
              <input key={idx} placeholder={skill.skillName} onChange={ this.props.handleChange }/>
              <DeleteBtn 
                onClick = { () => this.props.handleDeleteSkill(skill.skillID)}
              /> */}
            
            { this.props.skillSet.filter((skill) => !this.props.skillsToDelete.find((el) => el.skillID === skill.skillID)).map((skill, idx) => {return (
              <React.Fragment key={idx}>

                <input 
                  placeholder={skill.skillName} 
                  onChange={ (e) => this.props.handleChangeEditForm(e, skill.skillID) }/>

                <DeleteBtn 
                  onClick = { () => this.props.handleTempDelete(skill)}
                />

              </React.Fragment>
            )})}

            <div className="buttons">
              <button type="button"
              onClick={this.props.handleSubmitEditSkills}>Save</button>
              <button type="button"
              onClick={this.props.handleCancelAddSkill}>Cancel</button>
            </div>

          </form>
      )}
        </>)
    )
  }
}

export default SkillsForm;