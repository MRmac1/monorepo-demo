import { axios } from 'utils'
import API from '../api/console'

export default {
  getAccount: (params = {}) => axios.get(API.account, params),
  getOverviews: (params = {}) => axios.get(API?.overviews, params),
}
