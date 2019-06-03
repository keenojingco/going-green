import { FETCH_BOROUGHS } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_BOROUGHS:
            return action.payload;
        default:
            return state;
    }
}
