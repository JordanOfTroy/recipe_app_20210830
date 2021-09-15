import React from "react";
import { connect } from "react-redux";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import history from "../History";

const ViewRecipe = (props) => {
  const renderFullRecipe = () => {
    const { userRecipes } = props;
    const { id } = props.match.params;

    const recipe = userRecipes.map((recipe) => {
      if (recipe.id === id) {
        const renderIngredients = (arr) => {
          console.log(arr);
          return arr.map((item, i) => {
              return <li key={i}>{item}</li>
          })
        };

        const renderActions = () => {
          return (
            <Link
              to={`/home/${recipe.createdBy}`}
              className="ui button negative"
            >
              Close
            </Link>
          );
        };
        const renderContent = () => {
          return (
            <>
              <div>{recipe.description}</div>
              <ul>{renderIngredients(recipe.ingredients)}</ul>
              <div>{recipe.instructions}</div>
            </>
          );
        };
        return (
          <Modal
            title={recipe.title}
            actions={renderActions()}
            content={renderContent()}
            onDismiss={() => history.push(`/home/${recipe.createdBy}`)}
          />
        );
      } else return null;
    });

    return recipe;
  };

  return <div>{renderFullRecipe()}</div>;
};

const mapStateToProps = (state) => {
  const { userRecipes } = state.recipes;
  return {
    userRecipes: userRecipes,
  };
};

export default connect(mapStateToProps)(ViewRecipe);



