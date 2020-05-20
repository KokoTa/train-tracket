import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import classNames from 'classnames'

function Select (props) {
  const { dataList } = props
  const [dataSelected, setDataSelected] = useState([])

  const toggleClick = useCallback((v) => {
    const index = dataSelected.findIndex((value) => value === v)
    const newSelected = [...dataSelected]
    if (index !== -1) {
      newSelected.splice(index, 1)
      setDataSelected(newSelected)
    } else {
      setDataSelected([...newSelected, v])
    }
  }, [dataSelected])

  return (
    <div>
      <p>选择组件</p>
      <section className="select">
        {
          dataList.map(item => {
            return <div
              className={classNames('select-item', { selected: dataSelected.indexOf(item.value) !== -1 })}
              key={item.value}
              onClick={() => toggleClick(item.value)}>
              {item.value}
            </div>
          })
        }
        <div className="select-show">{dataSelected.toString()}</div>
      </section>
    </div>
  )
}

Select.propTypes = {
  dataList: PropTypes.array
}

export default Select
