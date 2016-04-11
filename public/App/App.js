import React, { Component }       from 'react';
import { Link }                   from 'react-router';
import { connect }                from 'react-redux';
import Login                      from '../Login/Login';
import { openLogin, closeLogin }  from '../Login/LoginActions';




<<<<<<< 50fcdf9fd3e73f598f4c97628eacd1172ffbc637
=======

>>>>>>> Local authentication strategy works. Separated out discussion components in to relevant containers.
export default class App extends Component {  
  constructor(props) {
    super(props);
    this.openLogin = this.openLogin.bind(this);
    this.closeLogin = this.closeLogin.bind(this);
  }
  
  openLogin () {
    this.props.dispatch(openLogin());
  }

  closeLogin () {
    const { dispatch } = this.props;
    dispatch(closeLogin());
  }

  render() {
    const { children, login } = this.props;
    return  <div>
              <div className="menu-bar">
                <img className="logo" src="http://visualgo.net/img/heap.gif" />
                <Link to={'home'}><span className="title">Data.Structrz</span></Link>
                <Login openLogin={this.openLogin} closeLogin={this.closeLogin} login={login} />
              </div>
              {children}
            </div>
  }
}

function mapStateToProps(state) {
  const login = state.login;
  return {
    login,
  };
}

export default connect(mapStateToProps)(App);
