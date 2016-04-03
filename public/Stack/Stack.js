import React, { Component } from 'react'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'
import StackFunctions from './StackFunctions'

export default class Stack extends Component {
  render() {
    return (

        <div className="col-md-6">
          <button className="dataStructureTitle">STACK</button>
            <img className="stack-image" src="http://www.tutorial4us.com/data-structure/images/push-operation.gif" />
          <div>
          <StackFunctions />
          </div>
        </div>
    )
  }
}
