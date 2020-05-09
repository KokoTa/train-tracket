/*
 * @Author: KokoTa
 * @Date: 2020-05-07 17:07:36
 * @LastEditTime: 2020-05-09 17:29:44
 * @Description:
 */
import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
  ACTION_SET_IS_SELECT_LEFT_CITY,
  ACTION_SET_CITY_DATA,
  ACTION_SET_IS_LOADING_CITY_DATA,
  ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
  ACTION_SET_IS_HIGH_SPEED,
  ACTION_SET_DEPART_TIME
} from './actions'

export default {
  from (state = '北京', action) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_FROM:
        return payload
      default:
    }

    return state
  },
  to (state = '上海', action) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_TO:
        return payload
      default:
    }

    return state
  },
  isCitySelectorVisible (state = false, action) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
        return payload
      default:
    }

    return state
  },
  isSelectLeftCity (state = false, action) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_IS_SELECT_LEFT_CITY:
        return payload
      default:
    }

    return state
  },
  cityData (state = null, action) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_CITY_DATA:
        return payload
      default:
    }

    return state
  },
  isLoadingCityData (state = false, action) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_IS_LOADING_CITY_DATA:
        return payload
      default:
    }

    return state
  },
  isDateSelectorVisible (state = false, action) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_IS_DATE_SELECTOR_VISIBLE:
        return payload
      default:
    }

    return state
  },
  isHighSpeed (state = false, action) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_IS_HIGH_SPEED:
        return payload
      default:
    }

    return state
  },
  departTime (state = Date.now(), action) {
    const { type, payload } = action

    switch (type) {
      case ACTION_SET_DEPART_TIME:
        return payload
      default:
    }

    return state
  }
}
