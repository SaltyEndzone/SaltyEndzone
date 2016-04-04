import React, { Component } from 'react'
import { connect } from 'react-redux'

import LinkedListAddToTail from './LinkedListCodeSnippets/LinkedListAddToTail'
import LinkedListContains from './LinkedListCodeSnippets/LinkedListContains'
import LinkedListRemoveHead from './LinkedListCodeSnippets/LinkedListRemoveHead'

class LinkedListCode extends Component {
  render() {
    
    if ( !this.props.linkedlistFunc ) {
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
        {this.props.linkedlistFunc.linkedlistFunction === 'ADD TO TAIL' ? <LinkedListAddToTail /> : <div></div>}
        {this.props.linkedlistFunc.linkedlistFunction === 'CONTAINS' ? <LinkedListRemoveHead /> : <div></div>}
        {this.props.linkedlistFunc.linkedlistFunction === 'REMOVE HEAD' ? <LinkedListContains /> : <div></div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    linkedlistFunc: state.activeLinkedListFunction
  }
}

export default connect(mapStateToProps)(LinkedListCode)