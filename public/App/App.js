import React, { Component } from 'react'

import HomePage from '../HomePage/HomePage'
import LinkedList from '../LinkedList/LinkedList'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'

export default class App extends Component {
  render() {
    return ( 
      <div>
        <div className="menu-bar">
          <img className="logo" src="http://visualgo.net/img/heap.gif" />
          <span className="title">Data.Structrz</span>
        </div>
        <LinkedList />
      </div>
    )
  }
}

