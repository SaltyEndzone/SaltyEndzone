import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import makeRoutes from './routes'
import Root from './Root'
import configureStore from './create-store'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render((
  <Root history={history} store={store} />
), document.getElementById('app'))


