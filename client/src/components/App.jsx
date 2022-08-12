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
  const [isConnected, setIsConnected] = useState(false);
  const [userData, SetUserData] = useState([]);

  useEffect(() => {
    currentHeight(setHeight);
    /* It checks if the user is already connected. */
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
  return (
    <div className="text-[#FFFFFF] font-advent">
      {!isConnected ? (
        <Auth
          handleSetIsConnected={setIsConnected}
          handleSetUserData={SetUserData}
        />
      ) : (
        <>
          <Header
            clickEvent={() => {
              scrollToTop();
            }}
          />
          <Home userId={userId} />
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

export default App;
