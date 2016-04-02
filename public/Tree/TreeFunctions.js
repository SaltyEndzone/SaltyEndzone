import React, { Component } from 'react'

export default class TreeFunctions extends Component {
  render() {
    return (
      <div className="action-section">
        <button className="action-title">DEPTH FIRST SEARCH</button>
        <button className="action-title">BREADTH FIRST SEARCH</button>
        <button className="action-title">ADD CHILD</button>
        <button className="action-title">CONTAINS</button>
      </div>
    )
  }
}