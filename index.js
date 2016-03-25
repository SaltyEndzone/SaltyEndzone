import React, { Component } from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


import App from './public/App/App'


render(
  <App />,
  document.getElementById('app')
)