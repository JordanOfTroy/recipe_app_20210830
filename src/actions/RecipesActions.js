import {
    CREATE_RECIPE,
    EDIT_RECIPE,
    DELETE_RECIPE,
    FETCH_RECIPE,
    FETCH_RECIPES
} from '../actions/Types'
import axios from 'axios'

export const getUserRecipes = (userId) => async (dispatch) => {
    // make a call to db to get all user recipes.
    //Dispatch them as the payload.
    dispatch({
        type: FETCH_RECIPES,
        payload: 'user Recipes from db call' // will be results of db call
    })
}