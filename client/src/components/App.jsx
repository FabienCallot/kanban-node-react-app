import React from 'react';
import { useEffect, useState } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import currentHeight from '../utils/currentHeight';
import Button from './Button';
import { getLocalUser } from '../Requests/index';
import { scrollToTop } from '../utils/srollToTop';
import Auth from './Auth';
import { createListsFirstCo } from '../Requests/createListsFirstCo';

function App() {
  const [height, setHeight] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [userData, SetUserData] = useState([]);
  const [firstCo, setFirstCo] = useState(false);
  const userId = userData.id;

  useEffect(() => {
    currentHeight(setHeight);
    if (localStorage.getItem('user') !== null) {
      const localUser = JSON.parse(getLocalUser());
      if (localUser) {
        setIsConnected(true);
        SetUserData(localUser);
      } else {
        setIsConnected(false);
        SetUserData('');
      }
    }
  }, []);

  const firstCoList = async () => {
    userData && (await createListsFirstCo('Backlog', userId));
    setTimeout(() => {
      setFirstCo(false);
    }, 5000);
    return;
  };
  firstCo && firstCoList();

  return (
    <div className="text-[#FFFFFF] font-advent">
      {!isConnected ? (
        <>
          <Navbar
            clickEvent={() => {
              scrollToTop();
            }}
          />
          <Auth
            handleSetIsConnected={setIsConnected}
            handleSetUserData={SetUserData}
            handleFirstCo={setFirstCo}
            setFirstCo={setFirstCo}
          />
        </>
      ) : (
        <>
          <Navbar
            clickEvent={() => {
              scrollToTop();
            }}
          />
          <Home userId={userId} firstCo={firstCo} />
        </>
      )}
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

export default React.memo(App);
