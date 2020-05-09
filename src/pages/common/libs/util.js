/*
 * @Author: KokoTa
 * @Date: 2020-05-09 15:24:17
 * @LastEditTime: 2020-05-09 15:36:07
 * @Description: 工具函数
 */

/**
 * 获取日期时间，将时间的小时、分钟、秒、毫秒设为 0
 */
export function setTimeZero (timestamp = Date.now()) {
  const target = new Date(timestamp)
  target.setHours(0)
  target.setMinutes(0)
  target.setSeconds(0)
  target.setMilliseconds(0)
  return target.getTime()
}
