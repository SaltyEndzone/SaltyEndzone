import React, { Component } from 'react'

export default class GraphRemoveEdge extends Component {
  render() {
    return (
      <div>
        <div>{'Graph.prototype.removeEdge = function(fromNode, toNode){'}</div>
        <div className="indent">{'var spliceIndex = this._nodes[fromNode].edges.indexOf(toNode);'}</div>
        <div className="double-indent">{'if (spliceIndex !== -1) {'}</div>
        <div className="triple-indent">{'this._nodes[fromNode].edges.splice(spliceIndex, 1)'}</div>
        <div className="double-indent">{'};'}</div>
        <div className="indent">{'spliceIndex = this._nodes[toNode].edges.indexOf(fromNode);'}</div>
        <div className="indent">{'if (spliceIndex !== -1) {'}</div>
        <div className="double-indent">{'this._nodes[toNode].edges.splice(spliceIndex, 1)'}</div>
        <div className="indent">{'};'}</div>
        <div>{'};'}</div>
      </div>
    )
  }
}