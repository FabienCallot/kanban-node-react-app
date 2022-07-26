import { React, useState, useEffect } from 'react';
import { getAllTasksByListId } from '../Requests/getAllTasksByListId';
import Task from './Task';
import Modal from './Modal';
import { FaPen } from 'react-icons/fa';
import Button from './Button';

const List = ({ listId, listName }) => {
  const [tasksData, setTasksData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    !showModal && getAllTasksByListId(setTasksData, listId);
  }, [showModal, listId]);

  return (
    <div
      className={`${listId} bg-[#262626] sm:w-[300px] sm:max-w-[300px] w-[80%] max-w-[250px] mx-auto my-4 p-4 rounded-lg h-auto`}
    >
      <div className="list-header flex justify-between items-center">
        <Modal
          id="2"
          classNameButton=" mt-0 mb-0 ml-0 border rounded w-8 h-8 hover:bg-[#373737] hover:border-none hover:scale-125 hover:rotate-90 transition duration-500 hover:duration-1500"
          title={'Create new task'}
          listId={listId}
          showModal={showModal}
          setShowModal={setShowModal}
        />

        {!editOpen ? (
          <>
            <h3 className="p-2 font-akaya mb-2 text-xl">{listName}</h3>
            <Button
              className="edit-button"
              text={<FaPen />}
              clickEvent={setEditOpen}
            />
          </>
        ) : (
          <form action="">
            <label htmlFor="">
              <input type="text" />
            </label>
          </form>
        )}
      </div>
      <div className="list-tasks">
        {tasksData
          ? tasksData
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((task) => <Task key={task.id} name={task.description} />)
          : null}
      </div>
    </div>
  );
};

export default List;
