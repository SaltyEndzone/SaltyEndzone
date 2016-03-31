import React, { Component } from 'react'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'


export default class Queue extends Component {
  render() {
    return (

        <div className="col-md-6">
          <button className="dataStructureTitle">QUEUE</button>
            <img className="queue-image" src="http://www.tutorial4us.com/data-structure/images/queue-insert-item.gif" />
          <div>

          <div className="action-section">
            <button className="action-title">ENQUEUE</button>
            <button className="action-title">DEQUEUE</button>
            <button className="action-title">SIZE</button>
          </div>
        </div>
        </div>
    )
  }
}