import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import './public/App/App.css'
import './public/HomePage/HomePage.css'
import './public/Login/Login.css'
import './public/Code/Code.css'
import './public/Discussion/Discussion.css'
import './public/Stack/Stack.css'
import './public/LinkedList/LinkedList.css'
import './public/Tree/Tree.css'
import './public/Queue/Queue.css'
import './public/Graph/Graph.css'
import './public/HashTable/HashTable.css'

import makeRoutes from './routes'
import Root from './Root'
import configureStore from './create-store'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render((
  <Root history={history} store={store} />
), document.getElementById('app'))


