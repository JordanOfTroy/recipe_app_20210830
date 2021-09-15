import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setUserCreatedRecipes } from "../actions/RecipesActions";
import { db } from "./Firebase";
import RecipeCard from "./RecipeCard";

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
    // check id from params again id in db before rendering list
    return recipes.map((recipe) => {
      return <RecipeCard key={recipe.id} recipe={recipe} />;
    });
  };

  render() {
    return (
      <div>
        <Link to={`/addRecipe/${this.props.match.params.id}`} className="ui button primary">
          Add Recipe
        </Link>
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
