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

export const fetchProperties = () => async dispatch => {
    const response = await property.get('/propertyList');

    dispatch({ type: 'FETCH_PROPERTIES', payload: response.data })
}

export const fetchProperty = (id) => async dispatch => {
    const response = await property.get(`/property/${id}`);

    dispatch({ type: 'FETCH_PROPERTY', payload: response.data });

}

export const editProperty = (id, formValues) => async dispatch => {
    const response = await property.patch(`/property/${id}`, formValues);

    dispatch({ type: 'EDIT_PROPERTY', payload: response.data });
    history.push('/');
}

export const deleteProperty = (id) => async dispatch => {
    await property.delete(`/property/${id}`);

    dispatch({ type: 'DELETE_PROPERTY', payload: id });

    history.push('/');
}