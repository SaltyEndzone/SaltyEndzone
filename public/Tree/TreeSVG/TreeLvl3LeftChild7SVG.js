import React, { Component } from 'react';

export default class TreeLvl3LeftChild7SVG extends Component {
  selectLvl3LeftChild7 () {
    console.log('clicked lvl 3 left child 7');
  }

  render() {
    return  <svg onClick={this.selectLvl3LeftChild7}>
              <line className="left-child-line" x1="441" y1="300" x2="475" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="441" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}