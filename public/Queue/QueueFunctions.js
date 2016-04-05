import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectQueueFunction } from './QueueActions';
import { bindActionCreators } from 'redux';

class QueueFunctions extends Component {

  renderQueueFunctions() {
    return this.props.queueFunction.map( (func) => {
      return (
        <button onClick={() => this.props.selectQueueFunction(func) } key={func.queueFunction} className="action-title">{func.queueFunction}</button>
        );
    }
  );
}

  render() {
    return (
      <div className="action-section">
      {this.renderQueueFunctions()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    queueFunction: state.queueFunction
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectQueueFunction: selectQueueFunction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QueueFunctions);