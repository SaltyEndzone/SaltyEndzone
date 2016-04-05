import React, { Component } from 'react'

export default class TreeAnimation extends Component {
  render() {
    return (
      <div className="animation-section">
        <svg>
          <circle cx={50} cy={50} r={10} fill="red" />
        </svg>
      </div>
    )
  }
}