import axios from 'axios';

export default async function signInRequest(
  firstname,
  lastname,
  email,
  password,
  passwordConfirm
) {
  try {
    const response = await axios.post('auth/signin', {
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
