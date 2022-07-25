import axios from 'axios';
const apiAxios = axios.create({
  baseURL: 'https://kanban-node-react-app.herokuapp.com/',
});

export default apiAxios;
