 import React, { Component } from 'react'

import Tree from '../Tree/Tree'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'

export default class TreePage extends Component {
  render() {
    return ( 
      <div>
        <div className="row">
          <div className="col-md-6">
            <Tree />
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
