import { queryProjList } from '@/services/proj';

// import Prom from '@/utils/resPromise';
export default {
  namespace: 'proj',

  state: {
    currentProj: '',
    projs: { list: [], total: 0 },
  },

  effects: {
    *fetchProjList({ payload }, { call, put }) {
      const res = yield call(queryProjList, payload);
      yield put({
        type: 'saveProjs',
        payload: res,
      });
      return res;
      //  return Prom(res);
    },
  },

  reducers: {
    setProj(state, { payload }) {
      return {
        ...state,
        currentProj: payload,
      };
    },
    saveProjs(state, { payload }) {
      return {
        ...state,
        projs: payload || { list: [], total: 0 },
      };
    },
  },
};
