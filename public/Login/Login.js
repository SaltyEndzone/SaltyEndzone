import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import Modal from 'react-bootstrap'

const MySmallModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Login</h4>
            <form>
              <input type="text" placeholder="username" required />
              <input type="password" placeholder="password" required />
              <Link to="linkedlist" className="login-button">Welcome Back</Link>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});