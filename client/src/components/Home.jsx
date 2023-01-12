import * as React from "react";
import { useState, useEffect } from "react";
import List from "./List";
import getAllLists from "../Requests/getAllLists";
import Modal from "./Modal";
import Spinner from "./Spinner";
import { DragDropContext } from "react-beautiful-dnd";

const Home = ({ userId }) => {
  const [listsData, setListsData] = useState();
  const [refreshList, setRefreshList] = useState(false);

  const onDragEnd = () => {
    console.log("dragged !");
  };

  useEffect(() => {
    getAllLists(setListsData);
    if (refreshList) {
      getAllLists(setListsData);
      setRefreshList(false);
    } else {
      return;
    }
  }, [refreshList, userId]);

  return (
    <div className="home p-4 pt-20">
      <div className="home-header flex-col ">
        <h2 className="text-4xl mt-20 mb-10 text-center">RoadMap</h2>
        <div className="flex my-16 items-center">
          <p className="text-3xl">New List</p>
          <Modal
            classNameButton=" list-header-button ml-2 border rounded w-8 h-8 lg:hover:bg-[#373737] lg:hover:border-none lg:hover:scale-125 lg:hover:rotate-90 lg:transition lg:duration-500 lg:hover:duration-1500"
            modalId={1}
            title={"Create new list"}
            setRefreshList={setRefreshList}
            userId={userId}
          />
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          {listsData ? (
            <div className="home-lists flex items-start flex-wrap justify-between">
              {listsData
                ? listsData
                    .sort((a, b) => (a.id > b.id ? 1 : -1))
                    .map(
                      (list) =>
                        list.user_id === userId && (
                          <List
                            key={list.id}
                            listName={list.name}
                            listId={list.id}
                            setRefreshList={setRefreshList}
                          />
                        )
                    )
                : null}
            </div>
          ) : (
            <>
              <Spinner classNameSpinner=" block mr-auto ml-auto w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" />
              <p className="text-center">
                The first load may take some time, so be patient :)
              </p>
            </>
          )}
        </div>
      </DragDropContext>
    </div>
  );
};

export default React.memo(Home);
