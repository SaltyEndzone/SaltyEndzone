import React, { Component } from 'react'

export default class StackSize extends Component {
  render() {
    return (
      <div>
        <div>{'Stack.prototype.size = function(){'}</div>
        <div className="indent">{'return this._size;'}</div>
        <div>{'};'}</div>
      <div>
    )
  }
}