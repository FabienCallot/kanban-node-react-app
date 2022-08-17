import apiAxios from './index';

export default async function signInRequest(
  firstname,
  lastname,
  email,
  password,
  passwordConfirm
) {
  console.log(firstname, lastname, email, password, passwordConfirm);
  try {
    const response = await apiAxios.post('auth/signin', {
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
