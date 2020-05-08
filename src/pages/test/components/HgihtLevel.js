/*
 * @Author: KokoTa
 * @Date: 2020-04-29 16:18:16
 * @LastEditTime: 2020-04-30 15:31:53
 * @Description: 高阶组件的实现之一
 */
import React from 'react'
import PropTypes from 'prop-types'

class Bar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'KokoTa'
    }
  }

  componentDidMount () {
    console.log('mount')
  }

  render () {
    return this.props.render(this.state)
  }
}

Bar.propTypes = {
  render: PropTypes.func
}

class Foo extends React.Component {
  render () {
    return (
      <h3>{this.props.info.name}</h3>
    )
  }
}

Foo.propTypes = {
  info: PropTypes.object
}

export default function HighLevel () {
  return (
    <Bar render={state => <Foo info={state}></Foo>}></Bar>
  )
}
