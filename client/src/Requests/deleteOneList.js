export async function deleteOneList  (e, id)  {
  try {
    const response = await fetch(
      `https://kanban-node-react-app.herokuapp.com/lists/${id}`,
      {
        method: 'DELETE',
      }
    );

    if (response.status !== 204) {
      const error = await response.json();
      throw error;
    }
  } catch (error) {
    alert('Impossible de supprimer la liste.');
    console.error(error);
  }
};

export default deleteOneList;