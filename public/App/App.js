import React, { Component }        from 'react';
import { Link }                    from 'react-router';
import { connect }                 from 'react-redux';
import Login                       from '../Login/Login';
import { openLogin, closeLogin }   from '../Login/LoginActions';
import { openSignUp, closeSignUp } from '../Login/SignUp/SignUpActions'; 



export default class App extends Component {  
  constructor(props) {
    super(props);
    this.openLogin = this.openLogin.bind(this);
    this.closeLogin = this.closeLogin.bind(this);
    this.openSignUp = this.openSignUp.bind(this);
  }
  
  openLogin () {
    this.props.dispatch(openLogin());
  }

  closeLogin () {
    const { dispatch } = this.props;
    dispatch(closeLogin());
  }

  openSignUp () {
    this.props.dispatch(openSignUp());
  }

  render() {
    const { children, login, signUpBox } = this.props;
    return  <div>
              <div className="menu-bar">
                <img className="logo" src="http://visualgo.net/img/heap.gif" />
                <Link to={'home'}><span className="title">Data.Structrz</span></Link>
                <Login openLogin={this.openLogin} closeLogin={this.closeLogin} login={login} signUpBox={signUpBox} openSignUp={this.openSignUp}  />
              </div>
              {children}
            </div>
  }
}

function mapStateToProps(state) {
  const login = state.login;
  const signUpBox = state.signUpBox;
  return {
    login,
    signUpBox
  };
}

export default connect(mapStateToProps)(App);
