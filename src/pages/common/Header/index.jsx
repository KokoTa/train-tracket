import React, { memo } from 'react'
import './index.scss'
import propTypes from 'prop-types'

function Header (props) {
  const { onBack, title } = props

  console.log('Header refresh')

  return (
    <div className="header">
      <span className="header-back" onClick={onBack}>
        <svg width="42" height="42">
          <polyline
            points="25,13 16,21, 25,29"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          ></polyline>
        </svg>
      </span>
      <span className="header-title">{title}</span>
    </div>
  )
}

Header.propTypes = {
  onBack: propTypes.func.isRequired,
  title: propTypes.string.isRequired
}

export default memo(Header)
