import {
  queryCurrent,
} from '@/services/userInfoAPI';
import { message } from 'antd';

export default {
  namespace: 'userInfo',

  state: {
    currentUser: {},
  },
  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      if (response.Success === false) {
        yield put({
          type: 'saveCurrentUser',
          payload: {},
        });
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
  },
};
