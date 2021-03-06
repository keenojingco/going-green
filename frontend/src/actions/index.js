import api from '../apis/londonGreenhouseGasEmmissions';

export const FETCH_BOROUGHS = 'FETCH_BOROUGHS';
export const FETCH_BOROUGH_DATA = 'FETCH_BOROUGH_DATA';
export const FETCH_FILTERED_BOROUGH_DATA = 'FETCH_FILTERED_BOROUGH_DATA';
export const BOROUGH_SELECTED = 'BOROUGH_SELECTED';

export const fetchBoroughs = () => async dispatch => {
    try {
        const response = await api.get('/boroughs');
        dispatch({
            type: FETCH_BOROUGHS,
            payload: response.data,
        });
    } catch(error) {
        window.alert('Error processing your request at the moment. Try again later!');
    };
}

export const fetchBoroughData = borough => async dispatch => {
    try {
        const response = await api.get(`/boroughs/${borough}`);
        dispatch({
            type: FETCH_BOROUGH_DATA,
            payload: response.data,
        });
    } catch(error) {
        window.alert('Error processing your request at the moment. Try again later!');
    }
}

export const fetchFilteredBoroughData = borough => async dispatch => {
    try {
        const response = await api.get(`/filter?borough=${borough}&fuel=Total`);
        dispatch({
            type: FETCH_BOROUGH_DATA,
            payload: response.data,
        });
    } catch(error) {
        window.alert('Error processing your request at the moment. Try again later!');
    }
}

export const selectBorough = borough => {
    return {
        type: BOROUGH_SELECTED,
        payload: borough
    };
}
