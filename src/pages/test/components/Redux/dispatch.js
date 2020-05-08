
/*
 * @Author: KokoTa
 * @Date: 2020-05-06 09:24:45
 * @LastEditTime: 2020-05-06 11:58:33
 * @Description: 提交 action 给 reducer，reducer 返回新的 state 状态，接着就可以调用业务逻辑函数了
 */
import reducer from './reducer'

let state = {
  todos: [],
  count: 0
}

export function dispatch (action) {
  state = reducer(state, action)
  console.log(state)
}
