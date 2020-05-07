/*
 * @Author: KokoTa
 * @Date: 2020-05-07 17:07:38
 * @LastEditTime: 2020-05-07 17:38:34
 * @Description:
 */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

export default createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(thunk)
)
