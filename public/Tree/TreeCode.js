import React, { Component } from 'react'
import { connect } from 'react-redux'

import Code from '../Code/Code'
import TreeAddChild from './TreeCodeSnippets/TreeAddChild'
import TreeContains from './TreeCodeSnippets/TreeContains'

class TreeCode extends Component {
  render() {
    // const currentTreeFunction = this.props.treeFunc.treeFunction
    var treeFunctionComponents = {
      'TreeAddChild': TreeAddChild,
      'TreeContains': TreeContains
    }

    if ( !this.props.treeFunc ) {
      return (
        <div className="code-section">
          <button className="code-title">CODE</button>
          <div className="code-text">Select an action</div>
        </div>
      )        
    }

    console.log(this.props.treeFunc.treeFunction)

    return (
      <div className="code-section">
        <button className="code-title">CODE</button>
        <div className="code-text">
          {this.props.treeFunc.treeFunction}
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