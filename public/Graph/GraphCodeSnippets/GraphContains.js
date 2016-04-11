import React, { Component } from 'react';

export default class GraphContains extends Component {
  render() {
    return <div>
             <div>{'Graph.prototype.contains = function(node){'}</div>
             <div className="indent">{'return !(this._nodes[node] === undefined);'}</div>
             <div>{'};'}</div>
           </div>
  }
}