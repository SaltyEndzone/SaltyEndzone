import React, { Component } from 'react'
import HomePage from '../HomePage/HomePage'
import LinkedList from '../LinkedList/LinkedList'
import Discussion from '../Discussion/Discussion'

export default class App extends Component {
  render() {
    return ( 
      <div className="menu-bar">
        <span className="title">DataStructr</span>
        <span className="login">LOGIN</span>
        <HomePage />
      </div>
    )
  }
}


