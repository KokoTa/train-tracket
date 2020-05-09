import React, { useMemo } from 'react'
import './index.css'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { setTimeZero } from '../../../common/libs/util'

/**
 * 该组件不用 memo 进行优化，因为这里使用了 setTimeZero()，该函数默认参数为 Date.now()
 * 不符合 props 单一数据源原则，使用 memo 反而可能会出现渲染不一致的问题
 */
function DepartDate (props) {
  const { time, onClick } = props

  // 由于时间戳精度为毫秒，为了让 useMemo 有用，把时间戳精度设为日
  const timeZero = setTimeZero(time)
  const departDate = useMemo(() => {
    return dayjs(time).format('YYYY-MM-DD')
  }, [timeZero])
  // 是否是今天
  const isToday = timeZero === setTimeZero()
  // 获取星期几
  const weekString = '周' + ['日', '一', '二', '三', '四', '五', '六'][new Date(departDate).getDay()]

  return (
    <div className="depart-date" onClick={onClick}>
      <input type="text" name="date" value={departDate} readOnly/>
      {weekString} { isToday ? '(今天)' : '' }
    </div>
  )
}

DepartDate.propTypes = {
  time: PropTypes.number,
  onClick: PropTypes.func
}

export default DepartDate
