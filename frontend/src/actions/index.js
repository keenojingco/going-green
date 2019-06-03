import api from '../apis/londonGreenhouseGasEmmissions';

export const FETCH_BOROUGHS = 'FETCH_BOROUGHS';
export const FETCH_BOROUGH_DATA = 'FETCH_BOROUGH_DATA';
export const BOROUGH_SELECTED = 'BOROUGH_SELECTED';

export const fetchBoroughs = () => async dispatch => {
    const response = await api.get('/boroughs');
    dispatch({
        type: FETCH_BOROUGHS,
        payload: response.data,
    });
}

export const fetchBoroughData = borough => async dispatch => {
    const response = await api.get(`/boroughs/${borough}`);
    dispatch({
        type: FETCH_BOROUGH_DATA,
        payload: response.data,
    });
}

export const selectBorough = borough => {
    return {
        type: BOROUGH_SELECTED,
        payload: borough
    };
}
