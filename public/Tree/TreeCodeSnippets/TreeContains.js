import React, { Component } from 'react'


export default class TreeContains extends Component {
  render() {
    return (
    <div>
      <code>{"treeMethods.contains = function(target){ "}</code>
      <code>{"  var found = false;"}</code>
      <code>{"  var subroutine = function(node){"}</code>
      <code>{"    if ( node.value === target ){"}</code>
      <code>{"      found = true;"}</code>
      <code>{"      return;"}</code>
      <code>{"    }"}</code>
      <code>{"    for ( var i = 0; i < node.children.length; i++ ){"}</code>
      <code>{"      var child = node.children[i];"}</code>
      <code>{"      subroutine(child);"}</code>
      <code>{"    }"}</code>
      <code>{"  }"}</code>
      <code>{"  subroutine(this);"}</code>
      <code>{"  return found;’"}</code>
      <code>{"};"}</code>
    </div>
    )
  }
}