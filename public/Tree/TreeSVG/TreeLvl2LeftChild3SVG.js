import React, { Component } from 'react';

export default class TreeLvl2LeftChild3SVG extends Component {
  selectLvl2LeftChild3 () {
    console.log('clicked lvl 2 left child 3');
  }

  render() {
    return  <svg onClick={ this.selectLvl2LeftChild3 }>
              <line className="left-child-line" x1="345" y1="218" x2="410" y2="135" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="345" cy="218" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}