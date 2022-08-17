import React, { useState } from 'react';
import { loginRequest } from '../Requests/loginRequest';
import Button from './Button';
import { setBearerToken } from '../Requests/index';
import Spinner from './Spinner';
import signInRequest from '../Requests/signInRequest';

const Auth = ({ handleSetIsConnected, handleSetUserData }) => {
  const [logIn, SetLogIn] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [id, setId] = useState(0);
  const [lastNameValue, SetLastNameValue] = useState('');
  const [firstNameValue, SetFirstNameValue] = useState('');
  const [emailValue, SetEmailValue] = useState('');
  const [passwordValue, SetPasswordValue] = useState('');
  const [confirmPasswordValue, SetConfirmPasswordValue] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [errorMessage, SetErrorMessage] = useState('');

  const handleLastName = (event) => {
    SetLastNameValue(event.target.value);
  };
  const handleFirstName = (event) => {
    SetFirstNameValue(event.target.value);
  };
  const handleEmail = (event) => {
    SetEmailValue(event.target.value);
  };
  const handlePassword = (event) => {
    SetPasswordValue(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    SetConfirmPasswordValue(event.target.value);
  };
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  const handleSubmitSignIn = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await signInRequest(
      firstNameValue,
      lastNameValue,
      emailValue,
      passwordValue,
      confirmPasswordValue
    );

    if (response.status !== 200) {
      SetErrorMessage(response.data.error);
      console.log(errorMessage);
      setIsLoading(false);
    } else if (response.status === 200) {
      SetErrorMessage(false);
      SetFirstNameValue('');
      SetLastNameValue('');
      SetEmailValue('');
      SetPasswordValue('');
      confirmPasswordValue('');
      setIsLoading(false);

      //SetSuccesMessage(true);
      /* It's a function that redirects the user to the login page after 1.5 seconds. */
      // setTimeout(() => {
      //   navigate('/login');
      // }, 1500);
    }
  };

  const handleSubmitLogIn = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await loginRequest(event, emailValue, passwordValue);

    if (response.status !== 200) {
      SetEmailValue('');
      SetPasswordValue('');
      setIsLoading(false);
      alert('Error login');
    } else if (response.status === 200) {
      handleSetIsConnected(true);
      setBearerToken(
        response.data.token,
        JSON.stringify(response.data.newUser)
      );
      handleSetUserData(response.data.newUser);
      SetPasswordValue('');
      handleSetIsConnected(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      {!signIn && !logIn ? (
        <div className=" w-[100vw] h-[100vh] bg-black justify-center items-center flex">
          <div className="mt-20 sm:mt-0 w-[80%] sm:w-[50%] lg:w-[40%] border b-white rounded">
            <div className="px-4 py-5 bg-[#262626] text-center text-2xl border-b border-solid border-slate-200 rounded-t-md">
              <h3>Authentication</h3>
            </div>

            <div className="px-4 py-5 bg-[#262626] text-center text-2xl rounded-t-md">
              <Button
                className="p-2 border b-white rounded lg:hover:bg-gray-600 duration-200"
                text={'Sign In'}
                clickEvent={() => {
                  setSignIn(true);
                  setId(1);
                }}
              />
              <Button
                className="ml-8 p-2 border b-white rounded lg:hover:bg-gray-600 duration-200"
                text={'Log in'}
                clickEvent={() => {
                  SetLogIn(true);
                  setId(2);
                }}
              />
            </div>
          </div>
        </div>
      ) : null}

      {logIn || signIn ? (
        <div
          className={`id=${id} w-[100vw] h-[100vh] bg-black justify-center items-center flex`}
        >
          <div className="mt-20 sm:mt-0 w-[80%] sm:w-[50%] lg:w-[40%]">
            <div className="px-4 py-5 bg-[#262626] text-center text-2xl border-b border-solid border-slate-200 rounded-t-md">
              {id === 1 ? 'SIGN IN' : 'Log in'}
            </div>

            <form
              action="auth/login"
              onSubmit={id === 1 ? handleSubmitSignIn : handleSubmitLogIn}
              method="POST"
            >
              <div className="px-4 py-5 bg-[#262626] sm:p-6">
                <div className="grid grid-cols-6 gap-4">
                  {id === 1 ? (
                    <>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-lg font-semibold "
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          value={firstNameValue}
                          onChange={handleFirstName}
                          autoComplete="given-name"
                          className="mt-1 min-h-[2rem] text-black font-semibold focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-lg font-semibold "
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          value={lastNameValue}
                          onChange={handleLastName}
                          autoComplete="family-name"
                          className="mt-1 min-h-[2rem]  text-black font-semibold focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </>
                  ) : null}

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-lg font-semibold "
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      onChange={handleEmail}
                      value={emailValue}
                      autoComplete="email"
                      className="mt-1 min-h-[2rem] text-black font-semibold focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div
                    className={
                      id === 1
                        ? 'col-span-6 sm:col-span-3'
                        : 'col-span-6 sm:col-span-6'
                    }
                  >
                    <label
                      htmlFor="password"
                      className="block text-lg font-semibold "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handlePassword}
                      value={passwordValue}
                      autoComplete="password"
                      className="mt-1 min-h-[2rem] text-black font-semibold focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  {id === 1 ? (
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="confirm-password"
                        className="block text-lg font-semibold "
                      >
                        Confirm password
                      </label>
                      <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={handleConfirmPassword}
                        value={confirmPasswordValue}
                        autoComplete="confirm-password"
                        className="mt-1 min-h-[2rem] text-black font-semibold focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="px-4 py-3 bg-[#262626] text-right sm:px-6 rounded-b-md">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-n font-semibold rounded-md bg-emerald-500 lg:hover:transform lg:hover:scale-125 lg:transition lg:duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {!loading && id === 1
                    ? 'Create'
                    : !loading && id === 2
                    ? 'Connect'
                    : loading && (
                        <Spinner classNameSpinner=" block mr-auto ml-auto w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" />
                      )}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Auth;
