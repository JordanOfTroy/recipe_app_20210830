import { combineReducers } from "redux"
import AuthReducer from "./AuthReducer"
import RecipesReducer from "./RecipesReducer"

export default combineReducers({
    auth: AuthReducer,
    recipes: RecipesReducer
})