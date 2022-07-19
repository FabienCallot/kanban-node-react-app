import apiAxios from './index';

export async function getOnelist(id) {
  const response = await apiAxios.get(`lists/${id}`);
  return response.data
}

