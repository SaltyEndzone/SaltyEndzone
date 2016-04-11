import React, { Component } from 'react';
import { render } from 'react-dom';

import { Button, Modal } from 'react-bootstrap';

import signup from './Auth/controllers/authentication'




export default class SignUp extends Component {
  render() {

    const { openSignUp, closeSignUp, signUpBox } = this.props;
    
    return (
          <Modal className="modal-dialog" bsSize="small" show={signUpBox.signUpBox} closeTimeoutMS={150}>
            <Modal.Body>
            <Modal.Title className="login-title">Data.Structrz Sign Up</Modal.Title>
            </Modal.Body>
            <div className="login-input">
              <div className="form-group">
                <div className="user-input">
                  <i className="glyphicon glyphicon-user"></i>
                  <input type="email" className="form-control" placeholder="Enter a Username"/>
                </div>
                <div className="password-input">
                  <i className="glyphicon glyphicon-lock"></i>
                  <input type="password" className="form-control" placeholder="Enter a Password"/>
                </div>
              </div>
            </div>
            <div className="login-button">
              <Button className="btn btn-info" onClick={}>Join Data.Structrz</Button>
            </div>
          </Modal>
    );
  }
}