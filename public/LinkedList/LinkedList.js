import React, { Component } from 'react';
import LinkedListFunctions  from './LinkedListFunctions';
import LinkedListAnimation  from './LinkedListAnimation';

export default class LinkedList extends Component {
  render() {
    return <div className="col-md-6">
              <button className="dataStructureTitle">LINKED LIST</button>
              <div>
                <LinkedListAnimation />
                <LinkedListFunctions />
              </div>
            </div>
  }
}

