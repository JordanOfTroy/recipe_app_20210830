import React from "react";

const RecipeCard = (props) => {
  const renderIngredientList = (arr) => {
    return arr.map((ingredient, i) => {
      return <li key={i}>{ingredient}</li>;
    });
  };

  const renderUserRecipes = () => {
    const { recipe } = props;
    return (
      <div className="ui fluid card">
        <div className="content">
          <div className="header">
            <h2>{recipe.title}</h2>
          </div>
          <div className="description">
            <ul>{renderIngredientList(recipe.ingredients)}</ul>
            <p>{recipe.description}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui button right floated negative">Delete</button>
          <button className="ui button right floated primary ">Edit</button>
          <button className="ui button right floated positive">View</button>
          {/* View will be a Link to ='/recipeId
            will probably be modal displaying whole recipe
          ' */}
        </div>
      </div>
    );
  };

  return <div>{props.recipe ? renderUserRecipes(props.recipes) : null}</div>;
};

export default RecipeCard;
