import React, { Component } from 'react';

export default class TreeLvl3RightChild6SVG extends Component {
  selectLvl3RightChild6 () {
    console.log('click lvl 3 right child 6')
  }

  render() {
    return  <svg onClick={this.selectLvl3RightChild6}>
              <line className="left-child-line" x1="377" y1="300" x2="345" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="377" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}