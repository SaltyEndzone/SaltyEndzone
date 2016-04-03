import React, { Component } from 'react'

export default class StackPop extends Component {
  render() {
    return (
      <div>
        <div>{'Stack.prototype.pop = function(){'}</div>
        <div className="indent">{'this._size && this._size--;'}</div>
        <div className="indent">{'var result = this._storage[this._size];'}</div>
        <div className="indent">{'delete this._storage[this._size];'}</div>
        <div className="indent">{'return result;'}</div>
        <div>{'};'}</div>
      <div>
    )
  }
}