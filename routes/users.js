import express from 'express';
import {v4 as uuidv4} from 'uuid';
import { getUsers, addUser, findUser, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

// all routes starts with user

router.get('/', getUsers)
router.post('/', addUser)
router.get('/:id', findUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;
