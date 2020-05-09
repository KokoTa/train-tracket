import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function SearchSuggest (props) {
  const { keyword, onSelect, cityData } = props
  const [cities, setCities] = useState([])
  const [filterCities, setFilterCities] = useState([])

  useEffect(() => {
    if (cityData) {
      const cityList = cityData.cityList
      const cities = []
      cityList.forEach((item) => cities.push(...item.cities))
      setCities(cities)
      console.log(cities, 'cityData')
    }
  }, [cityData])

  useEffect(() => {
    const data = cities.filter((item) => item.name.indexOf(keyword) !== -1)
    setFilterCities(data)
    console.log(cities, 'keyword')
  }, [keyword, cities])

  return (
    <div className="search-suggest">
      {
        filterCities.map((item) => <div key={item.name} onClick={() => onSelect(item.name)}>{item.name}</div>)
      }
    </div>
  )
}

SearchSuggest.propTypes = {
  keyword: PropTypes.string,
  onSelect: PropTypes.func,
  cityData: PropTypes.object
}

export default memo(SearchSuggest)
