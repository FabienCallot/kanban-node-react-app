import { React } from 'react';
import Modal from './Modal';

const Task = ({
  name,
  taskId,
  setRefreshTask,
  listId,
  tagsData,
  selectedTag,
  setSelectedTag,
  bgColor,
}) => {
  return (
    <div
      id={taskId}
      style={{
        backgroundColor: `${bgColor}`,
      }}
      className={` bg-gray-500 flex justify-between px-4 py-1 mx-auto my-3 rounded text-center`}
    >
      <p className="text-just leading-10">{name}</p>
      <Modal
        modalId={4}
        classNameButtonModal={`${taskId} edit-button`}
        title={'Edit task'}
        listId={listId}
        taskId={taskId}
        setRefreshTask={setRefreshTask}
        tagsData={tagsData}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        currentTaskName={name && name}
      />
    </div>
  );
};

export default Task;
