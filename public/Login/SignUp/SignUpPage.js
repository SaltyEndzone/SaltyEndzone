import React, { Component } from 'react';
import { render } from 'react-dom';

import { Button, Modal } from 'react-bootstrap';

import { Link } from 'react-router';
import {SignUp} from  './SignUpActions';



//Just an attempt at making a sign up static page. Nothing here is connected to anything else wihtin the repo,
//don't worry about this being incomplete

export default class Registration extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.register(this.username.value, this.password.value);
    this.username.value = ''
    this.password.value= ''
  }
  
  render() {
    
    return <div>
            <div className="sign-up">
            <h2>Welcome! Sign-Up Here:</h2>
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Desired Username:</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter a Username.." ref={usage => { this.username = usage}}></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter a Password.." ref={usage => { this.password = usage}}></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputFile">Upload a profile photo:</label>
                  <input type="file" id="exampleInputFile"></input>
                </div>
                  <button type="submit" id="login-button" className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}><Link className="sign-up-button" to={'home'}>Join Data.Structrz</Link></button>
              </form>
            </div>
          </div>

  }
}
