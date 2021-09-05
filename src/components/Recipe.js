import React from "react";

const Recipe = (props) => {
  const renderIngredientList = (arr) => {
    return arr.map((ingredient, i) => {
      return <li key={i}>{ingredient}</li>;
    });
  };

  const renderUserRecipes = () => {
    const { recipe } = props;
    return (
      <div key={recipe.id}>
        <h2>{recipe.title}</h2>
        <ul>{renderIngredientList(recipe.ingredients)}</ul>
        <p>{recipe.instructions}</p>
      </div>
    );
  };

  return <div>{props.recipe ? renderUserRecipes(props.recipes) : null}</div>;
};

export default Recipe;
