import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { SignUp }           from './SignUpActions'
import SignUpPage           from './SignUpPage'



export default class Registration extends Component {
  register(username, password) {
    this.props.dispatch(SignUp(username, password))
  }

  render () {
    const { registrationError } = this.props
  return <div className='signup-container'>
        <SignUpPage 
            register={this.register.bind(this)} />
        { registrationError ? <div className='registration-error'>Sorry, email in use.</div> : null}
  </div>
  }
}

function mapStateToProps(state) {
 
  return {

  }
}

export default connect(mapStateToProps)(Registration)