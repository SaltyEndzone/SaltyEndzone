import React, { Component } from 'react'

export default class GraphRemoveNode extends Component {
  render() {
    return (
      <div>
        <div>{'Graph.prototype.removeNode = function(node){'}</div>
        <div className="indent">{'if (this.contains(node)) {'}</div>
        <div className="double-indent">{'for (var targetNode in this._nodes[node].edges) {'}</div>
        <div className="triple-indent">{'this.removeEdge(node, targetNode);'}</div>
        <div className="double-indent">{'}'}</div>
        <div className="double-indent">{'delete this._nodes[node];'}</div>
        <div className="indent">{'}'}</div>
        <div>{'};'}</div>
      </div>
    )
  }
}