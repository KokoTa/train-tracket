import React, { memo } from 'react'
import './index.scss'
import propTypes from 'prop-types'

function Journey (props) {
  const { from, to, exchangeFromTo, showCitySelector } = props

  return (
    <div className="journey">
      <div className="station" onClick={() => showCitySelector(true)}>
        <input type="text" name="from" value={from} readOnly/>
      </div>
      <div className="switch" onClick={exchangeFromTo}>-</div>
      <div className="station" onClick={() => showCitySelector(false)}>
        <input type="text" name="to" value={to} readOnly/>
      </div>
    </div>
  )
}

Journey.propTypes = {
  from: propTypes.string,
  to: propTypes.string,
  exchangeFromTo: propTypes.func,
  showCitySelector: propTypes.func
}

export default memo(Journey)
