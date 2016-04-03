import React, { Component } from 'react'

export default class LinkedListRemoveHead extends Component {
  render() {
    return (
<div>
  <div>{'list.removeHead = function(){'}</div>
  <div className="indent">{'if (list.head === null){'}</div>
  <div className="double-indent">{'return null;'}</div>
  <div className="indent">{'}'}</div>
  <div className="indent">{'var currentHead = list.head;'}</div>
  <div className="indent">{'list.head = list.head.next;'}</div>
  <div className="indent">{'return currentHead.value;'}</div>
  <div>{'};'}</div>
</div>
    )
  }
}