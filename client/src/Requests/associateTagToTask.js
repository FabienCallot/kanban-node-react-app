export async function associateTagToTask(event, cardId, tagId) {
  event.preventDefault();
  const data = new FormData();
  data.append('tag_id', tagId);

  const response = await fetch(
    `https://kanban-node-react-app.herokuapp.com/cards/${cardId}/tag`,
    {
      method: 'POST',
      body: data,
    }
  );
  return response;
}
