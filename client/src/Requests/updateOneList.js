
export async function updateOneList( id, name) {
  
  const data = new FormData();
  data.append('name', name);

    try {
        const response = await fetch(`https://kanban-node-react-app.herokuapp.com/lists/${id}`, {
            method: 'PATCH',
            body: data
        });

        if (response.status !== 200) {
            const error = await response.json();
            throw error;
        } 
    } catch (error) {
        alert('Impossible de modifier la liste.');
        console.error(error);
    }
}





