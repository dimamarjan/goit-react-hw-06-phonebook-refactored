import { FILTER_UPDATE } from "redux/types/vars";


const initialState = "";

const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        case FILTER_UPDATE:
            return action.payload;
        default:
            return state
    }
};

export default filterReducer;