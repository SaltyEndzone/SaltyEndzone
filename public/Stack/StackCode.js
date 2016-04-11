<<<<<<< 7a809f56ecd50c7a3a2ac69c5a3050328a438613

import React, { Component }   from 'react'
import { connect }            from 'react-redux'
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
>>>>>>> Fixed bug in Stack Code component

import StackPop from './StackCodeSnippets/StackPop';
import StackPush from './StackCodeSnippets/StackPush';
import StackSize from './StackCodeSnippets/StackSize';

class StackCode extends Component {
  render() {
    
    if ( !this.props.stackFunc ) {
      return (
        <div className="code-section">
          <button className="code-title">CODE</button>
          <div className="code-text">Select an action</div>
        </div>
      );        
    }

<<<<<<< 7a809f56ecd50c7a3a2ac69c5a3050328a438613
      return <div className="code-section">
        <button className="code-title">CODE</button>
        <div className="code-text">Select an action</div>
      </div>       
    }

    return <div className="code-section">
=======
    return (
      <div className="code-section">
>>>>>>> Fixed bug in Stack Code component
        <button className="code-title">CODE</button>
        <div className="code-text">
        { this.props.stackFunc.stackFunction === 'POP' ? <StackPop /> : <div></div> }
        { this.props.stackFunc.stackFunction === 'PUSH' ? <StackPush /> : <div></div> }
        { this.props.stackFunc.stackFunction === 'SIZE' ? <StackSize /> : <div></div> }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stackFunc: state.activeStackFunction
  };
}

export default connect(mapStateToProps)(StackCode);  