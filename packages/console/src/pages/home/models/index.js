import services from 'gateway'

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
      console.log('getOverview services', services);
      const overviewInfo = yield call(services.console.getOverviews, {})
      console.log('overviewInfo', overviewInfo);
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
