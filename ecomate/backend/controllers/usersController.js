import { User} from '../models/User.js'
import {Activity} from '../models/Activity.js'

import asynchandler from 'express-async-handler'
import bcrypt from 'bcrypt'

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
    // Get all users from MongoDB
    const users = await User.find().select('-password').lean()

    // If no users 
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }

    res.json(users)

})


// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
       const { email, password, name, oauthProvider, profile, goals } = req.body;

    // 1. Validate required fields
    if (!email || !password || !name) {
        return res.status(400).json({ message: 'Email, password, and name are required' });
    }

    // 2. Check for duplicate email
    const duplicate = await User.findOne({ email }).lean().exec();
    if (duplicate) {
        return res.status(409).json({ message: 'Email already in use' });
    }

    // 3. Hash password
    const hashedPwd = await bcrypt.hash(password, 10);

    // 4. Create user object
    const userObject = {
        email,
        password: hashedPwd,
        name,
        oauthProvider: oauthProvider || null,
        profile: profile || {},
        goals: goals || {},
        dashboard: { totalEmissions: 0, progress: 0 } // default values
    };

    // 5. Create and store user
    const user = await User.create(userObject);

    if (user) {
        res.status(201).json({ message: `New user ${email} created` });
    } else {
        res.status(400).json({ message: 'Invalid user data received' });
    }

})


// @desc Update a user
// @route PATCH /users
// @access Private
const updateUserUser = asyncHandler(async (req, res) => {
    

})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {

})

export {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};