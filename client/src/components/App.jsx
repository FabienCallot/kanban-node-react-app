/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Home from './Home';
import Header from './Header';
import currentHeight from '../utils/currentHeight';
import Button from './Button';
import { getLocalUser } from '../Requests/index';
import { scrollToTop } from '../utils/srollToTop';
import Auth from './Auth';

function App() {
  const [height, setHeight] = useState(0);
  const [logged, setIsLogged] = useState(false);
  const [userData, SetUserData] = useState([]);
  useEffect(() => {
    currentHeight(setHeight);

    if (localStorage.getItem('user') !== null) {
      const responseLocalUser = JSON.parse(getLocalUser());
      console.log(responseLocalUser);
      if (responseLocalUser) {
        setIsLogged(true);
        SetUserData(responseLocalUser);
      }
    }
  }, []);

  console.log(logged);

  return (
    <div className="text-[#FFFFFF] font-advent">
      {!logged && (
        <Auth
          logged={logged}
          setIsLogged={setIsLogged}
          setUserData={SetUserData}
        />
      )}
      {height < 20 ? (
        <Header
          clickEvent={() => {
            scrollToTop();
          }}
        />
      ) : (
        <Header
          className=" opacity-20 hover:opacity-100 hover:transition-opacity duration-300"
          clickEvent={() => {
            scrollToTop();
          }}
        />
      )}
      <Home />
      {height > 50 ? (
        <Button
          clickEvent={() => {
            scrollToTop();
          }}
          className="fixed bottom-3 right-2 p-2 border rounded"
          text="&#8679;"
        />
      ) : null}
    </div>
  );
}

export default App;
