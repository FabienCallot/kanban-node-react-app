import { React, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';
import { createOneCard } from '../Requests/createOneCard';
import { createOneList } from '../Requests/createOneList';
import { updateOneCard } from '../Requests/updateOneTask';
import { updateOneList } from '../Requests/updateOneList';
import Button from './Button';

export default function Modal({
  classNameButton,
  title,
  id,
  listId,
  setShowModal,
  showModal,
  setRefreshList,
  taskId,
  setRefreshTask,
}) {
  const [name, setName] = useState(false);
  const idModal = id;
  //console.log(idModal);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleSubmitList = async (event) => {
    const response = await createOneList(event, name);
    response ? setShowModal(false) : console.log('error list re-render');
  };
  const handleSubmitCard = async (event, id) => {
    const response = await createOneCard(event, name, id);
    response ? setShowModal(false) : console.log('error task re-render');
  };

  const handleUpdateListName = async (event, id, listName) => {
    event.preventDefault();
    const response = updateOneList(id, listName);
    response ? setShowModal(false) : console.log('error task re-render');
    setRefreshList(true);
  };

  const handleUpdateTaskName = (event, id, cardName) => {
    event.preventDefault();
    const response = updateOneCard(id, cardName);
    response ? setShowModal(false) : console.log('error task re-render');
    setRefreshTask(true);
  };
  console.log(idModal);

  return (
    <>
      <Button
        className={`${classNameButton}`}
        text={
          idModal === 1 || idModal === 2 ? (
            <BsPlusLg className="mx-auto" />
          ) : (
            <FaPen className="mx-auto" />
          )
        }
        clickEvent={() => {
          setShowModal(true);
        }}
      />
      {showModal ? (
        <>
          <div
            id={id}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-xl"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#262626] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  {idModal === 3 && (
                    <button
                      className="close bg-red-500 text-white active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      DELETE List
                    </button>
                  )}

                  {/* TODO: check <hath is that button
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button> */}
                </div>
                {/*body*/}
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
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="close text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Abort
                  </button>
                  <button
                    form="new-item-name"
                    className="close bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={(e) => {
                      if (idModal === 1) {
                        handleSubmitList(e, name);
                      } else if (idModal === 2) {
                        console.log(listId);
                        handleSubmitCard(e, listId);
                      } else if (idModal === 3) {
                        console.log(listId);
                        handleUpdateListName(e, listId, name);
                      } else if (idModal === 4) {
                        handleUpdateTaskName(e, taskId, name);
                      }
                    }}
                  >
                    {idModal === 1 || idModal === 2 ? 'Create' : 'Update'}
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
