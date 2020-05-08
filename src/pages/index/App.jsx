import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import Header from '../common/Header'
import Journey from './components/Journey'
import DepartDate from './components/DepartDate'
import HighSpeed from './components/HighSpeed'
import Submit from './components/Submit'

function App () {
  return (
    <div>
      <Header></Header>
      <Journey></Journey>
      <DepartDate></DepartDate>
      <HighSpeed></HighSpeed>
      <Submit></Submit>
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
