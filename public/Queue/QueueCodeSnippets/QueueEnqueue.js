import React, { Component } from 'react'

export default class QueueEnqueue extends Component {
  render() {
    return (
      <div>
        <div>{'Queue.prototype.enqueue = function(value){'}</div>
        <div className="indent">{'this._storage[this._end++] = value;'}</div>
        <div>{'};'}</div>
      </div>
    )
  }
}