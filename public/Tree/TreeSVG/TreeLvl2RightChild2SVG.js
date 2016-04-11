import React, { Component } from 'react';

export default class TreeLvl2RightChild2SVG extends Component {
  selectLvl2RightChild2 () {
    console.log('clicked lvl 2 right child 2');
  }

  render() {
    return  <svg onClick={this.selectLvl2RightChild2} >
              <line className="left-child-line" x1="145" y1="135" x2="210" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="210" cy="218" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}