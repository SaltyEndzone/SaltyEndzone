import React, { Component } from 'react';

export default class TreeRootSVG extends Component {
  clicked () {
    console.log('clicked root');
  }

  render() {
    return <svg onClick={this.clicked}>
              <circle id="root" cx="275" cy="50" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}