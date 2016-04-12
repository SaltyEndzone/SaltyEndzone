import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectTreeFunction } from './TreeActions';
import { bindActionCreators } from 'redux';

class TreeFunctions extends Component {

  renderTreeFunctions() {
    return this.props.treeFunction.map( (func) => {  
      return (
       <button onClick={ () => (this.props.selectTreeFunction(func),
                               console.log('clicked treefunction') ) } 
               key={ func.treeFunction } 
               className="action-title">{ func.treeFunction }</button> 
      );
    }
   );
  }

  render() {
    return <div className="action-section">
             { this.renderTreeFunctions() }
           </div>
  }
}

function mapStateToProps(state) {
  return {
    treeFunction: state.treeFunction
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTreeFunction: selectTreeFunction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeFunctions);