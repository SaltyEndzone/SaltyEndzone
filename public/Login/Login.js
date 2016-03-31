import React, { Component } from 'react'
import { render } from 'react-dom'

import { Button, Modal } from 'react-bootstrap'

export default class Login extends Component {
  render() {

    const { openLogin, closeLogin, login } = this.props
    
      return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={openLogin}>
          Fight!
        </Button>
        <Modal show={login.login}
          closeTimeoutMS={150}>
          <Modal.Body>
          <Modal.Title className="winner-header">Winner Winner Chicken Dinner</Modal.Title>
   
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeLogin}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}