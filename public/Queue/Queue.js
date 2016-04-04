import React, { Component } from 'react'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'
import QueueFunctions from './QueueFunctions'

export default class Queue extends Component {
  render() {
    return (

        <div className="col-md-6">
          <button className="dataStructureTitle">QUEUE</button>
            <img className="queue-image" src="http://www.tutorial4us.com/data-structure/images/queue-insert-item.gif" />
          <div>
          <QueueFunctions />
        </div>
        </div>
    )
  }
}