import React, { Component } from 'react';
import LinkedListFunctions from './LinkedListFunctions';

export default class LinkedList extends Component {
  render() {
    return (
        <div className="col-md-6">
          <button className="dataStructureTitle">LINKED LIST</button>
          <img className="linkedlist-image" src="http://visualgo.net/img/list.gif" />
          <div>
            <LinkedListFunctions />
          </div>
        </div>
    );
  }
}

