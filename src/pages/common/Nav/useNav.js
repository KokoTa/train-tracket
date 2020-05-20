/*
 * @Author: KokoTa
 * @Date: 2020-05-20 10:22:16
 * @LastEditTime: 2020-05-20 14:03:28
 * @Description: Nav 组件自定义 Hook
 */
import { useState, useMemo, useCallback, useEffect } from 'react'
import 'dayjs/locale/zh-cn'
import dayjs from 'dayjs'
import { setTimeZero } from '../libs/util'

/**
 * Nav 组件自定义 Hook
 */
export default function useNav (departDateTime) {
  const [dateTime, setDateTime] = useState(setTimeZero())

  useEffect(() => {
    setDateTime(departDateTime)
  }, [departDateTime])

  const currentString = useMemo(() => {
    const d = dayjs(dateTime)
    return d.format('M月D日 ') + d.locale('zh-cn').format('ddd')
  }, [dateTime])

  const prevClick = useCallback(() => {
    const date = new Date(dateTime)
    date.setDate(date.getDate() - 1)
    setDateTime(date.getTime())
  }, [dateTime])

  return {
    currentString,
    prevClick
  }
}
