/*
 * @Author: KokoTa
 * @Date: 2020-05-09 15:24:17
 * @LastEditTime: 2020-05-11 14:54:15
 * @Description: 工具函数
 */

/**
 * 获取日期时间，将时间的小时、分钟、秒、毫秒设为 0
 * 不传参则默认返回当天日期
 * @param {*} timestamp 时间戳
 */
export function setTimeZero (timestamp = Date.now()) {
  const target = new Date(timestamp)
  target.setHours(0)
  target.setMinutes(0)
  target.setSeconds(0)
  target.setMilliseconds(0)
  return target.getTime()
}

/**
 * 获取近三个月的第一天的零时零分零秒的时间
 */
export function getCurrentMonthsStartDayTime () {
  const arr = []
  const zeroTime = setTimeZero()
  const date = new Date(zeroTime)
  date.setDate(1)
  arr.push(date.getTime())
  date.setMonth(date.getMonth() + 1)
  arr.push(date.getTime())
  date.setMonth(date.getMonth() + 1)
  arr.push(date.getTime())
  return arr
}

/**
 * 获取这个月每天的时间
 * 由于 1 号的星期不一定是 星期一，所以需要补齐数组，月末同理
 * @param {*} startTime 月份第一天的时间戳
 */
export function getMonthDayTimes (startTime) {
  const startDate = new Date(startTime)
  const currentDate = new Date(startTime)
  const dayTimes = []

  while (startDate.getMonth() === currentDate.getMonth()) {
    dayTimes.push(currentDate.getTime())
    currentDate.setDate(currentDate.getDate() + 1)
  }

  // getDay 取值在 0~6, 周日是 0
  // 补齐前面
  const startDayFormat = startDate.getDay() === 0 ? 7 : startDate.getDay()
  const unshiftDays = startDayFormat - 1
  dayTimes.unshift(...new Array(unshiftDays).fill(null))
  // 补齐后面
  const lastDate = new Date(dayTimes[dayTimes.length - 1])
  const lastDayFormat = lastDate.getDay() === 0 ? 7 : lastDate.getDay()
  const pushDays = 7 - lastDayFormat
  dayTimes.push(...new Array(pushDays).fill(null))

  return dayTimes
}
