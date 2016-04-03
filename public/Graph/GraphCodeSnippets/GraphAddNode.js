import React, { Component } from 'react'

export default class GraphAddNode extends Component {
  render() {
    return (
      <div>
        <div>{'Graph.prototype.addNode = function(node){'}</div>
        <div className="indent">{'if (node) {'}</div>
        <div className="double-indent">{'this._nodes[node] = this._nodes[node] || { edges: [] };'}</div>
        <div className="indent">{'}'}</div>
        <div>{'};'}</div>
      </div>
    )
  }
}