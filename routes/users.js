const express = require('express');
const router = express.Router();
const UserModel = require('../models/user'); // Adjust the path as needed

// Endpoint to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
