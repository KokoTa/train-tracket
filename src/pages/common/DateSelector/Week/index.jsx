import React from 'react'
import PropTypes from 'prop-types'
import Day from '../Day'

function Week (props) {
  const { days, onSelect } = props

  return (
    <tr>
      {
        days.map((day, index) => <Day key={index} day={day} onSelect={onSelect}></Day>)
      }
    </tr>
  )
}

Week.propTypes = {
  days: PropTypes.array,
  onSelect: PropTypes.func
}

export default Week
