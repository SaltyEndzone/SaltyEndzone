import React, { Component } from 'react'


export default class TreeAddChild extends Component {
  render() {
    return (
    <div>
      <code>{"treeMethods.addChild = function(value){"}</code>
      <code>{"  var child = Tree(value);"}</code>
      <code>{"  this.children.push(child);"}</code>
      <code>{"};"}</code>
    </div>
    )
  }
}