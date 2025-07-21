import Activity from '../models/Activity.js'
import asyncHandler from 'express-async-handler'

// @desc Get all activities
// @route GET /activities
// @access Private
const getAllActivities = asyncHandler(async (req, res) => {
  const activities = await Activity.find()
    .populate('user', 'name email') // populate user with name & email
    .lean();

  res.json(activities); // ✅ return populated activities only
}) 

// @desc Create new activity
// @route POST /activities
// @access Private
const createNewActivity = asyncHandler(async (req, res) => {
  const { user, type, description, carbonImpactKg } = req.body

  if (!user || !type || carbonImpactKg == null) {
    return res.status(400).json({ message: 'Required fields missing' })
  }

  const activity = await Activity.create({
    user,
    type,
    description,
    carbonImpactKg
  })

  if (activity) {
    return res.status(201).json({ message: 'New activity logged' })
  } else {
    return res.status(400).json({ message: 'Invalid activity data' })
  }
})

// @desc Update an activity
// @route PATCH /activities
// @access Private
const updateActivity = asyncHandler(async (req, res) => {
  const { id, user, type, description, carbonImpactKg } = req.body

  if (!id || !user || !type || carbonImpactKg == null) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  const activity = await Activity.findById(id).exec()
  if (!activity) {
    return res.status(400).json({ message: 'Activity not found' })
  }

  activity.user = user
  activity.type = type
  activity.description = description
  activity.carbonImpactKg = carbonImpactKg

  const updated = await activity.save()
  res.json({ message: `'${updated.type}' activity updated` })
})

// @desc Delete an activity
// @route DELETE /activities
// @access Private
const deleteActivity = asyncHandler(async (req, res) => {
  const { id } = req.body

  if (!id) {
    return res.status(400).json({ message: 'Activity ID required' })
  }

  const activity = await Activity.findById(id).exec()
  if (!activity) {
    return res.status(400).json({ message: 'Activity not found' })
  }

  const result = await activity.deleteOne()
  res.json({ message: `Activity '${result.type}' deleted` })
})

export {
  getAllActivities,
  createNewActivity,
  updateActivity,
  deleteActivity
}
