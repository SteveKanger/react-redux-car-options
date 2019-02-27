import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import RootReducer from './modules/reducer'
import { loadState, saveState } from './localStorage';

export const history = createHistory()

const storageState = loadState()
const initialState = storageState ? storageState : {
  vehicleChosen: '',
  colorChosen: '',
  engineChosen: '',
  interiorOpts: [],
  exteriorOpts: [],
  totalPrice: ''
}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store =  createStore(
  connectRouter(history)(RootReducer),
  initialState,
  composedEnhancers
)

store.subscribe(() => {
  saveState(store.getState());
})

export default store
