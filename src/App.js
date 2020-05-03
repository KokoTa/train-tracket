/* eslint-disable react/prop-types */
import React, { lazy, Suspense, useState } from 'react'
import ErrorCather from './components/ErrorCather'
import Context from './components/Context'
import HighLevel from './components/HgihtLevel'
import State from './components/Hooks/State'
import Effect from './components/Hooks/Effect'

const Memo = lazy(() => import(/* webpackChunkName: "Memo" */'./components/Memo'))

function App () {
  const [effectShow, setEffectShow] = useState(true)

  return (
    <div className="App">
      <h1 className="title">Context 功能测试</h1>
      <Context></Context>
      <hr></hr>

      <h1 className="title">错误捕获 和 Memo 测试</h1>
      <hr></hr>
      <ErrorCather>
        <Suspense fallback={<div>Loading...</div>}>
          <Memo></Memo>
        </Suspense>
      </ErrorCather>

      <h1 className="title">高阶组件</h1>
      <hr></hr>
      <HighLevel></HighLevel>

      <h1 className="title">State</h1>
      <hr></hr>
      <State count={1}></State>

      <h1 className="title">Effect</h1>
      <hr></hr>
      { effectShow ? <Effect></Effect> : null}
      <div><button onClick={() => setEffectShow(!effectShow)}>toggle effect</button></div>
    </div>
  )
}

export default App
