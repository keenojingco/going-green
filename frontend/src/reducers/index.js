import {combineReducers} from 'redux';
import boroughsReducer from '../reducers/boroughsReducer';
import boroughDataReducer from '../reducers/boroughDataReducer';

export default combineReducers({
    boroughs: boroughsReducer,
    boroughData: boroughDataReducer,
});
