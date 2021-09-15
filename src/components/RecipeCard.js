import React from "react";
import { Link } from "react-router-dom";

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
          <Link
            to={`/deleteRecipe/${recipe.createdBy}`}
            className="ui button right floated negative"
          >
            Delete
          </Link>
          <button className="ui button right floated primary ">Edit</button>
          <Link
            to={`/viewRecipe/${recipe.id}`}
            className="ui button right floated positive"
          >
            View
          </Link>
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
