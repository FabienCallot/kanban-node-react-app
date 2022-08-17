import { React, useState, useEffect } from 'react';
import { getAllTasksByListId } from '../Requests/getAllTasksByListId';
import { getAllTags } from '../Requests/getAllTags';
import Task from './Task';
import Modal from './Modal';
import Spinner from './Spinner';

const List = ({ listId, listName, setRefreshList }) => {
  const [tasksData, setTasksData] = useState(null);
  const [refreshTask, setRefreshTask] = useState(false);
  const [tagsData, setTagsData] = useState(null);
  const [selectedTag, setSelectedTag] = useState(0);

  useEffect(() => {
    getAllTags(setTagsData);
    getAllTasksByListId(setTasksData, listId);
    if (refreshTask) {
      getAllTasksByListId(setTasksData, listId);
      setRefreshTask(false);
    } else {
      return;
    }
  }, [listId, refreshTask, setRefreshList]);
  return (
    <div
      className={`${listId} bg-[#262626] sm:w-[300px] sm:max-w-[300px] w-[80%] max-w-[250px] mx-auto my-4 p-4 rounded-lg h-auto`}
    >
      <div className="list-header flex justify-between items-center">
        <div className="test"></div>
        <h3 className="p-2 font-akaya mb-2 text-2xl underline underline-offset-4">
          {listName}
        </h3>
        <Modal
          modalId={3}
          classNameButton={`${listId} edit-button`}
          title={'Edit list'}
          currentListName={listName}
          listId={listId}
          setRefreshList={setRefreshList}
        />
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-xl mr-4 mb-4">New Task</p>
        <Modal
          modalId={2}
          classNameButton=" mt-0 mb-0 ml-0 border rounded w-8 h-8 lg:hover:bg-[#373737] lg:hover:border-none lg:hover:scale-125 lg:hover:rotate-90 lg:transition lg:duration-500 lg:hover:duration-1500"
          title={'Create new task'}
          listId={listId}
          setRefreshTask={setRefreshTask}
          tagsData={tagsData}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
      </div>
      <div className="list-tasks">
        {tasksData ? (
          tasksData
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((task) => (
              <Task
                //for task
                key={task.id}
                name={task.description}
                taskId={task.id}
                bgColor={task.color}
                //modal in task
                listId={listId}
                titleModal={'Edit list'}
                setRefreshTask={setRefreshTask}
                tagsData={tagsData}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
              />
            ))
        ) : (
          <Spinner classNameSpinner=" block mr-auto ml-auto w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" />
        )}
      </div>
    </div>
  );
};

export default List;
