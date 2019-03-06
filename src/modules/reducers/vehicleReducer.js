export const CHOOSE_VEHICHLE = 'CHOOSE_VEHICHLE'
export const SET_COLOR = 'SET_COLOR'
export const SET_ENGINE = 'SET_ENGINE'
export const SET_INTERIOR = 'SET_INTERIOR'
export const REMOVE_INTERIOR = 'REMOVE_INTERIOR'
export const SET_EXTERIOR = 'SET_EXTERIOR'
export const REMOVE_EXTERIOR = 'REMOVE_EXTERIOR'

export default (state = {}, action) => {
  switch (action.type) {
    case CHOOSE_VEHICHLE:
      return {
        ...state,
        vehicleChosen: action.payload,
        colorChosen: '',
        engineChosen: '',
        interiorOpts: [],
        exteriorOpts: [],
        totalPrice: action.payload.price
      }
    case SET_COLOR: 
      return {
        ...state,
        colorChosen: action.payload
      }
    case SET_ENGINE: 
      return {
        ...state,
        engineChosen: action.payload,
        totalPrice: state.totalPrice + action.payload.price
      }
    case SET_INTERIOR: 
      return {
        ...state,
        interiorOpts: [...state.interiorOpts, action.payload],
        totalPrice: state.totalPrice + action.payload.price
      }
    case REMOVE_INTERIOR: 
      return {
        ...state,
        interiorOpts: state.interiorOpts.filter(opt => opt.id !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.price
      }
    case SET_EXTERIOR: 
      return {
        ...state,
        exteriorOpts: [...state.exteriorOpts, action.payload],
        totalPrice: state.totalPrice + action.payload.price
      }
    case REMOVE_EXTERIOR: 
      return {
        ...state,
        exteriorOpts: state.exteriorOpts.filter(opt => opt.id !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.price
      }
    default:
      return state
  }
}


