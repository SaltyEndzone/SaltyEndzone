import React, { Component }  from 'react';
import GraphFunctions        from './GraphFunctions';


export default class Graph extends Component {
  render() {
    return <div className="col-md-6">
            <button className="dataStructureTitle">GRAPH</button>
            <img className="graph-image" src="http://visualgo.net/img/graphds.gif" />
            <div>
              <GraphFunctions />
            </div>
          </div>
  }
}