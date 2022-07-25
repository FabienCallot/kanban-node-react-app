import React from 'react';
import Task from './Task';

const List = () => {
  return (
    <div className="bg-[#262626] w-[250px] m-4 p-2 rounded-lg">
      <h3 className="p-2 text-center font-akaya mb-2 text-xl">List Name</h3>
      <div className="list-tasks">
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default List;
