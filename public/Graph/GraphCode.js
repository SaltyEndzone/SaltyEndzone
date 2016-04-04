import React, { Component } from 'react'
import { connect } from 'react-redux'

import GraphAddEdge from './GraphCodeSnippets/GraphAddEdge'
import GraphAddNode from './GraphCodeSnippets/GraphAddNode'
import GraphContains from './GraphCodeSnippets/GraphContains'
import GraphHasEdge from './GraphCodeSnippets/GraphHasEdge'
import GraphRemoveEdge from './GraphCodeSnippets/GraphRemoveEdge'
import GraphRemoveNode from './GraphCodeSnippets/GraphRemoveNode'

class GraphCode extends Component {
  render() {
    
    if ( !this.props.graphFunc ) {
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
        {this.props.graphFunc.graphFunction === 'ADD EDGE' ? <GraphAddEdge /> : <div></div>}
        {this.props.graphFunc.graphFunction === 'ADD NODE' ? <GraphAddNode /> : <div></div>}
        {this.props.graphFunc.graphFunction === 'CONTAINS' ? <GraphContains /> : <div></div>}
        {this.props.graphFunc.graphFunction === 'HAS EDGE' ? <GraphHasEdge /> : <div></div>}
        {this.props.graphFunc.graphFunction === 'REMOVE EDGE' ? <GraphRemoveEdge /> : <div></div>}
        {this.props.graphFunc.graphFunction === 'REMOVE NODE' ? <GraphRemoveNode /> : <div></div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    graphFunc: state.activeGraphFunction
  }
}

export default connect(mapStateToProps)(GraphCode)