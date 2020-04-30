import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = '0bc597ad';
  const APP_KEY = '245a754f5b923ec2ec72916fd267222b	';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);      //second parameter makes sure the the effect produces request only once when application is mounted

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);   // got it from documentation of recipe search app from edamam.com
    const data = await response.json();   // to format it in a way so that we can work easily
    setRecipes(data.hits);   //hits fetched from the whole lot of data from api
  }

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
