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
    const response = await fetch(
      `https://kanban-node-react-app.herokuapp.com/cards/${id}`,
      {
        method: 'PATCH',
        body: data,
      }
    );

    if (response.status !== 200) {
      const error = await response.json();
      throw error;
    }
  } catch (error) {
    alert('Impossible de modifier la card.');
    console.error(error);
  }
}
