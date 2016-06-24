import React, { Component } from 'react';

export default class TreeLvl3LeftChild1SVG extends Component {
  selectLvl3LeftChild1SVG () {
    console.log('clicked lvl 3 left child 1');
  }

  render() {
    return  <svg onClick={this.selectLvl3LeftChild1SVG}>
              <line className="left-child-line" x1="42" y1="300" x2="75" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="42" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}