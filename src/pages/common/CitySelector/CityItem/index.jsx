import React, { memo } from 'react'
import propTypes from 'prop-types'

function CityItem (props) {
  const { name, onSelect } = props

  return (
    <div className="city-item" onClick={() => onSelect(name)}>
      {name}
    </div>
  )
}

CityItem.propTypes = {
  name: propTypes.string,
  onSelect: propTypes.func
}

export default memo(CityItem)
