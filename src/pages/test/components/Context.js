import React, { Component, createContext } from 'react'

const Context = createContext()

class Floor extends Component {
  static contextType = Context

  render () {
    const state = this.context
    return (
      <h3>{state.count}</h3>
    )
  }
}

class Middle extends Component {
  render () {
    return <Floor></Floor>
  }
}

export default class Content extends Component {
  state = {
    count: 25
  }

  render () {
    const state = { ...this.state }
    return (
      <Context.Provider value={state}>
        <button onClick={() => this.setState({ count: --state.count })}>点击 -1</button>
        <Middle></Middle>
      </Context.Provider>
    )
  }
}
