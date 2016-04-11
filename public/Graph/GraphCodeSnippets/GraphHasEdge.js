import React, { Component } from 'react';

export default class GraphHasEdge extends Component {
  render() {
    return <div>
             <div>{'Graph.prototype.hasEdge = function(fromNode, toNode) {'}</div>
             <div className="indent">{'return this._nodes[fromNode].edges.indexOf(toNode) !== -1;'}</div>
             <div>{'};'}</div>
           </div>
  }
}