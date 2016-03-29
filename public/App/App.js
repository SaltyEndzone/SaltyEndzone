import React, { Component } from 'react'
import HomePage from '../HomePage/HomePage'
import LinkedList from '../LinkedList/LinkedList'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'
import { Link } from 'react-router'


export default class App extends Component {  
  render() {
    const {store, children} = this.props
    return ( 
      <div>
        <div className="menu-bar">
          <img className="logo" src="http://visualgo.net/img/heap.gif" />
          <Link to={'home'}><span className="title">Data.Structrz</span></Link>
        </div>
        {children}
      </div>
    )
  }
}
