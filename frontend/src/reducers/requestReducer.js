import requestService from '../services/requests'

export const initRequests = () => {
  return async (dispatch) => {
    const requestsInDB = await requestService.getAll()
    dispatch({ type: 'INIT_REQUEST', requests: requestsInDB })
  }
}

export const requestReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_REQUEST':
      // console.log('hi')
      return action.requests
    default:
      return state
  }
}
