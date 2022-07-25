import { React, useState, useEffect } from 'react';
import { getAllTasksByListId } from '../Requests/getAllTasksByListId';
import Button from './Button';
import Task from './Task';
import { BsPlusLg } from 'react-icons/bs';

const List = ({ listId, listName }) => {
  const [tasksData, setTasksData] = useState(null);

  useEffect(() => {
    getAllTasksByListId(setTasksData, listId);
  }, []);
  return (
    <div
      className={`${listId} bg-[#262626] w-[250px] min-w-[250px] m-4 p-4 rounded-lg h-auto`}
    >
      <div className="list-header flex justify-between items-center	">
        <h3 className="p-2 font-akaya mb-2 text-xl">{listName}</h3>
        <Button
          className="list-header-button mb-1"
          text={<BsPlusLg className="mx-auto" />}
          clickEvent={() => {
            return;
          }}
        />
      </div>
      <div className="list-tasks">
        {tasksData
          ? tasksData.map((task) => (
              <Task key={task.id} name={task.description} />
            ))
          : null}
      </div>
    </div>
  );
};

export default List;
