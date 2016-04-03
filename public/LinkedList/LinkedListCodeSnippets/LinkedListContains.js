import React, { Component } from 'react'

export default class LinkedListContains extends Component {
  render() {
    return (
      <div>
        <div>{'list.contains = function(target){'}</div>
        <div className="indent">{'var node = list.head;'}</div>
        <div className="indent">{'while (node) {'}</div>
        <div className="double-indent">{'if (node.value === target) {'}</div>
        <div className="triple-indent">{'return true;'}</div>
        <div className="double-indent">{'}'}</div>
        <div className="double-indent">{'node = node.next;'}</div>
        <div className="indent">{'}'}</div>
        <div className="indent">{'return false;'}</div>
        <div className="indent">{'}'}</div>
        <div className="indent">{'return list;'}</div>
        <div>{'};'}</div>
      </div>
    )
  }
}