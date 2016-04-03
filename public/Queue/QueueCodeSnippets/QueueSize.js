import React, { Component } from 'react'

export default class QueueSize extends Component {
  render() {
    return (
      <div>
        <div>{'Queue.prototype.size = function(){'}</div>
        <div className="indent">{'return this._end - this._start;'}</div>
        <div>{'};'}</div>
      </div>
    )
  }
}