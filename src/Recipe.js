import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1><b>{title}</b></h1>
            <p>Calories : {calories}</p>
            <ol>
                {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
                ))}
            </ol>
            <br />
            <img src = {image} alt ="" height="400" width="400" border="3px solid black" />
        </div>
    );
};

export default Recipe;