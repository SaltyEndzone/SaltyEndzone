import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTreeFunction, selectNode, addChild } from './TreeActions';
import { bindActionCreators } from 'redux';

class TreeFunctions extends Component {
  // addChild (func) {
  //   alert('other function ' + func);
  // }

  renderTreeFunctions() {
    return this.props.treeFunction.map( (func) => {  
      return (
       <button onClick={ () => (this.props.selectTreeFunction(func),
                                this.addChild(func) ) } 
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
  //whatever object is returned is available on this.props
  return {
    //Tree reducers can now be on this.props
    treeFunction: state.treeFunction,
    addChild: state.addChild
  };
}

//anything returned from this function will return as this.props on the container
function mapDispatchToProps(dispatch) {
  //dispatch tree actions to props (tree reducers)
  //whenever selectTree is called, the result should be passed to all of our reducers with the dispatch
  //dispatch function takes all of these actions and spits them back out to all the reducers in the application
  return bindActionCreators({ selectTreeFunction: selectTreeFunction, 
                              selectNode: selectNode,
                              addChild: addChild  }, dispatch);
}

//this component is a container
//take component - mapstatetoprops, and mapdispatchtoprops - return a container
export default connect(mapStateToProps, mapDispatchToProps)(TreeFunctions);