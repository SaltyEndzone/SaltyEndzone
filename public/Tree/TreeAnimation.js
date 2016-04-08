import React, { Component } from 'react';

export default class TreeAnimation extends Component {

  addRoot() {
    return ;
  }

  addLeftChild() {
    return ;
  }

  addRightChild() {
    return ;
  }

  render() {
    return (
      <div className="tree-image">
        <svg className="tree-animation-background" height="380" width="550">

          <g className="level-4">
            <g className="right-lvl-4-ch8">
              <line className="left-child-line" x1="509" y1="300" x2="475" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="509" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>

            <g className="left-lvl-4-ch7">
              <line className="left-child-line" x1="441" y1="300" x2="475" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="441" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>

            <g className="right-lvl-4-ch6">
              <line className="left-child-line" x1="377" y1="300" x2="345" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="377" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>

            <g className="left-lvl-4-ch5">
              <line className="left-child-line" x1="310" y1="300" x2="345" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="310" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>

            <g className="right-lvl-4-ch4">
              <line className="left-child-line" x1="243" y1="300" x2="210" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="243" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>

            <g className="left-lvl-4-ch3">
              <line className="left-child-line" x1="175" y1="300" x2="210" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="175" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>

            <g className="right-lvl-4-ch2">
              <line className="left-child-line" x1="108" y1="300" x2="75" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="108" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>

            <g className="left-lvl-4-ch1">
              <line className="left-child-line" x1="42" y1="300" x2="75" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="42" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>
          </g>


          <g className="level-3">
            <g className="right-lvl-3-ch4">
              <line className="left-child-line" x1="410" y1="135" x2="475" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="475" cy="218" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>

            <g className="left-lvl-3-ch3">
              <line className="left-child-line" x1="345" y1="218" x2="410" y2="135" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="345" cy="218" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>

            <g className="left-lvl-3-ch1">
              <line className="left-child-line" x1="75" y1="218" x2="145" y2="135" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="75" cy="218" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>

            <g className="right-lvl-3-ch2">
              <line className="left-child-line" x1="145" y1="135" x2="210" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="210" cy="218" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>
          </g>

          <g className="level-2">
            <g className="left-lvl-2">
              <line className="left-child-line" x1="145" y1="135" x2="275" y2="50" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="145" cy="135" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>

            <g className="right-lvl-2">
              <line className="right-child-line" x1="275" y1="45" x2="410" y2="135" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="410" cy="135" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </g>
          </g>

          <g className="level-1">
           <circle id="root" cx="275" cy="50" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
          </g>
        </svg>
      </div>
    );
  }
}

    