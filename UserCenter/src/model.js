import queryCurrent from '@/services/userInfoAPI';
import { message } from 'antd';

const defaultState = {
  currentUser: {},
}

export default {
  namespace: 'userInfo',

  state: defaultState,
  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      if (response.Success === false) {
        yield put({
          type: 'saveCurrentUser',
          payload: {},
        });
        message.error(response.Message);
      } else {
        yield put({
          type: 'saveCurrentUser',
          payload: response.Data,
        });
      }
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    clear() {
      return defaultState;
    }
  },
};
