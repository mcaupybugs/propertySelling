import property from '../api/property';
import history from '../history';

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const addProperty = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await property.post('/addProperty', { ...formValues, userId });
    dispatch({ type: 'ADD_PROPERTY', payload: response.data });
    history.push('/');
}