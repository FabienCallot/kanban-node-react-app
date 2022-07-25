/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { getAllLists } from '../Requests/getAllLists';
import { createOneList } from '../Requests/createOneList';
import { getAllCards } from '../Requests/getAllCards';
import { deleteOneList } from '../Requests/deleteOneList';
import { updateOneList } from '../Requests/updateOneList';
import { createOneCard } from '../Requests/createOneCard';
import { updateOneCard } from '../Requests/updateOneCard';
import { deleteOneCard } from '../Requests/deleteOneCard';
import { getAllTags } from '../Requests/getAllTags';
import { createOneTag } from '../Requests/createOneTag';
import Home from './Home';
import Header from './Header';
import currentHeight from '../utils/currentHeight';

function App() {
  const [listsData, setListsData] = useState(null);
  const [listName, setListName] = useState('');
  const [cardsData, setCardsData] = useState(null);
  const [cardName, setCardName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [tagsData, setTagsData] = useState(null);
  const [tagName, setTagName] = useState('');
  const [tagColor, setTagColor] = useState('');

  const [height, setHeight] = useState(0);
  useEffect(() => {
    currentHeight(setHeight);
    getAllCards(setCardsData);
    getAllTags(setTagsData);
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
   * The function takes an event as an argument, and then sets the state of the tagName variable to the
   * value of the event
   */
  const handleTagName = (event) => {
    setTagName(event.target.value);
  };

  /**
   * It sets the tag color to the value of the event target.
   */
  const handleTagColor = (event) => {
    setTagColor(event.target.value);
  };

  /**
   * It creates a new list, then after 200 milliseconds, it gets all the lists and sets the state of
   * the lists data
   */
  // const handleSubmitList = (event) => {
  //   createOneList(event, listName);

  //   setTimeout(() => {
  //     getAllLists(setListsData);
  //   }, 200);
  // };

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
   * It creates a new tag and then gets all the tags.
   */
  const handleSubmitTag = (event) => {
    createOneTag(event, tagName, tagColor);

    setTimeout(() => {
      getAllTags(setTagsData);
    }, 200);
  };

  /**
   * It deletes a list and then updates the list of lists.
   */
  const handleDeleteList = (e, id) => {
    deleteOneList(e, id);
    setTimeout(() => {
      getAllLists(setListsData);
    }, 200);
  };

  /**
   * It deletes a card from the database and then refreshes the page to show the updated list of cards.
   */
  const handleDeleteCard = (e, id) => {
    deleteOneCard(e, id);
    setTimeout(() => {
      getAllCards(setCardsData);
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

  /**
   * It takes an event, an id, and a cardName, and then it updates the card with the given id and
   * cardName, and then it gets all the cards and sets the cardsData to the cards that it gets
   */
  const handleUpdateCardName = (event, id, cardName) => {
    event.preventDefault();
    updateOneCard(id, cardName);

    setTimeout(() => {
      getAllCards(setCardsData);
    }, 200);
  };

  return (
    <div className="text-[#FFFFFF] font-advent">
      {height < 20 ? <Header /> : <Header className=" opacity-0" />}

      <Home />
      {/* {!listsData
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
                  <form
                    onSubmit={(e) => {
                      handleUpdateListName(e, list.id, listName);
                    }}
                  >
                    <label>
                      update list:
                      <input
                        id="new-list-name"
                        type="text"
                        name={'name'}
                        onChange={handleListName}
                      />
                    </label>
                    <input type="submit" value="Envoyer" />
                  </form>
                  <button
                    onClick={(e) => {
                      handleDeleteList(e, list.id, list.name);
                    }}
                  >
                    delete list
                  </button>
                </div>
                <div>
                  {!cardsData
                    ? 'Loading...'
                    : cardsData
                        .sort((a, b) => (a.id > b.id ? 1 : -1))
                        .map(
                          (card) =>
                            list.id === card.list_id && (
                              <div key={card.id}>
                                <p>{card.description}</p>
                                <form
                                  onSubmit={(e) => {
                                    handleUpdateCardName(e, card.id, cardName);
                                  }}
                                >
                                  <label>
                                    update card:
                                    <input
                                      type="text"
                                      name={'name'}
                                      onChange={handleCardName}
                                    />
                                  </label>
                                  <input type="submit" value="Envoyer" />
                                </form>
                                <button
                                  onClick={(e) => {
                                    handleDeleteCard(e, card.id);
                                  }}
                                >
                                  delete card
                                </button>
                              </div>
                            )
                        )}
                  <form
                    onSubmit={(e) => {
                      handleSubmitCard(e, list.id);
                    }}
                  >
                    <label>
                      New card :
                      <input
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
          <input type="text" name={'name'} onChange={handleListName} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <form onSubmit={handleSubmitTag}>
        <label>
          New Tag name:
          <input type="text" name={'name'} onChange={handleTagName} />
        </label>
        <label>
          New Tag color:
          <input type="text" name={'color'} onChange={handleTagColor} />
        </label>
        <input type="submit" value="Envoyer" />
      </form> */}
    </div>
  );
}

export default App;
