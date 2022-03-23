import axios from 'axios'

const baseURL = process.env.BACKEND_URL

const getAll = async () => {
  const response = await axios.get(baseURL)
  // console.log(response)
  return response.data.data
}

const postNew = async (newobj) => {
  const response = await axios.post(baseURL, newobj)

  // console.log('response:\n', response)
  return response.data.message
}

const filter = async (tag, text) => {
  const response = await axios.get(baseURL, { params: { tag, text } })
  return response.data.data
}

const selectPage = async (page) => {
  const response = await axios.get(baseURL, { params: { page } })
  return response.data.data
}
export default { getAll, postNew, filter, selectPage }
