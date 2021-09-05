import React from "react";
import { connect } from "react-redux";
import { setUserCreatedRecipes } from "../actions/RecipesActions";
import { db } from "./Firebase";
import Recipe from "./Recipe";

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
    this.props.setUserCreatedRecipes(userCreatedRecipes);
  }

  renderUserRecipes = (recipes) => {
    return recipes.map((recipe) => {
      return <Recipe key={recipe.id} recipe={recipe} />;
    });
  };

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        {this.props.recipes ? this.renderUserRecipes(this.props.recipes) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.userRecipes,
  };
};

export default connect(mapStateToProps, { setUserCreatedRecipes })(Homepage);
