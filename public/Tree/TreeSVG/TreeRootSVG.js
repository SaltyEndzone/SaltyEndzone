import React, { Component } from 'react';

export default class TreeRootSVG extends Component {
  selectRoot () {
    console.log('clicked root');
  }

  render() {
    return <svg onClick={ this.selectRoot } >
             <circle id="root" cx="275" cy="50" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
           </svg>
  }
}