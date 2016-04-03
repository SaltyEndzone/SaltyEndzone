import React, { Component } from 'react'
import { connect } from 'react-redux'

import Code from '../Code/Code'
import TreeContains from './TreeContains'
import TreeAddChild from './TreeAddChild'

class TreeCode extends Component {
  render() {

    if ( !this.props.treeFunc ) {
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
        { this.props.treeFunc.treeFunction === 'ADD CHILD' ? <TreeAddChild /> : <div></div> }
        { this.props.treeFunc.treeFunction === 'CONTAINS' ? <TreeContains /> : <div></div> }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    treeFunc: state.activeTreeFunction
  }
}

export default connect(mapStateToProps)(TreeCode)