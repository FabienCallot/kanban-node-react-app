import React, { useState } from 'react';

const Auth = (isLogged, setIsLogged) => {
  /* A hook that allows us to use state in a functional component. */
  const [lastNameValue, SetLastNameValue] = useState(''); //recovery a lastname value
  const [firstNameValue, SetFirstNameValue] = useState(''); //recovery a firstname value
  const [emailValue, SetEmailValue] = useState(''); //recovery an email value
  const [passwordValue, SetPasswordValue] = useState(''); //recovery a password value
  const [confirmPasswordValue, SetConfirmPasswordValue] = useState(''); //recovery a password confirm value
  const [errorMessage, SetErrorMessage] = useState(''); //recovery a error message
  const [succesMessage, SetSuccesMessage] = useState(false); //recovery a succes message

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
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await // TODO: make signinRequest
    (lastNameValue,
    firstNameValue,
    emailValue,
    passwordValue,
    confirmPasswordValue);

    if (response.status !== 200) {
      SetErrorMessage(response.data.error);
    }

    if (response.status === 200) {
      SetErrorMessage(false);
      SetLastNameValue('');
      SetFirstNameValue('');
      SetEmailValue('');
      SetPasswordValue('');
      SetSuccesMessage(true);
      setIsLogged(true); // TODO: with setTime out for message "Your account has been created, you will be redirected"
    }
  };
  return (
    <container className="w-[100vw] h-[100vh] bg-black justify-center items-center flex ">
      <div className="mt-20 sm:mt-0 w-[80%]">
        <div className="px-4 py-5 bg-[#262626] text-center text-2xl border-b border-solid border-slate-200 rounded-t-md">
          SIGN IN
        </div>

        <form action="/signin" onSubmit={handleSubmit} method="POST">
          <div className="px-4 py-5 bg-[#262626] sm:p-6">
            <div className="grid grid-cols-6 gap-4">
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
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-lg font-semibold "
                >
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  onChange={handlePassword}
                  value={passwordValue}
                  autoComplete="password"
                  className="mt-1 min-h-[2rem] text-black font-semibold focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="confirm-password"
                  className="block text-lg font-semibold "
                >
                  Confirm password
                </label>
                <input
                  type="text"
                  name="confirm-password"
                  id="confirm-password"
                  onChange={handleConfirmPassword}
                  value={confirmPasswordValue}
                  autoComplete="confirm-password"
                  className="mt-1 min-h-[2rem] text-black font-semibold focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-[#262626] text-right sm:px-6 rounded-b-md">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-emerald-500 lg:hover:transform lg:hover:scale-125 lg:transition lg:duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </container>
  );
};

export default Auth;
