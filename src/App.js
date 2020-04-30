import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '0bc597ad';
  const APP_KEY = '245a754f5b923ec2ec72916fd267222b	';

  const egRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
};


export default App;
