import React from "react";
import { connect } from "react-redux";
import { setUserCreatedRecipes } from "../actions/RecipesActions";
import { db } from "./Firebase";

class Homepage extends React.Component {
  async componentDidMount() {
    const userId = this.props.match.params.id;
    let userCreatedRecipes = await db
      .collection("recipes")
      .where("createdBy", "==", userId)
      .get();
    userCreatedRecipes = userCreatedRecipes.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    console.log(userCreatedRecipes);
    this.props.setUserCreatedRecipes(userCreatedRecipes);
  }

  renderIngredientList = (arr) => {
      return arr.map((ingredient, i) => {
          return (
              <li key={i}>{ingredient}</li>
          )
      })
  }

  renderUserRecipes = (recipes) => {
    return recipes.map((recipe) => {
        console.log(recipe.ingredients)
      return (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <ul>{this.renderIngredientList(recipe.ingredients)}</ul>
          <p>{recipe.instructions}</p>
        </div>
      );
    });
  };

  render() {
    return (
      // Will show a list of all your recipes
      <div>
        <h1>Homepage</h1>
        {this.props.recipes ? this.renderUserRecipes(this.props.recipes) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    recipes: state.recipes.userRecipes,
  };
};

export default connect(mapStateToProps, { setUserCreatedRecipes })(Homepage);
