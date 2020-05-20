/* eslint-disable no-unused-vars */
import React, { useRef, useState, useMemo, useEffect } from 'react'
import './index.scss'
import useWinSize from './useWin'
import propTypes from 'prop-types'

function Slider (props) {
  const { startHour = 0, endHour = 24 } = props

  // 起始时间和结束时间相对于 24 小时的百分比
  const [start, setStart] = useState((startHour / 24) * 100)
  const [end, setEnd] = useState((endHour / 24) * 100)
  // 给百分比做限制
  const startPercent = useMemo(() => {
    if (start > 100) return 100
    if (start < 0) return 0
    return start
  }, [start])
  const endPercent = useMemo(() => {
    if (end > 100) return 100
    if (end < 0) return 0
    return end
  }, [end])
  // 百分比转小时
  const startHours = useMemo(() => Math.round((startPercent * 24) / 100), [startPercent])
  const endHours = useMemo(() => Math.round((endPercent * 24) / 100), [endPercent])

  // 屏幕宽高
  const winSize = useWinSize()
  // 起点和终点实例
  const startBtn = useRef()
  const endBtn = useRef()
  // 记录偏移量数据
  const lastStartX = useRef()
  const lastEndX = useRef()
  // 滑动条实例
  const range = useRef()
  // 记录滑动条宽度
  const rangeWidth = useRef()
  // 获取滑动条总宽度
  useEffect(() => {
    rangeWidth.current = parseFloat(
      window.getComputedStyle(range.current).width
    )
  }, [winSize.width])

  // 起点事件
  function onStartTouchBegin (e) {
    const touch = e.targetTouches[0]
    lastStartX.current = touch.pageX
  }
  function onStartTouchMove (e) {
    const touch = e.targetTouches[0]
    const distance = touch.pageX - lastStartX.current
    lastStartX.current = touch.pageX
    setStart(start => start + (distance / rangeWidth.current) * 100)
  }
  // 终点事件
  function onEndTouchBegin (e) {
    const touch = e.targetTouches[0]
    lastEndX.current = touch.pageX
  }
  function onEndTouchMove (e) {
    const touch = e.targetTouches[0]
    const distance = touch.pageX - lastEndX.current
    lastEndX.current = touch.pageX
    setEnd(end => end + (distance / rangeWidth.current) * 100)
  }
  // 监听起始点和终点的点击滑动事件
  useEffect(() => {
    startBtn.current.addEventListener('touchstart', onStartTouchBegin, false)
    startBtn.current.addEventListener('touchmove', onStartTouchMove, false)
    endBtn.current.addEventListener('touchstart', onEndTouchBegin, false)
    endBtn.current.addEventListener('touchmove', onEndTouchMove, false)
    return () => {
      startBtn.current.removeEventListener('touchstart', onStartTouchBegin, false)
      startBtn.current.removeEventListener('touchmove', onStartTouchMove, false)
      endBtn.current.removeEventListener('touchstart', onEndTouchBegin, false)
      endBtn.current.removeEventListener('touchmove', onEndTouchMove, false)
    }
  })

  return (
    <div>
      <p>滑动组件</p>
      <div className="range-slider">
        <div className="slider">
          {/* 选择的宽度 */}
          <div className="slider-range" ref={range}
            style={{
              left: startPercent + '%',
              width: endPercent - startPercent + '%'
            }}
          ></div>
          {/* 起点 */}
          <div className="slider-handle" ref={startBtn}
            style={{
              left: startPercent + '%'
            }}
          >
            <span>{startHours}</span>
          </div>
          {/* 终点 */}
          <div className="slider-handle" ref={endBtn}
            style={{
              left: endPercent + '%'
            }}
          >
            <span>{endHours}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Slider.propTypes = {
  startHour: propTypes.number,
  endHour: propTypes.number
}

export default Slider
