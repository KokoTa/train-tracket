/*
 * @Author: KokoTa
 * @Date: 2020-05-07 17:07:38
 * @LastEditTime: 2020-05-21 18:22:53
 * @Description:
 */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  // 这里传入的是单层对象，属性值是函数，返回 state，传入嵌套对象会报错
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
