import React, { Component } from 'react';

export default class TreeLvl2RightChild4SVG extends Component {
  selectLvl2RightChild4 () {
    console.log('clicked lvl 2 right child 4');
  }

  render() {
    return  <svg onClick={this.selectLvl2RightChild4}>
              <line className="left-child-line" x1="410" y1="135" x2="475" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="475" cy="218" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}