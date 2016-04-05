import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectStackFunction } from './StackActions';
import { bindActionCreators } from 'redux';

class StackFunctions extends Component {

  renderStackFunctions() {
    return this.props.stackFunction.map( (func) => {  
      return (
       <button onClick={() => this.props.selectStackFunction(func) } key={func.stackFunction} className="action-title">{func.stackFunction}</button> 
      );
    }
   );
  }

  render() {
    return (
      <div className="action-section">
        {this.renderStackFunctions()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stackFunction: state.stackFunction
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectStackFunction: selectStackFunction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StackFunctions);