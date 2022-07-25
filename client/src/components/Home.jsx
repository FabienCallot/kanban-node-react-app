import { React, useState, useEffect } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import Button from './Button';
import List from './List';
import { getAllLists } from '../Requests/getAllLists';

const Home = () => {
  // Lists states
  const [listsData, setListsData] = useState();

  useEffect(() => {
    getAllLists(setListsData);
  }, []);

  return (
    <div className="home p-4 pt-20 h-[1000px]">
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
