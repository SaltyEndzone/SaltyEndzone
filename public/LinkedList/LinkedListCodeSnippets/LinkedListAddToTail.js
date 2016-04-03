import React, { Component } from 'react'

export default class LinkedListAddToTail extends Component {
  render() {
    return (
      <div>
        <div>{'list.addToTail = function(value){'}</div>
          <div className="indent">{'var newTail = Node(value);'}</div>
          <div className="indent">{'if (!list.head) {'}</div>
          <div className="double-indent">{'list.head = newTail;'}</div>
          <div className="indent">{'}'}</div>
          <div className="indent">{'if (list.tail) {'}</div>
          <div className="double-indent">{'list.tail.next = newTail;'}</div>
          <div className="indent">{'}'}</div>
          <div className="indent">{'list.tail = newTail;'}</div>
          <div className="indent">{'};'}</div>
      </div>
    )
  }
}