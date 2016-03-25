import React, { Component } from 'react'
import HomePage from '../HomePage/HomePage'
import LinkedList from '../LinkedList/LinkedList'

export default class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
	      <LinkedList />
      </div>
    )
  }
}