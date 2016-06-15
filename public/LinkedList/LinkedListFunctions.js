import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import { selectLinkedListFunction } from './LinkedListActions';
import { bindActionCreators }       from 'redux';

class LinkedListFunctions extends Component {


  renderLinkedListFunctions() {
    //maps over linked list function reducers, gets individual clientfunctions
    return this.props.linkedlistFunction.map( (func) => {
      return (
        //on a click, selects linked list functions
        <button onClick={ console.dir('clicked linked list'),
                          () => this.props.selectLinkedListFunction(func)} 
                key={func.linkedlistFunction} 
                className="action-title">{func.linkedlistFunction}</button>
        );
    }
  );
}

  render() {
    return <div className="action-section">
            {this.renderLinkedListFunctions()}
           </div>
  }
}

function mapStateToProps(state) {
  return {
    linkedlistFunction: state.linkedlistFunction
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectLinkedListFunction: selectLinkedListFunction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedListFunctions);