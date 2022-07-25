import React from 'react';

const Task = ({ name }) => {
  return (
    <div className="bg-[#C340A1] mx-auto my-3 rounded text-center">
      <p className="text-just leading-10">{name}</p>
    </div>
  );
};

export default Task;
