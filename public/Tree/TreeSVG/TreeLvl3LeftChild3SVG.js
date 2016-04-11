import React, { Component } from 'react';

export default class TreeLvl3LeftChild3SVG extends Component {
  selectLvl3LeftChild3 () {
    console.log('clicked lvl 3 left child 3');
  }

  render() {
    return  <svg onClick={this.selectLvl3LeftChild3}>
              <line className="left-child-line" x1="175" y1="300" x2="210" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="175" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}