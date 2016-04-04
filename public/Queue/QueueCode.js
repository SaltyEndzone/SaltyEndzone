import React, { Component } from 'react'
import { connect } from 'react-redux'

import QueueDequeue from './QueueCodeSnippets/QueueDequeue'
import QueueEnqueue from './QueueCodeSnippets/QueueEnqueue'
import QueueSize from './QueueCodeSnippets/QueueSize'

class QueueCode extends Component {
  render() {

    if ( !this.props.queueFunc ) {
      return (
        <div className="code-section">
          <button className="code-title">CODE</button>
          <div className="code-text">Select an action</div>
        </div>
      )
    }

    return (
      <div className="code-section">
        <button className="code-title">CODE</button>
        <div className="code-text">
        { this.props.queueFunc.queueFunction === 'ENQUEUE' ? <QueueEnqueue /> : <div></div> }
        { this.props.queueFunc.queueFunction === 'DEQUEUE' ? <QueueDequeue /> : <div></div> }
        { this.props.queueFunc.queueFunction === 'SIZE' ? <QueueSize /> : <div></div> }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    queueFunc: state.activeQueueFunction
  }
}

export default connect(mapStateToProps)(QueueCode)