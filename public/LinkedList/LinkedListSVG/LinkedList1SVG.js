import React, { Component } from 'react';

export default class LinkedList1SVG extends Component {
  // <text x="191" y="169" fill="#4A65BC" fontSize="37">H</text>
  render() {
    return  <svg>
              <rect x="83" y="67" width="38" height="44" stroke="white" strokeWidth="4" fill="#FFFFFF"/>
              <rect x="121" y="67" width="38" height="44" stroke="white" strokeWidth="4" fill="#4A65BC" />
              <text x="88" y="102" fill="#4A65BC" fontSize="37">H</text>
              <text x="294" y="239" fill="#4A65BC" fontSize="37">T</text>
              <text x="395" y="310" fill="#4A65BC" fontSize="37">T</text>
            </svg>
  }
}