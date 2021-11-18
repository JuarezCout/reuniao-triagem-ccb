import express from 'express'
import cors from 'cors'

const router = express.Router();

import { getLists, getList, createList } from '../controllers/api.js'

router.use(cors())

// Routes

//# GET all lists
router.get('/', getLists);

//# GET One List
router.get('/:id', getList);

//# POSt Save list
router.post('/', createList);


export default router;