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
    dispatch({ type: 'PART_TEXT_FILTER', filter: filter })
  }
}

export const fullTextFilter = (filter) => {
  return async (dispatch) => {
    dispatch({ type: 'FULL_TEXT_FILTER', filter: filter })
  }
}

export const requestReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_REQUEST':
      // console.log('hi')
      return action.requests
    case 'ADD_REQUEST':
      return state.concat(action.newRequest)
    case 'PART_TEXT_FILTER':
      return state.filter((request) =>
        request[action.filter.tag].toLowerCase().includes(action.filter.text),
      )
    case 'FULL_TEXT_FILTER':
      return state.filter((request) =>
        request[action.filter.tag].toLowerCase().includes(action.filter.text),
      )
    default:
      return state
  }
}
