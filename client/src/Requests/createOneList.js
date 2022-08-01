export async function createOneList(event, name) {
  event.preventDefault();
  const data = new FormData();
  data.append('name', name);
  //TODO: 1 for the moment
  data.append('user_id', 1);

  const response = await fetch(
    'https://kanban-node-react-app.herokuapp.com/lists',
    {
      method: 'POST',
      body: data,
    }
  );

  return response;
}
