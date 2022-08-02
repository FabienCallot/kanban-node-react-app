import apiAxios from '.';

export async function createOneTask(event, description, id, color) {
  event.preventDefault();

  const data = new FormData();
  data.append('description', description);
  data.append('list_id', id);
  data.append('color', color);

  try {
    const response = await apiAxios.post('cards', {
      description: description,
      list_id: id,
      color: color,
    });

    return response;
  } catch (err) {
    return console.log(err.response);
  }
}
