import apiAxios from './index';

export async function getAllTags(setData) {
  const response = await apiAxios.get('tags');
  return setData(response.data)
}

