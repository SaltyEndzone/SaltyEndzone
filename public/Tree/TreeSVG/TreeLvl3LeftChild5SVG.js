import React, { Component } from 'react';

export default class TreeLvl3LeftChild5SVG extends Component {
  selectLvl3LeftChild5() {
    console.log('clicked lvl 3 left child 5');
  }
  render() {
    return  <svg onClick={this.selectLvl3LeftChild5}>
              <line className="left-child-line" x1="310" y1="300" x2="345" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="310" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}