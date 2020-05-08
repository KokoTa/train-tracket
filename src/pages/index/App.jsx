import React, { useCallback, useState } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Header from '../common/Header'
import Journey from './components/Journey'
import DepartDate from './components/DepartDate'
import HighSpeed from './components/HighSpeed'
import Submit from './components/Submit'

function App () {
  const onBack = useCallback(() => {
    window.history.back()
  }, [])

  const [count, setCount] = useState(0)

  return (
    <div>
      <Header title="火车票" onBack={onBack}></Header>
      <Journey></Journey>
      <DepartDate></DepartDate>
      <HighSpeed></HighSpeed>
      <Submit></Submit>
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
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
