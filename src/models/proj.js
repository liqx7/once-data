// import {  } from '@/services/';

// import Prom from '@/utils/resPromise';
export default {
  namespace: 'proj',

  state: {
    currentProj: '',
  },

  effects: {},

  reducers: {
    setProj(state, { payload }) {
      return {
        ...state,
        currentProj: payload,
      };
    },
  },
};
