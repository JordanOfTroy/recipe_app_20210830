import React from "react";
import { connect } from "react-redux";
import Modal from "./Modal";
import history from '../History'

const ViewRecipe = (props) => {
  const renderFullRecipe = () => {
    const { userRecipes } = props;
    const { id } = props.match.params;

    const recipe = userRecipes.map((recipe) => {
      if (recipe.id === id) {
        const renderActions = () => {};
        const renderContent = () => {
          return (
            <>
              <div>{recipe.description}</div>
              <div>{recipe.ingredients}</div>
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
