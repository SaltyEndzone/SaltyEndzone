import React, { Component } from 'react'
import HomePage from '../HomePage/HomePage'
import LinkedList from '../LinkedList/LinkedList'
import Discussion from '../Discussion/Discussion'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="menu-bar">
        <span className="title">DataStructr</span>
        </div>

        <div className="row">
          <div className="col-md-6">
            <LinkedList />
          </div>
          <div className="col-md-6">
            <Discussion />
          </div>
        </div>
      </div>

    )
  }
}