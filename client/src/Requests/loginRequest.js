import apiAxios from './index';

export async function loginRequest(event, email, password) {
  event.preventDefault();

  try {
    const response = await apiAxios.post('auth/login', {
      email,
      password,
    });

    return response;
  } catch (err) {
    return err.response;
  }
}
