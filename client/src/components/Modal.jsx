import { React, useState, useEffect } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';
import { createOneTask } from '../Requests/createOneTask';
import { createOneList } from '../Requests/createOneList';
import { updateOneTask } from '../Requests/updateOneTask';
import { deleteOneList } from '../Requests/deleteOneList';
import { deleteOneTask } from '../Requests/deleteOneTask';
import { updateOneList } from '../Requests/updateOneList';
import Button from './Button';
import ConfirmModal from './ConfirmModal';
import DropDownMenu from './DropdownMenu';
import { CgProfile } from 'react-icons/cg';
import { removeBearerToken } from '../Requests';

export default function Modal({
  userId,
  classNameButton,
  title,
  modalId,
  listId,
  setRefreshList,
  taskId,
  setRefreshTask,
  tagsData,
  selectedTag,
  setSelectedTag,
  currentTaskName,
  currentTaskColor,
  currentListName,
  handleSetIsdisConnected,
}) {
  const [name, setName] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [deleteList, setDeleteList] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleTagColor = () => {
    const data =
      tagsData &&
      tagsData.map((tag) => {
        const colors = tag.color;
        let result = '';
        if (selectedTag === tag.id) {
          result = colors;
          return result;
        } else {
          return null;
        }
      });
    const removeNull = (data) => {
      const filtered = data.filter((x) => x !== null);
      return filtered.toString();
    };
    const finalResult = data && removeNull(data);
    return finalResult;
  };

  const handleSubmitList = async (event) => {
    const response = await createOneList(event, name, userId);
    response ? setShowModal(false) : console.log('error list re-render');
    setRefreshList(true);
  };

  const handleUpdateListName = async (event, id, newListName) => {
    event.preventDefault();
    const response = updateOneList(
      id,
      newListName ? newListName : currentListName
    );
    response ? setShowModal(false) : console.log('error task re-render');
    setRefreshList(true);
  };
  const handleSubmitTask = async (event, id) => {
    const color = handleTagColor();
    const response = await createOneTask(event, name, id, color);
    response ? setShowModal(false) : console.log('error task re-render');
    setRefreshTask(true);
  };
  const handleUpdateTaskName = (event, id, newTaskName) => {
    event.preventDefault();
    const color = handleTagColor();
    const response = updateOneTask(
      id,
      newTaskName ? newTaskName : currentTaskName,
      color ? color : currentTaskColor
    );
    response ? setShowModal(false) : console.log('error update task re-render');
    setRefreshTask(true);
  };

  const handleLogOut = () => {
    removeBearerToken();
    //FIXME: use state isConnected
    window.location.reload(false);
    setShowModal(false);
  };

  useEffect(
    (e) => {
      const handleDeleteList = async (e, id) => {
        deleteOneList(e, id);
        setShowModal(false);
        setRefreshList(true);
        setDeleteList(false);
      };
      deleteList && handleDeleteList(e, listId);

      const handleDeleteTask = (e, id) => {
        deleteOneTask(e, id);
        setShowModal(false);
        setRefreshTask(true);
        setDeleteTask(false);
      };
      deleteTask && handleDeleteTask(e, taskId);
    },
    [
      deleteList,
      listId,
      setShowModal,
      setDeleteList,
      setRefreshList,
      deleteTask,
      taskId,
      setRefreshTask,
    ]
  );

  return (
    <>
      <Button
        className={`${classNameButton}`}
        text={
          modalId === 1 || modalId === 2 ? (
            <BsPlusLg className="mx-auto" />
          ) : modalId === 3 || modalId === 4 ? (
            <FaPen className="mx-auto" />
          ) : (
            <CgProfile size={'2.5rem'} />
          )
        }
        clickEvent={() => {
          setShowModal(true);
        }}
      />
      {showModal ? (
        <>
          <div
            id={modalId}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-xl"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#262626] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  {modalId === 3 && (
                    <>
                      <button
                        className="close bg-red-500 text-white active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={(e) => {
                          setShowModalConfirm(true);
                        }}
                      >
                        DELETE List
                      </button>
                      <ConfirmModal
                        showModalConfirm={showModalConfirm}
                        setShowModalConfirm={setShowModalConfirm}
                        setDeleteItem={setDeleteList}
                      />
                    </>
                  )}
                  {modalId === 4 && (
                    <>
                      <button
                        className="close bg-red-500 text-white active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={(e) => {
                          setShowModalConfirm(true);
                          setSelectedTag(null);
                        }}
                      >
                        DELETE Task
                      </button>
                      <ConfirmModal
                        showModalConfirm={showModalConfirm}
                        setShowModalConfirm={setShowModalConfirm}
                        setDeleteItem={setDeleteTask}
                      />
                    </>
                  )}
                </div>
                {modalId === 5 ? null : (
                  <form className="relative p-6 flex justify-between">
                    <label>
                      Name
                      <input
                        className="ml-2 p-2 text-black font-semibold rounded"
                        id="new-item-name"
                        type="text"
                        name={'name'}
                        onChange={handleName}
                      />
                    </label>
                  </form>
                )}

                {(modalId === 2 || modalId === 4) && (
                  <DropDownMenu
                    tagsData={tagsData}
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                  />
                )}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  {modalId === 5 ? null : (
                    <button
                      className="close text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Abort
                    </button>
                  )}
                  <button
                    form="new-item-name"
                    className={
                      modalId !== 5
                        ? 'close bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        : 'close bg-red-500 text-white content-center active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    }
                    type="submit"
                    onClick={(e) => {
                      if (modalId === 1) {
                        handleSubmitList(e, name);
                      } else if (modalId === 2) {
                        handleSubmitTask(e, listId, selectedTag);
                        setSelectedTag(null);
                      } else if (modalId === 3) {
                        handleUpdateListName(e, listId, name);
                      } else if (modalId === 4) {
                        handleUpdateTaskName(e, taskId, name);
                        setSelectedTag(null);
                      } else if (modalId === 5) {
                        handleLogOut();
                      }
                    }}
                  >
                    {modalId === 1 || modalId === 2
                      ? 'Create'
                      : modalId === 3 || modalId === 4
                      ? 'Update'
                      : 'Log out'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );

  //TODO:PropTypes
}
