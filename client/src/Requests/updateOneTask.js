import apiAxios from '.';

export async function updateOneTask(id, description, color) {
  const filter = () => {
    let result = '';
    if (color != null) {
      result = color;
    } else {
      result = '#6b7280';
    }
    return result;
  };
  const colorFiltered = filter();

  const data = new FormData();

  data.append('description', description);
  data.append('color', colorFiltered);

  try {
    const response = await apiAxios.patch(`cards/${id}`, {
      description: description,
      color: colorFiltered,
    });

    return response;
  } catch (err) {
    return console.log(err.response);
  }
}
