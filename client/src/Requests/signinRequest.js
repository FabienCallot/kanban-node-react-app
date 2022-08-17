import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'http://localhost:3001',
});

export async function signinRequest(
  firstname,
  lastname,
  email,
  password,
  passwordConfirm
) {
  try {
    const response = await apiAxios.post('/signin', {
      firstname,
      lastname,
      email,
      password,
      passwordConfirm,
    });

    return response;
  } catch (err) {
    return err.response;
  }
}
