import axios from 'axios';

const API_URL = 'https://data.london.gov.uk/api/table/1px4j_8984h';

export const listBoroughs =  (req, res) => {
    const RAW_QUERY = '?sql=SELECT DISTINCT borough FROM dataset';
    axios.get(`${API_URL}/${RAW_QUERY}`)
        .then((response) => {
            res.send(response.data);
        });
};

export const getBorough =  (req, res) => {
    const {borough} = req.params;
    const RAW_QUERY = `?borough=${borough}`;
    //option to expand query
    //const RAW_QUERY = `?borough=${borough}&leggi_year=2014`;
    axios.get(`${API_URL}/${RAW_QUERY}`)
        .then((response) => {
            res.send(response.data);
        });
};
