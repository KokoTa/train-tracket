import React, { useCallback, useState, useMemo } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Header from '../common/Header'
import Journey from './components/Journey'
import DepartDate from './components/DepartDate'
import HighSpeed from './components/HighSpeed'
import Submit from './components/Submit'
import propTypes from 'prop-types'
import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity
} from './actions'
import { bindActionCreators } from 'redux'
import CitySelector from '../common/CitySelector'

function App (props) {
  // 用于检测是否有不必要的重复渲染
  const [count, setCount] = useState(0)
  const { from, to, dispatch, isCitySelectorVisible, cityData, isLoadingCityData } = props

  const onBack = useCallback(() => {
    window.history.back()
  }, [])

  // 这样写太麻烦了，可以用 useMemo + bindActionCreators 来简化
  // const doExchangeFromTo = useCallback(() => dispatch(exchangeFromTo()), [])
  // const doShowCitySelector = useCallback((bool) => dispatch(showCitySelector(bool)), [])
  const cbs = useMemo(() => {
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

  return (
    <div>
      <Header title="火车票" onBack={onBack}></Header>
      <Journey from={from} to={to} {...cbs}>
      </Journey>
      <DepartDate></DepartDate>
      <HighSpeed></HighSpeed>
      <Submit></Submit>

      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>

      <CitySelector show={isCitySelectorVisible} cityData={cityData} isLoading={isLoadingCityData} {...citySelectorCbs}></CitySelector>
    </div>
  )
}

App.propTypes = {
  from: propTypes.string,
  to: propTypes.string,
  dispatch: propTypes.func,
  isCitySelectorVisible: propTypes.bool,
  cityData: propTypes.object,
  isLoadingCityData: propTypes.bool
}

export default connect(
  function mapStateToProps (state) {
    return state
  },
  function mapDispatchToProps (dispatch) {
    return { dispatch }
  }
)(App)
