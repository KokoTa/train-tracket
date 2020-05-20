import React from 'react'
import './index.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import useNav from './useNav'

/**
 * 日期导航组件，点击增减天数
 */
function Nav (props) {
  const { departDateTime } = props
  const { currentString, prevClick } = useNav(departDateTime)

  return (
    <div>
      <p>日期导航组件</p>
      <div className="nav-wrap">
        <div className={classNames('nav-item', 'nav-left')} onClick={prevClick}>前一天</div>
        <div className="nav-item nav-center">{currentString}</div>
        <div className={classNames('nav-item', 'nav-right')}>后一天</div>
      </div>
    </div>
  )
}

Nav.propTypes = {
  departDateTime: PropTypes.number
}

export default Nav
