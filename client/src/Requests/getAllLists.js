import apiAxios from './index';

export async function getAllLists(setData) {
  const response = await apiAxios.get('lists');
  return setData(response.data);
}
