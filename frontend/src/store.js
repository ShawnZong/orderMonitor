import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { requestReducer } from './reducers/requestReducer'
import { notificationReducer } from './reducers/notificationReducer'
import { reducer as burgerMenu } from 'redux-burger-menu'

const reducer = combineReducers({
  notification: notificationReducer,
  requests: requestReducer,
  burgerMenu,
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
