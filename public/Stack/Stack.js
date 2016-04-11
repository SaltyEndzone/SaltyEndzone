import React, { Component } from 'react';

import StackAnimation       from './StackAnimation';
import StackFunctions       from './StackFunctions';

export default class Stack extends Component {
  render() {
    return <div className="col-md-6">
      <button className="dataStructureTitle">STACK</button>
        <div>
          <StackAnimation />
          <StackFunctions />
        </div>
      </div>
  }
}
