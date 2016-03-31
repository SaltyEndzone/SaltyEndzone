import React, { Component } from 'react'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'


export default class Graph extends Component {
  render() {
    return (

        <div className="col-md-6">
          <button className="dataStructureTitle">GRAPH</button>
            <img className="graph-image" src="http://visualgo.net/img/graphds.gif" />
          <div>

          <div className="action-section">
            <button className="action-title">CONTAINS</button>
            <button className="action-title">ADD NODE</button>
            <button className="action-title">REMOVE NODE</button>
            <button className="action-title">HAS EDGE</button>
            <button className="action-title">ADD EDGE</button>
            <button className="action-title">REMOVE EDGE</button>
          </div>
        </div>
        </div>
    )
  }
}