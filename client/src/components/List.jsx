import { React, useState, useEffect } from 'react';
import { getAllTasksByListId } from '../Requests/getAllTasksByListId';
import Task from './Task';
import Modal from './Modal';

const List = ({ listId, listName, setRefreshList }) => {
  const [tasksData, setTasksData] = useState(null);
  const [showModalCreateTask, setShowModalCreateTask] = useState(false);
  const [showModalEditList, setShowModalEditList] = useState(false);
  const [showModalEditTask, setShowModalEditTask] = useState(false);
  const [refreshTask, setRefreshTask] = useState(false);

  useEffect(() => {
    !showModalCreateTask && getAllTasksByListId(setTasksData, listId);

    refreshTask && getAllTasksByListId(setTasksData, listId);
    refreshTask && setRefreshList(false);
  }, [showModalCreateTask, listId, refreshTask, setRefreshList]);

  return (
    <div
      className={`${listId} bg-[#262626] sm:w-[300px] sm:max-w-[300px] w-[80%] max-w-[250px] mx-auto my-4 p-4 rounded-lg h-auto`}
    >
      <div className="list-header flex justify-between items-center">
        <>
          <Modal
            id={2}
            classNameButton=" mt-0 mb-0 ml-0 border rounded w-8 h-8 hover:bg-[#373737] hover:border-none hover:scale-125 hover:rotate-90 transition duration-500 hover:duration-1500"
            title={'Create new task'}
            listId={listId}
            showModal={showModalCreateTask}
            setShowModal={setShowModalCreateTask}
          />
        </>
        <h3 className="p-2 font-akaya mb-2 text-xl">{listName}</h3>
        <Modal
          id={3}
          classNameButton={`${listId} edit-button`}
          title={'Edit list'}
          listId={listId}
          showModal={showModalEditList}
          setShowModal={setShowModalEditList}
          setRefreshList={setRefreshList}
        />
      </div>
      <div className="list-tasks">
        {tasksData
          ? tasksData
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((task) => (
                <Task
                  key={task.id}
                  name={task.description}
                  idModal={4}
                  classNameButtonModal={`${listId} edit-button`}
                  titleModal={'Edit list'}
                  listId={listId}
                  showModal={showModalEditTask}
                  setShowModal={setShowModalEditTask}
                  taskId={task.id}
                  setRefreshTask={setRefreshTask}
                />
              ))
          : null}
      </div>
    </div>
  );
};

export default List;
