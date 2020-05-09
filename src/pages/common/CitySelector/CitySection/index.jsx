import React, { memo } from 'react'
import PropTypes from 'prop-types'
import CityItem from '../CityItem'

function CitySection (props) {
  const { title, cities = [], onSelect } = props

  return (
    <div className="city-section" key={title}>
      <h4 data-cate={title}>{title}</h4>
      {cities.map((city) => <CityItem key={city.name} name={city.name} onSelect={onSelect}></CityItem>)}
    </div>
  )
}

CitySection.propTypes = {
  title: PropTypes.string,
  cities: PropTypes.array,
  onSelect: PropTypes.func
}

export default memo(CitySection)
