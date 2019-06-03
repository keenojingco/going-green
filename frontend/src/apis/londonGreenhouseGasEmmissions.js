import axios from 'axios';

const baseURL = 'http://localhost:9000/api';

export default axios.create({baseURL});
