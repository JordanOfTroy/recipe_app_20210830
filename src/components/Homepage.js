import React from 'react'
import Recipe from './Recipe'
import { connect } from 'react-redux'
import { getUserRecipes } from '../actions/RecipesActions'

class Homepage extends React.Component {

    componentDidMount() {
        this.props.getUserRecipes(this.props.match.params.id)
    }

    renderUserRecipes = (recipes) => {
        //map over recipes and return a <Recipe /> for each one
    }


    render() {
        return (
            // Will show a list of all your recipes
            <div>
                <h1>Homepage</h1>
                <Recipe recipes = {this.props.recipes} />
            </div>
            
        )
    }
}


const mapStateToProps = (state) => {
    return {
        recipes: state.recipes.userRecipes
    }
}

export default connect(mapStateToProps,  { getUserRecipes })(Homepage)