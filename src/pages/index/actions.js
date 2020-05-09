/*
 * @Author: KokoTa
 * @Date: 2020-05-07 17:07:15
 * @LastEditTime: 2020-05-09 17:19:14
 * @Description:
 */
import axios from 'axios'

export const ACTION_SET_FROM = 'ACTION_SET_FROM'
export const ACTION_SET_TO = 'ACTION_SET_TO'
export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'ACTION_SET_IS_CITY_SELECTOR_VISIBLE'
export const ACTION_SET_IS_SELECT_LEFT_CITY = 'ACTION_SET_IS_SELECT_LEFT_CITY'
export const ACTION_SET_CITY_DATA = 'ACTION_SET_CITY_DATA'
export const ACTION_SET_IS_LOADING_CITY_DATA = 'ACTION_SET_IS_LOADING_CITY_DATA'
export const ACTION_SET_IS_DATE_SELECTOR_VISIBLE = 'ACTION_SET_IS_DATE_SELECTOR_VISIBLE'
export const ACTION_SET_IS_HIGH_SPEED = 'ACTION_SET_IS_HIGH_SPEED'
export const ACTION_SET_DEPART_TIME = 'ACTION_SET_DEPART_TIME'

export function setFrom (from) {
  return {
    type: ACTION_SET_FROM,
    payload: from
  }
}

export function setTo (to) {
  return {
    type: ACTION_SET_TO,
    payload: to
  }
}

export function setIsLoadingCityData (isLoadingCityData) {
  return {
    type: ACTION_SET_IS_LOADING_CITY_DATA,
    payload: isLoadingCityData
  }
}

export function setCityData (cityData) {
  return {
    type: ACTION_SET_CITY_DATA,
    payload: cityData
  }
}

export function toggleHighSpeed () {
  return (dispatch, getState) => {
    const { highSpeed } = getState()
    dispatch({
      type: ACTION_SET_IS_HIGH_SPEED,
      payload: !highSpeed
    })
  }
}

export function showCitySelector (isSelectLeftCity) {
  return (dispatch) => {
    // 打开选择器
    dispatch({
      type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
      payload: true
    })
    // 是否选择左侧的城市框
    dispatch({
      type: ACTION_SET_IS_SELECT_LEFT_CITY,
      payload: isSelectLeftCity
    })
  }
}

export function hideCitySelector () {
  return {
    type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    payload: false
  }
}

export function setSelectedCity (city) {
  return (dispatch, getState) => {
    const { isSelectLeftCity } = getState()
    if (isSelectLeftCity) {
      dispatch(setFrom(city))
    } else {
      dispatch(setTo(city))
    }
    dispatch(hideCitySelector())
  }
}

export function showDateSelector () {
  return {
    type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
    payload: true
  }
}

export function hideDateSelector () {
  return {
    type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
    payload: false
  }
}

export function setDepartTime (departTime) {
  return {
    type: ACTION_SET_DEPART_TIME,
    payload: departTime
  }
}

export function exchangeFromTo () {
  return (dispatch, getState) => {
    const { from, to } = getState()
    dispatch(setFrom(to))
    dispatch(setTo(from))
  }
}

export function fetchCityData () {
  return async (dispatch, getState) => {
    const { isLoadingCityData } = getState()

    if (isLoadingCityData) return
    dispatch(setIsLoadingCityData(true))

    try {
      const res = await axios.get('/cities')
      dispatch(setCityData(res.data))
      dispatch(setIsLoadingCityData(false))
    } catch (error) {
      dispatch(setIsLoadingCityData(false))
    }
  }
}
