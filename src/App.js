import React, { Component, createContext } from 'react'
import logo from './logo.svg';
import './App.css';

const Context = createContext()

class Floor extends Component {
  static contextType = Context
  
  render() {
    const user = this.context
    return (
      <h1>{user.age}</h1>
    )
  }
}

class Middle extends Component {
  render() {
    return <Floor></Floor>
  }
}

class Content extends Component {
  state = {
    name: 'Brain',
    age: 25,
    count: 100
  }

  render() {
    const user = { ...this.state }
    return (
      <Context.Provider value={user}>
          <button onClick={() => this.setState({ age: --user.age })}>点击</button>
          <Middle></Middle>
      </Context.Provider>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React To Get Better
        </a>
      </header>
      <Content fuck="fuck"></Content>
    </div>
  );
}

export default App;
