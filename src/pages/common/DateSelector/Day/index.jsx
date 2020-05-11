import React from 'react'
import PropTypes from 'prop-types'
import { setTimeZero } from '../../libs/util'
import classNames from 'classnames'

function Day (props) {
  const { day, onSelect } = props

  if (!day) return <td></td>

  const nowTime = setTimeZero()
  const classes = []

  if (day < nowTime) {
    classes.push('disabled')
  }
  if ([6, 0].includes(new Date(day).getDay())) {
    classes.push('weekend')
  }
  if (day === nowTime) {
    classes.push('today')
  }

  return (
    <td className={classNames(classes)} onClick={(() => onSelect(day))}>{new Date(day).getDate()}</td>
  )
}

Day.propTypes = {
  day: PropTypes.number,
  onSelect: PropTypes.func
}

export default Day
