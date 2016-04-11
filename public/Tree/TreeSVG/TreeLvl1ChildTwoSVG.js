import React, { Component } from 'react';

export default class TreeLvl1ChildTwoSVG extends Component {

  render() {
    return  <svg>
              <line className="right-child-line" x1="275" y1="45" x2="410" y2="135" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="410" cy="135" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}