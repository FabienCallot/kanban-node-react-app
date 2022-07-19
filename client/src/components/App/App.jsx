import { useEffect, useState } from 'react';
import { getAllLists } from '../../Requests/getAllLists';
import { createOneList } from '../../Requests/createOneList';
import handleDeleteList from '../../Requests/deleteOneList';
import { getOnelist } from '../../Requests/getOnelist';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [listName, setListName] = useState('');
  console.log(listName);
  console.log(data);

  useEffect(() => {
    getAllLists(setData);
    //getAllCards(setData)
  }, []);

  const handleSetListName = (event) => {
    setListName(event.target.value);
  };

  const handleSubmit = (event) => {
    createOneList(event, listName);

    setTimeout(() => {
      getAllLists(setData);
    }, 200);
  };

  const handleDelete = (e, id) => {
    handleDeleteList(e, id);
    setTimeout(() => {
      getAllLists(setData);
    }, 200);
  };

  return (
    <div className="app">
      <header className="app-header">
        {!data
          ? 'Loading...'
          : data
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((list) => (
                <div key={list.id} style={{ margin: '30px' }}>
                  <div>
                    <p>{list.name}</p>
                    <button
                      onClick={(e) => {
                        handleDelete(e, list.id);
                      }}
                    >
                      delete
                    </button>
                  </div>
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
