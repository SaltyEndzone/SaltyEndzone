import React, { Component } from 'react';

export default class TreeContains extends Component {
  render() {
    return (
      <div>
        <div>{'treeMethods.contains = function(target){'}</div>
        <div className="indent">{'var found = false;'}</div>
        <div className="indent">{'var subroutine = function(node){'}</div>
        <div className="double-indent">{'if ( node.value === target ){'}</div>
        <div className="triple-indent">{'found = true;'}</div>
        <div className="triple-indent">{'return;'}</div>
        <div className="double-indent">{'}'}</div>
        <div className="double-indent">{'for ( var i = 0; i < node.children.length; i++ ){'}</div>
        <div className="triple-indent">{'var child = node.children[i];'}</div>
        <div className="triple-indent">{'subroutine(child);'}</div>
        <div className="double-indent">{'}'}</div>
        <div className="indent">{'}'}</div>
        <div className="indent">{'subroutine(this);'}</div>
        <div className="indent">{'return found;'}</div>
        <div>{'};'}</div>
      </div>
    );
  }
}