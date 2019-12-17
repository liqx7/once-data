import request from '@/utils/request';

export async function queryProjList() {
  return request('/api/projs');
}
