import { request } from 'umi';

export async function greeting() {
  return request('/api/index', {
    method: 'GET',
  }).then((response: { data: string }) => {
    return response.data;
  });
}
