 import React, { Component } from 'react'

import Graph from '../Graph/Graph'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'

export default class GraphPage extends Component {
  render() {
    return ( 
      <div>
        <div className="row">
          <div className="col-md-6">
            <Graph />
          </div>
          <div className="col-md-6">
            <Code />
            <Discussion />
          </div>
        </div>
      </div>
    )
  }
}
