import React, { Component } from 'react'

export default class QueueDequeue extends Component {
  render() {
    return (
      <div>
        <div>{'Queue.prototype.dequeue = function(){'}</div>
        <div className="indent">{'this.size() && this._start++;'}</div>
        <div className="indent">{'var result = this._storage[this._start];'}</div>
        <div className="indent">{'delete this._storage[this._start];'}</div>
        <div className="indent">{'return result;'}</div>
        <div>{'};'}</div>
      <div>
    )
  }
}