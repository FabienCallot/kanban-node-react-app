import apiAxios from './index';

export async function getAllLists(setData) {
  const response = await apiAxios.get('lists');
  console.log(response);
  return setData(response.data)
}

