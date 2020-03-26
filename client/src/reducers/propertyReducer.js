export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PROPERTY':
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}