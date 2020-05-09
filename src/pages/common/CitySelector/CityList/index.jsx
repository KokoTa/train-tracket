import React, { memo } from 'react'
import PropTypes from 'prop-types'
import CitySection from '../CitySection'

function CityList (props) {
  const { sections = [], onSelect, cityListRef } = props

  return (
    <div className="city-list" ref={cityListRef}>
      <div className="city-cate">
        {
          sections.map((section) => <CitySection key={section.title} title={section.title} cities={section.cities} onSelect={onSelect}></CitySection>)
        }
      </div>
    </div>
  )
}

CityList.propTypes = {
  sections: PropTypes.array,
  onSelect: PropTypes.func,
  cityListRef: PropTypes.object
}

export default memo(CityList)
