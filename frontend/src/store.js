import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { requestReducer } from './reducers/requestReducer'
import { notificationReducer } from './reducers/notificationReducer'

const reducer = combineReducers({
  notification: notificationReducer,
  requests: requestReducer,
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
