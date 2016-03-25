import React, { Component } from 'react'
import { render } from 'react-dom'
import HomePage from './public/home/HomePage'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './public/App/App'
import HomePage from './public/home/HomePage'

class HelloWorld extends Component {
  render() {
    return (
      <div>
      < HomePage />
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)