export async function loginRequest(email, password) {
  const login = 'https://kanban-node-react-app.herokuapp.com/auth/login';

  await fetch(login, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // code here //
      if (data.error) {
        alert('Error Password or Username'); /*displays error message*/
      } else {
        window.open(
          'target.html'
        ); /*opens the target page while Id & password matches*/
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
