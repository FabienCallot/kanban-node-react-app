import { React, useState, useEffect } from 'react';
import List from './List';
import { getAllLists } from '../Requests/getAllLists';
import Modal from './Modal';

const Home = () => {
  const [listsData, setListsData] = useState();
  const [refreshList, setRefreshList] = useState(false);

  useEffect(() => {
    getAllLists(setListsData);
    refreshList && getAllLists(setListsData);
    if (refreshList) {
      getAllLists(setListsData);
      setRefreshList(false);
    } else {
      return;
    }
  }, [refreshList]);

  return (
    <div className="home p-4 pt-20">
      <div className="home-header flex-col ">
        <h2 className="text-4xl mt-20 mb-10 text-center">RoadMap</h2>
        <div className="flex my-16 items-center">
          <p className="text-3xl">New List</p>
          <Modal
            classNameButton=" list-header-button ml-2 border rounded w-8 h-8 lg:hover:bg-[#373737] lg:hover:border-none lg:hover:scale-125 lg:hover:rotate-90 lg:transition lg:duration-500 lg:hover:duration-1500"
            modalId={1}
            title={'Create new list'}
            setRefreshList={setRefreshList}
          />
        </div>
      </div>

      <div className="home-lists flex items-start flex-wrap justify-between">
        {!listsData
          ? 'loading'
          : listsData
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((list) => (
                <List
                  key={list.id}
                  listName={list.name}
                  listId={list.id}
                  setRefreshList={setRefreshList}
                />
              ))}
      </div>
    </div>
  );
};

export default Home;
