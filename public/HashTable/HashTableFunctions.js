import React, { Component }        from 'react';
import { connect }                 from 'react-redux';
import { selectHashTableFunction } from './HashTableActions';
import { bindActionCreators }      from 'redux';

class HashTableFunctions extends Component {

  renderHashTableFunctions() {
    return this.props.hashtableFunction.map( (func) => {
      return (
        <button onClick={() => this.props.selectHashTableFunction(func) } key={func.hashtableFunction} className="action-title">{func.hashtableFunction}</button>
      );
    });
  }

  render() {
    return (
      <div className="action-section">
      {this.renderHashTableFunctions()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hashtableFunction: state.hashtableFunction
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectHashTableFunction: selectHashTableFunction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HashTableFunctions);