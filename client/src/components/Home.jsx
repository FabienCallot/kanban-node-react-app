import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import Button from './Button';
import List from './List';

const Home = () => {
  return (
    <div className="home p-8">
      <div className="home-header flex items-baseline">
        <h2 className="text-3xl mt-20 mb-10">RoadMap</h2>
        <Button
          className="list-header-button mt-20 mb-10 ml-4"
          text={<BsPlusLg className="mx-auto" />}
          clickEvent={() => {
            return;
          }}
        />
      </div>

      <div className="home-lists flex">
        <List />
        <List />
      </div>
    </div>
  );
};

export default Home;
