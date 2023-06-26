import React, { Component } from "react";
import '../styles/BasicInfo.css';

class BasicInfo extends Component {

    render() {
      return (
        <div className='basicinfo'>
          <p className='fullname'>{ this.props.firstName } { this.props.lastName }</p>
          <p className='address'>{ this.props.addressLine1 }</p>
          <p className='address'>{ this.props.addressLine2 }</p>
          <p className='phone'>{ this.props.phone }</p>
          <p className='email'>{ this.props.email }</p>
        </div>
      )
    }
}

export default BasicInfo