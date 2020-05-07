import React from 'react'
import './App.css'
import { connect } from 'react-redux'

function App () {
  return (
    <h1>App</h1>
  )
}

export default connect(
  function mapStateToProps (state) {},
  function mapDispatchToProps (dispatch) {}
)(App)
