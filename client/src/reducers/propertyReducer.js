export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_HOME':
            return { ...state, [action.payload.id]: action.payload };
    }
}