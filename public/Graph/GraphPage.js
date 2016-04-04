 import React, { Component } from 'react'

import Graph from '../Graph/Graph'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'
import GraphCode from './GraphCode'

export default class GraphPage extends Component {
  render() {
    return ( 
      <div>
        <div className="row">
          <div className="col-md-6">
            <Graph />
          </div>
          <div className="col-md-6">
            <GraphCode />
            <Discussion />
          </div>
        </div>
      </div>
    )
  }
}
