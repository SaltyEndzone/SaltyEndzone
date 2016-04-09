import React, { Component } from 'react';

export default class StackAnimation extends Component {

  push() {
    return;
  }

  pop() {
    return;
  }


  render() {
    return (
      <div className="stack-image">
        <svg className="stack-animation-background" height="380" width="550">

          <g className="stack">
            <g className="level-5">
              <path fill="#FFFFFF" stroke="#010101" stroke-miterlimit="10" d="M323.8,372.8h-97.6c-4.8,0-8.7-3.9-8.7-8.7l0,0
  c0-4.8,3.9-8.7,8.7-8.7h97.6c4.8,0,8.7,3.9,8.7,8.7l0,0C332.5,368.9,328.6,372.8,323.8,372.8z"/>
            </g>

            <g className="level-4">
              <path fill="#FFFFFF" stroke="#010101" stroke-miterlimit="10" d="M323.8,351.2h-97.6c-4.8,0-8.7-3.9-8.7-8.7l0,0
  c0-4.8,3.9-8.7,8.7-8.7h97.6c4.8,0,8.7,3.9,8.7,8.7l0,0C332.5,347.3,328.6,351.2,323.8,351.2z"/>
            </g>

            <g className="level-3">
              <path fill="#FFFFFF" stroke="#010101" stroke-miterlimit="10" d="M323.8,330h-97.6c-4.8,0-8.7-3.9-8.7-8.7l0,0
  c0-4.8,3.9-8.7,8.7-8.7h97.6c4.8,0,8.7,3.9,8.7,8.7l0,0C332.5,326.1,328.6,330,323.8,330z"/>
            </g>

            <g className="level-2">
              <path fill="#FFFFFF" stroke="#010101" stroke-miterlimit="10" d="M323.8,308.1h-97.6c-4.8,0-8.7-3.9-8.7-8.7l0,0
  c0-4.8,3.9-8.7,8.7-8.7h97.6c4.8,0,8.7,3.9,8.7,8.7l0,0C332.5,304.2,328.6,308.1,323.8,308.1z"/>
            </g>

            <g className="level-1">
              <path fill="#FFFFFF" stroke="#010101" stroke-miterlimit="10" d="M323.8,286.4h-97.6c-4.8,0-8.7-3.9-8.7-8.7l0,0
  c0-4.8,3.9-8.7,8.7-8.7h97.6c4.8,0,8.7,3.9,8.7,8.7l0,0C332.5,282.5,328.6,286.4,323.8,286.4z"/>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}


    