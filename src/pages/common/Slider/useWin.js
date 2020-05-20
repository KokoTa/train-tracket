import { useState, useEffect } from 'react'

/*
 * @Author: KokoTa
 * @Date: 2020-05-20 15:15:21
 * @LastEditTime: 2020-05-20 15:59:33
 * @Description: 获取屏幕宽高
 */
export default function useWinSize () {
  const [width, setWidth] = useState(document.documentElement.clientWidth)
  const [height, setHeight] = useState(document.documentElement.clientHeight)

  const onResize = () => {
    setWidth(document.documentElement.clientWidth)
    setHeight(document.documentElement.clientHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize, false)

    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [])

  return { width, height }
}
