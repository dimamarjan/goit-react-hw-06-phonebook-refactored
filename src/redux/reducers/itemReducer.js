import { ADD_CONTACT, DEL_CONTACT } from 'redux/types/vars';

const initialState = [];

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.payload];
        case DEL_CONTACT:
            return [...action.payload];
        default:
            return state;
    }
};

export default itemReducer;
