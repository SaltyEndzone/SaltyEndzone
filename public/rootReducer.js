import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import login from './Login/LoginReducers'
import { treeFunction, activeTreeFunction } from './Tree/TreeReducers'


const rootReducer = combineReducers({
  routing: routing,
  login: login,
  treeFunction: treeFunction,
  activeTreeFunction: activeTreeFunction
})

export default rootReducer