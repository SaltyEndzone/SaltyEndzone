import React, { Component } from 'react'

export default class StackPush extends Component {
  render() {
    return (
      <div>
        <div>{'Stack.prototype.push = function(value){'}</div>
        <div className="indent">{'this._storage[this._size] = value;'}</div>
        <div className="indent">{'this._size++;'}</div>
        <div>{'};'}</div>
      </div>
    )
  }
}