import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = '0bc597ad';
  const APP_KEY = '245a754f5b923ec2ec72916fd267222b	';

  const [recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);      //second parameter makes sure the the effect produces request only once when application is mounted

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);   // got it from documentation of recipe search app from edamam.com
    const data = await response.json();   // to format it in a way so that we can work easily
    setRecipes(data.hits);   //hits fetched from the whole lot of data from api
    console.log(data.hits);
  }


  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (  //parentheses added instead of curly because html had to be added
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image} />   //second recipe is from hits data we fetched, under recipe we had label
      )

      )}
    </div>
  );
};


export default App;
