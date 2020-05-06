/*
 * @Author: KokoTa
 * @Date: 2020-05-06 09:36:02
 * @LastEditTime: 2020-05-06 14:16:03
 * @Description: 生成 action
 */
export function createSet (payload) {
  return {
    type: 'set',
    payload
  }
}

export function createAdd (payload) {
  return {
    type: 'add',
    payload
  }
}

export function createPlus () {
  return {
    type: 'plus'
  }
}
