import express from 'express'
import * as usersController from '../controllers/usersController.js';
const router = express.Router()

router.route('/')
     .get(usersController.getAllUsers)
     .post(usersController.createNewUser)
     .patch(usersController.updateUser)
     .delete(usersController.deleteUser)
     
export default router

     