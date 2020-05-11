import React from 'react'
import PropTypes from 'prop-types'
import { getMonthDayTimes } from '../../libs/util'
import Week from '../Week'

function Month (props) {
  // 参数：每个月开头的第一天的零时零分零秒
  const { startTime, onSelect } = props
  const startDate = new Date(startTime)
  const days = getMonthDayTimes(startTime)
  const weeks = []

  for (let week = 0; week < days.length / 7; week++) {
    weeks.push(days.slice(week * 7, (week + 1) * 7))
  }

  return (
    <table className="date-table">
      <thead>
        <tr>
          <td colSpan="7">
            <h5>{startDate.getFullYear()}-{startDate.getMonth() + 1}</h5>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th style={{ color: 'orange' }}>周六</th>
          <th style={{ color: 'orange' }}>周日</th>
        </tr>
        {
          weeks.map((days, index) => <Week key={index} days={days} onSelect={onSelect}></Week>)
        }
      </tbody>
    </table>
  )
}

Month.propTypes = {
  startTime: PropTypes.number,
  onSelect: PropTypes.func
}

export default Month
