import React, { Component } from 'react';

export default class TreeRoot extends Component {
  selectRoot () {
    console.log('clicked child one');
  }
  
  render() {
    return <svg>
              <circle id="root" cx="275" cy="50" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
           </svg>
  }
}