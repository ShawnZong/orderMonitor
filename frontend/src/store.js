import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { requestReducer } from './reducers/requestReducer'

export const store = createStore(
  requestReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
