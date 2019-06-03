import { FETCH_BOROUGH_DATA, FETCH_FILTERED_BOROUGH_DATA } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_BOROUGH_DATA:
            return action.payload;
        case FETCH_FILTERED_BOROUGH_DATA:
            return action.payload;
        default:
            return state;
    }
}
