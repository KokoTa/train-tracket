import React, { memo, useState, useMemo, useEffect, useCallback, useRef } from 'react'
import './index.scss'
import propTypes from 'prop-types'
import classnames from 'classnames'
import CityList from './CityList'
import AlphaIndex from './AlphaIndex'
import SearchSuggest from './SearchSuggest'

function CitySelector (props) {
  const { show, cityData, isLoading, onBack, fetchCityData, onSelect } = props
  const [keyword, setKeyword] = useState('')
  const key = useMemo(() => keyword.trim(), [keyword]) // 性能优化，类似 computed
  const headRef = useRef()
  const cityListRef = useRef()

  // 获取城市数据
  useEffect(() => {
    // 界面不显示不触发、已存在数据不触发、加载时不触发
    // 这里有个小问题，假如请求时服务器没开，请求就会报错，报错了 isLoading 就会从 true -> false，就会触发钩子，就会再次发送请求，就会无限循环重试
    // 正常开发好像都是直接请求一次就完事了
    if (!show || cityData || isLoading) return
    fetchCityData()
  }, [show, cityData, isLoading])

  // 城市列表展示
  const showCityList = () => {
    if (isLoading) return <div>Loading...</div>
    if (cityData) return <CityList sections={cityData.cityList} onSelect={onSelect} cityListRef={cityListRef} ></CityList>
    return <div>Error...</div>
  }

  // 点击字母跳转视图
  const toAlpha = useCallback((alpha) => {
    const element = document.querySelector(`[data-cate='${alpha}']`)
    const top = (element && element.offsetTop) || 0
    const headElement = headRef.current
    const listElement = cityListRef.current
    listElement.scrollTo(0, top - headElement.offsetHeight)
  }, [])

  const searchSuggestSelect = useCallback((suggestKeyword) => {
    onSelect(suggestKeyword)
    setKeyword('')
  })

  return (
    <div className={classnames('city-selector', { 'hide-selector': !show })}>
      <div className="head" ref={headRef}>
        <span className="back" onClick={onBack}>返回</span>
        <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="搜索城市"/>
        { key.length > 0 ? <span className="delete" onClick={() => setKeyword('')}>x</span> : null }
      </div>

      {showCityList()}

      <AlphaIndex onClick={toAlpha}></AlphaIndex>

      { key.length > 0 ? <SearchSuggest keyword={keyword} cityData={cityData} onSelect={searchSuggestSelect}></SearchSuggest> : null }

    </div>
  )
}

CitySelector.propTypes = {
  show: propTypes.bool,
  cityData: propTypes.object,
  isLoading: propTypes.bool,
  onBack: propTypes.func,
  fetchCityData: propTypes.func,
  onSelect: propTypes.func
}

export default memo(CitySelector)
