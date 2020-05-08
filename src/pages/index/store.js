/*
 * @Author: KokoTa
 * @Date: 2020-05-07 17:07:38
 * @LastEditTime: 2020-05-08 10:53:48
 * @Description:
 */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  combineReducers(reducers),
  {
    from: '北京',
    to: '上海',
    isCitySelectorVisible: false,
    isSelectLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    isHighSpeed: false
  },
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
