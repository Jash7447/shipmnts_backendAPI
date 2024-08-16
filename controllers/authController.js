const User = require('../models/user.model');

const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ message: 'User created successfully', user: newUser });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { registerUser };
