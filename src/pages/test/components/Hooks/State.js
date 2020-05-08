/*
 * @Author: KokoTa
 * @Date: 2020-04-29 17:20:15
 * @LastEditTime: 2020-04-30 14:51:51
 * @Description: State Demo
 */

import React, { useState } from 'react'
import propTypes from 'prop-types'

export default function State (props) {
  const [count, setCount] = useState(props.count)

  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  )
}

State.propTypes = {
  count: propTypes.number
}
