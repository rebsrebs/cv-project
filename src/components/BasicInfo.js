import React, { Component } from "react";
import editBtn from '../images/edit_g.svg';
import saveBtn from '../images/save_g.svg';
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

    render() {
      return (
        <>

          { 
            this.state.mode === 'display' ? (
              <div className='basicinfo'>
              <div className='basicinfodisplay'>
              <p className='fullnameinputs fullname'>{ this.state.firstName } { this.state.lastName }</p>
              <p className='address'>{ this.state.addressLine1 }</p>
              <p className='address'>{ this.state.addressLine2 }</p>
              <p className='phone'>{ this.state.phone }</p>
              <p className='email'>{ this.state.email }</p>
              </div>

              <img src={editBtn} 
              role="button"
              alt="edit" 
              width="22px" 
              className = "Btn basicinfobtn"
            />
            </div>

              
            ) : (
              <div className='basicinfo'>
              <form className="basicinfoform">
                <div className="fullname">
                  <input type="text" id="fname" name="fname" value="First name"/>
                  <input type="text" id="lname" name="lname" value="Last name"/>
                </div>
                <input type="text" id="addressLine1" name="addressLine1" value="Addres line 1"/>
                <input type="text" id="addressLine2" name="addressLine2" value="Addres line 2"/>
                <input type="text" id="email" name="email" value="Email"/>
                <input type="text" id="phone" name="phone" value="Phone"/>
              </form>

              <img src={saveBtn} 
              role="button"
              alt="save" 
              width="22px" 
              className = "Btn basicinfobtn"
            />
            </div>
            )
          }
          

        </>
      )
    }
}

export default BasicInfo