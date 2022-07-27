/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { getAllCards } from '../Requests/getAllCards';
import { deleteOneCard } from '../Requests/deleteOneTask';
import { getAllTags } from '../Requests/getAllTags';
import { createOneTag } from '../Requests/createOneTag';
import Home from './Home';
import Header from './Header';
import currentHeight from '../utils/currentHeight';
import Button from './Button';
import { scrollToTop } from '../utils/srollToTop';

function App() {
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

  const handleSubmitTag = (event) => {
    createOneTag(event, tagName, tagColor);

    setTimeout(() => {
      getAllTags(setTagsData);
    }, 200);
  };

  return (
    <div className="text-[#FFFFFF] font-advent">
      {height < 20 ? <Header /> : <Header className=" opacity-20" />}
      <Home />
      {height > 50 ? (
        <Button
          clickEvent={() => {
            scrollToTop();
          }}
          className="fixed bottom-3 right-2 p-2 border rounded"
          text="&#8679;"
        />
      ) : null}
    </div>
  );
}

export default App;
