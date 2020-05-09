import React, { memo } from 'react'
import PropTypes from 'prop-types'

// 获取 24 个英文字母
const alphaData = Array.from(new Array(26), (element, index) => String.fromCharCode(65 + index))

function AlphaIndex (props) {
  const { onClick } = props
  console.log(1)

  return (
    <div className="alpha-list">
      {
        alphaData.map((item) => (
          <div className="alpha-item" key={item} onClick={() => onClick(item)}>
            {item}
          </div>
        ))
      }

    </div>
  )
}

AlphaIndex.propTypes = {
  onClick: PropTypes.func
}

export default memo(AlphaIndex)
