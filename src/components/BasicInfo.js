import React, { Component } from "react";
import '../styles/BasicInfo.css';

class BasicInfo extends Component {

  constructor() {
    super();
    this.state = {
      basics: {
        fullname: 'Temp Name', 
        phone: 'Temp Phone',
        email: 'Temp Email',
        address: 'Temp Address',
      }
    };
  }

    render() {
      // const basics = this.state;
      return (
        <div className='basicinfo'>
          <p className='fullname'>Johnny Appleseed</p>
          <p className='address'>123 Fake Street, Springfield, MA 01234</p>
          <p className='phone'>212 654-4321</p>
          <p className='email'>Johnny dot Appleseed at gmail dot com</p>
        </div>
      )
    }
}

export default BasicInfo