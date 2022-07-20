export async function deleteOneCard  (e, id)  {
  try {
    const response = await fetch(
      `https://kanban-node-react-app.herokuapp.com/cards/${id}`,
      {
        method: 'DELETE',
      }
    );
    if (response.status !== 204) {
      const error = await response.json();
      throw error;
    }
  } catch (error) {
    alert('Impossible de supprimer la card.');
    console.error(error);
  }
};