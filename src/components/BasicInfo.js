import React, { Component } from "react";

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
        <div>
          <p>Full Name</p>
          <p>Phone</p>
          <p>Email</p>
          <p>Address</p>
        </div>
      )
    }
}

export default BasicInfo