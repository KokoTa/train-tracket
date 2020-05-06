/*
 * @Author: KokoTa
 * @Date: 2020-05-06 10:14:04
 * @LastEditTime: 2020-05-06 11:09:32
 * @Description: 整合 action 和 dispatch 的调用
 */
export function bindActionCreator (actionCreators, dispatch) {
  const obj = {}

  for (const key in actionCreators) {
    obj[key] = (...args) => {
      const actionCreator = actionCreators[key]
      const action = actionCreator(args)
      dispatch(action)
    }
  }

  return obj
}
