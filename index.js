import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './public/App/App'

render((
  <App />
), document.getElementById('app'))