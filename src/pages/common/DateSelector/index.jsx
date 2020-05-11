/*
 * @Author: KokoTa
 * @Date: 2020-05-11 09:32:52
 * @LastEditTime: 2020-05-11 14:14:25
 * @Description: 日期选择组件
 */
import './index.scss'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Header from '../Header'
import { getCurrentMonthsStartDayTime } from '../libs/util'
import Month from './Month'

function DateSelector (props) {
  const { show, onSelect, onBack } = props
  const startTimes = getCurrentMonthsStartDayTime()

  return (
    <div className={classNames('date-selector', { hidden: !show })}>
      <Header title="日期选择" onBack={onBack}></Header>
      <div className="date-selector-tables">
        {
          startTimes.map(startTime => {
            return <Month key={startTime} startTime={startTime} onSelect={onSelect} ></Month>
          })
        }
      </div>
    </div>
  )
}

DateSelector.propTypes = {
  show: PropTypes.bool,
  onSelect: PropTypes.func,
  onBack: PropTypes.func
}

export default DateSelector
