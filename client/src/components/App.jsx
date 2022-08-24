import React from 'react';
import { useEffect, useState } from 'react';
import Home from './Home';
import Header from './Header';
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

  useEffect(() => {
    currentHeight(setHeight);
    if (localStorage.getItem('user') !== null) {
      const responseLocalUser = JSON.parse(getLocalUser());
      if (responseLocalUser) {
        setIsConnected(true);
        SetUserData(responseLocalUser);
      } else {
        setIsConnected(false);
        SetUserData('');
      }
    }
  }, []);
  const userId = userData.id;

  const firstCoList = async () => {
    await createListsFirstCo('Backlog', userId);
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
          <Header
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
          <Header
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
