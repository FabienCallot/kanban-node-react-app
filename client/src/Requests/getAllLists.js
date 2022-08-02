import apiAxios from './index';

export async function getAllLists(setData) {
  const responses = await apiAxios.get('lists');

  return setData(responses.data);
}
