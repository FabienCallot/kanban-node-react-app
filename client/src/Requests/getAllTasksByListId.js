import apiAxios from './index';

export async function getAllTasksByListId(setData, id) {
  if (id) {
    const response = await apiAxios.get(`lists/${id}/cards`);
    return setData(response.data);
  } else {
    return;
  }
}
