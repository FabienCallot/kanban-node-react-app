import axios from 'axios';
const apiAxios = axios.create({
  baseURL: 'https://kanban-node-react-app.herokuapp.com/',
});

export default apiAxios;

export function setBearerToken(token, user) {
  apiAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log(apiAxios.defaults.headers.common.Authorization);
  localStorage.setItem('token', token);
  localStorage.setItem('user', user);
}

export function removeBearerToken() {
  apiAxios.defaults.headers.common.Authorization = undefined;
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

export function getLocalUser() {
  const localToken = localStorage.getItem('token');
  const localUser = localStorage.getItem('user');
  if (localToken) {
    apiAxios.defaults.headers.common.Authorization = `Bearer ${localToken}`;
    return localUser;
  }
  return undefined;
}
