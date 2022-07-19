import apiAxios from './index';

export async function getAllCards(setData) {
  const response = await apiAxios.get('cards');
  console.log(response);
  return setData(response.data)
}

