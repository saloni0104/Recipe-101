import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = '0bc597ad';
  const APP_KEY = '245a754f5b923ec2ec72916fd267222b	';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pasta');   // we want to get request only after clicking search button, not just by typing in input box, hence this new state

  useEffect(() => {
    getRecipes();
  }, [query]);      //second parameter makes sure the the effect produces request only once when application is mounted, in this case when query runs

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);   // got it from documentation of recipe search app from edamam.com
    const data = await response.json();   // to format it in a way so that we can work easily
    setRecipes(data.hits);   //hits fetched from the whole lot of data from api
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');    //setting search back to empty string
  }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (  //parentheses added instead of curly because html had to be added
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />   //second recipe is from hits data we fetched, under recipe we had label
        ))}
      </div>
    </div>
  );
};


export default App;
