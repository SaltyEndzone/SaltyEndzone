import React, { Component } from 'react';

export default class TreeAddChild extends Component {
  render() {
    return (
      <div>
        <div>{'treeMethods.addChild = function(value){'}</div>
        <div className="indent">{'var newTree = Tree(value);'}</div>
        <div className="indent">{'this.children.push(newTree);'}</div>
        <div>{'};'}</div>
      </div>
    );
  }
}