import apiAxios from '.';

export async function updateOneList(id, name) {
  const data = new FormData();
  data.append('name', name);

  try {
    const response = await apiAxios.patch(`lists/${id}`, {
      name: name,
    });

    return response;
  } catch (err) {
    return console.log(err.response);
  }
}
