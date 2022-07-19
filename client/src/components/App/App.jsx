import { useEffect, useState } from 'react';
import { getAllLists } from '../../Requests/getAllLists';
import { createOneList } from '../../Requests/createOneList';
import { getAllCards } from '../../Requests/getAllCards';
import { deleteOneList } from '../../Requests/deleteOneList';
import { updateOneList } from '../../Requests/updateOneList';
//import { getOnelist } from '../../Requests/getOnelist';
import './App.css';

function App() {
  const [listsData, setListsData] = useState(null);
  const [cardsData, setCardsData] = useState(null);
  const [listName, setListName] = useState('');

  useEffect(() => {
    getAllLists(setListsData);
    getAllCards(setCardsData);
  }, []);
  console.log(cardsData);
  const handleSetListName = (event) => {
    setListName(event.target.value);
  };

  const handleSubmit = (event) => {
    createOneList(event, listName);

    setTimeout(() => {
      getAllLists(setListsData);
    }, 200);
  };

  const handleDelete = (e, id) => {
    deleteOneList(e, id);
    setTimeout(() => {
      getAllLists(setListsData);
    }, 200);
  };

  const handleUpdate = (event, id, listName) => {
    event.preventDefault();
    updateOneList(id, listName);

    setTimeout(() => {
      getAllLists(setListsData);
    }, 200);
  };

  return (
    <div className="app">
      <header className="app-header">
        {!listsData
          ? 'Loading...'
          : listsData
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((list) => (
                <div
                  key={list.id}
                  style={{
                    margin: '30px',
                    border: 'solid 1px black',
                    padding: '1rem',
                  }}
                >
                  <div>
                    <p>{list.name}</p>
                    <button
                      onClick={(e) => {
                        handleDelete(e, list.id, list.name);
                      }}
                    >
                      delete
                    </button>
                    <form
                      onSubmit={(e) => {
                        handleUpdate(e, list.id, listName);
                      }}
                    >
                      <label>
                        Nom :
                        <input
                          id="new-list-name"
                          type="text"
                          name={'name'}
                          onChange={handleSetListName}
                        />
                      </label>
                      <input type="submit" value="Envoyer" />
                    </form>
                  </div>
                  {cardsData.map((card) =>
                    list.id === card.list_id ? (
                      <p key={card.id}>{card.description}</p>
                    ) : null
                  )}
                </div>
              ))}

        <form onSubmit={handleSubmit}>
          <label>
            Nom :
            <input
              id="new-list-name"
              type="text"
              name={'name'}
              onChange={handleSetListName}
            />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      </header>
    </div>
  );
}

export default App;
