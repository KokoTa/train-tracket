/*
 * @Author: KokoTa
 * @Date: 2020-05-07 17:07:38
 * @LastEditTime: 2020-05-09 17:40:57
 * @Description:
 */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  combineReducers(reducers),
  // 这里第二个参数可以传空对象，因为 reducer 已经先初始化了
  {
    from: '北京',
    to: '上海',
    isCitySelectorVisible: false,
    isSelectLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    isHighSpeed: false,
    departTime: Date.now()
  },
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
