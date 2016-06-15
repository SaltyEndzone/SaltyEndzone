import React, { Component } from 'react';

export default class TreeLvl3RightChild4SVG extends Component {
  selectLvl3RightChild4 () {
    console.log('clicked lvl 3 right child 4')
  }

  render() {
    return  <svg onClick={this.selectLvl3RightChild4} >
              <line className="left-child-line" x1="243" y1="300" x2="210" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="243" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}