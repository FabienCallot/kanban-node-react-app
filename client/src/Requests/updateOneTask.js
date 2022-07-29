export async function updateOneTask(id, description, color) {
  const data = new FormData();
  data.append('description', description);
  data.append('color', color);

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
