export async function createOneTask(event, description, id, color) {
  event.preventDefault();
  console.log(`in fetch : ${color}`);

  const data = new FormData();
  data.append('description', description);
  data.append('list_id', id);
  data.append('color', color);

  const response = await fetch(
    `https://kanban-node-react-app.herokuapp.com/cards`,
    {
      method: 'POST',
      body: data,
    }
  );
  return response;
}
