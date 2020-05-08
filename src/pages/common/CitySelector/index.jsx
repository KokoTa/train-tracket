import React, { memo, useState, useMemo, useEffect } from 'react'
import './index.scss'
import propTypes from 'prop-types'
import classnames from 'classnames'

function CitySelector (props) {
  const { show, cityData, isLoading, onBack, fetchCityData } = props
  const [keyword, setKeyword] = useState('')
  const key = useMemo(() => keyword.trim(), [keyword]) // 性能优化，类似 computed
  console.log('CitySelector', show, cityData, isLoading, onBack)

  useEffect(() => {
    // 界面不显示不触发、已存在数据不触发、加载时不触发
    // 这里有个小问题，假如请求时服务器没开，请求就会报错，报错了 isLoading 就会从 true -> false，就会触发钩子，就会再次发送请求，就会无限循环重试
    if (!show || cityData || isLoading) return
    fetchCityData()
  }, [show, cityData, isLoading])

  return (
    <div className={classnames('city-selector', { 'hide-selector': !show })}>
      <div className="head">
        <span className="back" onClick={onBack}>返回</span>
        <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="搜索城市"/>
        { key.length > 0 ? <span className="delete" onClick={() => setKeyword('')}>x</span> : null }
      </div>
    </div>
  )
}

CitySelector.propTypes = {
  show: propTypes.bool,
  cityData: propTypes.array,
  isLoading: propTypes.bool,
  onBack: propTypes.func,
  fetchCityData: propTypes.func
}

export default memo(CitySelector)
