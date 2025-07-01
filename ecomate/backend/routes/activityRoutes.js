// routes/activityRoutes.js
import express from 'express'
import {
  getAllActivities,
  createNewActivity,
  updateActivity,
  deleteActivity
} from '../controllers/activityController.js'

const router = express.Router()

router.route('/')
  .get(getAllActivities)
  .post(createNewActivity)
  .patch(updateActivity)
  .delete(deleteActivity)

export default router
