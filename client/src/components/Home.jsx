import { React, useState, useEffect } from 'react';
import List from './List';
import { getAllLists } from '../Requests/getAllLists';
import Modal from './Modal';

const Home = () => {
  const [listsData, setListsData] = useState();
  const [showModalList, setShowModalList] = useState(false);
  const [refreshList, setRefreshList] = useState(false);

  useEffect(() => {
    !showModalList && getAllLists(setListsData);
    refreshList && getAllLists(setListsData);
    refreshList && setRefreshList(false);
  }, [showModalList, refreshList]);

  return (
    <div className="home p-4 pt-20">
      <div className="home-header flex ">
        <h2 className="text-3xl mt-20 mb-10">RoadMap</h2>
        <Modal
          classNameButton="list-header-button mt-20 mb-10 ml-4 border rounded w-8 h-8 hover:bg-[#373737] hover:border-none hover:scale-125 hover:rotate-90 transition duration-500 hover:duration-1500"
          id={1}
          title={'Create new list'}
          showModal={showModalList}
          setShowModal={setShowModalList}
        />
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
