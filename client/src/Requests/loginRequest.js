import apiAxios from './index';

export async function loginRequest(event, email, password) {
  event.preventDefault();
  try {
    const response = await apiAxios.post('auth/login', {
      email,
      password,
    });
    console.log('iciii', response);
    return response;
  } catch (err) {
    return err.response;
  }
}
