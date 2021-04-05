import axios from 'axios'

const baseURL = '/requests'

const getAll = async () => {
  const response = await axios.get(baseURL)
  // console.log(response)
  return response.data.data
}

const postNew = async (newobj) => {
  const response = await axios.post(baseURL, newobj)

  console.log('response:\n', response)
  return response.data.message
}

export default { getAll, postNew }
