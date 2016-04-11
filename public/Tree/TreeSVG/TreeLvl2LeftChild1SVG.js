import React, { Component } from 'react';

export default class TreeLvl2LeftChild1SVG extends Component {
  selectLvl2LeftChild1 () {
    console.log('clicked lvl 2 left child 1')
  }

  render() {
    return  <svg onClick={this.selectLvl2LeftChild1}>
              <line className="left-child-line" x1="75" y1="218" x2="145" y2="135" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="75" cy="218" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}