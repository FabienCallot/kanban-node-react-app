import React from 'react';
import List from './List';

const Home = () => {
  return (
    <div className="home-container p-8">
      <div className=" p-4 ">
        <h2 className="text-3xl mt-20 mb-10">RoadMap</h2>
        <div className="home-lists">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
