
export async function createOneList(event, name) {
  event.preventDefault();
  const data = new FormData();
  data.append('name', name);

  const response = await fetch(
    'https://kanban-node-react-app.herokuapp.com/lists',
    {
      method: 'POST',
      body: data,
    }
  );

  const newList = await response.json();
  console.log(newList);
  return;
}
