import axios from 'axios'

const baseURL = '/requests'

const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

export default { getAll }
