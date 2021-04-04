import axios from 'axios'

const baseURL = '/requests'

const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

const postNew = async (newobj) => {
  const response = await axios.post(baseURL, newobj)
  return response.data
}

export default { getAll, postNew }
