import React, { Component } from 'react';

export default class TreeLvl1ChildOne extends Component {
  selectLvlOneChildOne () {
    console.log('clicked child one');
  }

  render() {
    return  <svg>
              <line className="left-child-line" x1="145" y1="135" x2="275" y2="50" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="145" cy="135" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}