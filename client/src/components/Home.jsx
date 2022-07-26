import { React, useState, useEffect } from 'react';
import List from './List';
import { getAllLists } from '../Requests/getAllLists';
import Modal from './Modal';

const Home = () => {
  const [listsData, setListsData] = useState();
  const [showModal, setShowModal] = useState(false);

  /* A hook that is called after every render. It is used to perform side effects. */
  useEffect(() => {
    !showModal && getAllLists(setListsData);
  }, [showModal]);

  return (
    <div className="home p-4 pt-20">
      <div className="home-header flex ">
        <h2 className="text-3xl mt-20 mb-10">RoadMap</h2>
        <Modal
          id="1"
          title={'Create new list'}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>

      <div className="home-lists flex items-start flex-wrap">
        {/* /* Checking if listsData is true, if it is true it will sort the data by id and map over it to
        display all the lists. */}
        {!listsData
          ? 'loading'
          : listsData
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((list) => (
                <List
                  key={list.id}
                  listName={list.name}
                  listId={list.id}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              ))}
      </div>
    </div>
  );
};

export default Home;
