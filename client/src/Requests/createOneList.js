import apiAxios from '.';

export async function createOneList(event, name) {
  event.preventDefault();
  try {
    const response = await apiAxios.post('lists', {
      name,
      user_id: 1,
    });

    return response;
  } catch (err) {
    return console.log(err.response);
  }
}
