import React, { useEffect, useState } from 'react'
import './App.css'
import { connect } from 'react-redux'
import URI from 'urijs'
import qs from 'qs'
import Nav from '../common/Nav'
import Select from '../common/Select'
import Slider from '../common/Slider'

function App () {
  /**
   * URI 参数解析
   */
  useEffect(() => {
    console.log(URI.parseQuery(window.location.search))
    console.log(qs.parse(window.location.search, { ignoreQueryPrefix: true }))
    console.log(
      new URI('/test')
        .setSearch('name', 'a')
        .setSearch('age', 24)
        .setSearch('arr', [1, 2, 3])
        .toString()
    )
  }, [])

  /**
   * 请求控制
   */
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    if (flag) console.log('fetching...')
  }, [flag])

  setTimeout(() => {
    setFlag(true)
  }, 3000)

  /**
   * 延迟初始化 state
   * https://juejin.im/post/5dd1df576fb9a01fdc1304a8
   */

  return (
    <div className="query">
      <p>已完成功能：</p>
      <ol>
        <li>URI 参数解析</li>
        <li>请求控制</li>
        <li>日期导航组件</li>
        <li>延迟初始化state</li>
        <li>多选组件</li>
        <li>滑动组件</li>
      </ol>

      <hr/>
      <Nav departDateTime={new Date('2022-01-01').getTime()}></Nav>
      <hr/>
      <Select dataList={[
        { name: 1, value: 1 },
        { name: 2, value: 2 },
        { name: 3, value: 3 }
      ]}></Select>
      <hr></hr>
      <Slider></Slider>
    </div>
  )
}

export default connect(
  function mapStateToProps (state) {
    return {}
  },
  function mapDispatchToProps (dispatch) {
    return {}
  }
)(App)
