import React, { Component, PureComponent, memo } from 'react'

// 其实就是 PureComponent 的函数实现
const Memo = memo(function Memo (props) {
  console.log('函数渲染')
  // eslint-disable-next-line react/prop-types
  return <h3>{props.user.age}</h3>
})

// 只有 props 的第一级发生变化才会重新渲染
class Pure extends PureComponent {
  render () {
    console.log('类渲染')
    // eslint-disable-next-line react/prop-types
    return <h3>{this.props.user.age}</h3>
  }
}

export default class MemoWrap extends Component {
  state = {
    user: {
      age: 10
    }
  }

  add = () => {
    const user = this.state.user
    user.age++
    this.setState((state, props) => {
      console.log(state, props)
      return { user }
    })
  }

  render () {
    const user = this.state.user
    const add = this.add

    return (
      <div>
        <button onClick={add}>点击 +1</button>
        {/* 传入匿名函数的时候总是会重新渲染 */}
        {/* <Pure user={user} cb={() => {}}></Pure> */}
        <Pure user={user}></Pure>
        <Memo user={user}></Memo>
      </div>
    )
  }
}
