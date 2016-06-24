import React, { Component }    from 'react';
import { connect }             from 'react-redux';
import { selectGraphFunction } from './GraphActions';
import { bindActionCreators }  from 'redux';

class GraphFunctions extends Component {

  renderGraphFunctions() {
    return this.props.graphFunction.map( (func) => {
      return (
        <div className="function-wrapper">
          <button onClick={() => this.props.selectGraphFunction(func) } key={func.graphFunction} className="action-title">{func.graphFunction}</button>
        </div>
      );
    }
  );
}

  render() {
    return <div className="action-section">
             {this.renderGraphFunctions()}
           </div>
  }
}

function mapStateToProps(state) {
  return {
    graphFunction: state.graphFunction
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGraphFunction: selectGraphFunction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphFunctions);