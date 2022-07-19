import apiAxios from './index';

export async function getAllCards(setData) {
  const response = await apiAxios.get('cards');
  return setData(response.data)
}

