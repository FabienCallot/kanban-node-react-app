export async function loginRequest(email, password) {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);

  const response = await fetch(
    'https://kanban-node-react-app.herokuapp.com/auth/login',
    {
      method: 'POST',
      body: data,
    }
  );

  return response;
}
