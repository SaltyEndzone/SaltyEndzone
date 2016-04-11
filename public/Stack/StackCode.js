<<<<<<< HEAD

import React, { Component }   from 'react'
import { connect }            from 'react-redux'

=======
import React, { Component }   from 'react'
import { connect }            from 'react-redux'

>>>>>>> a16c6c9ff4456b4be3b5b3b3b3306d5b52cd6722
import StackPop               from './StackCodeSnippets/StackPop'
import StackPush              from './StackCodeSnippets/StackPush'
import StackSize              from './StackCodeSnippets/StackSize'

class StackCode extends Component {
  render() {
    
    if ( !this.props.stackFunc ) {

    return <div className="code-section">
        <button className="code-title">CODE</button>
        <div className="code-text">
          { this.props.stackFunc.stackFunction === 'POP' ? <StackPop /> : <div></div> }
          { this.props.stackFunc.stackFunction === 'PUSH' ? <StackPush /> : <div></div> }
          { this.props.stackFunc.stackFunction === 'SIZE' ? <StackSize /> : <div></div> }
        </div>
      </div>
  }
}

function mapStateToProps(state) {
  return {
    stackFunc: state.activeStackFunction
  };
}

export default connect(mapStateToProps)(StackCode);  
