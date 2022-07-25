import React from 'react';
import List from './List';

const Home = () => {
  return (
    <div className="home-container p-8">
      <h2 className="text-3xl mt-20 mb-10">RoadMap</h2>
      <div className="home-lists flex">
        <List />
        <List />
    </div>
  );
};

export default Home;
