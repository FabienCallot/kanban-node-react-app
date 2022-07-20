
export async function createOneTag(event, name, color) {
  event.preventDefault();
  const data = new FormData();
  data.append('name', name);
  data.append('color', color);

  const response = await fetch(
    `https://kanban-node-react-app.herokuapp.com/tags`,
    {
      method: 'POST',
      body: data
    }
  );
  return response;
}
