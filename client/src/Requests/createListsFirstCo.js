import apiAxios from '.';

export async function createListsFirstCo(name, userId) {
  try {
    await apiAxios.post('lists', {
      name,
      user_id: userId,
    });

    return;
  } catch (err) {
    return;
  }
}
