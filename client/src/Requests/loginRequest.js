import apiAxios from './index';

export async function loginRequest(email, password) {
  console.log(email);
  try {
    const response = await apiAxios.post('/auth/login', {
      email,
      password,
    });

    return response;
  } catch (err) {
    return err.response;
  }
}
