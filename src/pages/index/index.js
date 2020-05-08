/*
 * @Author: KokoTa
 * @Date: 2020-05-07 17:07:28
 * @LastEditTime: 2020-05-08 09:40:24
 * @Description: 首页文件
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './index.css'

import App from './App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>
  , document.getElementById('root'))
