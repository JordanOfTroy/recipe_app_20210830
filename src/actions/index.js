import {
    SIGN_IN,
    SIGN_OUT
} from './Types'


export const signIn = (user) => {
    return {
        type: SIGN_IN,
        payload: user
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

