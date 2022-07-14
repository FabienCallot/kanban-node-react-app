import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  console.log(data);

  React.useEffect(() => {
    fetch("/cards")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data.map((datas) => datas.id)}</p>
      </header>
    </div>
  );
}


export default App;
