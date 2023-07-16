
import React, { Component } from "react";
import '../styles/Skills.css';
import DeleteBtn from "./DeleteBtn";

class SkillsForm extends Component {

  render() {

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

            { this.props.skillSet.map((skill, idx) => {
              return (<>
              <input key={idx} placeholder={skill.skillName} onChange={ this.props.handleChange }/>
              <DeleteBtn 
                onClick = { () => this.props.handleDeleteSkill(skill.skillID)}
              />
              </>
            )})}

            <div className="buttons">
              <button type="button">Save</button>
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