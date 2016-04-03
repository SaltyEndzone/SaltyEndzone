import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import login from './Login/LoginReducers'
import treeFunction from './Tree/TreeReducers'

const rootReducer = combineReducers({
  routing,
  login,
  treeFunction
})

export default rootReducer