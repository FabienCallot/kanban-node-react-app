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
  tagColor,
  setTagColor,
}) => {
  //console.log(tagColor);
  return (
    <div
      id={taskId}
      className={
        !tagColor
          ? `bg-gray-500 flex justify-between px-4 py-1 mx-auto my-3 rounded text-center`
          : `bg-[${null}] flex justify-between px-4 py-1 mx-auto my-3 rounded text-center`
      }
    >
      <p className="text-just leading-10">{name}</p>
      <Modal
        id={4}
        classNameButtonModal={`${taskId} edit-button`}
        title={'Edit task'}
        listId={listId}
        taskId={taskId}
        setRefreshTask={setRefreshTask}
        tagsData={tagsData}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        tagColor={tagColor}
        setTagColor={setTagColor}
      />
    </div>
  );
};

export default Task;
