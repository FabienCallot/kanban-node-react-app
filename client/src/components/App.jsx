/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Home from './Home';
import Header from './Header';
import currentHeight from '../utils/currentHeight';
import Button from './Button';
import { scrollToTop } from '../utils/srollToTop';

function App() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    currentHeight(setHeight);
  }, []);

  return (
    <div className="text-[#FFFFFF] font-advent">
      {height < 20 ? <Header /> : <Header className=" opacity-20" />}
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
