import React, { Component } from 'react';

export default class GraphAddEdge extends Component {
  render() {
    return <div> 
             <div>{'Graph.prototype.addEdge = function(fromNode, toNode){'}</div>
             <div className="indent">{'if (fromNode === undefined || toNode === undefined) {'}</div> 
             <div className="double-indent">{'return null;'}</div>
             <div className="indent">{'}'}</div>
             <div className="indent">{'if (this._nodes[fromNode].edges.indexOf(toNode) === -1) {'}</div>
             <div className="double-indent">{'this._nodes[fromNode].edges.push(toNode)'}</div>
             <div className="indent">{'};'}</div>
             <div className="indent">{'if (this._nodes[toNode].edges.indexOf(fromNode) === -1) {'}</div> 
             <div className="double-indent">{'this._nodes[toNode].edges.push(fromNode)'}</div>
             <div className="indent">{'};'}</div>
             <div>{'};'}</div>
           </div>
  }
}