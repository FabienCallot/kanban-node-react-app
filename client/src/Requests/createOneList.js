import apiAxios from '.';

export async function createOneList(event, name, userId) {
  event.preventDefault();
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
