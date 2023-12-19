import express from "express";
const router = express.Router();
import { getAllusers, getSingleUser, addUser, deleteUser, updateUser } from '../controller/user.controller';
router
    .get('/users', getAllusers)
    .post('/users', addUser)
    .get('/users/:id', getSingleUser)
    .put('/users/:id', updateUser)
    .delete('/users/:id', deleteUser)

module.exports = router;