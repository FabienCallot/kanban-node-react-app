import { useEffect, useState } from 'react';
import { getAllLists } from '../../Requests/getAllLists';
import { createOneList } from '../../Requests/createOneList';
import { getAllCards } from '../../Requests/getAllCards';
import { deleteOneList } from '../../Requests/deleteOneList';
import { updateOneList } from '../../Requests/updateOneList';
import { createOneCard } from '../../Requests/createOneCard';

//import { getOnelist } from '../../Requests/getOnelist';
import './App.css';

function App() {
  const [listsData, setListsData] = useState(null);
  const [listName, setListName] = useState('');
  const [cardsData, setCardsData] = useState(null);
  const [cardName, setCardName] = useState('');

  useEffect(() => {
    getAllLists(setListsData);
    getAllCards(setCardsData);
  }, []);

  /**
   * The function takes an event as an argument, and then sets the state of the listName variable to the
   * value of the event
   */
  const handleListName = (event) => {
    setListName(event.target.value);
  };

  /**
   * A function that takes in an event and sets the card name to the value of the event.
   */
  const handleCardName = (event) => {
    setCardName(event.target.value);
  };

  /**
   * It creates a new list, then after 200 milliseconds, it gets all the lists and sets the state of
   * the lists data
   */
  const handleSubmitList = (event) => {
    createOneList(event, listName);

    setTimeout(() => {
      getAllLists(setListsData);
    }, 200);
  };

  /**
   * The function creates a new card, then after 200 milliseconds, it updates the list data
   */
  const handleSubmitCard = (event, id) => {
    createOneCard(event, cardName, id);

    setTimeout(() => {
      getAllCards(setCardsData);
    }, 200);
  };

  /**
   * It deletes a list and then updates the list of lists.
   */
  const handleDelete = (e, id) => {
    deleteOneList(e, id);
    setTimeout(() => {
      getAllLists(setListsData);
    }, 200);
  };

  /**
   * It takes an event, an id, and a listName, and then it updates the list with the given id and
   * listName, and then it gets all the lists and sets the listsData to the result
   */
  const handleUpdateListName = (event, id, listName) => {
    event.preventDefault();
    updateOneList(id, listName);

    setTimeout(() => {
      getAllLists(setListsData);
    }, 200);
  };

  // const handleUpdateCardName = (event, id, listName) => {
  //   event.preventDefault();
  //   updateOneCard(id, listName);

  //   setTimeout(() => {
  //     getAllLists(setListsData);
  //   }, 200);
  // };

  return (
    <div className="app">
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
                      handleUpdateListName(e, list.id, listName);
                    }}
                  >
                    <label>
                      Nom list:
                      <input
                        id="new-list-name"
                        type="text"
                        name={'name'}
                        onChange={handleListName}
                      />
                    </label>
                    <input type="submit" value="Envoyer" />
                  </form>
                </div>
                <div>
                  {cardsData.map((card) =>
                    list.id === card.list_id ? (
                      <p key={card.id}>{card.description}</p>
                    ) : null
                  )}
                  <form
                    onSubmit={(e) => {
                      handleSubmitCard(e, list.id);
                    }}
                  >
                    <label>
                      Nom card :
                      <input
                        id="new-card-name"
                        type="text"
                        name={'name'}
                        onChange={handleCardName}
                      />
                    </label>
                    <input type="submit" value="Envoyer" />
                  </form>
                </div>
              </div>
            ))}

      <form onSubmit={handleSubmitList}>
        <label>
          New List:
          <input
            id="new-list-name"
            type="text"
            name={'name'}
            onChange={handleListName}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default App;
