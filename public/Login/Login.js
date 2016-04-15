import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button, Modal } from 'react-bootstrap';

import { Link } from 'react-router';


export default class Login extends Component {

  openSignUpModal () {
    closeLogin();
    openSignUp();
  }

    handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.username.value, this.password.value);
    this.username.value = ''
    this.password.value= ''
  }
  
  render() {
    const { openLogin, closeLogin, login, openSignUp } = this.props;


    return (
      <div>
        <div className="login-corner">
         <span className="login" onClick={openLogin}>LOGIN</span> 
        </div>
          <Modal className="modal-dialog" bsSize="small" show={login.login} closeTimeoutMS={150}>
            <Modal.Body>
            <Modal.Title className="login-title">Login</Modal.Title>
            </Modal.Body>
            <div className="login-input">
              <div className="form-group">
                <div className="user-input">
                  <i className="glyphicon glyphicon-user"></i>
                  <input type="email" className="form-control" placeholder="Username"  ref={node => { this.login = node }}/>
                </div>
                <div className="password-input">
                  <i className="glyphicon glyphicon-lock"></i>
                  <input type="password" className="form-control" placeholder="Password" ref={node => { this.password = node }}/>
                </div>
              </div>
            </div>
            <div className="login-button">
              <Button className="btn btn-info" onClick={closeLogin}>Welcome Back!</Button>
            </div>
            <div className="register-button">
              <Link to={'signup'}><a className="register-link" ui-sref="register" onClick={closeLogin}>Not a member? Sign up!</a></Link> 
            </div>
          </Modal>
      </div>
    );
  }
}