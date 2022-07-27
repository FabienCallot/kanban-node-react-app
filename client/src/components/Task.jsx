import { React } from 'react';
import Modal from './Modal';

const Task = ({
  name,
  idModal,
  classNameButtonModal,
  titleModal,
  showModal,
  setShowModal,
  taskId,
  setRefreshTask,
}) => {
  return (
    <div className="bg-[#C340A1] flex justify-between px-4 py-1 mx-auto my-3 rounded text-center">
      <p className="text-just leading-10">{name}</p>
      <Modal
        id={idModal}
        classNameButtonModal={`${taskId} edit-button`}
        title={'Edit task'}
        taskId={taskId}
        showModal={showModal}
        setShowModal={setShowModal}
        setRefreshTask={setRefreshTask}
      />
    </div>
  );
};

export default Task;
