import React, { useCallback, useState, useMemo } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Header from '../common/Header'
import Journey from './components/Journey'
import DepartDate from './components/DepartDate'
import HighSpeed from './components/HighSpeed'
import Submit from './components/Submit'
import PropTypes from 'prop-types'
import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
  showDateSelector,
  hideDateSelector,
  setDepartTime,
  toggleHighSpeed
} from './actions'
import { bindActionCreators } from 'redux'
import CitySelector from '../common/CitySelector'
import DateSelector from '../common/DateSelector'
import { setTimeZero } from '../common/libs/util'

function App (props) {
  // 用于检测是否有不必要的重复渲染
  const [count, setCount] = useState(0)
  const { from, to, dispatch, isCitySelectorVisible, cityData, isLoadingCityData, departTime, isDateSelectorVisible, isHighSpeed } = props

  const onBack = useCallback(() => {
    window.history.back()
  }, [])

  // 这样写太麻烦了，可以用 useMemo + bindActionCreators 来简化
  // const doExchangeFromTo = useCallback(() => dispatch(exchangeFromTo()), [])
  // const doShowCitySelector = useCallback((bool) => dispatch(showCitySelector(bool)), [])

  // 城市选择器函数
  const cityCbs = useMemo(() => {
    return bindActionCreators({
      exchangeFromTo,
      showCitySelector,
      hideCitySelector
    },
    dispatch)
  }, [])
  const citySelectorCbs = useMemo(() => {
    return bindActionCreators({
      onBack: hideCitySelector,
      fetchCityData,
      onSelect: setSelectedCity
    }, dispatch)
  }, [])

  // 日期选择器函数
  const departDateCbs = useMemo(() => {
    return bindActionCreators({
      onClick: showDateSelector
    }, dispatch)
  }, [])
  const dateSelectorCbs = useMemo(() => {
    return bindActionCreators({
      onBack: hideDateSelector
    }, dispatch)
  }, [])
  const onSelectDate = useCallback((dayTime) => {
    if (!dayTime) return // 没有日期
    if (dayTime < setTimeZero()) return // 选择的时间小于今天
    dispatch(setDepartTime(dayTime))
    dispatch(hideDateSelector())
  }, [])

  // 列车类型切换函数
  const highSpeedCbs = useMemo(() => {
    return bindActionCreators({
      toggle: toggleHighSpeed
    }, dispatch)
  }, [])

  return (
    <div>
      <Header title="火车票" onBack={onBack}></Header>
      <Journey from={from} to={to} {...cityCbs}></Journey>
      <DepartDate time={departTime} {...departDateCbs}></DepartDate>
      <HighSpeed isHighSpeed={isHighSpeed} {...highSpeedCbs}></HighSpeed>
      <Submit></Submit>

      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>

      {/* 城市选择组件 */}
      <CitySelector show={isCitySelectorVisible} cityData={cityData} isLoading={isLoadingCityData} {...citySelectorCbs}></CitySelector>
      {/* 日期选择组件 */}
      <DateSelector show={isDateSelectorVisible} onSelect={onSelectDate} {...dateSelectorCbs}></DateSelector>
    </div>
  )
}

App.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  dispatch: PropTypes.func,
  isCitySelectorVisible: PropTypes.bool,
  cityData: PropTypes.object,
  isLoadingCityData: PropTypes.bool,
  departTime: PropTypes.number,
  isDateSelectorVisible: PropTypes.bool,
  isHighSpeed: PropTypes.bool
}

export default connect(
  function mapStateToProps (state) {
    return state
  },
  function mapDispatchToProps (dispatch) {
    return { dispatch }
  }
)(App)
