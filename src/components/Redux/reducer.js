/*
 * @Author: KokoTa
 * @Date: 2020-05-06 10:40:33
 * @LastEditTime: 2020-05-06 11:52:54
 * @Description: reducer 根据 action 更新 state，对于多个 reducer，需要 combine 它们
 */

function todosReducer (state, action) {
  const { type, payload } = action

  switch (type) {
    case 'set':
      return {
        todos: payload
      }
    case 'add':
      return {
        todos: [...state.todos, payload]
      }
  }

  return state
}

function countReducer (state, action) {
  const { type } = action

  switch (type) {
    case 'plus':
      return {
        count: state.count + 1
      }
  }

  return state
}

const reducers = {
  todos: todosReducer,
  count: countReducer
}

function combineReducer (reducers) {
  return function reducer (state, action) {
    let changed = {}

    for (const key in reducers) {
      const reducer = reducers[key]
      const reducerState = { [key]: state[key] }
      changed = { ...changed, ...reducer(reducerState, action) }
    }

    return {
      ...state,
      ...changed
    }
  }
}

export default combineReducer(reducers)
