import React from "react";
import {getAllLists} from '../../Requests/getAllLists'
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  console.log(data);

  React.useEffect(() => {
    // fetch("/cards")
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    getAllLists(setData)
     
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <p>{!data ? "Loading..." : data.map((datas) => datas.id)}</p>
      </header>
    </div>
  );
}


export default App;
