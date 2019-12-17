import mockjs from 'mockjs';

export default {
  'GET /api/projs': mockjs.mock({
    'list|2-100': [{ 'id|+1': 1, name: '@city', 'value|1-100': 50, 'type|0-1': 1 }],
    'total|2-100': 2,
  }),
};
