import axios from 'axios';

const API_URL = process.env.API_URL || 'https://data.london.gov.uk/api/table/1px4j_8984h';

export const listBoroughs =  (req, res) => {
    const RAW_QUERY = 'SELECT DISTINCT borough FROM dataset ORDER BY borough ASC';
    axios.get(`${API_URL}?sql=${RAW_QUERY}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
            res.status(500).send(error);
        });
};

export const getBorough =  (req, res) => {
    const {borough} = req.params;
    const RAW_QUERY = `SELECT * FROM dataset WHERE borough='${borough}' ORDER BY leggi_year DESC`;
    axios.get(`${API_URL}?sql=${RAW_QUERY}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
            res.status(500).send(error);
        });
};

export const getFilter = (req, res) => {
    let RAW_QUERY = `SELECT * FROM dataset WHERE`;

    if (req.query.borough) {
        RAW_QUERY += ` borough='${req.query.borough}'`

        if (req.query.fuel) {
            RAW_QUERY += ` and fuel='${req.query.fuel}'`
        }
    }

    RAW_QUERY += `ORDER BY leggi_year, sector`;

    axios.get(`${API_URL}?sql=${RAW_QUERY}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
            res.status(500).send(error);
        });
}
