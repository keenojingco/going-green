import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from '../src/routes';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`)
});
