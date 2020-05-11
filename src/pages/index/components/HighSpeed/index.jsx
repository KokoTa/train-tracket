import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './index.css'

function HighSpeed (props) {
  const { isHighSpeed, toggle } = props

  return (
    <div className="high-speed">
      <div className="label">只看高铁/动车</div>
      <div className="switch" onClick={toggle}>
        <label className={ isHighSpeed ? 'select' : '' }>
          <input type="hidden" name="high-speed" value={isHighSpeed} />
          切换
        </label>
      </div>
    </div>
  )
}

HighSpeed.propTypes = {
  isHighSpeed: PropTypes.bool,
  toggle: PropTypes.func
}

export default memo(HighSpeed)
