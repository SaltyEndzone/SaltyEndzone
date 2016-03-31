import React, { Component } from 'react'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'


export default class Stack extends Component {
  render() {
    return (

        <div className="col-md-6">
          <button className="dataStructureTitle">Stack</button>
            <img className="stack-image" src="http://www.tutorial4us.com/data-structure/images/push-operation.gif" />
          <div>

          <div className="action-section">
            <button className="action-title">PUSH</button>
            <button className="action-title">POP</button>
          </div>
          </div>
        </div>
    )
  }
}
