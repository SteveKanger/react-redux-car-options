import { push } from 'connected-react-router'
import { CHOOSE_VEHICHLE } from "../reducers/vehicleReducer";
import { SET_COLOR } from "../reducers/vehicleReducer";
import { SET_ENGINE } from "../reducers/vehicleReducer";
import { SET_INTERIOR } from "../reducers/vehicleReducer";
import { REMOVE_INTERIOR } from "../reducers/vehicleReducer";
import { SET_EXTERIOR } from "../reducers/vehicleReducer";
import { REMOVE_EXTERIOR } from "../reducers/vehicleReducer";

export const changePage = (page) => dispatch => {
  dispatch(push(page))
  window.scrollTo(0,0)
}

export const setVehicle = (id, name, price, engine) => dispatch => {
  dispatch({
    type: CHOOSE_VEHICHLE,
    payload: {
      id: id,
      name: name,
      price: price,
      engine: engine
    }
  })
  dispatch(changePage('/config-color'))
}

export const setColor = (hex, name) => dispatch => {
  dispatch({
    type: SET_COLOR,
    payload: {
      hex: hex,
      name: name
    }
  })
  dispatch(changePage('/config-engine'))
}

export const setEngine = (id, name, price) => dispatch => {
  dispatch({
    type: SET_ENGINE,
    payload: {
      id: id,
      name: name,
      price: price
    }
  })
  dispatch(changePage('/config-interior'))
}

export const setInterior = (id, name, price) => dispatch => {
  dispatch({
    type: SET_INTERIOR,
    payload: {
      id: id,
      name: name,
      price: price
    }
  })
}

export const removeInterior = (id, price) => dispatch => {
  dispatch({
    type: REMOVE_INTERIOR,
    payload: {
      id: id,
      price: price
    }
  })
}

export const setExterior = (id, name, price) => dispatch => {
  dispatch({
    type: SET_EXTERIOR,
    payload: {
      id: id,
      name: name,
      price: price
    }
  })
}

export const removeExterior = (id, price) => dispatch => {
  dispatch({
    type: REMOVE_EXTERIOR,
    payload: {
      id: id,
      price: price
    }
  })
}

