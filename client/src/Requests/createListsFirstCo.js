import apiAxios from '.';

export async function createListsFirstCo(name, userId) {
  try {
    const response = await apiAxios.post('lists', {
      name,
      user_id: userId,
    });

    return response;
  } catch (err) {
    return;
  }
}
