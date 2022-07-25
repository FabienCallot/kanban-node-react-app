import { React, useState, useEffect } from 'react';
import List from './List';
import { getAllLists } from '../Requests/getAllLists';
import Modal from './Modal';

const Home = () => {
  // Lists states
  const [listsData, setListsData] = useState();

  useEffect(() => {
    getAllLists(setListsData);
  }, []);

  return (
    <div className="home p-4 pt-20">
      <div className="home-header flex ">
        <h2 className="text-3xl mt-20 mb-10">RoadMap</h2>
        <Modal id="1" title={'Create new list'} />
      </div>

      <div className="home-lists flex items-start flex-wrap">
        {/* map on data for display all lists and pass the list.id prop into List for map on it to display all tasks by ID  */}
        {listsData &&
          listsData
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((list) => (
              <List key={list.id} listName={list.name} listId={list.id} />
            ))}
      </div>
    </div>
  );
};

export default Home;
