import express from 'express';
import {listBoroughs, getBorough} from '../controllers/LeggiControler';

const router = express.Router();

router.get('/boroughs', listBoroughs);
router.get('/boroughs/:borough', getBorough);

module.exports = router;
