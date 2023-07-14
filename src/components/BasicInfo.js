import React, { Component } from "react";
import editBtn from '../images/edit_g.svg';
import '../styles/BasicInfo.css';

class BasicInfo extends Component {

  constructor() {
    super();
    this.state = { 
      firstName: 'First name',
      lastName: 'Last name',
      addressLine1: 'Address line 1',
      addressLine2: 'Address line 2',
      phone: 'Phone number',
      email: 'Email address',
      mode: 'display',
    }
  }

  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState(previousState => {
      return {
        ...previousState, [e.target.name]: e.target.value
      };
    });
  }

  handleEditBasicInfoClick = () => {
    console.log(`you clicked edit basic info`)
    // when I click this again it should save the new state
    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      phone: this.state.phone,
      email: this.state.email,
      mode: 'form',
    });
  }

  handleEditBasicInfoFormSubmit = () => {
    console.log('You clicked submit on the edit basic info form.')
    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      phone: this.state.phone,
      email: this.state.email,
      mode: 'display',
    })
  }



  render() {
    return (
      <>
        { 
          this.state.mode === 'display' ? (

            <div className='basicinfo'>

              <div className='basicinfodisplay'>
                <div className='fullname'>
                  <p className='firstname basicinfoentry'>{ this.state.firstName }&nbsp;</p>
                  <p className='lastname basicinfoentry'> { this.state.lastName }</p>
                </div>
                <p className='address1 basicinfoentry'>{ this.state.addressLine1 }</p>
                <p className='address2 basicinfoentry'>{ this.state.addressLine2 }</p>
                <p className='phone basicinfoentry'>{ this.state.phone }</p>
                <p className='email basicinfoentry'>{ this.state.email }</p>
              </div>

              <div class="basicinfobtnwrapper">
                <img src={editBtn} 
                  role="button"
                  alt="edit" 
                  width="22px" 
                  className = "Btn basicinfobtn"
                  onClick={ this.handleEditBasicInfoClick }
                />
              </div>

            </div>

          ) : (

            <div className='basicinfo'>

              <form className="basicinfoform">

                <div className="fullnameinput">
                  <input onChange={this.handleChange} className="nameinput" type="text" id="firstName" name="firstName" placeholder={this.state.firstName}/>
                  <input onChange={this.handleChange} className="nameinput" type="text" id="lastName" name="lastName" placeholder={this.state.lastName}/>
                </div>
                <input onChange={this.handleChange} type="text" className="address1" id="addressLine1" name="addressLine1" placeholder={this.state.addressLine1}/>
                <input onChange={this.handleChange} type="text" id="addressLine2" name="addressLine2" placeholder={this.state.addressLine2} className="address2"/>
                <input onChange={this.handleChange} type="text" id="email" name="email" placeholder={this.state.email} className="email"/>
                <input onChange={this.handleChange} type="text" id="phone" name="phone" placeholder={this.state.phone} className="phone"/>

                <button 
                type="button"
                className = "Btn basicinfobtn"
                onClick={this.handleEditBasicInfoFormSubmit}
                >
                  Save
                </button>

              </form>          

            </div>
          )
        }
      </>
    )
  }

}

export default BasicInfo
