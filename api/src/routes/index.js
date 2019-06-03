import express from 'express';
import {listBoroughs, getBorough, getFilter} from '../controllers/LeggiControler';

const router = express.Router();

router.get('/boroughs', listBoroughs);
router.get('/boroughs/:borough', getBorough);
router.get('/filter', getFilter);

module.exports = router;
