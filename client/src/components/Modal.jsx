import { React, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { createOneCard } from '../Requests/createOneCard';
import { createOneList } from '../Requests/createOneList';
import Button from './Button';

export default function Modal({ classNameButton, title, id, listId }) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(false);
  const idModal = id;

  const refreshPage = () => {
    window.location.reload(false);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleSubmitList = (event) => {
    createOneList(event, name);
    setShowModal(false);
    refreshPage();
  };
  const handleSubmitCard = (event, id) => {
    createOneCard(event, name, id);
    setShowModal(false);
    refreshPage();
  };

  return (
    <>
      <Button
        className={`list-header-button mt-20 mb-10 ml-4 ${classNameButton}`}
        text={<BsPlusLg className="mx-auto" />}
        clickEvent={() => {
          setShowModal(true);
        }}
      />
      {showModal ? (
        <>
          <div
            id={id}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#262626] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form>
                    <label>
                      Name:
                      <input
                        id="new-item-name"
                        type="text"
                        name={'name'}
                        onChange={handleName}
                      />
                    </label>
                    <input type="submit" value="Envoyer" />
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="close text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    form="new-item-name"
                    className="close bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={(e) => {
                      idModal === '1'
                        ? handleSubmitList(e, name)
                        : handleSubmitCard(e, listId);
                    }}
                  >
                    Save Changes
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
}
