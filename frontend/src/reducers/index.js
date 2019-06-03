import {combineReducers} from 'redux';
import boroughsReducer from '../reducers/boroughsReducer';

export default combineReducers({
    boroughs: boroughsReducer,
});
