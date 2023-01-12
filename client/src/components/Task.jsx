import { React } from "react";
import Modal from "./Modal";
import { Draggable } from "react-beautiful-dnd";

const Task = ({
  index,
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
    <Draggable draggableId={taskId} index={index}>
      {(provided) => (
        <div
          id={taskId}
          style={{
            backgroundColor: `${bgColor}`,
          }}
          className={` bg-gray-500 flex justify-between px-4 py-1 mx-auto my-3 rounded text-center`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p className="text-just leading-10">{name}</p>
          <Modal
            modalId={4}
            classNameButtonModal={`${taskId} edit-button`}
            title={"Edit task"}
            listId={listId}
            taskId={taskId}
            setRefreshTask={setRefreshTask}
            tagsData={tagsData}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            currentTaskName={name && name}
            currentTaskColor={bgColor && bgColor}
          />
        </div>
      )}
    </Draggable>
  );
};
export default Task;
