import React, { Component } from 'react';

export default class TreeLvl3RightChild2SVG extends Component {
  selectLvl3RightChild2 () {
    console.log('clicked lvl 3 right child 2');
  }
  render() {
    return  <svg onClick={this.selectLvl3RightChild2}>
              <line className="left-child-line" x1="108" y1="300" x2="75" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="108" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}