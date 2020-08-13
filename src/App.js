import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  
  const APP_ID ="c90d6b11";
  const APP_KEY = "514695a5dacf0c361e11db68fa9d76ee";

  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState('');
  const[query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  
  return(
    <div className="title"><b>Libro de Cocina</b>
    <div className = "App">
      <form onSubmit={getSearch} className = "search-form">
        <input className = "search-bar" type = "text" value={search} onChange={updateSearch} />
        <button className = "search-button" type = "submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}/>
        ))}
        
    </div>
    </div>
    <br /><p className="a"> Made with<p className="color">LOVE</p>by Tanushree Shaw</p>
    </div>
  );

  };


export default App;
