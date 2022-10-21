import { request } from 'umi';

export async function index() {
  return request('/api/index', {
    method: 'GET',
  }).then((response: { data: string }) => {
    return response.data;
  });
}

export async function greeting(params: { name: string }) {
  return request('/api/greeting', {
    method: 'GET',
    params: { ...params },
  }).then((response: { data: string }) => {
    return response.data;
  });
}
