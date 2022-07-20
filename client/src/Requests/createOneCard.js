
export async function createOneCard(event, description, id) {
  event.preventDefault();
  const data = new FormData();
  data.append('description', description);
  data.append('list_id', id);

  const response = await fetch(
    `https://kanban-node-react-app.herokuapp.com/cards`,
    {
      method: 'POST',
      body: data
    }
  );
  return response;
}
