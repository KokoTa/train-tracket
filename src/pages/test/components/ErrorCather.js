import React, { PureComponent } from 'react'

export default class ErrorCather extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch () {
    return { hasError: true }
  }

  render () {
    const error = this.state.hasError

    if (error) {
      return <div>Bad Loading</div>
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children
  }
}
