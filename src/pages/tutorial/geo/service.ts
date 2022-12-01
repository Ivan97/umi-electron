import { request } from 'umi';

export async function geoSearch(params: { name: string }) {
  return request('/geo/search', {
    method: 'GET',
    params: {
      ...params,
    },
  }).then((response: { data: { cells: string; center: string; zoom: number } }) => response.data);
}
