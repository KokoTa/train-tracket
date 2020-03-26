import React, { lazy, Suspense } from 'react'
import ErrorCather from './ErrorCather'
import Context from './components/Context'

const Memo = lazy(() => import(/* webpackChunkName: "Memo" */'./components/Memo'))

function App () {
  return (
    <div className="App">
      <Context></Context>
      <ErrorCather>
        <Suspense fallback={<div>Loading...</div>}>
          <Memo></Memo>
        </Suspense>
      </ErrorCather>
    </div>
  )
}

export default App
