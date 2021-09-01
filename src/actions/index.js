import {
    CREATE_RECIPE,
    EDIT_RECIPE,
    DELETE_RECIPE,
    FETCH_RECIPE,
    FETCH_RECIPES,
    SIGN_IN,
    SIGN_OUT
} from './Types'
import axios from 'axios'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

