import {
  CREATE_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  FETCH_RECIPE,
  FETCH_RECIPES,
  SET_USER_CREATED_RECIPES,
} from "../actions/Types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER_CREATED_RECIPES:
      return { ...state, userRecipes: action.payload };

    default:
      return state;
  }
};
