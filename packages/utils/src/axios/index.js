import axios from 'axios'

const LoggerRequestInterceptor = async(config) => {
  console.log('LoggerRequestInterceptor', config);
  return config
}

const LoggerResponseInterceptor = async(response) => {
  console.log('LoggerResponseInterceptor', response);
  if (response?.status) {
    return response?.data
  }
  return response
}

axios.interceptors.request.use(LoggerRequestInterceptor)
axios.interceptors.response.use(LoggerResponseInterceptor)

export default axios