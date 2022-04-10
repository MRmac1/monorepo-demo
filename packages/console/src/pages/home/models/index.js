import console from 'gateway/console'

const homeModel = {
  namespace: "home",
  state: {
    overview: {
      datasetNum: 0,
      projectNum: 0,
      modelNum: 0,
      deploymentNum: 0,
    }
  },
  effects: {
    *getOverview({}, {call, put}) {
      const { data: overviewInfo } = yield call(console.getOverviews, {})
      yield put({ type: 'setState', payload: {attr: 'overview', value: overviewInfo} })
    }
  },
  reducers: {
    setState(state, action) {
      const { attr, value } = action.payload
      return {...state, [attr]: value}
    }
  },
  subscriptions: {}
}

export default homeModel
