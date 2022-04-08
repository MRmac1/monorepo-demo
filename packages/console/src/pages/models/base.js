import { console } from 'gateway'

const baseModel = {
  namespace: "base",
  state: {
    userName: '',
    userGender: '',
    userAge: 0
  },
  effects: {
    *getAccount({}, {call, put}) {
      const accountInfo = yield call(console.getAccount, {})
      yield put({ type: 'setState', payload: {attr: 'overview', value: accountInfo} })
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

export default baseModel
