import requestService from '../services/requests'

export const initRequests = () => {
  return async (dispatch) => {
    const requestsInDB = await requestService.getAll()
    dispatch({ type: 'INIT_REQUEST', requests: requestsInDB })
  }
}

export const addRequest = (newRequest) => {
  return async (dispatch) => {
    dispatch({ type: 'ADD_REQUEST', newRequest: newRequest })
  }
}

export const partTextFilter = (filter) => {
  return async (dispatch) => {
    console.log(filter)
    const requestsInDB = await requestService.select(filter.tag, filter.text)
    console.log('response:\n', requestsInDB)
    dispatch({ type: 'PART_TEXT_FILTER', requests: requestsInDB })
  }
}

export const fullTextFilter = (filter) => {
  return async (dispatch) => {
    console.log(filter)

    const requestsInDB = await requestService.select(filter.tag, filter.text)
    console.log('response:\n', requestsInDB)

    dispatch({ type: 'FULL_TEXT_FILTER', requests: requestsInDB })
  }
}

export const requestReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_REQUEST':
      // console.log('hi')
      // console.log('action:\n', action.requests)
      return action.requests
    case 'ADD_REQUEST':
      return state.concat(action.newRequest)
    case 'PART_TEXT_FILTER':
      return action.requests
    // return state.filter((request) =>
    //   request[action.filter.tag].toLowerCase().includes(action.filter.text),
    // )
    case 'FULL_TEXT_FILTER':
      return action.requests
    // return state.filter((request) =>
    //   request[action.filter.tag].toLowerCase().includes(action.filter.text),
    // )
    default:
      return state
  }
}
