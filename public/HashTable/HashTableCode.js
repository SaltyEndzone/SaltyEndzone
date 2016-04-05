import React, { Component } from 'react';
import { connect } from 'react-redux';

import HashTableInsert from './HashTableCodeSnippets/HashTableInsert';
import HashTableRemove from './HashTableCodeSnippets/HashTableRemove';
import HashTableResize from './HashTableCodeSnippets/HashTableResize';
import HashTableRetrieve from './HashTableCodeSnippets/HashTableRetrieve';

class HashTableCode extends Component {
  render() {
    if ( !this.props.hashtableFunc ) {
      return (
        <div className="code-section">
          <button className="code-title">CODE</button>
          <div className="code-text">Select an action</div>
        </div>
      );
    }

    return (
      <div className="code-section">
        <button className="code-title">CODE</button>
        <div className="code-text">
        {this.props.hashtableFunc.hashtableFunction === 'INSERT' ? <HashTableInsert /> : <div></div>}
        {this.props.hashtableFunc.hashtableFunction === 'REMOVE' ? <HashTableRemove /> : <div></div>}
        {this.props.hashtableFunc.hashtableFunction === 'RESIZE' ? <HashTableResize /> : <div></div>}
        {this.props.hashtableFunc.hashtableFunction === 'RETRIEVE' ? <HashTableRetrieve /> : <div></div>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hashtableFunc: state.activeHashTableFunction
  };
}

export default connect(mapStateToProps)(HashTableCode);